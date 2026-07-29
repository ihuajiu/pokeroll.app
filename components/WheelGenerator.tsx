"use client";

import { useState } from "react";
import Link from "next/link";
import type { Pokemon } from "@/lib/types";
import PokemonCard from "./PokemonCard";
import GenerateButton from "./GenerateButton";
import AddToTeamButton from "./AddToTeamButton";

export type WheelPayload = { items: Pokemon[] };

const SEG = 8;
const SIZE = 320;

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
    <div>
      <div className="mb-6 text-center">
        <p className="text-lg font-semibold text-poke-ink">Welcome Trainer!</p>
        <p className="text-sm text-poke-dim">Spin the wheel for a random Pokémon!</p>
      </div>

      <div className="relative mx-auto" style={{ width: SIZE, height: SIZE }}>
        <div className="absolute left-1/2 z-10 -translate-x-1/2" style={{ top: -6 }}>
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "12px solid transparent",
              borderRight: "12px solid transparent",
              borderTop: "20px solid var(--accent)",
            }}
          />
        </div>
        <div
          className="absolute inset-0 rounded-full border-4 border-poke-border shadow-lg"
          style={{
            background:
              "conic-gradient(var(--wheel-a) 0deg 45deg, var(--wheel-b) 45deg 90deg, var(--wheel-a) 90deg 135deg, var(--wheel-b) 135deg 180deg, var(--wheel-a) 180deg 225deg, var(--wheel-b) 225deg 270deg, var(--wheel-a) 270deg 315deg, var(--wheel-b) 315deg 360deg)",
            transform: `rotate(${rotation}deg)`,
            transition: spinning
              ? "transform 4s cubic-bezier(0.17,0.67,0.12,0.99)"
              : "none",
          }}
        >
          {items.map((p, i) => (
            <div
              key={`${p.dexNumber}-${i}`}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(-50%,-50%) rotate(${i * (360 / SEG)}deg) translateY(-${SIZE / 2 - 36}px)`,
              }}
            >
              {p.artwork ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.artwork}
                  alt=""
                  width={48}
                  height={48}
                  style={{ width: 48, height: 48 }}
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={spin}
          disabled={spinning}
          className="rounded-xl bg-poke-btn px-6 py-2.5 font-semibold text-white shadow-sm transition hover:bg-poke-btnHover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {spinning ? "Spinning…" : "Spin!"}
        </button>
        <GenerateButton onClick={regenerate} loading={false} />
      </div>

      {winPokemon ? (
        <div className="mt-6">
          <p className="mb-2 text-center text-sm text-poke-dim">You landed on…</p>
          <PokemonCard pokemon={winPokemon} />
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
