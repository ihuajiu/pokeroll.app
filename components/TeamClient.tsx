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
              className="rounded-lg px-2.5 py-1 text-sm font-medium text-poke-ink transition hover:text-poke-red"
            >
              {allSelected ? "Clear selection" : "Select all"}
            </button>
            <button
              type="button"
              onClick={removeSelected}
              disabled={selectedCount === 0}
              className="rounded-lg bg-poke-red px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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

      <div className="relative z-10 mt-6 flex flex-wrap justify-center gap-3">
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
        {isShared && (
          <button
            type="button"
            onClick={copyLink}
            className="rounded-xl bg-poke-btn px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-poke-btnHover"
          >
            {copied ? "Link copied!" : "Copy Link"}
          </button>
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
