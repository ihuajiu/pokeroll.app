"use client";

import { useState } from "react";
import HeroCard from "@/components/HeroCard";
import { useTeam } from "@/components/useTeam";
import { TYPES } from "@/lib/seo";
import { DIFFICULTIES } from "@/lib/adventure-types";
import type { Pokemon } from "@/lib/types";
import type { TeamRandomParams } from "@/lib/team";

const TEAM_SIZE = 6;
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

export default function RandomTeam({
  initial,
  params,
}: {
  initial: Pokemon[];
  params: TeamRandomParams;
}) {
  const [team, setTeam] = useState<Pokemon[]>(initial);
  const [rolling, setRolling] = useState(false);
  const [filters, setFilters] = useState<TeamRandomParams>({
    region: params.region || "",
    type: params.type || "",
    gen: params.gen || "",
    count: params.count || String(TEAM_SIZE),
    difficulty: params.difficulty || "Normal",
  });
  const { add, team: savedTeam, max } = useTeam();

  function buildUrl(): string {
    const p = new URLSearchParams();
    if (filters.region) p.set("region", filters.region);
    if (filters.type) p.set("type", filters.type);
    if (filters.gen) p.set("gen", filters.gen);
    if (filters.count && filters.count !== String(TEAM_SIZE)) {
      p.set("count", filters.count);
    }
    if (filters.difficulty && filters.difficulty !== "Normal") {
      p.set("difficulty", filters.difficulty);
    }
    p.set("seed", Math.random().toString(36).slice(2, 10));
    return `/api/team/random?${p.toString()}`;
  }

  async function roll() {
    if (rolling) return;
    setRolling(true);
    try {
      const res = await fetch(buildUrl(), { cache: "no-store" });
      if (!res.ok) throw new Error("roll failed");
      const data = (await res.json()) as { seed: string; pokemon: Pokemon[] };
      if (data.pokemon.length) setTeam(data.pokemon);
      // Update URL so the current roll is shareable.
      if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
        if (filters.region) url.searchParams.set("region", filters.region);
        else url.searchParams.delete("region");
        if (filters.type) url.searchParams.set("type", filters.type);
        else url.searchParams.delete("type");
        if (filters.gen) url.searchParams.set("gen", filters.gen);
        else url.searchParams.delete("gen");
        if (filters.count && filters.count !== String(TEAM_SIZE)) {
          url.searchParams.set("count", filters.count);
        } else {
          url.searchParams.delete("count");
        }
        if (filters.difficulty && filters.difficulty !== "Normal") {
          url.searchParams.set("difficulty", filters.difficulty);
        } else {
          url.searchParams.delete("difficulty");
        }
        url.searchParams.set("seed", data.seed);
        window.history.replaceState(null, "", url.toString());
      }
    } catch {
      /* keep current team on failure */
    } finally {
      setRolling(false);
    }
  }

  function addAll() {
    const inTeam = new Set(savedTeam.map((p) => p.dexNumber));
    const fresh = team.filter((p) => !inTeam.has(p.dexNumber));
    const slots = max - savedTeam.length;
    if (slots <= 0) return;
    fresh.slice(0, slots).forEach((p) => add(p));
  }

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-poke-dim">
          A fresh squad — roll again for a new lineup.
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={addAll}
            className="rounded-xl bg-poke-btn px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-poke-btnHover"
          >
            Add all to Team
            <span className="ml-1.5 rounded-full bg-white/20 px-1.5 text-xs leading-5">
              {savedTeam.length}/{max}
            </span>
          </button>
          <button
            type="button"
            onClick={roll}
            disabled={rolling}
            className="rounded-xl bg-poke-red px-4 py-2 font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {rolling ? "Rolling…" : "Roll a new team"}
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 grid grid-cols-1 gap-3 rounded-2xl border border-poke-border bg-poke-surface p-4 sm:grid-cols-2 lg:grid-cols-5">
        <label className="flex flex-col gap-1 text-xs font-semibold text-poke-dim">
          Region
          <select
            value={filters.region}
            onChange={(e) =>
              setFilters((f) => ({ ...f, region: e.target.value }))
            }
            className="rounded-lg border border-poke-border bg-white px-2 py-1.5 text-sm text-poke-ink focus:border-poke-red focus:outline-none"
          >
            <option value="">Any</option>
            {REGIONS.map((r) => (
              <option key={r} value={r}>
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1 text-xs font-semibold text-poke-dim">
          Type
          <select
            value={filters.type}
            onChange={(e) =>
              setFilters((f) => ({ ...f, type: e.target.value }))
            }
            className="rounded-lg border border-poke-border bg-white px-2 py-1.5 text-sm text-poke-ink focus:border-poke-red focus:outline-none"
          >
            <option value="">Any</option>
            {TYPES.map((t) => (
              <option key={t} value={t}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1 text-xs font-semibold text-poke-dim">
          Generation
          <select
            value={filters.gen}
            onChange={(e) =>
              setFilters((f) => ({ ...f, gen: e.target.value }))
            }
            className="rounded-lg border border-poke-border bg-white px-2 py-1.5 text-sm text-poke-ink focus:border-poke-red focus:outline-none"
          >
            <option value="">Any</option>
            {GENERATIONS.map((g) => (
              <option key={g} value={String(g)}>
                Gen {g}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1 text-xs font-semibold text-poke-dim">
          Count
          <select
            value={filters.count}
            onChange={(e) =>
              setFilters((f) => ({ ...f, count: e.target.value }))
            }
            className="rounded-lg border border-poke-border bg-white px-2 py-1.5 text-sm text-poke-ink focus:border-poke-red focus:outline-none"
          >
            {[3, 4, 5, 6, 7, 8, 9, 12].map((c) => (
              <option key={c} value={String(c)}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1 text-xs font-semibold text-poke-dim">
          Difficulty
          <select
            value={filters.difficulty}
            onChange={(e) =>
              setFilters((f) => ({ ...f, difficulty: e.target.value }))
            }
            className="rounded-lg border border-poke-border bg-white px-2 py-1.5 text-sm text-poke-ink focus:border-poke-red focus:outline-none"
          >
            {DIFFICULTIES.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {team.map((p) => (
          <HeroCard
            key={p.dexNumber}
            pokemon={p}
            variant="team"
            showActions={false}
          />
        ))}
      </div>
    </div>
  );
}
