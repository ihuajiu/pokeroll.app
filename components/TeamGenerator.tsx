"use client";

import { useState } from "react";
import HeroCard from "@/components/HeroCard";
import { useTeam } from "@/components/useTeam";
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
  const { add, team, max } = useTeam();

  function flash(msg: string) {
    setNotice(msg);
    setTimeout(() => setNotice(null), 2600);
  }

  async function roll() {
    if (rolling) return;
    setRolling(true);
    try {
      const p = new URLSearchParams();
      if (gen) p.set("gen", gen);
      if (region) p.set("region", region);
      if (type) p.set("type", type);
      const sizePick =
        size ||
        String(TEAM_SIZES[Math.floor(Math.random() * TEAM_SIZES.length)]);
      p.set("count", sizePick);
      p.set("seed", Math.random().toString(36).slice(2, 10));
      const res = await fetch(`/api/team/random?${p.toString()}`, {
        cache: "no-store",
      });
      if (!res.ok) throw new Error("roll failed");
      const data = (await res.json()) as { pokemon: Pokemon[] };
      setRolled(data.pokemon);
      if (data.pokemon.length === 0) {
        flash("No Pokémon match those filters — try widening them.");
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
      flash(`Team is full (${team.length}/${max}). Remove some first.`);
      return;
    }
    if (fresh.length === 0) {
      flash("All rolled Pokémon are already in your team.");
      return;
    }
    fresh.slice(0, slots).forEach((p) => add(p));
    flash(`Added ${Math.min(fresh.length, slots)} to your team.`);
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
      <div className="relative mb-5 flex items-center justify-center">
        <div
          className={`overflow-hidden transition-[width] duration-300 ${
            open
              ? "w-[640px] max-w-full rounded-xl border border-poke-border bg-poke-surface shadow-sm"
              : "breathe w-11"
          }`}
        >
          {open ? (
            <div className="flex items-start gap-3 p-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-expanded={open}
                aria-label="Collapse filters"
                title="Collapse filters"
                className="game-btn game-btn-ghost flex h-9 w-9 shrink-0 items-center justify-center self-end"
              >
                {gearIcon}
              </button>
              <div className="grid flex-1 grid-cols-2 gap-2.5 sm:grid-cols-4 lg:flex lg:flex-initial">
                <label className={labelCls}>
                  Generation
                  <select
                    value={gen}
                    onChange={(e) => {
                      const v = e.target.value;
                      setGen(v);
                      setRegion(v ? GEN_TO_REGION[v] : "");
                    }}
                    className={selectCls}
                  >
                    <option value="">Random</option>
                    {GENERATIONS.map((g) => (
                      <option key={g} value={String(g)}>
                        Gen {g}
                      </option>
                    ))}
                  </select>
                </label>
                <label className={labelCls}>
                  Region
                  <select
                    value={region}
                    onChange={(e) => {
                      const v = e.target.value;
                      setRegion(v);
                      setGen(v ? REGION_TO_GEN[v] : "");
                    }}
                    className={selectCls}
                  >
                    <option value="">Random</option>
                    {REGIONS.map((r) => (
                      <option key={r} value={r}>
                        {r.charAt(0).toUpperCase() + r.slice(1)}
                      </option>
                    ))}
                  </select>
                </label>
                <label className={labelCls}>
                  Type
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className={selectCls}
                  >
                    <option value="">Random</option>
                    {TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                      </option>
                    ))}
                  </select>
                </label>
                <label className={labelCls}>
                  Team Size
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className={selectCls}
                  >
                    <option value="">Random</option>
                    {TEAM_SIZES.map((c) => (
                      <option key={c} value={String(c)}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-label="Filters"
              title="Filters"
              className="flex h-11 w-11 items-center justify-center text-poke-dim transition hover:text-poke-red"
            >
              {gearIcon}
            </button>
          )}
        </div>
        <button
          type="button"
          onClick={roll}
          disabled={rolling}
          className="absolute right-6 inline-flex items-center gap-2 rounded-xl bg-poke-red px-7 py-3 text-base font-bold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="4" />
            <g fill="currentColor" stroke="none">
              <circle cx="8.5" cy="8.5" r="1.3" />
              <circle cx="15.5" cy="8.5" r="1.3" />
              <circle cx="12" cy="12" r="1.3" />
              <circle cx="8.5" cy="15.5" r="1.3" />
              <circle cx="15.5" cy="15.5" r="1.3" />
            </g>
          </svg>
          {rolling ? "Rolling…" : "Roll"}
        </button>
      </div>

      {notice && (
        <p
          role="status"
          className="mb-3 text-center text-sm font-medium text-poke-ink"
        >
          {notice}
        </p>
      )}

      {rolled && rolled.length > 0 && (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {rolled.map((p) => (
              <HeroCard
                key={p.dexNumber}
                pokemon={p}
                variant="team"
                showActions={false}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={addAll}
              className="rounded-xl bg-poke-btn px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-poke-btnHover"
            >
              Add all to Team
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
