"use client";

import { useState } from "react";
import HeroCard from "@/components/HeroCard";
import GuideSteps from "./GuideSteps";
import LogoMark from "./LogoMark";
import TeamShowdownExport from "@/components/TeamShowdownExport";
import { useTeam } from "@/components/useTeam";
import { useI18n } from "@/components/I18nProvider";
import { TYPES } from "@/lib/seo";
import type { Pokemon } from "@/lib/types";

const GENERATIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const REGIONS = [
  "kanto",
  "johto",
  "hoenn",
  "sinnoh",
  "unova",
  "kalos",
  "alola",
  "galar",
  "paldea",
];
const TEAM_SIZES = [3, 4, 5, 6];

// Region and generation are the same axis (each region is exactly one gen).
// Keeping the two selects in sync means their intersection can never come
// up empty just because the user picked Gen 5 + Kanto.
const GEN_TO_REGION: Record<string, string> = {
  "1": "kanto",
  "2": "johto",
  "3": "hoenn",
  "4": "sinnoh",
  "5": "unova",
  "6": "kalos",
  "7": "alola",
  "8": "galar",
  "9": "paldea",
};
const REGION_TO_GEN: Record<string, string> = Object.fromEntries(
  Object.entries(GEN_TO_REGION).map(([g, r]) => [r, g]),
);

const selectCls =
  "rounded-lg border border-poke-border bg-white px-2 py-1.5 text-sm text-poke-ink focus:border-poke-red focus:outline-none";
const labelCls =
  "flex w-full flex-col gap-1 text-xs font-semibold text-poke-dim lg:w-32";

/**
 * Filtered team roller for the Random Team page (/team/random). Filters
 * intersect server-side (gen ∩ region ∩ type, see lib/team.ts); rolled
 * Pokémon can be added straight into the saved team via the shared
 * useTeam store. The filter control mirrors /random: a breathing gear
 * icon that expands into a horizontal bar.
 */
export default function TeamGenerator({ initial }: { initial?: Pokemon[] }) {
  const [gen, setGen] = useState("1");
  const [region, setRegion] = useState("kanto");
  const [type, setType] = useState(""); // "" = Random
  const [size, setSize] = useState("6");
  const [open, setOpen] = useState(false);
  const [rolled, setRolled] = useState<Pokemon[] | null>(initial ?? null);
  const [rolling, setRolling] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  /** Locked slot indices — locked cards survive re-rolls in place. Keyed by
   *  slot index (not dexNumber) so duplicate Pokémon each get their own lock. */
  const [locks, setLocks] = useState<ReadonlySet<number>>(new Set());
  const { add, team, max } = useTeam();
  const { dict, locale } = useI18n();
  const t = dict.teamGenerator;

  function flash(msg: string) {
    setNotice(msg);
    setTimeout(() => setNotice(null), 2600);
  }

  function toggleLock(i: number) {
    setLocks((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  /** Team Size shrunk: trim from the end, dropping unlocked cards first and
   *  locked ones only when there is no other choice. */
  function trimTo(n: number) {
    if (!rolled || n >= rolled.length) return;
    const pairs = rolled.map((p, i) => ({ p, locked: locks.has(i) }));
    const idxs = pairs.map((_, i) => i);
    const drop = new Set(
      [
        ...idxs.filter((i) => !pairs[i].locked).reverse(),
        ...idxs.filter((i) => pairs[i].locked).reverse(),
      ].slice(0, pairs.length - n),
    );
    const survivors = pairs.filter((_, i) => !drop.has(i));
    setRolled(survivors.map((s) => s.p));
    setLocks(
      new Set(survivors.flatMap((s, i) => (s.locked ? [i] : []))),
    );
  }

  async function roll() {
    if (rolling) return;
    if (rolled && locks.size >= rolled.length) return; // everything locked
    setRolling(true);
    try {
      const p = new URLSearchParams();
      p.set("locale", locale);
      if (gen) p.set("gen", gen);
      if (region) p.set("region", region);
      if (type) p.set("type", type);
      // With locks active only the unlocked slots are refilled; the request
      // asks for exactly that many new Pokémon and they replace the unlocked
      // slots in order. First roll uses the picked (or random) team size.
      const sizePick =
        size ||
        String(TEAM_SIZES[Math.floor(Math.random() * TEAM_SIZES.length)]);
      const need = rolled ? rolled.length - locks.size : Number(sizePick);
      p.set("count", String(need));
      p.set("seed", Math.random().toString(36).slice(2, 10));
      const res = await fetch(`/api/team/random?${p.toString()}`, {
        cache: "no-store",
      });
      if (!res.ok) throw new Error("roll failed");
      const data = (await res.json()) as { pokemon: Pokemon[]; seed?: string };
      if (rolled && locks.size > 0) {
        const queue = [...data.pokemon];
        setRolled(
          rolled.map((cur, i) => (locks.has(i) ? cur : (queue.shift() ?? cur))),
        );
      } else {
        setRolled(data.pokemon);
        // Keep the URL reproducible: filters + seed mean anyone opening the
        // page link sees the same squad (matches the page FAQ).
        if (data.seed) {
          const qp = new URLSearchParams();
          if (gen) qp.set("gen", gen);
          if (region) qp.set("region", region);
          if (type) qp.set("type", type);
          qp.set("count", String(data.pokemon.length || Number(sizePick)));
          qp.set("seed", data.seed);
          window.history.replaceState(null, "", `/team/random?${qp.toString()}`);
        }
        if (data.pokemon.length === 0) {
          flash(dict.randomGenerator.noMatch);
        }
      }
    } catch {
      /* keep previous roll on failure */
    } finally {
      setRolling(false);
    }
  }

  function addAll() {
    if (!rolled) return;
    const inTeam = new Set(team.map((p) => p.dexNumber));
    const fresh = rolled.filter((p) => !inTeam.has(p.dexNumber));
    const slots = max - team.length;
    if (slots <= 0) {
      flash(
        t.teamFull
          .replace("{count}", String(team.length))
          .replace("{max}", String(max)),
      );
      return;
    }
    if (fresh.length === 0) {
      flash(t.alreadyInTeam);
      return;
    }
    fresh.slice(0, slots).forEach((p) => add(p));
    flash(t.addedToTeam.replace("{count}", String(Math.min(fresh.length, slots))));
  }

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
            onClick={roll}
            disabled={rolling || (rolled != null && locks.size >= rolled.length)}
            title={
              rolled != null && locks.size >= rolled.length
                ? t.allLockedTitle
                : undefined
            }
            className="game-btn game-btn-primary px-8 py-3.5 text-base font-extrabold"
          >
            <LogoMark className="h-5 w-5" />
            {rolling
              ? t.rolling
              : rolled && locks.size > 0 && locks.size < rolled.length
                ? t.rollCount.replace("{count}", String(rolled.length - locks.size))
                : t.roll}
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

      {/* Expanded filters */}
      {open && (
        <div className="mb-5 flex justify-center">
          <div className="w-fit max-w-full rounded-xl border border-poke-border bg-poke-surface p-3 shadow-sm">
<div className="grid flex-1 grid-cols-2 gap-2.5 sm:grid-cols-4 lg:flex lg:flex-initial">
                <label className={labelCls}>
                  {t.generationLabel}
                  <select
                    value={gen}
                    onChange={(e) => {
                      const v = e.target.value;
                      setGen(v);
                      setRegion(v ? GEN_TO_REGION[v] : "");
                    }}
                    className={selectCls}
                  >
                    <option value="">{t.optionRandom}</option>
                    {GENERATIONS.map((g) => (
                      <option key={g} value={String(g)}>
                        {dict.common.genShort.replace("{n}", String(g))}
                      </option>
                    ))}
                  </select>
                </label>
                <label className={labelCls}>
                  {t.regionLabel}
                  <select
                    value={region}
                    onChange={(e) => {
                      const v = e.target.value;
                      setRegion(v);
                      setGen(v ? REGION_TO_GEN[v] : "");
                    }}
                    className={selectCls}
                  >
                    <option value="">{t.optionRandom}</option>
                    {REGIONS.map((r) => (
                      <option key={r} value={r}>
                        {r.charAt(0).toUpperCase() + r.slice(1)}
                      </option>
                    ))}
                  </select>
                </label>
                <label className={labelCls}>
                  {t.typeLabel}
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className={selectCls}
                  >
                    <option value="">{t.optionRandom}</option>
                    {TYPES.map((ty) => (
                      <option key={ty} value={ty}>
                        {ty.charAt(0).toUpperCase() + ty.slice(1)}
                      </option>
                    ))}
                  </select>
                </label>
                <label className={labelCls}>
                  {t.teamSizeLabel}
                  <select
                    value={size}
                    onChange={(e) => {
                      const v = e.target.value;
                      setSize(v);
                      // Shrinking the team trims the current roll on the spot
                      // (unlocked cards drop first); growing it just widens the
                      // target — the next Roll tops up the extra slots.
                      if (v) trimTo(Number(v));
                    }}
                    className={selectCls}
                  >
                    <option value="">{t.optionRandom}</option>
                    {TEAM_SIZES.map((c) => (
                      <option key={c} value={String(c)}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
          </div>
        </div>
      )}

      {rolled && rolled.length > 0 && (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {rolled.map((p, i) => (
              <HeroCard
                key={`${i}-${p.dexNumber}`}
                pokemon={p}
                variant="team"
                showActions={false}
                lockable
                locked={locks.has(i)}
                onToggleLock={() => toggleLock(i)}
                favoritable
              />
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-end gap-3">
            <TeamShowdownExport team={rolled} />
            <button
              type="button"
              onClick={addAll}
              className="game-btn game-btn-primary px-4 py-2 text-sm font-semibold"
            >
              {t.addAllToTeam}
              <span className="ml-1.5 rounded-full bg-white/20 px-1.5 text-xs leading-5">
                {team.length}/{max}
              </span>
            </button>
          </div>
        </>
      )}

    </div>
  );
}