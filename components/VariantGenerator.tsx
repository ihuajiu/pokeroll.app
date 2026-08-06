"use client";

import { useState } from "react";
import Link from "next/link";
import type { Pokemon } from "@/lib/types";
import HeroCard from "./HeroCard";
import AddToTeamButton from "./AddToTeamButton";

export type VariantPayload = {
  kind: string;
  value?: string | number;
  pokemon: Pokemon;
};

const KIND_LABEL: Record<string, string> = {
  type: "Type",
  ability: "Ability",
  move: "Move",
  bst: "Base Stat Total",
  number: "Pokédex Number",
  starter: "Starter Pokémon",
  shiny: "Shiny Pokémon",
  "no-names": "Mystery Pokémon",
  cute: "Cute Pokémon",
  mythical: "Mythical Pokémon",
  mega: "Mega Pokémon",
  nickname: "Nickname",
};

const VALUE_KINDS = new Set(["type", "ability", "move", "bst", "number", "nickname"]);

export default function VariantGenerator({
  kind,
  initial,
  mode,
}: {
  kind: string;
  initial: VariantPayload;
  mode?: "shiny" | "no-names";
}) {
  const [data, setData] = useState<VariantPayload>(initial);
  const [loading, setLoading] = useState(false);

  const showValue = data.value !== undefined && VALUE_KINDS.has(data.kind);
  const valueText = data.kind === "number" ? `#${data.value}` : String(data.value);

  async function regenerate() {
    setLoading(true);
    try {
      const res = await fetch(`/api/variant?kind=${kind}`);
      if (!res.ok) throw new Error("failed");
      setData(await res.json());
    } catch {
      // keep previous result on error
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-[640px]">
      <div className="mb-4 text-center">
        <p className="text-lg font-semibold text-poke-ink">Welcome Trainer!</p>
        <p className="text-sm text-poke-dim">
          Your random {KIND_LABEL[data.kind] ?? data.kind} is…
        </p>
        {showValue && (
          <p className="mt-1 text-2xl font-bold capitalize text-poke-red">
            {valueText}
          </p>
        )}
      </div>
      <div className="card-stage flex justify-center">
        <HeroCard
          pokemon={data.pokemon}
          loading={loading}
          hideName={mode === "no-names"}
          onRoll={regenerate}
          variant="wide"
          favoritable
        />
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <AddToTeamButton pokemon={data.pokemon} />
        <Link
          href="/team" title="View your team"
          className="rounded-xl border border-poke-border bg-poke-surface px-5 py-2.5 font-semibold text-poke-ink shadow-sm transition hover:border-poke-red hover:text-poke-red"
        >
          Build Team
        </Link>
      </div>
    </div>
  );
}
