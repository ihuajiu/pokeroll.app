"use client";

import { useState } from "react";
import HeroCard from "@/components/HeroCard";
import { useTeam } from "@/components/useTeam";
import type { Pokemon } from "@/lib/types";

const TEAM_SIZE = 6;

export default function RandomTeam({ initial }: { initial: Pokemon[] }) {
  const [team, setTeam] = useState<Pokemon[]>(initial);
  const [rolling, setRolling] = useState(false);
  const { add } = useTeam();

  async function roll() {
    if (rolling) return;
    setRolling(true);
    try {
      const list = await Promise.all(
        Array.from({ length: TEAM_SIZE }, () =>
          fetch("/api/pokemon/random")
            .then((r) => (r.ok ? (r.json() as Promise<Pokemon>) : null))
            .catch(() => null),
        ),
      );
      const next = list.filter(Boolean) as Pokemon[];
      if (next.length) setTeam(next);
    } finally {
      setRolling(false);
    }
  }

  function addAll() {
    team.forEach((p) => add(p));
  }

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-poke-dim">
          A fresh squad of six — roll again for a new lineup.
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={addAll}
            className="rounded-xl bg-poke-btn px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-poke-btnHover"
          >
            Add all to Team
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
