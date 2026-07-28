"use client";

import { useEffect, useState } from "react";
import { useTeam } from "./useTeam";
import type { Pokemon } from "@/lib/types";

export default function AddToTeamButton({ pokemon }: { pokemon: Pokemon }) {
  const { add, remove, has } = useTeam();
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

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Add to team"
      className={`game-btn px-5 py-2.5 ${
        inTeam ? "game-btn-primary" : "game-btn-ghost"
      }`}
    >
      {inTeam ? "✓ In Team" : "Add to Team"}
    </button>
  );
}
