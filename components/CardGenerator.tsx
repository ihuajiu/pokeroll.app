"use client";

import { useState } from "react";
import Link from "next/link";
import type { Pokemon } from "@/lib/types";
import { TYPE_HEX, typeGradient } from "@/lib/typeColors";
import GenerateButton from "./GenerateButton";
import AddToTeamButton from "./AddToTeamButton";
import TypeBadge from "./TypeBadge";

export default function CardGenerator({ initial }: { initial: Pokemon }) {
  const [pokemon, setPokemon] = useState<Pokemon>(initial);
  const [loading, setLoading] = useState(false);

  const main = pokemon.types[0] ?? "normal";
  const color = TYPE_HEX[main] ?? TYPE_HEX.normal;
  const move = pokemon.abilities[0] ?? "Tackle";

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
        className={`mx-auto max-w-sm rounded-2xl p-4 shadow-lg transition-opacity ${
          loading ? "opacity-50" : "opacity-100"
        }`}
        style={{ background: typeGradient(main) }}
      >
        <div className="flex items-center justify-between text-white">
          <span className="text-xl font-bold drop-shadow">{pokemon.displayName}</span>
          <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-semibold">
            HP {pokemon.stats.hp}
          </span>
        </div>
        <div className="mt-1 text-xs font-medium text-white/80">
          #{String(pokemon.dexNumber).padStart(3, "0")}
        </div>

        <div className="my-3 flex items-center justify-center rounded-xl bg-white/90 p-4">
          {pokemon.sprite ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={pokemon.sprite}
              alt={pokemon.displayName}
              width={140}
              height={140}
              style={{ width: 140, height: 140 }}
            />
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2">
          {pokemon.types.map((t) => (
            <TypeBadge key={t} type={t} />
          ))}
        </div>

        <div className="mt-3 rounded-lg bg-white/15 p-3 text-white">
          <div className="text-[10px] uppercase tracking-wide text-white/70">Attack</div>
          <div className="text-sm font-semibold capitalize">{move}</div>
          <div className="mt-1 text-[10px] uppercase tracking-wide text-white/70">Power / CP</div>
          <div className="text-sm font-semibold">{pokemon.bst}</div>
        </div>
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
