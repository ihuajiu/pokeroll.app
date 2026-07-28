"use client";

import { useState } from "react";
import Link from "next/link";
import type { Pokemon } from "@/lib/types";
import GenerateButton from "./GenerateButton";
import AddToTeamButton from "./AddToTeamButton";

const TYPE_COLORS: Record<string, { bg: string; text: string }> = {
  normal: { bg: "#A8A878", text: "#fff" },
  fire: { bg: "#F08030", text: "#fff" },
  water: { bg: "#6890F0", text: "#fff" },
  electric: { bg: "#F8D030", text: "#3b3b3b" },
  grass: { bg: "#78C850", text: "#fff" },
  ice: { bg: "#98D8D8", text: "#3b3b3b" },
  fighting: { bg: "#C03028", text: "#fff" },
  poison: { bg: "#A040A0", text: "#fff" },
  ground: { bg: "#E0C068", text: "#3b3b3b" },
  flying: { bg: "#A890F0", text: "#fff" },
  psychic: { bg: "#F85888", text: "#fff" },
  bug: { bg: "#A8B820", text: "#fff" },
  rock: { bg: "#B8A038", text: "#fff" },
  ghost: { bg: "#705898", text: "#fff" },
  dragon: { bg: "#7038F8", text: "#fff" },
  dark: { bg: "#705848", text: "#fff" },
  steel: { bg: "#B8B8D0", text: "#3b3b3b" },
  fairy: { bg: "#EE99AC", text: "#3b3b3b" },
};

export default function CardGenerator({ initial }: { initial: Pokemon }) {
  const [pokemon, setPokemon] = useState<Pokemon>(initial);
  const [loading, setLoading] = useState(false);

  const main = pokemon.types[0] ?? "normal";
  const color = TYPE_COLORS[main] ?? TYPE_COLORS.normal;
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
        style={{ background: `linear-gradient(160deg, ${color.bg}, #1f2430)` }}
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
            <span
              key={t}
              className="rounded-full px-3 py-1 text-xs font-semibold capitalize"
              style={{
                background: TYPE_COLORS[t]?.bg ?? "#999",
                color: TYPE_COLORS[t]?.text ?? "#fff",
              }}
            >
              {t}
            </span>
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
          className="rounded-xl border border-poke-border bg-poke-surface px-5 py-2.5 font-semibold text-poke-ink shadow-sm transition hover:border-poke-red hover:text-poke-red"
        >
          Build Team
        </Link>
      </div>
    </div>
  );
}
