"use client";

import { useEffect, useRef, useState } from "react";
import type { Pokemon } from "@/lib/types";
import HeroCard from "./HeroCard";
import { useFavorites } from "./useFavorites";
import { useTeam } from "./useTeam";
import ShareDialog from "./ShareDialog";
import GuideSteps from "./GuideSteps";
import TeamShowdownExport from "./TeamShowdownExport";
import LocalizedLink from "./LocalizedLink";
import { useI18n } from "./I18nProvider";

interface CoachResult {
  seed: string;
  team: Pokemon[];
  reasons: Record<number, string>;
}

interface Suggestion {
  dexNumber: number;
  displayName: string;
  types: string[];
  img: string;
}

const GEN_OPTIONS = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const REGIONS = ["kanto", "johto", "hoenn", "sinnoh", "unova", "kalos", "alola", "galar", "paldea"];
const TYPES = [
  "normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison",
  "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy",
];

const selectCls =
  "rounded-lg border border-poke-border bg-poke-surface px-3 py-2 text-sm text-poke-ink focus:border-poke-red focus:outline-none";
const labelCls =
  "flex w-full flex-col gap-1 text-xs font-semibold text-poke-dim lg:w-[104px]";

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default function TeamCoach({
  initial,
  initialLocked,
}: {
  initial: CoachResult | null;
  initialLocked: Pokemon[];
}) {
  const { favorites } = useFavorites();
  const { team, add } = useTeam();
  const { dict, locale } = useI18n();
  const t = dict.teamCoachUi;
  // "kept" = Pokémon locked in place (your picks + cards you lock).
  const [kept, setKept] = useState<Pokemon[]>(initialLocked);
  const [result, setResult] = useState<CoachResult | null>(initial);
  const [count, setCount] = useState(6);
  const [gen, setGen] = useState("");
  const [region, setRegion] = useState("");
  const [type, setType] = useState("");
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [q, setQ] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [picker, setPicker] = useState<"fav" | "team" | null>(null);
  const [open, setOpen] = useState(false);
  const searchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const keptDex = new Set(kept.map((p) => p.dexNumber));
  const displayed = result ? result.team : kept;
  const canGenerate = kept.length < count;

  useEffect(() => {
    return () => {
      if (searchTimer.current) clearTimeout(searchTimer.current);
    };
  }, []);

  function flash(msg: string) {
    setNotice(msg);
    setTimeout(() => setNotice(null), 2200);
  }

  function addPick(p: Pokemon) {
    if (kept.some((x) => x.dexNumber === p.dexNumber)) return;
    if (kept.length >= count - 1) {
      flash(t.keepLimit.replace("{max}", String(count - 1)));
      return;
    }
    setKept((prev) => [...prev, p]);
    setResult(null);
  }

  function toggleLock(p: Pokemon) {
    setKept((prev) =>
      prev.some((x) => x.dexNumber === p.dexNumber)
        ? prev.filter((x) => x.dexNumber !== p.dexNumber)
        : [...prev, p],
    );
  }

  async function onSearch(v: string) {
    setQ(v);
    if (searchTimer.current) clearTimeout(searchTimer.current);
    searchTimer.current = setTimeout(async () => {
      if (!v.trim()) {
        setSuggestions([]);
        setSearchOpen(false);
        return;
      }
      try {
        const res = await fetch(`/api/pokemon/search?q=${encodeURIComponent(v.trim())}`);
        if (res.ok) {
          const data = await res.json();
          setSuggestions(data.results);
          setSearchOpen(true);
        }
      } catch {}
    }, 250);
  }

  async function addFromSearch(dex: number) {
    setQ("");
    setSuggestions([]);
    setSearchOpen(false);
    try {
      const res = await fetch(`/api/pokemon/${dex}?locale=${locale}`);
      if (res.ok) addPick((await res.json()) as Pokemon);
    } catch {}
  }

  function buildUrl() {
    const p = new URLSearchParams();
    p.set("locale", locale);
    if (kept.length) p.set("locked", kept.map((x) => x.dexNumber).join(","));
    p.set("count", String(count));
    if (gen) p.set("gen", gen);
    if (region) p.set("region", region);
    if (type) p.set("type", type);
    p.set("seed", Math.random().toString(36).slice(2, 10));
    return `/api/team/coach?${p.toString()}`;
  }

  async function generate() {
    if (!canGenerate || busy) return;
    setBusy(true);
    try {
      const res = await fetch(buildUrl());
      if (!res.ok) throw new Error("failed");
      const data = (await res.json()) as CoachResult;
      setResult(data);
      syncUrl(data.seed, data);
    } catch {
      flash(t.generateFailed);
    } finally {
      setBusy(false);
    }
  }

  function resultPicks(res: CoachResult) {
    const fresh = res.team.filter((p) => !keptDex.has(p.dexNumber));
    const picks = fresh.map((p) => p.dexNumber).join(",");
    // Raw values — URLSearchParams encodes them exactly once.
    const r = fresh.map((p) => res.reasons[p.dexNumber] || "").join("|");
    return { picks, r };
  }

  function syncUrl(seed: string, res: CoachResult) {
    if (typeof window === "undefined") return;
    const u = new URL(window.location.href);
    if (kept.length) u.searchParams.set("locked", kept.map((x) => x.dexNumber).join(","));
    else u.searchParams.delete("locked");
    u.searchParams.set("count", String(count));
    u.searchParams.set("seed", seed);
    const rp = resultPicks(res);
    u.searchParams.set("picks", rp.picks);
    u.searchParams.set("r", rp.r);
    if (gen) u.searchParams.set("gen", gen);
    else u.searchParams.delete("gen");
    if (region) u.searchParams.set("region", region);
    else u.searchParams.delete("region");
    if (type) u.searchParams.set("type", type);
    else u.searchParams.delete("type");
    window.history.replaceState(null, "", u.toString());
  }

  function addAllToTeam() {
    if (displayed.length === 0) return;
    let added = 0;
    displayed.forEach((p) => {
      if (!team.some((t) => t.dexNumber === p.dexNumber)) {
        add(p);
        added++;
      }
    });
    flash(added > 0 ? t.addedToTeam.replace("{count}", String(added)) : t.alreadyInTeam);
  }
  const shareUrl = result
    ? (() => {
        const sp = new URLSearchParams();
        if (kept.length) sp.set("locked", kept.map((x) => x.dexNumber).join(","));
        sp.set("count", String(count));
        sp.set("seed", result.seed);
        const rp = resultPicks(result);
        sp.set("picks", rp.picks);
        sp.set("r", rp.r);
        return `/team/coach?${sp.toString()}`;
      })()
    : undefined;

  const gearIcon = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );

  return (
    <div className="mx-auto w-full max-w-[1100px] px-4">
      {notice && (
        <p role="status" className="mb-3 text-center text-sm font-medium text-poke-ink">
          {notice}
        </p>
      )}

      {/* CTA hero — like the challenge page's "ready" panel */}
      <div className="mb-6 rounded-2xl border border-poke-border bg-poke-surface px-6 py-6 text-center shadow-sm">
        <h2 className="text-xl font-extrabold text-poke-ink">{t.readyTitle}</h2>
        <p className="mt-1 text-sm text-poke-dim">
          {t.readyDesc}
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={generate}
            disabled={!canGenerate || busy}
            className="game-btn game-btn-primary px-8 py-3.5 text-base font-extrabold disabled:cursor-not-allowed disabled:opacity-60"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <g fill="currentColor" stroke="none">
                <circle cx="8.5" cy="8.5" r="1.4" />
                <circle cx="15.5" cy="8.5" r="1.4" />
                <circle cx="12" cy="12" r="1.4" />
                <circle cx="8.5" cy="15.5" r="1.4" />
                <circle cx="15.5" cy="15.5" r="1.4" />
              </g>
            </svg>
            {busy ? dict.common.generating : result ? t.rerollUnlocked : t.generateTeam}
          </button>
          {result && (
            <ShareDialog
              url={shareUrl}
              text="I built a team with PokeRoll Team Coach — what do you think?"
              label="Share"
              className="game-btn game-btn-primary px-6 py-3.5 text-sm font-bold"
            />
          )}
          <LocalizedLink
            href="/team" title={dict.common.viewYourTeam}
            className="game-btn game-btn-ghost px-6 py-3.5 text-sm font-bold"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
            {t.viewMyTeam}
          </LocalizedLink>
        </div>
      </div>

      {/* How to play */}
      <GuideSteps
        className="mx-auto mb-6 max-w-[1100px] px-4"
        title={t.guideTitle}
        steps={[
          { n: "1", t: t.guide1T, d: t.guide1D },
          { n: "2", t: t.guide2T, d: t.guide2D },
          { n: "3", t: t.guide3T, d: t.guide3D },
        ]}
      />

      {/* Team Coach — picks + filters + generate + team in one panel */}
      <div className="mb-6 rounded-2xl border border-poke-border bg-poke-surface p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-sm font-extrabold text-poke-ink">{t.yourTeamHeading}</h2>
          <span className="text-xs text-poke-dim">
            {t.lockedTarget
              .replace("{kept}", String(kept.length))
              .replace("{count}", String(count))}
          </span>
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <div className="relative min-w-[220px] flex-1 sm:max-w-xs">
            <input
              value={q}
              onChange={(e) => onSearch(e.target.value)}
              onFocus={() => suggestions.length > 0 && setSearchOpen(true)}
              placeholder={t.searchPlaceholder}
              className={selectCls + " w-full"}
            />
            {searchOpen && suggestions.length > 0 && (
              <div className="absolute left-0 top-full z-30 mt-1 w-full overflow-hidden rounded-xl border border-poke-border bg-poke-surface shadow-xl">
                {suggestions.map((s) => (
                  <button
                    key={s.dexNumber}
                    type="button"
                    onClick={() => addFromSearch(s.dexNumber)}
                    className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-poke-chip"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.img} alt={s.displayName} className="h-8 w-8" />
                    <span className="font-semibold text-poke-ink">{s.displayName}</span>
                    <span className="ml-auto text-xs text-poke-dim">{s.types.join(" / ")}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => setPicker("fav")}
            className="game-btn game-btn-ghost px-4 py-2 text-sm font-semibold"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {t.importFavorites}
          </button>
          <button
            type="button"
            onClick={() => setPicker("team")}
            className="game-btn game-btn-ghost px-4 py-2 text-sm font-semibold"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            {t.importTeam}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t.collapseFilters : t.filtersAria}
            title={open ? t.collapseFilters : t.filtersAria}
            className={`flex h-11 w-11 items-center justify-center text-poke-dim transition hover:text-poke-red ${open ? "" : "breathe"}`}
          >
            {gearIcon}
          </button>
        </div>



        {/* Expanded filters */}
      {open && (
        <div className="mb-4 flex justify-center">
          <div className="w-fit max-w-full rounded-xl border border-poke-border bg-poke-surface p-3 shadow-sm">
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:flex lg:flex-initial lg:flex-wrap">


            <label className={labelCls}>
            {t.teamSizeLabel}
            <select
            value={count}
            onChange={(e) => {
            setCount(Number(e.target.value));
            setResult(null);
            }}
            className={selectCls}
            >
            {[3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>{n}</option>
            ))}
            </select>
            </label>
            <label className={labelCls}>
            {t.generationLabel}
            <select
            value={gen}
            onChange={(e) => {
            setGen(e.target.value);
            setResult(null);
            }}
            className={selectCls}
            >
            <option value="">{t.optionAny}</option>
            {GEN_OPTIONS.map((g) => (
            <option key={g} value={g}>{dict.common.genShort.replace("{n}", g)}</option>
            ))}
            </select>
            </label>
            <label className={labelCls}>
            {t.regionLabel}
            <select
            value={region}
            onChange={(e) => {
            setRegion(e.target.value);
            setResult(null);
            }}
            className={selectCls}
            >
            <option value="">{t.optionAny}</option>
            {REGIONS.map((r) => (
            <option key={r} value={r}>{cap(r)}</option>
            ))}
            </select>
            </label>
            <label className={labelCls}>
            {t.typeLabel}
            <select
            value={type}
            onChange={(e) => {
            setType(e.target.value);
            setResult(null);
            }}
            className={selectCls}
            >
            <option value="">{t.optionAny}</option>
            {TYPES.map((ty) => (
            <option key={ty} value={ty}>{cap(ty)}</option>
            ))}
            </select>
            </label>


          </div>
        </div>
        </div>
      )}

      {/* Status hint */}
      <p className="mb-4 text-center text-xs text-poke-dim">
        {!canGenerate
          ? t.allLockedHint
          : result
            ? t.rerollHint.replace("{count}", String(count - kept.length))
            : kept.length > 0
              ? t.fillHint.replace("{count}", String(count - kept.length))
              : t.fullRollHint}
      </p>



        {displayed.length > 0 ? (
          <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {displayed.map((p, idx) => {
              const reason = result ? result.reasons[p.dexNumber] : undefined;
              return (
                <div key={`${p.dexNumber}-${idx}`} className="relative">
                  <div className="h-fit">
                    <HeroCard
                      pokemon={p}
                      variant="team"
                      favoritable
                      hideRoll
                      lockable
                      locked={keptDex.has(p.dexNumber)}
                      onToggleLock={() => toggleLock(p)}
                    />
                  </div>
                  {reason && (
                    <div className="relative z-10 mt-1.5 text-center">
                      <span className="inline-block rounded-full bg-poke-chip px-2.5 py-0.5 text-xs font-bold text-poke-ink">
                        {reason}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-end gap-3">
            <TeamShowdownExport team={displayed} />
            <button
              type="button"
              onClick={addAllToTeam}
              className="game-btn game-btn-primary px-5 py-2.5 font-semibold"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              {t.addAllToTeam}
            </button>
        </div>
          </>
        ) : (
          <p className="py-6 text-center text-sm text-poke-dim">
            {t.emptyHint}
          </p>
        )}
      </div>

      {/* Picker modal: favorites / team */}
      {picker && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setPicker(null)}
        >
          <div
            className="max-h-[70vh] w-full max-w-md overflow-y-auto rounded-2xl border border-poke-border bg-poke-surface p-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-extrabold text-poke-ink">
                {picker === "fav" ? t.pickerFavTitle : t.pickerTeamTitle}
              </h3>
              <button
                type="button"
                onClick={() => setPicker(null)}
                className="text-poke-dim hover:text-poke-red"
              >
                ✕
              </button>
            </div>
            {(picker === "fav" ? favorites : team).length === 0 ? (
              <p className="py-6 text-center text-sm text-poke-dim">
                {picker === "fav" ? t.favEmpty : t.teamEmpty}
              </p>
            ) : (
              <div className="space-y-1">
                {(picker === "fav" ? favorites : team).map((p) => (
                  <button
                    key={p.dexNumber}
                    type="button"
                    onClick={() => {
                      addPick(p);
                      setPicker(null);
                    }}
                    className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left hover:bg-poke-chip"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.sprite || p.artwork} alt={p.displayName} className="h-8 w-8" />
                    <span className="text-sm font-medium text-poke-ink">{p.displayName}</span>
                    <span className="ml-auto text-xs text-poke-dim">#{p.dexNumber}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
