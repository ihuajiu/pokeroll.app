"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import HeroCard from "@/components/HeroCard";
import type { Pokemon } from "@/lib/types";

/**
 * Seeded "roll my teammate" challenge. The team is deterministic from the
 * seed in the URL, so sharing the link gives a friend the exact same lineup;
 * "Roll my team" starts a fresh seeded challenge to compare.
 */
export default function TeamChallenge({
  pokemon,
  seed,
}: {
  pokemon: Pokemon[];
  seed: string;
}) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  async function challenge() {
    const href = window.location.href;
    const text = `I rolled this team of ${pokemon.length} with PokeRoll — can you beat it?`;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: "Team Challenge", text, url: href });
        return;
      } catch {
        /* fall through to clipboard */
      }
    }
    try {
      await navigator.clipboard?.writeText(`${text}\n${href}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  }

  function rollMine() {
    router.push(`/team/challenge?seed=${Math.random().toString(36).slice(2, 10)}`);
  }

  return (
    <div className="mx-auto w-full max-w-[1100px] px-4">
      <div className="mb-5 rounded-2xl border border-poke-border bg-poke-surface px-5 py-4 text-center">
        <p className="text-sm text-poke-dim">
          This exact team was rolled from seed{" "}
          <code className="rounded bg-poke-chip px-1.5 py-0.5 font-mono text-xs text-poke-ink">
            {seed}
          </code>
          . Share the link and a friend gets the same lineup to match.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {pokemon.map((p) => (
          <HeroCard key={p.dexNumber} pokemon={p} showActions={false} variant="team" />
        ))}
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          onClick={challenge}
          className="rounded-xl bg-poke-btn px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-poke-btnHover"
        >
          {copied ? "Link copied!" : "Challenge a friend"}
        </button>
        <button
          onClick={rollMine}
          className="rounded-xl border border-poke-border bg-poke-surface px-6 py-3 text-sm font-semibold text-poke-ink shadow-sm transition hover:border-poke-red hover:text-poke-red"
        >
          Roll my team
        </button>
      </div>
    </div>
  );
}
