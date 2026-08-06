"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Pokemon } from "@/lib/types";
import HeroCard from "./HeroCard";
import { useFavorites } from "./useFavorites";
import { useTeam } from "./useTeam";
import ShareDialog from "./ShareDialog";

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
      flash(`Keep at most ${count - 1} — leave at least 1 slot for the coach.`);
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
      const res = await fetch(`/api/pokemon/${dex}`);
      if (res.ok) addPick((await res.json()) as Pokemon);
    } catch {}
  }

  function buildUrl() {
    const p = new URLSearchParams();
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
      flash("Generation failed — try again.");
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
    flash(added > 0 ? `Added ${added} to your team.` : "These Pokémon are already in your team.");
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

  return (
    <div className="mx-auto w-full max-w-[1100px] px-4">
      {notice && (
        <p role="status" className="mb-3 text-center text-sm font-medium text-poke-ink">
          {notice}
        </p>
      )}

      {/* Team + add picks (optional) */}
      <div className="mb-6 rounded-2xl border border-poke-border bg-poke-surface p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-sm font-extrabold text-poke-ink">Your team</h2>
          <span className="text-xs text-poke-dim">
            {kept.length} locked · target {count}
          </span>
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <div className="relative min-w-[220px] flex-1 sm:max-w-xs">
            <input
              value={q}
              onChange={(e) => onSearch(e.target.value)}
              onFocus={() => suggestions.length > 0 && setSearchOpen(true)}
              placeholder="Search Pokémon (optional)…"
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
            className="rounded-xl border border-poke-border bg-poke-surface px-4 py-2 text-sm font-semibold text-poke-ink shadow-sm transition hover:border-poke-red hover:text-poke-red"
          >
            Import from Favorites
          </button>
          <button
            type="button"
            onClick={() => setPicker("team")}
            className="rounded-xl border border-poke-border bg-poke-surface px-4 py-2 text-sm font-semibold text-poke-ink shadow-sm transition hover:border-poke-red hover:text-poke-red"
          >
            Import from Team
          </button>
        </div>

        {displayed.length > 0 ? (
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
        ) : (
          <p className="py-6 text-center text-sm text-poke-dim">
            Add a pick or just generate a full team — the coach balances types and roles.
          </p>
        )}
      </div>

      {/* Filters + generate */}
      <div className="mb-6 rounded-2xl border border-poke-border bg-poke-surface p-5">
        <div className="flex flex-wrap items-center gap-4">
          <label className="text-xs font-bold uppercase tracking-wide text-poke-dim">
            Team size
            <select
              value={count}
              onChange={(e) => {
                setCount(Number(e.target.value));
                setResult(null);
              }}
              className={"ml-2 " + selectCls}
            >
              {[3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </label>
          <label className="text-xs font-bold uppercase tracking-wide text-poke-dim">
            Generation
            <select
              value={gen}
              onChange={(e) => {
                setGen(e.target.value);
                setResult(null);
              }}
              className={"ml-2 " + selectCls}
            >
              <option value="">Any</option>
              {GEN_OPTIONS.map((g) => (
                <option key={g} value={g}>Gen {g}</option>
              ))}
            </select>
          </label>
          <label className="text-xs font-bold uppercase tracking-wide text-poke-dim">
            Region
            <select
              value={region}
              onChange={(e) => {
                setRegion(e.target.value);
                setResult(null);
              }}
              className={"ml-2 " + selectCls}
            >
              <option value="">Any</option>
              {REGIONS.map((r) => (
                <option key={r} value={r}>{cap(r)}</option>
              ))}
            </select>
          </label>
          <label className="text-xs font-bold uppercase tracking-wide text-poke-dim">
            Type
            <select
              value={type}
              onChange={(e) => {
                setType(e.target.value);
                setResult(null);
              }}
              className={"ml-2 " + selectCls}
            >
              <option value="">Any</option>
              {TYPES.map((t) => (
                <option key={t} value={t}>{cap(t)}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={generate}
            disabled={!canGenerate || busy}
            className="rounded-xl bg-poke-btn px-7 py-3 text-base font-extrabold text-white shadow-glow transition hover:bg-poke-btnHover disabled:cursor-not-allowed disabled:opacity-60"
          >
            {busy ? "Generating…" : result ? "Re-roll unlocked" : "Generate team"}
          </button>
          <span className="text-xs text-poke-dim">
            {!canGenerate
              ? "Everything is locked — unlock a card to re-roll."
              : result
                ? `Re-rolls ${count - kept.length} unlocked slot(s)`
                : kept.length > 0
                  ? `Will fill ${count - kept.length} slot(s) with balanced coverage`
                  : "Rolls a full balanced team"}
          </span>
        </div>
      </div>

      {/* Actions */}
      {displayed.length > 0 && (
        <div className="mb-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={addAllToTeam}
            className="rounded-xl bg-poke-btn px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-poke-btnHover"
          >
            Add all to Team
          </button>
          {result && (
            <ShareDialog
              url={shareUrl}
              text="I built a team with PokeRoll Team Coach — what do you think?"
              label="Share team"
              className="rounded-xl bg-amber-500 px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-amber-600"
            />
          )}
          <Link
            href="/team" title="View your team"
            className="rounded-xl border border-poke-border bg-poke-surface px-5 py-2.5 font-semibold text-poke-ink shadow-sm transition hover:border-poke-red hover:text-poke-red"
          >
            View my team
          </Link>
        </div>
      )}

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
                {picker === "fav" ? "From Favorites" : "From Your Team"}
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
                {picker === "fav"
                  ? "No favorites yet — tap the heart on any generator first."
                  : "Your team is empty — add Pokémon on any generator first."}
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

