"use client";

export default function HeroActions() {
  return (
    <div className="mt-7 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => document.getElementById("heroRollBtn")?.click()}
        className="game-btn game-btn-primary px-6 py-3 text-base"
      >
        Roll a Pokémon
      </button>
      <a
        href="#tools"
        className="game-btn game-btn-ghost px-6 py-3 text-base"
      >
        Explore Tools
      </a>
    </div>
  );
}
