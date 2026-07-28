"use client";

import { useState } from "react";
import type { Pokemon } from "@/lib/types";
import PokemonCard from "./PokemonCard";
import GenerateButton from "./GenerateButton";
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
    <div>
      <PokemonCard pokemon={pokemon} loading={loading} />
      <div className="mt-5 flex flex-wrap gap-3">
        <GenerateButton onClick={regenerate} loading={loading} />
        <AddToTeamButton pokemon={pokemon} />
      </div>
    </div>
  );
}
