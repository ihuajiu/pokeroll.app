"use client";

import { useRef, useState } from "react";
import type { Pokemon } from "@/lib/types";

export interface WildMon {
  dexNumber: number;
  displayName: string;
  img: string;
}

const FALLBACK_ODDS = 4096;

function verdict(n: number, odds: number): string {
  const r = n / odds;
  if (r <= 0.25) return "Absurdly lucky — that's a story to tell.";
  if (r <= 1) return "Lucky! Under odds.";
  if (r <= 2) return "Over odds — but you got there.";
  return "Brutal hunt. This one earned its sparkle.";
}

/** Ambient star positions inside the stage (percent-based, staggered). */
const SPARKLES = [
  { left: "12%", top: "16%", delay: "0s", size: "text-sm" },
  { left: "85%", top: "20%", delay: "0.7s", size: "text-xs" },
  { left: "18%", top: "76%", delay: "1.2s", size: "text-xs" },
  { left: "80%", top: "72%", delay: "0.4s", size: "text-base" },
  { left: "50%", top: "8%", delay: "1.6s", size: "text-xs" },
] as const;

/**
 * Click-to-encounter shiny hunt. The seeded `encounters` fixes which click
 * reveals the shiny (same 1/4096 odds math as the games, resolved
 * server-side so the link is reproducible); every click before that shows a
 * random wild from the local dex. Share the seeded link and a friend runs
 * the identical hunt.
 */
export default function ShinyHunt({
  target,
  encounters,
  pool,
  odds,
  pity,
  onFound,
}: {
  target: Pokemon;
  encounters: number;
  pool: WildMon[];
  /** Difficulty-dependent 1-in-N odds from the server. */
  odds?: number;
  /** Easy mode: uniform pity draw, guaranteed within `odds` clicks. */
  pity?: boolean;
  /** Fired once, on the click that reveals the shiny. */
  onFound?: () => void;
}) {
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState<WildMon | null>(null);
  // Synchronous lock: state lags a render behind rapid clicks, so the
  // "found" flag alone can let same-tick clicks slip through and fire
  // onFound repeatedly. The ref flips the instant the shiny lands.
  const foundRef = useRef(false);
  const found = count >= encounters;

  function encounter() {
    if (foundRef.current || pool.length === 0) return;
    const next = count + 1;
    if (next >= encounters) {
      foundRef.current = true;
      onFound?.();
    } else {
      setCurrent(pool[Math.floor(Math.random() * pool.length)]);
    }
    setCount(next);
  }

  const shinyImg =
    target.shinyArtwork || target.shinySprite || target.artwork || target.sprite;
  const actualOdds = odds ?? FALLBACK_ODDS;
  const progress = found ? 1 : Math.min(1, count / actualOdds);

  return (
    <div className="mx-auto max-w-[680px]">
      <div className="relative overflow-hidden rounded-3xl border border-poke-border bg-poke-surface shadow-panel">
        {/* Ambient wash: brand spotlight while hunting, gold when found */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 transition-opacity duration-500"
          style={{
            background: found
              ? "radial-gradient(70% 60% at 50% 40%, rgba(250, 204, 21, 0.20), transparent 72%)"
              : "radial-gradient(70% 60% at 50% 40%, rgb(var(--brand) / 0.10), transparent 72%)",
          }}
        />

        {/* HUD: counter + odds */}
        <div className="relative flex items-end justify-between gap-4 px-7 pt-6">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-poke-dim">
              Encounters
            </div>
            <div className="mt-0.5 font-display text-4xl font-extrabold tabular-nums leading-none text-poke-ink">
              {count.toLocaleString()}
            </div>
          </div>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold ${
              found
                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-400/15 dark:text-yellow-300"
                : "bg-poke-chip text-poke-ink"
            }`}
          >
            <span aria-hidden="true">✦</span>
            {found
              ? `Shiny ${target.displayName} found!`
              : pity
                ? `1 / ${actualOdds.toLocaleString()} · guaranteed`
                : `odds 1 / ${actualOdds.toLocaleString()}`}
          </span>
        </div>

        {/* Hunt progress toward odds */}
        <div className="relative mx-7 mt-4 h-1.5 overflow-hidden rounded-full bg-poke-border/50">
          <div
            className="h-full rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${Math.max(progress * 100, count > 0 ? 2 : 0)}%`,
              background: found
                ? "linear-gradient(90deg, #f59e0b, #fde047)"
                : "linear-gradient(90deg, rgb(var(--brand)), rgb(var(--accent)))",
            }}
          />
        </div>

        {/* Stage */}
        <div className="relative flex min-h-[400px] flex-col items-center justify-center px-8 pb-9 pt-8 text-center">
          {/* Spotlight rings behind the artwork */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-poke-border/70"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background: found
                ? "radial-gradient(circle, rgba(250, 204, 21, 0.28), transparent 65%)"
                : "radial-gradient(circle, rgb(var(--brand) / 0.12), transparent 65%)",
            }}
          />
          {/* Twinkling stars */}
          {SPARKLES.map((s, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={`pointer-events-none absolute animate-[twinkle_2.6s_ease-in-out_infinite] ${s.size} ${
                found ? "text-amber-400" : "text-poke-violet/50"
              }`}
              style={{ left: s.left, top: s.top, animationDelay: s.delay }}
            >
              ✦
            </span>
          ))}

          {found ? (
            <div className="relative animate-[pop_0.4s_ease_both]">
              <img
                src={shinyImg}
                alt={`Shiny ${target.displayName}`}
                className="mx-auto h-64 w-64 object-contain drop-shadow-[0_0_30px_rgba(250,204,21,0.55)]"
              />
              <div className="mt-3 font-display text-2xl font-extrabold text-poke-ink">
                ✨ Shiny {target.displayName}
              </div>
              <p className="mt-1 text-sm text-poke-dim">
                After {encounters.toLocaleString()} encounters —{" "}
                {verdict(encounters, actualOdds)}
              </p>
              <p className="mt-4 text-xs text-poke-dim">
                Roll a new hunt with Create Challenge above, or share this one.
              </p>
            </div>
          ) : current ? (
            <div key={count} className="relative animate-[pop_0.25s_ease_both]">
              <img
                src={current.img}
                alt={current.displayName}
                className="mx-auto h-52 w-52 object-contain"
              />
              <div className="mt-4 text-base font-semibold text-poke-ink">
                A wild {current.displayName} appeared…
              </div>
              <div className="mt-1 text-sm text-poke-dim">not shiny</div>
            </div>
          ) : (
            <div className="relative py-8">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed border-poke-border text-4xl">
                🌿
              </div>
              <p className="mt-4 text-sm text-poke-dim">
                Tall grass rustles… start encountering to hunt your shiny.
              </p>
            </div>
          )}

          {!found && (
            <button
              onClick={encounter}
              className="relative mt-8 inline-flex items-center gap-2.5 rounded-2xl bg-poke-btn px-14 py-4 text-lg font-extrabold text-white shadow-glow transition hover:bg-poke-btnHover active:scale-95"
            >
              <span aria-hidden="true" className="text-xl leading-none">
                ✦
              </span>
              Encounter!
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
