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

export default function HeroCard({
  pokemon,
  loading,
  basePath = "/",
  onRoll,
  shiny,
  hideName,
  showActions = true,
}: {
  /** The Pokémon to display. When `onRoll` is omitted this card also manages
   *  its own state (the /random page), otherwise the parent owns the data. */
  pokemon: Pokemon;
  /** External loading flag (used when the parent controls regeneration). */
  loading?: boolean;
  /** Base path used when this card rewrites the URL on an internal roll. */
  basePath?: string;
  /** Custom regeneration handler. When provided, the "New roll" button calls
   *  this instead of fetching a fully random Pokémon. */
  onRoll?: () => void | Promise<void>;
  /** Show the shiny sprite when available. */
  shiny?: boolean;
  /** Hide the name (mystery mode) — shows "Mystery" and omits stat bars. */
  hideName?: boolean;
  /** Render the Save / Share / Roll action bar. */
  showActions?: boolean;
}) {
  const [internal, setInternal] = useState<Pokemon>(pokemon);
  const [internalLoading, setInternalLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  // Parent-owned data when a custom roll handler is supplied.
  const data = onRoll ? pokemon : internal;
  const isLoading = loading ?? internalLoading;

  const spriteUrl =
    shiny && data.shinySprite ? data.shinySprite : data.artwork || data.sprite;
  const dex = `#${String(data.dexNumber).padStart(4, "0")}`;
  const ability = data.abilities?.[0] ?? "—";
  const name = hideName ? "Mystery" : data.displayName;
  const cc = TYPE_HEX[data.types[0]] ?? TYPE_HEX.normal;

  async function handleRoll() {
    if (onRoll) {
      await onRoll();
      return;
    }
    setInternalLoading(true);
    try {
      const res = await fetch("/api/pokemon/random");
      if (!res.ok) throw new Error("failed");
      const next: Pokemon = await res.json();
      setInternal(next);
      setSaved(false);
      window.history.replaceState(null, "", `${basePath}?p=${next.name}`);
    } catch {
      // keep previous pokemon on error
    } finally {
      setInternalLoading(false);
    }
  }

  return (
    <div
      className={`hero-card${hideName ? " hero-card--mystery" : ""}${
        isLoading ? " is-loading" : ""
      }`}
      style={{ ["--cc" as string]: cc }}
    >
      <div className="hero-card-art">
        {spriteUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={spriteUrl} alt={name} />
        ) : null}
      </div>

      <div className="hero-card-info">
        <div className="dex">{dex}</div>
        <h3>{name}</h3>
        {hideName ? <span className="section-chip">Mystery</span> : null}

        <div className="try-types">
          {data.types.map((t) => (
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
            <span className="sv">{data.region}</span>
          </div>
          <div className="row row-text">
            <span className="sl">BST</span>
            <span className="sv">{data.bst}</span>
          </div>
          <div className="row row-text">
            <span className="sl">Gen</span>
            <span className="sv">{data.generation}</span>
          </div>
        </div>

        {!hideName ? (
          <div className="bars">
            {STAT_ROWS.map(({ key, label }) => {
              const v = data.stats[key];
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
        ) : null}
      </div>

      {showActions ? (
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
                navigator.share({ title: name, url }).catch(() => {});
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
            type="button"
            className="act act-roll"
            onClick={handleRoll}
            disabled={isLoading}
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
            {isLoading ? "Rolling…" : "New roll"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
