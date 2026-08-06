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
          className="game-btn game-btn-ghost px-5 py-2.5 font-semibold"
        >
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
      className="game-btn game-btn-ghost px-5 py-2.5"
    >
      Add to Team
    </button>
  );
}

