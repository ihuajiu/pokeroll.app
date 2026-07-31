"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTeam } from "./useTeam";

// Header entry for the current team: icon button with a live count badge,
// opening a small tray that lists the selected members and links to /team.
export default function TeamTray() {
  const { team, max } = useTeam();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={`Your team (${team.length}/${max})`}
        aria-expanded={open}
        title="Your team"
        className="game-btn game-btn-ghost inline-flex h-9 items-center gap-1.5 whitespace-nowrap px-3 text-sm font-semibold"
      >
        Your Team
        <span className="rounded-full bg-[#ee3b3b] px-1.5 text-xs font-bold leading-5 text-white">
          {team.length}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-11 z-40 w-64 rounded-xl border border-poke-border bg-poke-surface p-3 shadow-lg">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wide text-poke-dim">
              Your Team
            </span>
            <span className="text-xs font-semibold text-poke-dim">
              {team.length}/{max}
            </span>
          </div>
          {team.length === 0 ? (
            <p className="py-3 text-center text-sm text-poke-dim">
              No Pokémon selected yet.
            </p>
          ) : (
            <ul className="space-y-1">
              {team.map((p) => (
                <li key={p.dexNumber}>
                  <Link
                    href="/team"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-poke-bg"
                  >
                    <img
                      src={p.sprite}
                      alt={p.displayName}
                      className="h-8 w-8"
                      loading="lazy"
                    />
                    <span className="text-sm font-medium text-poke-ink">
                      {p.displayName}
                    </span>
                    <span className="ml-auto text-xs text-poke-dim">
                      #{p.dexNumber}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <Link
            href="/team"
            onClick={() => setOpen(false)}
            className="mt-2 inline-block w-full rounded-lg border border-poke-border px-3 py-1.5 text-center text-xs font-semibold text-poke-ink transition hover:border-[#ee3b3b] hover:text-[#ee3b3b]"
          >
            {team.length === 0 ? "Build a Team" : "Open Team"}
          </Link>
        </div>
      )}
    </div>
  );
}
