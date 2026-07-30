"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTeam } from "./useTeam";
import HeroCard from "./HeroCard";
import type { Pokemon } from "@/lib/types";

export default function TeamClient({ sharedNames }: { sharedNames: string | null }) {
  const { team, remove, clear } = useTeam();
  const [sharedTeam, setSharedTeam] = useState<Pokemon[] | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!sharedNames) return;
    const names = sharedNames
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    Promise.all(
      names.map((n) =>
        fetch(`/api/pokemon/${n}`)
          .then((r) => (r.ok ? r.json() : null))
          .catch(() => null),
      ),
    ).then((res) => setSharedTeam(res.filter(Boolean) as Pokemon[]));
  }, [sharedNames]);

  const isShared = !!sharedTeam;
  const list = sharedTeam ?? team;

  async function share() {
    const url = `${window.location.origin}/team?team=${team
      .map((p) => p.name)
      .join(",")}`;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // clipboard may be unavailable
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <main className="mx-auto max-w-[680px]">
      <div className="mb-4 text-center">
        <p className="text-lg font-semibold text-poke-ink">
          {isShared ? "Shared Team" : "Your Team"}
        </p>
        <p className="text-sm text-poke-dim">
          {isShared
            ? "A team shared with you"
            : "Pokémon you've collected on this device"}
        </p>
      </div>

      {list.length === 0 ? (
        <p className="text-center text-poke-dim">
          No Pokémon yet. Generate some and tap “Add to Team”.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {list.map((p) => (
            <div key={p.dexNumber}>
              <HeroCard pokemon={p} showActions={false} />
              {!isShared && (
                <button
                  type="button"
                  onClick={() => remove(p.dexNumber)}
                  className="mt-2 w-full rounded-xl border border-poke-border bg-poke-surface px-4 py-2 text-sm font-semibold text-poke-ink shadow-sm transition hover:border-poke-red hover:text-poke-red"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {!isShared && team.length > 0 && (
          <>
            <button
              type="button"
              onClick={share}
              className="rounded-xl bg-poke-btn px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-poke-btnHover"
            >
              {copied ? "Link copied!" : "Share Team"}
            </button>
            <button
              type="button"
              onClick={clear}
              className="rounded-xl border border-poke-border bg-poke-surface px-5 py-2.5 font-semibold text-poke-ink shadow-sm transition hover:border-poke-red hover:text-poke-red"
            >
              Clear Team
            </button>
          </>
        )}
        <Link
          href="/"
          className="rounded-xl border border-poke-border bg-poke-surface px-5 py-2.5 font-semibold text-poke-ink shadow-sm transition hover:border-poke-red hover:text-poke-red"
        >
          ← Back to Generator
        </Link>
      </div>
    </main>
  );
}
