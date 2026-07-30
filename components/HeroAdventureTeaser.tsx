"use client";

import Link from "next/link";

/**
 * Hero teaser card for the Adventure platform pivot. Replaces the old
 * "roll a random Pokémon in place" HeroCard with a single, designed
 * mystery card that routes to /adventure. The stage (rings + pokeball)
 * is rendered by the parent so this card stays focused on the teaser.
 */
export default function HeroAdventureTeaser() {
  return (
    <div
      className="adventure-teaser relative overflow-hidden rounded-2.5xl border border-poke-border bg-poke-surface p-7 shadow-panel ring-1 ring-[#ee3b3b]/15"
      style={{ ["--cc" as string]: "#ee3b3b" }}
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        <span className="mb-2 text-4xl" aria-hidden="true">🎲</span>
        <h2 className="font-display text-lg font-extrabold tracking-wide text-poke-ink">
          YOUR ADVENTURE AWAITS
        </h2>

        <dl className="mt-5 w-full space-y-2.5 text-sm">
          <div className="flex items-center justify-between gap-4">
            <dt className="font-semibold text-poke-dim">Your Pokémon</dt>
            <dd className="font-mono font-bold text-poke-red">???</dd>
          </div>
          <div className="flex items-center justify-between gap-4">
            <dt className="font-semibold text-poke-dim">Your Region</dt>
            <dd className="font-mono font-bold text-poke-red">???</dd>
          </div>
          <div className="flex items-center justify-between gap-4">
            <dt className="font-semibold text-poke-dim">Your Challenge</dt>
            <dd className="font-mono font-bold text-poke-red">???</dd>
          </div>
        </dl>

        <Link
          href="/adventure"
          className="btn-primary mt-6 w-full justify-center"
        >
          Roll Adventure
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>

        <p className="mt-4 text-xs text-poke-dim">
          ··· 6 unknown companions ···
        </p>
      </div>
    </div>
  );
}
