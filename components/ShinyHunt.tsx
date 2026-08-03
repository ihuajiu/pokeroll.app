"use client";

import { useRef, useState } from "react";
import type { Pokemon } from "@/lib/types";
import { downloadShinyCard, shareShinyCard } from "@/lib/shareCard";

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

/** Found-burst stars: fly outward from the center once, staggered. */
const BURST = [0, 45, 90, 135, 180, 225, 270, 315] as const;

/**
 * Click-to-encounter shiny hunt. The seeded `encounters` fixes which click
 * reveals the shiny (same 1/4096 odds math as the games, resolved
 * server-side so the link is reproducible); every click before that shows a
 * random wild from the local dex. Share the seeded link and a friend runs
 * the identical hunt. Found state renders as a dark TCG foil card (see
 * docs/superpowers/specs/2026-07-31-shiny-found-tcg-design.md).
 */
export default function ShinyHunt({
  target,
  encounters,
  pool,
  odds,
  pity,
  difficulty,
  startFound,
  onNewHunt,
  onFound,
}: {
  target: Pokemon;
  encounters: number;
  pool: WildMon[];
  /** Difficulty-dependent 1-in-N odds from the server. */
  odds?: number;
  /** Easy mode: uniform pity draw, guaranteed within `odds` clicks. */
  pity?: boolean;
  /** Shown as a chip in the HUD. */
  difficulty?: string;
  /** Result link: mount straight in the found state, no click-through. */
  startFound?: boolean;
  /** Starts a fresh hunt (new seed) — the friend's "my turn" entry. */
  onNewHunt?: () => void;
  /** Fired once, on the click that reveals the shiny. */
  onFound?: () => void;
}) {
  const [count, setCount] = useState(startFound ? encounters : 0);
  const [current, setCurrent] = useState<WildMon | null>(null);
  const [imgBusy, setImgBusy] = useState(false);
  const [shareDone, setShareDone] = useState<
    "shared" | "copied" | "downloaded" | null
  >(null);
  const [dlDone, setDlDone] = useState(false);
  // Synchronous lock: state lags a render behind rapid clicks, so the
  // "found" flag alone can let same-tick clicks slip through and fire
  // onFound repeatedly. The ref flips the instant the shiny lands.
  const foundRef = useRef(!!startFound);
  const found = count >= encounters;

  // Pointer parallax for the TCG foil card: writes CSS vars directly (no
  // React state), skipped under reduced motion.
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotionRef = useRef<boolean | null>(null);

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!found) return;
    if (reduceMotionRef.current === null) {
      reduceMotionRef.current = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
    }
    if (reduceMotionRef.current) return;
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--ry", `${((x - 0.5) * 7).toFixed(2)}deg`);
    el.style.setProperty("--rx", `${((0.5 - y) * 7).toFixed(2)}deg`);
    el.style.setProperty("--gx", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--gy", `${(y * 100).toFixed(1)}%`);
  }

  function onPointerLeave() {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--gx", "50%");
    el.style.setProperty("--gy", "50%");
  }

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

  /** Card payload shared by the image-share and download entries. */
  function buildCardData() {
    const url = new URL(window.location.href);
    url.searchParams.set("reveal", "1");
    return {
      name: target.displayName,
      img: shinyImg,
      encounters,
      verdict: verdict(encounters, actualOdds),
      url: url.toString(),
      difficulty,
      odds: actualOdds,
      pity,
    };
  }

  /* ---------------- Found: dark TCG foil card ---------------- */
  if (found) {
    return (
      <div className="mx-auto max-w-[680px]">
        <div
          ref={cardRef}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
          className="tcg-card overflow-hidden rounded-[26px]"
        >
          {/* Card head: SHINY tag + difficulty/odds chips */}
          <div className="relative flex items-center justify-between gap-3 px-7 pt-6">
            <span className="tcg-gold-text inline-flex items-center gap-2 text-sm font-extrabold tracking-[0.28em]">
              ✦ SHINY
            </span>
            <div className="flex items-center gap-2">
              {difficulty && (
                <span className="tcg-chip uppercase">{difficulty}</span>
              )}
              <span className="tcg-chip-odds inline-flex items-center gap-1.5">
                ✦{" "}
                {pity
                  ? `1 / ${actualOdds.toLocaleString()} · GUARANTEED`
                  : `ODDS 1 / ${actualOdds.toLocaleString()}`}
              </span>
            </div>
          </div>

          {/* HUD: counter + full gold bar */}
          <div className="relative px-7 pt-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">
              Encounters
            </div>
            <div className="mt-0.5 font-display text-4xl font-extrabold tabular-nums leading-none text-white">
              {count.toLocaleString()}
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full"
                style={{
                  width: "100%",
                  background: "linear-gradient(90deg, #f59e0b, #fde047)",
                }}
              />
            </div>
          </div>

          {/* Stage */}
          <div className="relative grid min-h-[380px] place-items-center px-6 pb-2 pt-4">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 animate-[tcg-breathe-gold_3.2s_ease-in-out_infinite] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(250, 204, 21, 0.30), transparent 65%)",
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20"
            />
            <img
              src={shinyImg}
              alt={`Shiny ${target.displayName}`}
              className="relative h-[300px] w-[300px] animate-[tcg-float_3.6s_ease-in-out_infinite] object-contain drop-shadow-[0_0_34px_rgba(250,204,21,0.55)]"
            />
            {/* Ambient twinkles */}
            {SPARKLES.map((s, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`pointer-events-none absolute animate-[twinkle_2.6s_ease-in-out_infinite] ${s.size} text-amber-300/90`}
                style={{ left: s.left, top: s.top, animationDelay: s.delay }}
              >
                ✦
              </span>
            ))}
            {/* Found burst (plays once on mount) */}
            {BURST.map((a, i) => (
              <span
                key={a}
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[46%] animate-[tcg-burst_0.9s_cubic-bezier(.16,.8,.3,1)_both] text-[22px] text-amber-200"
                style={
                  {
                    "--a": `${a}deg`,
                    animationDelay: `${0.15 + i * 0.02}s`,
                  } as React.CSSProperties
                }
              >
                ✦
              </span>
            ))}
          </div>

          {/* Info */}
          <div className="relative px-8 pb-2 text-center">
            <div className="tcg-gold-text font-display text-[42px] font-extrabold leading-tight">
              Shiny {target.displayName}
            </div>
            <p className="mt-2 text-[15px] text-white/60">
              Found after{" "}
              <strong className="font-bold text-amber-200">
                {encounters.toLocaleString()} encounters
              </strong>{" "}
              — {verdict(encounters, actualOdds)}
            </p>
          </div>

          {/* Actions */}
          <div className="relative flex flex-wrap items-center justify-center gap-3 px-7 pb-8 pt-5">
            <button
              onClick={async () => {
                setImgBusy(true);
                const how = await shareShinyCard(buildCardData());
                setImgBusy(false);
                if (how) {
                  setShareDone(how);
                  setTimeout(() => setShareDone(null), 1800);
                }
              }}
              disabled={imgBusy}
              className="inline-flex items-center gap-2 rounded-2xl bg-poke-btn px-8 py-3.5 text-base font-extrabold text-white shadow-glow transition hover:bg-poke-btnHover active:scale-95 disabled:opacity-60"
            >
              <span aria-hidden="true">✨</span>
              {imgBusy
                ? "Rendering…"
                : shareDone === "shared"
                  ? "Shared!"
                  : shareDone === "copied"
                    ? "Link copied!"
                    : shareDone === "downloaded"
                      ? "Image saved!"
                      : "Share your shiny"}
            </button>
            <button
              onClick={async () => {
                setImgBusy(true);
                const ok = await downloadShinyCard(buildCardData());
                setImgBusy(false);
                if (ok) {
                  setDlDone(true);
                  setTimeout(() => setDlDone(false), 1800);
                }
              }}
              disabled={imgBusy}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3.5 text-base font-bold text-white/85 transition hover:border-amber-300 hover:text-amber-300 active:scale-95 disabled:opacity-60"
            >
              <span aria-hidden="true">⬇</span>
              {dlDone ? "Saved!" : "Download card"}
            </button>
            {onNewHunt && (
              <button
                onClick={onNewHunt}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3.5 text-base font-bold text-white/85 transition hover:border-amber-300 hover:text-amber-300 active:scale-95"
              >
                <span aria-hidden="true">🎲</span>
                Start your own hunt
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- Hunting: light theme card ---------------- */
  return (
    <div className="mx-auto w-full max-w-[480px]">
      {/* 3:4 as a floor (matches the generator cards): on narrow screens the
          content simply grows past it, so nothing ever clips. */}
      <div className="relative flex aspect-[3/4] flex-col overflow-hidden rounded-3xl border border-poke-border bg-poke-surface shadow-panel">
        {/* Ambient wash: brand spotlight while hunting */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 60% at 50% 40%, rgb(var(--brand) / 0.10), transparent 72%)",
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
          <div className="flex items-center gap-2">
            {difficulty && (
              <span className="inline-flex items-center rounded-full border border-poke-border px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-poke-dim">
                {difficulty}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-poke-chip px-3.5 py-1.5 text-xs font-bold text-poke-ink">
              <span aria-hidden="true">✦</span>
              {pity
                ? `1 / ${actualOdds.toLocaleString()} · guaranteed`
                : `odds 1 / ${actualOdds.toLocaleString()}`}
            </span>
          </div>
        </div>

        {/* Hunt progress toward odds */}
        <div className="relative mx-7 mt-4 h-1.5 overflow-hidden rounded-full bg-poke-border/50">
          <div
            className="h-full rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${Math.max(progress * 100, count > 0 ? 2 : 0)}%`,
              background:
                "linear-gradient(90deg, rgb(var(--brand)), rgb(var(--accent)))",
            }}
          />
        </div>

        {/* Stage — flex-1 absorbs the 3:4 floor's spare height, keeping the
            artwork and the Encounter button vertically centered. */}
        <div className="relative flex min-h-[400px] flex-1 flex-col items-center justify-center px-8 pb-9 pt-8 text-center">
          {/* Spotlight rings behind the artwork */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-poke-border/70"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgb(var(--brand) / 0.12), transparent 65%)",
            }}
          />
          {/* Twinkling stars */}
          {SPARKLES.map((s, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={`pointer-events-none absolute animate-[twinkle_2.6s_ease-in-out_infinite] ${s.size} text-poke-violet/50`}
              style={{ left: s.left, top: s.top, animationDelay: s.delay }}
            >
              ✦
            </span>
          ))}

          {current ? (
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

          <button
            onClick={encounter}
            className="relative mt-8 inline-flex items-center gap-2.5 rounded-2xl bg-poke-btn px-14 py-4 text-lg font-extrabold text-white shadow-glow transition hover:bg-poke-btnHover active:scale-95"
          >
            <span aria-hidden="true" className="text-xl leading-none">
              ✦
            </span>
            Encounter!
          </button>
        </div>
      </div>
    </div>
  );
}
