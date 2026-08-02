"use client";

import { useState } from "react";

export interface ChallengeIdea {
  name: string;
  desc: string;
  difficulty: string;
}

// Rolodex for the /challenge hub: server sends the curated idea list and an
// initial pick (SSR for SEO), re-rolls happen client-side so legacy
// /challenge?... params can keep their redirect behavior untouched.
export default function ChallengeIdeaRoller({
  ideas,
  initialIndex,
}: {
  ideas: ChallengeIdea[];
  initialIndex: number;
}) {
  const [i, setI] = useState(initialIndex);
  const idea = ideas[i];

  const roll = () =>
    setI((cur) => (cur + 1 + Math.floor(Math.random() * (ideas.length - 1))) % ideas.length);

  return (
    <div className="rounded-2xl border border-poke-border bg-poke-surface p-6 text-center shadow-sm sm:p-8">
      <span className="inline-block rounded-full border border-poke-border px-3 py-1 text-xs font-bold uppercase tracking-wide text-poke-dim">
        Difficulty · {idea.difficulty}
      </span>
      <h2 className="mt-3 font-display text-2xl font-extrabold text-poke-ink sm:text-3xl">
        {idea.name}
      </h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-poke-dim">
        {idea.desc}
      </p>
      <button
        type="button"
        onClick={roll}
        className="game-btn game-btn-primary mt-5 px-5 py-2.5 text-sm"
      >
        Roll another challenge
      </button>
    </div>
  );
}
