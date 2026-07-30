"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import HeroCard from "@/components/HeroCard";
import { useTeam } from "@/components/useTeam";
import { titleCase } from "@/lib/seo";
import {
  randomSeed,
  shareText,
  type Adventure,
} from "@/lib/adventure";

export default function AdventureView({
  initial,
}: {
  initial: Adventure;
}) {
  const router = useRouter();
  const { add } = useTeam();
  const [rolling, setRolling] = useState(false);
  const [copied, setCopied] = useState(false);

  const a = initial;

  function rollAgain() {
    if (rolling) return;
    setRolling(true);
    router.push(`/adventure?seed=${randomSeed()}`);
  }

  async function share() {
    const url =
      typeof window !== "undefined" ? window.location.href : "/adventure";
    const text = `${shareText(a)}\n${url}`;
    try {
      await navigator.clipboard?.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  }

  function addAll() {
    a.team.forEach((p) => add(p));
    if (a.starter) add(a.starter);
  }

  return (
    <div>
      {/* Action bar */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-poke-dim">
          Seed <span className="font-mono">{a.seed}</span> — share this link to
          replay the exact same adventure.
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
            onClick={share}
            className="rounded-xl border border-poke-border bg-poke-surface px-4 py-2 font-semibold text-poke-ink shadow-sm transition hover:border-poke-red hover:text-poke-red"
          >
            {copied ? "Copied!" : "Share Adventure"}
          </button>
          <button
            type="button"
            onClick={rollAgain}
            disabled={rolling}
            className="rounded-xl bg-poke-red px-4 py-2 font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {rolling ? "Rolling…" : "Roll Again"}
          </button>
        </div>
      </div>

      {/* Adventure narrative banner */}
      <div className="mb-6 rounded-2.5xl border border-poke-border bg-poke-surface p-6 shadow-sm">
        <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#ee3b3b]">
          <span aria-hidden="true">🎲</span> Your Pokémon Adventure
        </div>
        <dl className="grid gap-3 sm:grid-cols-2">
          <div className="flex items-center justify-between gap-4 rounded-xl bg-poke-chip px-4 py-2.5">
            <dt className="text-xs font-semibold text-poke-dim">Trainer</dt>
            <dd className="text-sm font-bold text-poke-ink">
              {a.trainer.name} — {a.trainer.role}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4 rounded-xl bg-poke-chip px-4 py-2.5">
            <dt className="text-xs font-semibold text-poke-dim">Region</dt>
            <dd className="text-sm font-bold text-poke-ink">
              {titleCase(a.region)}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4 rounded-xl bg-poke-chip px-4 py-2.5">
            <dt className="text-xs font-semibold text-poke-dim">Challenge</dt>
            <dd className="text-sm font-bold text-poke-ink">{a.challenge}</dd>
          </div>
          <div className="flex items-center justify-between gap-4 rounded-xl bg-poke-chip px-4 py-2.5">
            <dt className="text-xs font-semibold text-poke-dim">Goal</dt>
            <dd className="text-sm font-bold text-poke-ink">{a.goal}</dd>
          </div>
        </dl>
      </div>

      {/* Starter */}
      {a.starter && (
        <div className="mb-8">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-poke-dim">
            Your Starter
          </h2>
          <div className="mx-auto max-w-[640px]">
            <HeroCard pokemon={a.starter} showActions />
          </div>
        </div>
      )}

      {/* Team */}
      {a.team.length > 0 && (
        <div>
          <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-poke-dim">
            Your Team ({a.team.length})
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {a.team.map((p) => (
              <HeroCard
                key={p.dexNumber}
                pokemon={p}
                variant="team"
                showActions={false}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
