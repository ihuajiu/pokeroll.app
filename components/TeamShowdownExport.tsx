"use client";

import { useState } from "react";
import ShowdownCopyButton from "./ShowdownCopyButton";
import type { Pokemon } from "@/lib/types";

const lvCls = (active: boolean) =>
  `px-2.5 py-1.5 transition ${active ? "bg-poke-btn text-white" : "text-poke-dim hover:text-poke-ink"}`;

/**
 * Team-level Showdown export: a Lv 50/100 toggle plus a one-click "Copy Sets"
 * button that builds the full team text and copies it straight to the
 * clipboard. The moves dataset is lazy-loaded on first click so it never
 * hits the initial bundle.
 */
export default function TeamShowdownExport({
  team,
  className = "",
}: {
  team: Pokemon[];
  className?: string;
}) {
  const [level, setLevel] = useState<50 | 100>(100);

  function loadTeamText() {
    return import("@/lib/showdown").then((m) => m.buildShowdownTeam(team, { level }));
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <div className="flex overflow-hidden rounded-lg border border-poke-border text-xs font-bold">
        <button type="button" className={lvCls(level === 50)} onClick={() => setLevel(50)}>
          Lv 50
        </button>
        <button type="button" className={lvCls(level === 100)} onClick={() => setLevel(100)}>
          Lv 100
        </button>
      </div>
      <ShowdownCopyButton
        getText={loadTeamText}
        label="Copy Sets"
        badge="Showdown"
        copiedLabel="Sets copied!"
        title="Copy team as Showdown sets"
        className="game-btn game-btn-primary px-4 py-2 text-sm font-semibold"
      />
    </div>
  );
}
