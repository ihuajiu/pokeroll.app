"use client";

import { useState } from "react";
import Link from "next/link";
import type { Pokemon } from "@/lib/types";
import HeroCard from "./HeroCard";
import AddToTeamButton from "./AddToTeamButton";

export type FusionPayload = { a: Pokemon; b: Pokemon };

function fuseNames(a: string, b: string): string {
  const cut = Math.max(1, Math.ceil(a.length / 2));
  return (a.slice(0, cut) + b.slice(Math.floor(b.length / 2))).trim();
}

function buildFusion(a: Pokemon, b: Pokemon): Pokemon {
  const types = Array.from(new Set([...a.types, ...b.types]));
  const stats = {
    hp: Math.round((a.stats.hp + b.stats.hp) / 2),
    atk: Math.round((a.stats.atk + b.stats.atk) / 2),
    def: Math.round((a.stats.def + b.stats.def) / 2),
    spa: Math.round((a.stats.spa + b.stats.spa) / 2),
    spd: Math.round((a.stats.spd + b.stats.spd) / 2),
    spe: Math.round((a.stats.spe + b.stats.spe) / 2),
  };
  const bst = stats.hp + stats.atk + stats.def + stats.spa + stats.spd + stats.spe;
  const fusedName = fuseNames(a.displayName, b.displayName);
  return {
    ...a,
    name: fusedName.toLowerCase(),
    displayName: fusedName,
    types,
    stats,
    bst,
    sprite: a.sprite,
    shinySprite: a.shinySprite,
    abilities: Array.from(new Set([...a.abilities, ...b.abilities])),
    isLegendary: a.isLegendary || b.isLegendary,
    isMythical: a.isMythical || b.isMythical,
    // Average the parents' size like the stats; keep 1-decimal precision.
    height:
      a.height != null && b.height != null
        ? Math.round(((a.height + b.height) / 2) * 10) / 10
        : (a.height ?? b.height),
    weight:
      a.weight != null && b.weight != null
        ? Math.round(((a.weight + b.weight) / 2) * 10) / 10
        : (a.weight ?? b.weight),
  };
}

export default function FusionGenerator({ initial }: { initial: FusionPayload }) {
  const [data, setData] = useState<FusionPayload>(initial);
  const [loading, setLoading] = useState(false);
  const fused = buildFusion(data.a, data.b);

  async function regenerate() {
    setLoading(true);
    try {
      const res = await fetch("/api/fusion");
      if (!res.ok) throw new Error("failed");
      setData(await res.json());
    } catch {
      // keep previous result on error
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-[1040px]">
      <div className="mb-4 text-center">
        <p className="text-lg font-semibold text-poke-ink">Welcome Trainer!</p>
        <p className="text-sm text-poke-dim">Fuse two random Pokémon into one!</p>
      </div>

      <div className="fusion-stage grid grid-cols-1 items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
        <div>
          <p className="mb-1 text-center text-xs font-semibold uppercase tracking-wide text-poke-dim">
            {data.a.displayName}
          </p>
          <HeroCard pokemon={data.a} loading={loading} showActions={false} variant="team" />
        </div>

        <div className="text-center text-3xl font-bold text-poke-red">+</div>

        <div>
          <p className="mb-1 text-center text-xs font-semibold uppercase tracking-wide text-poke-dim">
            {data.b.displayName}
          </p>
          <HeroCard pokemon={data.b} loading={loading} showActions={false} variant="team" />
        </div>
      </div>

      <div className="my-5 text-center text-3xl font-bold text-poke-red">=</div>

      <p className="mb-2 text-center text-sm text-poke-dim">Your fusion is…</p>
      <div className="card-stage mx-auto flex max-w-[640px] justify-center">
        <HeroCard pokemon={fused} loading={loading} onRoll={regenerate} variant="wide" />
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <AddToTeamButton pokemon={fused} />
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
