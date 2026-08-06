"use client";

export default function HeroActions() {
  return (
    <div className="mt-7 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => document.getElementById("heroRollBtn")?.click()}
        className="btn-primary"
      >
        Roll a Pokémon
      </button>
      <a
        href="#tools" title="Browse tools"
        className="btn-ghost"
      >
        Explore Tools
      </a>
    </div>
  );
}
