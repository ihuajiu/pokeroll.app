"use client";

import { useEffect, useRef, useState } from "react";
import type { Pokemon } from "@/lib/types";
import { TYPE_HEX } from "@/lib/typeColors";
import { useFavorites } from "@/components/useFavorites";
import {
  downloadPokemonCard,
  sharePokemonLink,
} from "@/lib/shareCard";

const STAT_ROWS: { key: keyof Pokemon["stats"]; label: string }[] = [
  { key: "hp", label: "HP" },
  { key: "atk", label: "ATK" },
  { key: "def", label: "DEF" },
  { key: "spa", label: "SPA" },
  { key: "spd", label: "SPD" },
  { key: "spe", label: "SPE" },
];

// Pokémon-style per-stat colors (the canonical stat-bar palette).
const STAT_COLORS: Record<keyof Pokemon["stats"], string> = {
  hp: "#78C850",   // 绿 green
  atk: "#F08030",  // 红 red
  def: "#6890F0",  // 蓝 blue
  spa: "#A040A0",  // 紫 purple
  spd: "#98D8D8",  // 青 cyan
  spe: "#F8D030",  // 黄 yellow
};

// Alternate-form tags shown as a small chip next to the name.
const FORM_LABELS: Record<string, string> = {
  mega: "Mega",
  alolan: "Alolan",
  galarian: "Galarian",
  hisuian: "Hisuian",
  paldean: "Paldean",
  gigantamax: "Gigantamax",
};

export default function HeroCard({
  pokemon,
  loading,
  basePath = "/",
  onRoll,
  shiny,
  hideName,
  showActions = true,
  variant = "team",
  selectable = false,
  selected = false,
  onToggleSelect,
  /** Show a lock toggle (top-left corner) that keeps this card across
   *  re-rolls — used by the Random Team roller. */
  lockable = false,
  /** Whether this card is currently locked. */
  locked = false,
  /** Toggle handler for the lock button. */
  onToggleLock,
  /** Show a heart toggle that adds this Pokémon to the Favorites list.
   *  With the action bar visible it sits at the left of the bar; on
   *  roster-style cards (no action bar) it floats at the top-right corner. */
  favoritable = false,
  /** Optional DOM id for the "New roll" button, so an external control can
   *  trigger this card's internal re-roll. */
  rollButtonId,
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
  /** Card layout. "team" is the bold, type-tinted layout used for any card
   *  with stat bars; "wide" is the larger horizontal variant for roster pages;
   *  "default" is the original compact hero layout. Mystery cards always fall
   *  back to "default" regardless of this prop. */
  variant?: "default" | "team" | "wide";
  /** Show an in-image selection checkbox (team roster multi-select). */
  selectable?: boolean;
  /** Whether this card is currently selected. */
  selected?: boolean;
  /** Toggle handler for the selection checkbox. */
  onToggleSelect?: () => void;
  /** Show a lock toggle (top-left corner) that keeps this card across
   *  re-rolls — used by the Random Team roller. */
  lockable?: boolean;
  /** Whether this card is currently locked. */
  locked?: boolean;
  /** Toggle handler for the lock button. */
  onToggleLock?: () => void;
  /** Show a heart toggle that adds this Pokémon to the Favorites list. */
  favoritable?: boolean;
  /** Optional DOM id for the "New roll" button, so an external control can
   *  trigger this card's internal re-roll. */
  rollButtonId?: string;
}) {
  const [internal, setInternal] = useState<Pokemon>(pokemon);
  const [internalLoading, setInternalLoading] = useState(false);
  const [shareDone, setShareDone] = useState<"shared" | "copied" | null>(null);
  const [dlDone, setDlDone] = useState(false);
  const [favMsg, setFavMsg] = useState<string | null>(null);
  /** Root card element — captured as the classic-style download image. */
  const cardRef = useRef<HTMLDivElement>(null);
  /** Name heading — long names auto-shrink to fit one line. */
  const nameRef = useRef<HTMLHeadingElement>(null);
  /** Tag row (form chip + type chips) — 3 tags auto-shrink to fit one line. */
  const tagRowRef = useRef<HTMLDivElement>(null);
  /** Stat meta grid — long text values (ability) auto-shrink to one line. */
  const statRef = useRef<HTMLDivElement>(null);


  // The bold "team" layout applies to any card showing stat bars. Mystery
  // cards (hideName) never show bars, so they keep the compact default look.
  const variantClass =
    hideName || variant === "default"
      ? ""
      : variant === "wide"
        ? " team-card team-card--wide"
        : " team-card";

  // Parent-owned data when a custom roll handler is supplied.
  const data = onRoll ? pokemon : internal;
  const isLoading = loading ?? internalLoading;

  const spriteUrl =
    shiny && data.shinySprite ? data.shinySprite : data.artwork || data.sprite;
  const dex = `#${String(data.dexNumber).padStart(4, "0")}`;
  const ability = data.abilities?.[0] ?? "—";
  const name = hideName ? "Mystery" : data.displayName;
  const cc = TYPE_HEX[data.types[0]] ?? TYPE_HEX.normal;
  const { has: isFavorited, toggle: toggleFavorite } = useFavorites();
  const favorited = favoritable ? isFavorited(data.dexNumber) : false;

  function handleFavorite() {
    const r = toggleFavorite(data);
    if (r === "limit") {
      setFavMsg("Favorites full (15) — Premium unlocks unlimited.");
      setTimeout(() => setFavMsg(null), 2600);
    }
  }

  // Long names shrink to fit one line (min 15px), wrapping only as a
  // last resort for extremely long names.
  useEffect(() => {
    const el = nameRef.current;
    if (!el || hideName) return;
    const fit = () => {
      el.style.fontSize = "";
      el.style.whiteSpace = "nowrap";
      const start = parseFloat(getComputedStyle(el).fontSize);
      let fs = Number.isFinite(start) && start > 0 ? start : 24;
      const MIN = 15;
      while (fs > MIN && el.scrollWidth > el.clientWidth) {
        fs -= 0.5;
        el.style.fontSize = `${fs}px`;
      }
      el.style.whiteSpace = "";
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, [name, hideName]);

  // Three tags (form chip + two types) shrink together so they stay on one
  // line — measured with wrapping off, then the tag-scale is set on the row.
  useEffect(() => {
    const row = tagRowRef.current;
    if (!row || !row.children.length) return;
    const measure = (scale: number) => {
      row.style.setProperty("--tag-scale", String(scale));
      row.style.flexWrap = "nowrap";
      const w = row.scrollWidth;
      row.style.flexWrap = "";
      return w;
    };
    const fit = () => {
      const full = measure(1);
      const have = row.clientWidth;
      if (full <= have + 1) {
        row.style.setProperty("--tag-scale", "1");
        return;
      }
      let lo = 0.6;
      let hi = 1;
      for (let i = 0; i < 8; i++) {
        const mid = (lo + hi) / 2;
        if (measure(mid) <= have + 1) lo = mid;
        else hi = mid;
      }
      row.style.setProperty("--tag-scale", lo.toFixed(3));
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(row);
    return () => ro.disconnect();
  }, [data.types, data.form]);

  // Long stat values (e.g. ability names) shrink to fit one line so the
  // 3-column meta grid keeps a stable height.
  useEffect(() => {
    const grid = statRef.current;
    if (!grid) return;
    // Canvas measureText uses the real loaded font, so it matches the
    // rendered width regardless of layout timing.
    const canvas = document.createElement("canvas");
    const cctx = canvas.getContext("2d");
    const measure = (el: HTMLElement, fs: number) => {
      if (!cctx) return 0;
      const cs = getComputedStyle(el);
      cctx.font = `${cs.fontWeight} ${fs}px ${cs.fontFamily}`;
      return cctx.measureText(el.textContent || "").width;
    };
    const fit = () => {
      grid.querySelectorAll<HTMLElement>(".row-text .sv").forEach((sv) => {
        sv.style.fontSize = "";
        const start = parseFloat(getComputedStyle(sv).fontSize);
        if (!Number.isFinite(start)) return;
        const have = sv.clientWidth;
        // A value at least as wide as the box wraps its last word — shrink
        // until the measured width is safely below the box (3px margin covers
        // the small gap between canvas metrics and real rendering).
        if (measure(sv, start) < have - 3) return;
        let lo = 10;
        let hi = start;
        for (let i = 0; i < 8; i++) {
          const mid = (lo + hi) / 2;
          if (measure(sv, mid) < have - 3) lo = mid;
          else hi = mid;
        }
        sv.style.fontSize = `${lo}px`;
      });
    };
    fit();
    // Re-run once layout settles and the fonts are ready — the first pass can
    // measure with a fallback font (before Space Mono loads) and miss a shrink.
    const raf = requestAnimationFrame(() => requestAnimationFrame(fit));
    const timer = window.setTimeout(fit, 500);
    document.fonts?.ready?.then(() => fit()).catch(() => undefined);
    const ro = new ResizeObserver(fit);
    ro.observe(grid);
    window.addEventListener("resize", fit);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
      ro.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, [data.abilities, data.region]);

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
      window.history.replaceState(null, "", `${basePath}?p=${next.name}`);
    } catch {
      // keep previous pokemon on error
    } finally {
      setInternalLoading(false);
    }
  }

  function cardData() {
    return {
      name: data.displayName,
      dex: data.dexNumber,
      types: data.types,
      img: spriteUrl,
      stats: data.stats,
      bst: data.bst,
      region: data.region,
      generation: data.generation,
      height: data.height,
      weight: data.weight,
      // Page title carries the module name ("Random Pokémon Generator — …").
      module: document.title.split("—")[0].trim(),
      // Always carry the ?p= param so the shared link re-rolls this exact
      // Pokémon for whoever opens it. Use the live pathname — callers never
      // pass basePath, and parent-controlled cards may live anywhere.
      url: `${window.location.origin}${window.location.pathname}?p=${data.name}`,
    };
  }

  async function handleShareLink() {
    const how = await sharePokemonLink(cardData());
    setShareDone(how);
    setTimeout(() => setShareDone(null), 1800);
  }

  async function handleDownload() {
    if (!cardRef.current) return;
    const ok = await downloadPokemonCard(cardRef.current, cardData());
    if (ok) {
      setDlDone(true);
      setTimeout(() => setDlDone(false), 1800);
    }
  }

  return (
    <div
      ref={cardRef}
      className={`hero-card${hideName ? " hero-card--mystery" : ""}${variantClass}${
        locked ? " is-locked" : ""
      }${isLoading ? " is-loading" : ""}`}
      style={{ ["--cc" as string]: cc }}
    >
      {lockable && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleLock?.();
          }}
          aria-pressed={locked}
          aria-label={locked ? "Unlock — allow re-roll" : "Lock — keep on re-roll"}
          title={locked ? "Unlock — allow re-roll" : "Lock — keep on re-roll"}
          className={`lock-toggle${locked ? " is-on" : ""}`}
        >
          {locked ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <rect x="4" y="11" width="16" height="10" rx="2" fill="currentColor" stroke="none" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <rect x="4" y="11" width="16" height="10" rx="2" />
              <path d="M8 11V7a4 4 0 0 1 7.9-.8" />
            </svg>
          )}
        </button>
      )}
      {favoritable && !showActions && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleFavorite();
          }}
          aria-pressed={favorited}
          aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
          title={favorited ? "Remove from favorites" : "Add to favorites"}
          className={`fav-toggle${favorited ? " is-on" : ""}`}
        >
          <svg
            viewBox="0 0 24 24"
            fill={favorited ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3.5 w-3.5"
            aria-hidden="true"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      )}
      <div className="hero-card-art">
        {spriteUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={spriteUrl} alt={name} />
        ) : null}
        {selectable && (
          <label
            onClick={(e) => e.stopPropagation()}
            className="absolute right-2 top-2 z-20 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selected}
              onChange={onToggleSelect}
              className="peer sr-only"
            />
            <span className="flex h-6 w-6 items-center justify-center rounded-md border-2 border-poke-border bg-poke-surface/95 text-poke-red shadow-sm transition peer-checked:border-poke-red">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-4 w-4 transition ${selected ? "opacity-100" : "opacity-0"}`}
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
          </label>
        )}
      </div>

      <div className="hero-card-info">
        <div className="dex">{dex}</div>
        <h3 ref={nameRef}>{name}</h3>
        {hideName ? <span className="section-chip">Mystery</span> : null}

        <div className="try-types" ref={tagRowRef}>
          {!hideName && data.form ? (
            <span className={`form-chip form-chip--${data.form}`}>
              {FORM_LABELS[data.form] ?? data.form}
            </span>
          ) : null}
          {data.types.map((t) => (
            <span
              key={t}
              className="type-chip"
              style={{ background: TYPE_HEX[t] ?? TYPE_HEX.normal }}
            >
              {t}
            </span>
          ))}
        </div>

        {!hideName && data.description ? (
          <p className="hero-card-desc" title={data.descriptionFull || data.description}>
            {data.description}
          </p>
        ) : null}

        <div className="statgrid" ref={statRef}>
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
          {data.height != null ? (
            <div className="row row-text">
              <span className="sl">Height</span>
              <span className="sv">{data.height} m</span>
            </div>
          ) : null}
          {data.weight != null ? (
            <div className="row row-text">
              <span className="sl">Weight</span>
              <span className="sv">{data.weight} kg</span>
            </div>
          ) : null}
        </div>

        {!hideName ? (
          <div className="bars">
            {STAT_ROWS.map(({ key, label }) => {
              const v = data.stats[key];
              const pct = Math.min(100, Math.max(0, (v / 200) * 100));
              const c = STAT_COLORS[key];
              return (
                <div className="bar" key={key}>
                  <span className="bl" style={{ color: c }}>{label}</span>
                  <span className="bt">
                    <span
                      className="bf"
                      style={{
                        width: `${pct}%`,
                        background: c,
                        boxShadow: `0 0 10px -2px ${c}`,
                      }}
                    />
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
          {favoritable ? (
            <button
              type="button"
              className={`act-icon act-fav${favorited ? " is-on" : ""}`}
              aria-pressed={favorited}
              aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
              title={favorited ? "Remove from favorites" : "Add to favorites"}
              onClick={handleFavorite}
            >
              <svg
                viewBox="0 0 24 24"
                fill={favorited ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          ) : null}
          <button
            type="button"
            className="act-icon"
            aria-label={shareDone ? "Link shared" : "Share link"}
            title={
              shareDone === "copied"
                ? "Link copied!"
                : shareDone === "shared"
                  ? "Shared!"
                  : "Share link"
            }
            onClick={handleShareLink}
          >
            {shareDone ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
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
            )}
          </button>
          {!hideName ? (
            <button
              type="button"
              className="act-icon"
              aria-label={dlDone ? "Image saved" : "Download card"}
              title={dlDone ? "Image saved!" : "Download card"}
              onClick={handleDownload}
            >
              {dlDone ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
              )}
            </button>
          ) : null}
          <button
            type="button"
            id={rollButtonId}
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
      {favMsg ? (
        <div role="status" className="fav-limit-toast">
          {favMsg}
        </div>
      ) : null}
    </div>
  );
}
