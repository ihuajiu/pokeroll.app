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
const labelCls = "flex flex-col gap-1 text-xs font-semibold text-poke-dim";

/**
 * Filtered team roller for the Random Team page (/team/random). Filters
 * intersect server-side (gen ∩ region ∩ type, see lib/team.ts); rolled
 * Pokémon can be added straight into the saved team via the shared
 * useTeam store.
 */
export default function TeamGenerator({ initial }: { initial?: Pokemon[] }) {
  const [gen, setGen] = useState("1");
  const [region, setRegion] = useState("kanto");
  const [type, setType] = useState(""); // "" = Random
  const [size, setSize] = useState("6");
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

  return (
    <div className="mx-auto w-full max-w-[1100px] px-4">
      <div className="mb-8 rounded-2xl border border-poke-border bg-poke-surface p-4 shadow-sm">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-sm font-bold uppercase tracking-wide text-poke-dim">
            Roll a Team
          </h2>
          <button
            type="button"
            onClick={roll}
            disabled={rolling}
            className="rounded-xl bg-poke-red px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {rolling ? "Rolling…" : "Roll"}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
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

        {notice && (
          <p role="status" className="mt-3 text-sm font-medium text-poke-ink">
            {notice}
          </p>
        )}

        {rolled && rolled.length > 0 && (
          <>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
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
    </div>
  );
}
