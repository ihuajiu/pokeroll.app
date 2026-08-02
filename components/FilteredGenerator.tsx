"use client";

import { useState } from "react";
import type { Pokemon } from "@/lib/types";
import HeroCard from "./HeroCard";
import AddToTeamButton from "./AddToTeamButton";

export default function FilteredGenerator({
  query,
  initial,
}: {
  query: string;
  initial: Pokemon;
}) {
  const [pokemon, setPokemon] = useState<Pokemon>(initial);
  const [loading, setLoading] = useState(false);

  async function regenerate() {
    setLoading(true);
    try {
      const res = await fetch(`/api/pokemon/random?${query}`);
      if (!res.ok) throw new Error("failed");
      setPokemon(await res.json());
    } catch {
      // keep previous result on error
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-[640px]">
      <div className="card-stage flex justify-center">
        <HeroCard pokemon={pokemon} loading={loading} onRoll={regenerate} variant="wide" />
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <AddToTeamButton pokemon={pokemon} />
      </div>
    </div>
  );
}
