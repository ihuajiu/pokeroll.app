"use client";

import { useState } from "react";
import HeroCard from "@/components/HeroCard";
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

// Region and generation are the same axis (each region is exactly one gen);
// keep the two selects in sync so their intersection can never be empty.
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
 * The /random generator: one-tap roll by default, with a collapsible
 * "Advanced Filters" panel (gen / region / type / legendary / starter) for
 * users who want to control the result. Filters intersect server-side —
 * see app/api/pokemon/random/route.ts.
 */
export default function RandomGenerator({ initial }: { initial: Pokemon }) {
  const [pokemon, setPokemon] = useState<Pokemon>(initial);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [gen, setGen] = useState("");
  const [region, setRegion] = useState("");
  const [type, setType] = useState("");
  const [legendary, setLegendary] = useState(""); // "" any, "1" only, "0" exclude
  const [starter, setStarter] = useState(""); // "" any, "1" only
  const [notice, setNotice] = useState<string | null>(null);

  function flash(msg: string) {
    setNotice(msg);
    setTimeout(() => setNotice(null), 2600);
  }

  async function roll() {
    if (loading) return;
    setLoading(true);
    try {
      const p = new URLSearchParams();
      if (gen) p.set("gen", gen);
      if (region) p.set("region", region);
      if (type) p.set("type", type);
      if (legendary) p.set("legendary", legendary);
      if (starter) p.set("starter", starter);
      const res = await fetch(`/api/pokemon/random?${p.toString()}`, {
        cache: "no-store",
      });
      if (res.status === 404) {
        flash("No Pokémon match those filters — try widening them.");
        return;
      }
      if (!res.ok) throw new Error("roll failed");
      setPokemon(await res.json());
    } catch {
      // keep previous result on failure
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="mx-auto mb-4 max-w-[640px] px-6">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center justify-between rounded-xl border border-poke-border bg-poke-surface px-4 py-2.5 text-sm font-semibold text-poke-ink shadow-sm transition hover:border-poke-red"
        >
          <span className="flex items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-poke-dim"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            Advanced Filters
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`h-4 w-4 text-poke-dim transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        {open && (
          <div className="mt-2 grid grid-cols-2 gap-3 rounded-xl border border-poke-border bg-poke-surface p-4 shadow-sm sm:grid-cols-3">
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
                <option value="">All</option>
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
                <option value="">All</option>
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
                <option value="">All</option>
                {TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </option>
                ))}
              </select>
            </label>
            <label className={labelCls}>
              Legendary
              <select
                value={legendary}
                onChange={(e) => setLegendary(e.target.value)}
                className={selectCls}
              >
                <option value="">Any</option>
                <option value="1">Only</option>
                <option value="0">Exclude</option>
              </select>
            </label>
            <label className={labelCls}>
              Starter
              <select
                value={starter}
                onChange={(e) => setStarter(e.target.value)}
                className={selectCls}
              >
                <option value="">Any</option>
                <option value="1">Only</option>
              </select>
            </label>
          </div>
        )}

        {notice && (
          <p role="status" className="mt-2 text-sm font-medium text-poke-ink">
            {notice}
          </p>
        )}
      </div>

      <div className="mx-auto max-w-[640px] px-6">
        <div className="mb-4 text-center">
          <p className="text-lg font-semibold text-poke-ink">Welcome Trainer!</p>
          <p className="text-sm text-poke-dim">Your random Pokémon is…</p>
        </div>
        <div style={{ transform: "scale(0.95)", transformOrigin: "top center" }}>
          <HeroCard pokemon={pokemon} loading={loading} onRoll={roll} />
        </div>
      </div>
    </div>
  );
}
