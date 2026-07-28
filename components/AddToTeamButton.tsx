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
      className={`rounded-xl border px-5 py-2.5 font-semibold shadow-sm transition ${
        inTeam
          ? "border-poke-red bg-poke-btn text-white"
          : "border-poke-border bg-poke-surface text-poke-ink hover:border-poke-red hover:text-poke-red"
      }`}
    >
      {inTeam ? "✓ In Team" : "Add to Team"}
    </button>
  );
}
