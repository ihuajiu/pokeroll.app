"use client";

import { useState } from "react";
import Link from "next/link";
import type { Pokemon } from "@/lib/types";
import HeroCard from "./HeroCard";
import ShareButton from "./ShareButton";
import AddToTeamButton from "./AddToTeamButton";

export default function PokemonGenerator({ initial }: { initial: Pokemon }) {
  const [pokemon, setPokemon] = useState<Pokemon>(initial);
  const [loading, setLoading] = useState(false);

  async function regenerate() {
    setLoading(true);
    try {
      const res = await fetch("/api/pokemon/random");
      if (!res.ok) throw new Error("failed");
      const data: Pokemon = await res.json();
      setPokemon(data);
      window.history.replaceState(null, "", `/?p=${data.name}`);
    } catch {
      // keep previous pokemon on error
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-[640px]">
      <div className="mb-4 text-center">
        <p className="text-lg font-semibold text-poke-ink">Welcome Trainer!</p>
        <p className="text-sm text-poke-dim">Your random Pokémon is…</p>
      </div>
      <div className="card-stage flex justify-center">
        <HeroCard pokemon={pokemon} loading={loading} onRoll={regenerate} variant="wide" />
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <ShareButton name={pokemon.name} />
        <AddToTeamButton pokemon={pokemon} />
        <Link
          href="/team"
          className="game-btn game-btn-ghost px-5 py-2.5"
        >
          Build Team
        </Link>
        <Link
          href="/challenge/guess"
          className="game-btn game-btn-ghost px-5 py-2.5"
        >
          Create Challenge
        </Link>
      </div>
    </div>
  );
}
