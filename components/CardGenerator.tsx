"use client";

import { useState } from "react";
import Link from "next/link";
import type { Pokemon } from "@/lib/types";
import GenerateButton from "./GenerateButton";
import AddToTeamButton from "./AddToTeamButton";
import HeroCard from "./HeroCard";

export default function CardGenerator({ initial }: { initial: Pokemon }) {
  const [pokemon, setPokemon] = useState<Pokemon>(initial);
  const [loading, setLoading] = useState(false);

  async function regenerate() {
    setLoading(true);
    try {
      const res = await fetch("/api/variant?kind=card");
      if (!res.ok) throw new Error("failed");
      setPokemon((await res.json()).pokemon);
    } catch {
      // keep previous result on error
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="mb-6 text-center">
        <p className="text-lg font-semibold text-poke-ink">Welcome Trainer!</p>
        <p className="text-sm text-poke-dim">Your random Pokémon card is…</p>
      </div>

      <div
        className={`mx-auto max-w-sm transition-opacity ${
          loading ? "opacity-50" : "opacity-100"
        }`}
      >
        <HeroCard pokemon={pokemon} loading={loading} showActions={false} />
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <GenerateButton onClick={regenerate} loading={loading} />
        <AddToTeamButton pokemon={pokemon} />
        <Link
          href="/team"
          className="game-btn game-btn-ghost px-5 py-2.5"
        >
          Build Team
        </Link>
      </div>
    </div>
  );
}
