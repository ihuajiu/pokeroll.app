"use client";

import { useState } from "react";
import type { Pokemon } from "@/lib/types";
import { TYPE_HEX } from "@/lib/typeColors";

const STAT_ROWS: { key: keyof Pokemon["stats"]; label: string }[] = [
  { key: "hp", label: "HP" },
  { key: "atk", label: "ATK" },
  { key: "def", label: "DEF" },
  { key: "spa", label: "SPA" },
  { key: "spd", label: "SPD" },
  { key: "spe", label: "SPE" },
];

export default function HeroCard({ initial }: { initial: Pokemon }) {
  const [pokemon, setPokemon] = useState<Pokemon>(initial);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  async function regenerate() {
    setLoading(true);
    try {
      const res = await fetch("/api/pokemon/random");
      if (!res.ok) throw new Error("failed");
      const data: Pokemon = await res.json();
      setPokemon(data);
      setSaved(false);
      window.history.replaceState(null, "", `/?p=${data.name}`);
    } catch {
      // keep previous pokemon on error
    } finally {
      setLoading(false);
    }
  }

  const dex = `#${String(pokemon.dexNumber).padStart(4, "0")}`;
  const ability = pokemon.abilities?.[0] ?? "—";

  return (
    <div className="hero-card">
      <div className="hero-card-art">
        <img
          src={pokemon.artwork || pokemon.sprite}
          alt={pokemon.displayName}
        />
      </div>

      <div className="hero-card-info">
        <div className="dex">{dex}</div>
        <h3>{pokemon.displayName}</h3>
          <div className="try-types">
            {pokemon.types.map((t) => (
              <span
                key={t}
                className="type-chip"
                style={{ background: TYPE_HEX[t] ?? TYPE_HEX.normal }}
              >
                <span className="dot" />
                {t}
              </span>
            ))}
          </div>

        <div className="statgrid">
          <div className="row row-text">
            <span className="sl">Ability</span>
            <span className="sv">{ability}</span>
          </div>
          <div className="row row-text">
            <span className="sl">Region</span>
            <span className="sv">{pokemon.region}</span>
          </div>
          <div className="row row-text">
            <span className="sl">BST</span>
            <span className="sv">{pokemon.bst}</span>
          </div>
          <div className="row row-text">
            <span className="sl">Gen</span>
            <span className="sv">{pokemon.generation}</span>
          </div>
        </div>

        <div className="bars">
          {STAT_ROWS.map(({ key, label }) => {
            const v = pokemon.stats[key];
            const pct = Math.min(100, Math.max(0, (v / 200) * 100));
            return (
              <div className="bar" key={key}>
                <span className="bl">{label}</span>
                <span className="bt">
                  <span className="bf" style={{ width: `${pct}%` }} />
                </span>
                <span className="bv">{v}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="hero-actions">
        <button
          type="button"
          className={`act act-save${saved ? " is-on" : ""}`}
          onClick={() => setSaved((s) => !s)}
        >
          <svg
            viewBox="0 0 24 24"
            fill={saved ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
          {saved ? "Saved" : "Save"}
        </button>

        <button
          type="button"
          className="act"
          onClick={() => {
            const url = window.location.href;
            if (navigator.share) {
              navigator.share({ title: pokemon.displayName, url }).catch(() => {});
            } else if (navigator.clipboard) {
              navigator.clipboard.writeText(url).catch(() => {});
            }
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          Share
        </button>

        <button
          id="heroRollBtn"
          type="button"
          className="act act-roll"
          onClick={regenerate}
          disabled={loading}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="23 4 23 10 17 10" />
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
          </svg>
          {loading ? "Rolling…" : "New roll"}
        </button>
      </div>
    </div>
  );
}
