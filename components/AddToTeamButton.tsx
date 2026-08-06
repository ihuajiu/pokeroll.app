"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTeam } from "./useTeam";
import type { Pokemon } from "@/lib/types";

export default function AddToTeamButton({ pokemon }: { pokemon: Pokemon }) {
  const { add, remove, has, team } = useTeam();
  const [inTeam, setInTeam] = useState(false);

  useEffect(() => {
    setInTeam(has(pokemon.dexNumber));
  }, [has, pokemon.dexNumber]);

  function toggle() {
    if (inTeam) {
      remove(pokemon.dexNumber);
      setInTeam(false);
    } else {
      add(pokemon);
      setInTeam(true);
    }
  }

  if (inTeam) {
    return (
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={toggle}
          aria-label="Remove from team"
          className="game-btn game-btn-primary px-5 py-2.5"
        >
          ✓ In Team
        </button>
        <Link
          href="/team"
          title="View your team"
          className="game-btn game-btn-ghost inline-flex items-center gap-1.5 px-5 py-2.5 font-semibold"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
          View Team ({team.length})
        </Link>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Add to team"
      className="game-btn game-btn-ghost inline-flex items-center gap-1.5 px-5 py-2.5"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
      Add to Team
    </button>
  );
}

