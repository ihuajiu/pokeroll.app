"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Pokemon } from "@/lib/types";
import HeroCard from "./HeroCard";
import GenerateButton from "./GenerateButton";
import { useTeam } from "./useTeam";
import LogoMark from "./LogoMark";
import ShareDialog from "./ShareDialog";

export type WheelPayload = { items: Pokemon[] };

const SEG = 8;
const SIZE = 520;

export default function WheelGenerator({
  initial,
  shared = null,
}: {
  initial: WheelPayload;
  /** Shared round result (result=1 link): show the PK results read-only. */
  shared?: { players: number; dexes: number[] } | null;
}) {
  const [items, setItems] = useState<Pokemon[]>(initial.items);
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState<number | null>(null);
  // Multiplayer: one turn per player, up to 6 players, results stacked below.
  const [playerCount, setPlayerCount] = useState(3);
  const [results, setResults] = useState<{ player: number; pokemon: Pokemon }[]>([]);
  const [addedNotice, setAddedNotice] = useState<string | null>(null);
  const [sharedPokemon, setSharedPokemon] = useState<Pokemon[] | null>(null);

  // Shrink the wheel on small screens so it never overflows the viewport.
  const [scaleK, setScaleK] = useState(1);
  useEffect(() => {
    function onResize() {
      // Global container px-6 (48) + this component px-4 (32) eat 80px of width.
      setScaleK(Math.min(1, (document.documentElement.clientWidth - 80) / SIZE));
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const { team, add } = useTeam();

  const currentPlayer = results.length + 1;
  const roundComplete = results.length >= playerCount;
  const leader = results.reduce<{ player: number; pokemon: Pokemon } | null>(
    (best, r) =>
      !best || (r.pokemon.bst || 0) > (best.pokemon.bst || 0) ? r : best,
    null,
  );
  function spin() {
    if (spinning || roundComplete) return;
    setSpinning(true);
    setWinner(null);
    const target = Math.floor(Math.random() * SEG);
    const offset = ((-target * (360 / SEG) - 180 / SEG) - (rotation % 360) + 360) % 360;
    const next = rotation + 360 * 5 + offset;
    setRotation(next);
    const player = results.length + 1;
    setTimeout(() => {
      setSpinning(false);
      setWinner(target);
      const landed = items[target];
      if (landed) setResults((r) => [...r, { player, pokemon: landed }]);
    }, 4200);
  }

  function changePlayers(n: number) {
    setPlayerCount(n);
    setResults([]);
    setWinner(null);
  }

  function newRound() {
    setResults([]);
    setWinner(null);
  }

  function addAllToTeam() {
    let added = 0;
    results.forEach((r) => {
      if (!team.some((t) => t.dexNumber === r.pokemon.dexNumber)) {
        add(r.pokemon);
        added++;
      }
    });
    setAddedNotice(
      added > 0
        ? `Added ${added} to your team.`
        : "All landed Pokémon are already in your team.",
    );
    setTimeout(() => setAddedNotice(null), 2000);
  }

  // Shared result link: fetch the landed Pokémon for the read-only view.
  useEffect(() => {
    if (!shared) return;
    let cancelled = false;
    Promise.all(
      shared.dexes.map((d) =>
        fetch(`/api/pokemon/${d}`)
          .then((r) => (r.ok ? r.json() : null))
          .catch(() => null),
      ),
    ).then((res) => {
      if (!cancelled) setSharedPokemon(res.filter(Boolean) as Pokemon[]);
    });
    return () => {
      cancelled = true;
    };
  }, [shared]);

  async function regenerate() {
    setSpinning(false);
    setWinner(null);
    try {
      const res = await fetch("/api/wheel");
      if (res.ok) setItems((await res.json()).items);
    } catch {
      // keep previous wheel on error
    }
  }

  if (shared) {
    const sharedLeader = (sharedPokemon ?? []).reduce<
      { player: number; pokemon: Pokemon } | null
    >(
      (best, p, i) =>
        !best || (p.bst || 0) > (best.pokemon.bst || 0)
          ? { player: i + 1, pokemon: p }
          : best,
      null,
    );
    const loaded =
      sharedPokemon !== null && sharedPokemon.length === shared.dexes.length;
    return (
      <div className="mx-auto w-full max-w-[1100px] px-4">
        <div className="mb-5 text-center">
          <p className="text-lg font-semibold text-poke-ink">Wheel round result</p>
          <p className="text-sm text-poke-dim">
            {loaded && sharedLeader
              ? `Player ${sharedLeader.player} won with ${sharedLeader.pokemon.displayName} (${sharedLeader.pokemon.bst} BST)!`
              : `A ${shared.players}-player round shared on PokeRoll`}
          </p>
        </div>
        {loaded ? (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {sharedPokemon!.map((p, i) => (
                <div key={`${i}-${p.dexNumber}`} className="relative">
                  <div className="mb-1 flex items-center justify-center gap-2">
                    <span className="rounded-full bg-poke-chip px-2.5 py-0.5 text-xs font-bold text-poke-ink">
                      Player {i + 1}
                    </span>
                    {sharedLeader && sharedLeader.player === i + 1 && (
                      <span className="text-base" aria-label="Round leader">
                        👑
                      </span>
                    )}
                  </div>
                  <HeroCard pokemon={p} variant="team" favoritable hideRoll />
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/wheel"
                className="rounded-xl bg-poke-btn px-6 py-2.5 font-semibold text-white shadow-glow transition hover:bg-poke-btnHover"
              >
                Spin your own wheel
              </Link>
            </div>
          </>
        ) : (
          <p className="py-10 text-center text-sm text-poke-dim">Loading results…</p>
        )}
      </div>
    );
  }
  return (
    <div className="mx-auto w-full max-w-[1100px] px-4">
      <div className="mb-4 text-center">
        <p className="text-lg font-semibold text-poke-ink">Welcome Trainer!</p>
        <p className="text-sm text-poke-dim">Up to 6 players take turns spinning — every landing stacks in the results below.</p>
      </div>

      <div className="relative mx-auto" style={{ width: SIZE * scaleK, height: SIZE * scaleK }}>
        <div
          className="absolute left-0 top-0"
          style={{
            width: SIZE,
            height: SIZE,
            transform: `scale(${scaleK})`,
            transformOrigin: "top left",
          }}
        >
          {/* (wheel content) */}
        {/* Gold pointer (fixed above the wheel) */}
        <div className="absolute left-1/2 z-30 -translate-x-1/2" style={{ top: -14 }}>
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "16px solid transparent",
              borderRight: "16px solid transparent",
              borderTop: "32px solid #f59e0b",
              filter: "drop-shadow(0 3px 4px rgba(0,0,0,0.35))",
            }}
          />
        </div>

        {/* Outer gold ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "linear-gradient(135deg, #fde68a 0%, #f59e0b 45%, #fbbf24 70%, #fff7d6 100%)",
            padding: 5,
            boxShadow:
              "0 0 0 4px rgba(245, 158, 11, 0.12), 0 22px 48px -22px rgba(245, 158, 11, 0.55)",
          }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-full bg-poke-surface">
            {/* Rotating segments + artwork */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "conic-gradient(#ee3b3b 0deg 45deg, #ffffff 45deg 90deg, #ee3b3b 90deg 135deg, #ffffff 135deg 180deg, #ee3b3b 180deg 225deg, #ffffff 225deg 270deg, #ee3b3b 270deg 315deg, #ffffff 315deg 360deg)",
                transform: `rotate(${rotation}deg)`,
                transition: spinning
                  ? "transform 4s cubic-bezier(0.17,0.67,0.12,0.99)"
                  : "none",
              }}
            >
              {/* Gold separators between segments */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "repeating-conic-gradient(rgba(245, 158, 11, 0.9) 0deg 0.8deg, transparent 0.8deg 45deg)",
                }}
              />
              {items.map((p, i) => (
                <div
                  key={`${p.dexNumber}-${i}`}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(-50%,-50%) rotate(${i * (360 / SEG) + 180 / SEG}deg) translateY(-${SIZE / 2 - 84}px)`,
                  }}
                >
                  {p.artwork ? (
                    <div
                      className={`transition-transform duration-500 ${
                        winner === i ? "scale-110" : ""
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.artwork}
                        alt={p.displayName}
                        width={112}
                        height={112}
                        style={{
                          width: 112,
                          height: 112,
                          filter:
                            winner === i
                              ? "drop-shadow(0 0 14px rgba(250, 204, 21, 0.95)) drop-shadow(0 3px 6px rgba(0, 0, 0, 0.35))"
                              : "drop-shadow(0 3px 6px rgba(0, 0, 0, 0.35))",
                        }}
                      />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center hub: PokeRoll logo */}
        <div
          className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl"
          style={{ width: 88, height: 88 }}
        >
          <LogoMark className="h-14 w-14 text-poke-btn" />
        </div>
        </div>
      </div>

      <p className="mt-5 text-center text-sm font-semibold text-poke-dim">
        {roundComplete
          ? "Round complete — check the results below!"
          : playerCount === 1
            ? "Spin the wheel"
            : `Player ${currentPlayer} of ${playerCount} — spin the wheel`}
      </p>

      <div className="mt-2 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={spin}
          disabled={spinning || roundComplete}
          className="rounded-xl bg-poke-btn px-6 py-2.5 font-semibold text-white shadow-glow transition hover:bg-poke-btnHover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {spinning ? "Spinning…" : roundComplete ? "Round complete" : "Spin!"}
        </button>
        <GenerateButton onClick={regenerate} loading={false} />
        {results.length > 0 && (
          <button
            type="button"
            onClick={newRound}
            className="rounded-xl border border-poke-border bg-poke-surface px-5 py-2.5 font-semibold text-poke-ink shadow-sm transition hover:border-poke-red hover:text-poke-red"
          >
            New round
          </button>
        )}
      </div>

      {/* Players selector */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        <span className="text-sm font-semibold text-poke-dim">Players</span>
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => changePlayers(n)}
            aria-pressed={playerCount === n}
            className={`h-9 w-9 rounded-lg text-sm font-bold transition ${
              playerCount === n
                ? "bg-poke-btn text-white shadow-sm"
                : "border border-poke-border bg-poke-surface text-poke-ink hover:border-poke-red hover:text-poke-red"
            }`}
          >
            {n}
          </button>
        ))}
      </div>

      {results.length > 0 && (
        <div className="mt-8">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-xs font-bold uppercase tracking-wide text-poke-dim">
              Round results · {results.length}/{playerCount}
            </h3>
            {roundComplete && leader ? (
              <span className="text-sm font-bold text-amber-500">
                👑 Player {leader.player} wins with {leader.pokemon.displayName} ({leader.pokemon.bst} BST)!
              </span>
            ) : (
              <span className="text-sm text-poke-dim">
                Player {currentPlayer} still to spin
              </span>
            )}
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {results.map((r, i) => (
              <div key={`${r.player}-${i}`} className="relative">
                <div className="mb-1 flex items-center justify-center gap-2">
                  <span className="rounded-full bg-poke-chip px-2.5 py-0.5 text-xs font-bold text-poke-ink">
                    Player {r.player}
                  </span>
                  {roundComplete && leader && leader.player === r.player && (
                    <span className="text-base" aria-label="Round leader">
                      👑
                    </span>
                  )}
                </div>
                <HeroCard pokemon={r.pokemon} variant="team" favoritable hideRoll />
              </div>
            ))}
          </div>
          {addedNotice && (
            <p role="status" className="mt-4 text-center text-sm font-medium text-poke-ink">
              {addedNotice}
            </p>
          )}
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <ShareDialog
              url={`/wheel?result=1&players=${playerCount}&dex=${results
                .map((r) => r.pokemon.dexNumber)
                .join(",")}`}
              text={
                leader
                  ? `Player ${leader.player} won the PokeRoll wheel round with ${leader.pokemon.displayName} (${leader.pokemon.bst} BST)!`
                  : undefined
              }
              label="Share results"
              className="rounded-xl bg-amber-500 px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-amber-600"
            />
            <button
              type="button"
              onClick={addAllToTeam}
              className="rounded-xl bg-poke-btn px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-poke-btnHover"
            >
              Add all to Team
            </button>
            <Link
              href="/team"
              className="rounded-xl border border-poke-border bg-poke-surface px-5 py-2.5 font-semibold text-poke-ink shadow-sm transition hover:border-poke-red hover:text-poke-red"
            >
              Build Team
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
