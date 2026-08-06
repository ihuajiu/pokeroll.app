"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTeam } from "./useTeam";
import HeroCard from "./HeroCard";
import TeamShowdownExport from "./TeamShowdownExport";
import GuideSteps from "./GuideSteps";
import type { Pokemon } from "@/lib/types";

export default function TeamClient({ sharedNames }: { sharedNames: string | null }) {
  const { team, remove, clear } = useTeam();
  const [sharedTeam, setSharedTeam] = useState<Pokemon[] | null>(null);
  const [copied, setCopied] = useState(false);
  const [selectedDex, setSelectedDex] = useState<Set<number>>(new Set());

  function toggleSelect(dex: number) {
    setSelectedDex((prev) => {
      const next = new Set(prev);
      if (next.has(dex)) next.delete(dex);
      else next.add(dex);
      return next;
    });
  }

  function selectAll() {
    setSelectedDex(new Set(team.map((p) => p.dexNumber)));
  }

  function clearSelection() {
    setSelectedDex(new Set());
  }

  function removeSelected() {
    selectedDex.forEach((dex) => remove(dex));
    setSelectedDex(new Set());
  }

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
  const selectedCount = selectedDex.size;
  const allSelected = team.length > 0 && selectedCount === team.length;

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

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      // clipboard may be unavailable
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <main className="mx-auto w-full max-w-[1100px] px-4">
      {/* CTA hero — like the challenge page's "ready" panel */}
      <div className="mb-6 rounded-2xl border border-poke-border bg-poke-surface px-6 py-6 text-center shadow-sm">
        <h2 className="text-xl font-extrabold text-poke-ink">
          {isShared ? "A team shared with you" : "Your Pokémon team is ready"}
        </h2>
        <p className="mt-1 text-sm text-poke-dim">
          {isShared
            ? "A team shared with you"
            : "Manage your squad — share it, or export every set to Showdown."}
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          {!isShared && team.length > 0 && (
            <>
              <button
                type="button"
                onClick={share}
                className="game-btn game-btn-primary px-6 py-3.5 text-sm font-bold"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
                {copied ? "Link copied!" : "Share Team"}
              </button>
              <button
                type="button"
                onClick={clear}
                className="game-btn game-btn-ghost px-6 py-3.5 text-sm font-bold"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
                Clear Team
              </button>
            </>
          )}
          {isShared && (
            <button
              type="button"
              onClick={copyLink}
              className="game-btn game-btn-primary px-6 py-3.5 text-sm font-bold"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              {copied ? "Link copied!" : "Copy Link"}
            </button>
          )}
          <Link
            href="/" title="PokeRoll home"
            className="game-btn game-btn-ghost px-6 py-3.5 text-sm font-bold"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Generator
          </Link>
        </div>
      </div>

      {/* How to play */}
      <GuideSteps
        className="mx-auto mb-6 max-w-[1100px] px-4"
        steps={[
          {
            n: "1",
            t: "Roll & add",
            d: "Generate Pokémon on any tool and tap “Add to Team” to save them here.",
          },
          {
            n: "2",
            t: "Manage your squad",
            d: "Select Pokémon to remove or clear — your team holds up to 6.",
          },
          {
            n: "3",
            t: "Share it",
            d: "Copy the team link so friends can view your lineup.",
          },
        ]}
      />

      {!isShared && team.length > 0 && (
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-poke-border bg-poke-surface px-4 py-2.5">
          <span className="text-sm text-poke-dim">
            Selected{" "}
            <span className="font-semibold text-poke-ink">{selectedCount}</span>
            <span className="text-poke-dim"> / {team.length}</span>
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={allSelected ? clearSelection : selectAll}
              className="game-btn game-btn-ghost px-2.5 py-1 text-sm font-medium"
            >
              {allSelected ? "Clear selection" : "Select all"}
            </button>
            <button
              type="button"
              onClick={removeSelected}
              disabled={selectedCount === 0}
              className="game-btn game-btn-primary px-3.5 py-1.5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
            >
              Remove{selectedCount > 0 ? ` (${selectedCount})` : ""}
            </button>
          </div>
        </div>
      )}

      {list.length === 0 ? (
        <p className="text-center text-poke-dim">
          No Pokémon yet. Generate some and tap “Add to Team”.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {list.map((p) => {
            const selected = selectedDex.has(p.dexNumber);
            return (
              <div
                key={p.dexNumber}
                className={`relative ${!isShared ? "cursor-pointer" : ""}`}
                onClick={!isShared ? () => toggleSelect(p.dexNumber) : undefined}
              >
                <HeroCard
                  pokemon={p}
                  showActions={false}
                  variant="team"
                  selectable={!isShared}
                  selected={selected}
                  onToggleSelect={() => toggleSelect(p.dexNumber)}
                />
              </div>
            );
          })}
        </div>
      )}

      <div className="relative z-10 mt-6 flex flex-wrap items-center justify-end gap-3">
        {list.length > 0 && <TeamShowdownExport team={list} />}
      </div>

    </main>
  );
}
