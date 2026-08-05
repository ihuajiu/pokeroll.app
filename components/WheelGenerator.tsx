"use client";

import { useState } from "react";
import Link from "next/link";
import type { Pokemon } from "@/lib/types";
import HeroCard from "./HeroCard";
import GenerateButton from "./GenerateButton";
import AddToTeamButton from "./AddToTeamButton";

export type WheelPayload = { items: Pokemon[] };

const SEG = 8;
const SIZE = 520;

export default function WheelGenerator({ initial }: { initial: WheelPayload }) {
  const [items, setItems] = useState<Pokemon[]>(initial.items);
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState<number | null>(null);

  function spin() {
    if (spinning) return;
    setSpinning(true);
    setWinner(null);
    const target = Math.floor(Math.random() * SEG);
    const offset = ((-target * (360 / SEG)) - (rotation % 360) + 360) % 360;
    const next = rotation + 360 * 5 + offset;
    setRotation(next);
    setTimeout(() => {
      setSpinning(false);
      setWinner(target);
    }, 4200);
  }

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

  const winPokemon = winner !== null ? items[winner] : null;

  return (
    <div className="mx-auto max-w-[560px]">
      <div className="mb-4 text-center">
        <p className="text-lg font-semibold text-poke-ink">Welcome Trainer!</p>
        <p className="text-sm text-poke-dim">Spin the wheel and see where it lands — tap Add to Team to keep the winner.</p>
      </div>

      <div className="relative mx-auto" style={{ width: SIZE, height: SIZE }}>
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
                    transform: `translate(-50%,-50%) rotate(${i * (360 / SEG)}deg) translateY(-${SIZE / 2 - 62}px)`,
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
                        width={64}
                        height={64}
                        style={{
                          width: 64,
                          height: 64,
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

        {/* Center Poké Ball hub */}
        <div
          className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
          style={{ width: 112, height: 112 }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-xl">
            <div className="h-1/2 w-full bg-poke-btn" />
            <div className="h-1/2 w-full bg-white" />
            <div className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-poke-ink shadow-md">
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={spin}
          disabled={spinning}
          className="rounded-xl bg-poke-btn px-6 py-2.5 font-semibold text-white shadow-glow transition hover:bg-poke-btnHover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {spinning ? "Spinning…" : "Spin!"}
        </button>
        <GenerateButton onClick={regenerate} loading={false} />
      </div>

      {winPokemon ? (
        <div className="mx-auto mt-4 w-full max-w-[640px]">
          <p className="mb-2 text-center text-sm text-poke-dim">You landed on…</p>
          <div className="card-stage flex justify-center">
            <HeroCard pokemon={winPokemon} showActions={false} variant="wide" />
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <AddToTeamButton pokemon={winPokemon} />
            <Link
              href="/team"
              className="rounded-xl border border-poke-border bg-poke-surface px-5 py-2.5 font-semibold text-poke-ink shadow-sm transition hover:border-poke-red hover:text-poke-red"
            >
              Build Team
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
