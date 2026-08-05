"use client";

import { useState } from "react";
import Link from "next/link";
import { useFavorites } from "./useFavorites";
import HeroCard from "./HeroCard";
import type { Pokemon } from "@/lib/types";

export default function FavoritesClient({
  shared,
  sharedInvalid,
}: {
  /** Resolved Pokémon from a `?m=` snapshot link; null when no param given. */
  shared: Pokemon[] | null;
  /** True when `?m=` was present but every entry was invalid. */
  sharedInvalid: boolean;
}) {
  const { favorites, remove, merge, clear, isFull } = useFavorites();
  const [copied, setCopied] = useState(false);
  const [merged, setMerged] = useState<number | null>(null);

  const isShared = shared !== null || sharedInvalid;
  const list = shared ?? favorites;

  function snapshotUrl(source: Pokemon[]) {
    const m = source
      .map((p) => p.dexNumber)
      .sort((a, b) => a - b)
      .join(",");
    return `${window.location.origin}/favorites?m=${m}`;
  }

  async function share() {
    const url = snapshotUrl(favorites);
    try {
      if (navigator.share) {
        await navigator.share({ title: "My Pokémon Favorites", url });
        return;
      }
      throw new Error("no-web-share");
    } catch {
      try {
        await navigator.clipboard.writeText(url);
      } catch {
        // clipboard may be unavailable
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
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

  function saveToMine() {
    if (!shared) return;
    const added = merge(shared);
    setMerged(added);
  }

  return (
    <div className="mx-auto w-full max-w-[1100px] px-4">
      <div className="mb-4 text-center">
        <p className="text-lg font-semibold text-poke-ink">
          {isShared ? "Shared Favorites" : "Your Favorites"}
        </p>
        <p className="text-sm text-poke-dim">
          {isShared
            ? "A favorites snapshot shared with you — read-only"
            : "Pokémon you've favorited on this device"}
        </p>
        {!isShared && (
          <p className="mt-1 text-xs font-semibold text-poke-dim">
            {favorites.length} / 15
            {isFull ? " — max reached" : " slots used"}
          </p>
        )}
      </div>

      {isShared && !sharedInvalid && (
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-poke-border bg-poke-surface px-4 py-2.5">
          <span className="text-sm text-poke-dim">
            {list.length} Pokémon in this shared snapshot
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={copyLink}
              className="rounded-lg border border-poke-border bg-poke-surface px-3.5 py-1.5 text-sm font-semibold text-poke-ink shadow-sm transition hover:border-poke-red hover:text-poke-red"
            >
              {copied ? "Link copied!" : "Copy Link"}
            </button>
            {merged === null ? (
              <button
                type="button"
                onClick={saveToMine}
                className="rounded-lg bg-poke-red px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                Save to My Favorites
              </button>
            ) : (
              <Link
                href="/favorites"
                className="rounded-lg bg-poke-red px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                Saved{merged > 0 ? ` (+${merged})` : ""} — View Mine
              </Link>
            )}
          </div>
        </div>
      )}

      {!isShared && favorites.length > 0 && (
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-poke-border bg-poke-surface px-4 py-2.5">
          <span className="text-sm text-poke-dim">
            <span className="font-semibold text-poke-ink">{favorites.length}</span>{" "}
            favorited
          </span>
          <button
            type="button"
            onClick={clear}
            className="rounded-lg px-2.5 py-1 text-sm font-medium text-poke-ink transition hover:text-poke-red"
          >
            Clear all
          </button>
        </div>
      )}

      {sharedInvalid ? (
        <div className="py-10 text-center">
          <p className="text-poke-dim">
            This favorites link is invalid or has expired.
          </p>
          <Link
            href="/favorites"
            className="mt-4 inline-block rounded-xl bg-poke-btn px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-poke-btnHover"
          >
            Go to My Favorites
          </Link>
        </div>
      ) : list.length === 0 ? (
        <div className="py-10 text-center">
          <p className="text-poke-dim">
            No favorites yet. Roll a Pokémon and tap the heart to save it here.
          </p>
          <Link
            href="/random-pokemon-generator"
            className="mt-4 inline-block rounded-xl bg-poke-btn px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-poke-btnHover"
          >
            Roll a Pokémon
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {list.map((p) => (
            <div key={p.dexNumber} className="relative">
              <HeroCard
                pokemon={p}
                showActions={false}
                variant="team"
                favoritable={!isShared}
              />
              {!isShared && (
                <button
                  type="button"
                  onClick={() => remove(p.dexNumber)}
                  aria-label={`Remove ${p.displayName} from favorites`}
                  title="Remove from favorites"
                  className="absolute bottom-2 right-2 z-20 rounded-lg border border-poke-border bg-poke-surface/90 px-2.5 py-1 text-xs font-semibold text-poke-dim shadow-sm transition hover:border-poke-red hover:text-poke-red"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {!isShared && favorites.length > 0 && (
        <div className="relative z-10 mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={share}
            className="rounded-xl bg-poke-btn px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-poke-btnHover"
          >
            {copied ? "Link copied!" : "Share Favorites"}
          </button>
        </div>
      )}
    </div>
  );
}
