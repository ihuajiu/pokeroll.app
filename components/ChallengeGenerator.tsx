"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Challenge } from "@/lib/challenge";
import { DIFFICULTIES } from "@/lib/adventure-types";
import { TYPES, REGIONS, titleCase } from "@/lib/seo";
import ShinyHunt, { type WildMon } from "./ShinyHunt";
import { useI18n } from "@/components/I18nProvider";

const selectClass =
  "rounded-lg border border-poke-border bg-poke-surface px-3.5 py-2.5 text-sm text-poke-ink focus:border-poke-red focus:outline-none";

const COUNTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Mirrors maxCountForDifficulty in lib/challenge.ts so a "Random" count is
// picked within the cap of the difficulty being rolled.
const MAX_BY_DIFFICULTY: Record<string, number> = {
  Easy: 12,
  Normal: 10,
  Hard: 8,
  Extreme: 6,
};

/**
 * Single-mode challenge roller. The mode is fixed by the route
 * (/challenge/guess or /challenge/shiny); switching modes happens via the
 * header Challenges dropdown, not inside this component.
 */
export default function ChallengeGenerator({
  challenge,
  wildPool,
  startFound,
}: {
  challenge: Challenge;
  /** Slim local-dex pool for the shiny click simulator (shiny page only). */
  wildPool?: WildMon[];
  /** Shiny result link: open directly on the found card (shiny page only). */
  startFound?: boolean;
}) {
  const router = useRouter();
  const { dict } = useI18n();
  const c = dict.challengeGenerator;
  const { config } = challenge;
  const mode = config.mode;

  const [count, setCount] = useState(config.count ? String(config.count) : "4");
  const [type, setType] = useState(config.type ?? "");
  const [region, setRegion] = useState(config.region ?? "");
  const [difficulty, setDifficulty] = useState<string>(config.difficulty ?? "Easy");
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [copied, setCopied] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  // Shiny mode: set once the hunt is won, so Share can brag about the result.
  const [shinyResult, setShinyResult] = useState<string | null>(null);

  // Sync the seed into the URL so the current challenge is shareable/reproducible.
  useEffect(() => {
    const url = new URL(window.location.href);
    if (!url.searchParams.get("seed")) {
      url.searchParams.set("seed", config.seed);
      window.history.replaceState(null, "", url.toString());
    }
    setRevealed(new Set());
    setShinyResult(null);
  }, [config.seed]);

  function buildHref(): string {
    const p = new URLSearchParams();
    const dRaw = difficulty;
    // "Random" difficulty/count resolve to concrete picks so shared links
    // reproduce them. The count pick stays within the difficulty's cap.
    const d = dRaw || DIFFICULTIES[Math.floor(Math.random() * DIFFICULTIES.length)];
    const cap = MAX_BY_DIFFICULTY[d] ?? 10;
    // Shiny ignores count (always one prediction) — keep it out of the URL.
    // Floor of 3: a 1–2 card "challenge" is no challenge (caps are all ≥ 6).
    if (mode !== "shiny") {
      p.set("count", count || String(3 + Math.floor(Math.random() * (cap - 2))));
    }
    if (type) p.set("type", type);
    if (region) p.set("region", region);
    p.set("difficulty", d);
    p.set("seed", Math.random().toString(36).slice(2, 10));
    return `/challenge/${mode}?${p.toString()}`;
  }

  function generate() {
    router.push(buildHref());
  }

  async function share(): Promise<"shared" | "copied" | null> {
    const url = new URL(window.location.href);
    // Sharing a won hunt: mark it as a result link so the friend lands
    // straight on the found shiny card instead of an unplayed hunt.
    if (shinyResult) url.searchParams.set("reveal", "1");
    const href = url.toString();
    const text =
      shinyResult ?? `${challenge.title} — Pokémon Challenge Generator`;
    // Prefer the native share sheet (mobile + supported desktops).
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: challenge.title, text, url: href });
        return "shared";
      } catch {
        /* user dismissed the share sheet — fall through to clipboard */
      }
    }
    // Fallback: copy the result text + link to the clipboard.
    try {
      await navigator.clipboard?.writeText(`${text}\n${href}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
      return "copied";
    } catch {
      /* clipboard unavailable */
      return null;
    }
  }

  function toggleReveal(id?: number) {
    if (id == null) return;
    setRevealed((prev) => {
      const s = new Set(prev);
      if (s.has(id)) s.delete(id);
      else s.add(id);
      return s;
    });
  }

  const allRevealed =
    challenge.pokemon.length > 0 && revealed.size === challenge.pokemon.length;

  // Guess mode: difficulty = how much information the hidden card gives up.
  // Easy shows a type hint; Hard/Extreme zoom the silhouette so less of the
  // shape is visible.
  const guessDifficulty = config.difficulty ?? "Easy";
  const silhouetteZoom =
    guessDifficulty === "Extreme"
      ? "scale-[2.2]"
      : guessDifficulty === "Hard"
        ? "scale-150"
        : "";
  const showTypeHint = mode === "guess" && guessDifficulty === "Easy";

  const gearIcon = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );

  return (
    <div>
      {/* Controls */}
      <div className="mb-8 rounded-2xl border border-poke-border bg-poke-surface px-5 py-6 sm:px-8">
        {/* Row 1: mode hint (left) + actions (right) */}
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
          <span className="text-sm text-poke-dim">{c.hints[mode]}</span>
          <div className="flex items-center gap-3">
            <button
              onClick={generate}
              className="inline-flex items-center gap-2 rounded-xl bg-poke-btn px-6 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-poke-btnHover"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <g fill="currentColor" stroke="none">
                  <circle cx="8.5" cy="8.5" r="1.3" />
                  <circle cx="15.5" cy="8.5" r="1.3" />
                  <circle cx="12" cy="12" r="1.3" />
                  <circle cx="8.5" cy="15.5" r="1.3" />
                  <circle cx="15.5" cy="15.5" r="1.3" />
                </g>
              </svg>
              {c.createChallenge}
            </button>
            <button
              onClick={share}
              className="rounded-xl border border-poke-border bg-poke-surface px-4 py-2.5 text-sm font-semibold text-poke-ink shadow-sm transition hover:border-poke-red hover:text-poke-red"
            >
              {copied ? dict.heroCard.linkCopied : c.shareChallenge}
            </button>
          </div>
        </div>

        {/* Row 2: breathing gear expands into the filter bar */}
        <div className="mt-4 flex justify-center">
          {filterOpen ? (
            <div className="flex items-start gap-3 rounded-xl border border-poke-border p-3">
              <button
                type="button"
                onClick={() => setFilterOpen(false)}
                aria-expanded={filterOpen}
                aria-label={c.collapseAria}
                title={c.collapseTitle}
                className="game-btn game-btn-ghost flex h-9 w-9 shrink-0 items-center justify-center self-end"
              >
                {gearIcon}
              </button>
              <div className="flex flex-wrap items-start gap-x-6 gap-y-3">
                <label className="flex w-36 flex-col gap-1">
                  <span className="text-xs font-semibold text-poke-dim">{c.difficulty}</span>
                  <select
                    className={selectClass}
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                  >
                    <option value="">{c.random}</option>
                    {DIFFICULTIES.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </label>

                {mode === "guess" && (
                  <>
                    <label className="flex w-36 flex-col gap-1">
                      <span className="text-xs font-semibold text-poke-dim">
                        {c.countMax.replace("{max}", "12")}
                      </span>
                      <select
                        className={selectClass}
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                      >
                        <option value="">{c.random}</option>
                        {COUNTS.map((c) => (
                          <option key={c} value={String(c)}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="flex w-36 flex-col gap-1">
                      <span className="text-xs font-semibold text-poke-dim">
                        {c.typeFilter}
                      </span>
                      <select
                        className={selectClass}
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                      >
                        <option value="">{c.random}</option>
                        {TYPES.map((t) => (
                          <option key={t} value={t}>
                            {titleCase(t)}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="flex w-36 flex-col gap-1">
                      <span className="text-xs font-semibold text-poke-dim">
                        {c.regionFilter}
                      </span>
                      <select
                        className={selectClass}
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                      >
                        <option value="">{c.random}</option>
                        {REGIONS.map((r) => (
                          <option key={r} value={r}>
                            {titleCase(r)}
                          </option>
                        ))}
                      </select>
                    </label>
                  </>
                )}
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setFilterOpen(true)}
              aria-expanded={filterOpen}
              aria-label={c.filtersAria}
              title={c.filtersTitle}
              className="breathe flex h-11 w-11 items-center justify-center text-poke-dim transition hover:text-poke-red"
            >
              {gearIcon}
            </button>
          )}
        </div>
      </div>

      {/* Shiny — click-to-encounter simulator */}
      {mode === "shiny" && challenge.pokemon[0] && wildPool && (
        <ShinyHunt
          key={`${config.seed}:${startFound ? "found" : "hunt"}`}
          target={challenge.pokemon[0]}
          encounters={challenge.encounters ?? 1}
          pool={wildPool}
          odds={challenge.odds}
          pity={challenge.pity}
          difficulty={challenge.config.difficulty}
          startFound={startFound}
          onNewHunt={generate}
          onFound={() =>
            setShinyResult(
              `✨ I found a shiny ${challenge.pokemon[0].displayName} after ${(challenge.encounters ?? 1).toLocaleString()} encounters! Can you beat that?`,
            )
          }
        />
      )}

      {/* Guess */}
      {mode === "guess" && (
        <>
          <div className="mb-4 flex flex-col items-center gap-2">
            <div className="flex items-center gap-3 text-sm text-poke-dim">
              <span>
                {c.revealedProgress
                  .replace("{revealed}", String(revealed.size))
                  .replace("{total}", String(challenge.pokemon.length))}
              </span>
              <button
                onClick={() =>
                  setRevealed(
                    allRevealed
                      ? new Set()
                      : new Set(challenge.pokemon.map((p) => p.dexNumber ?? 0)),
                  )
                }
                className="underline hover:text-poke-red"
              >
                {allRevealed ? c.hideAll : c.revealAll}
              </button>
            </div>
            <div className="h-1.5 w-48 overflow-hidden rounded-full bg-poke-chip">
              <div
                className="h-full rounded-full bg-poke-btn transition-all duration-300"
                style={{
                  width: `${(revealed.size / challenge.pokemon.length) * 100}%`,
                }}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {challenge.pokemon.map((p) => {
              const isOpen = revealed.has(p.dexNumber ?? 0);
              return (
                <button
                  key={p.dexNumber ?? p.name}
                  onClick={() => toggleReveal(p.dexNumber)}
                  aria-pressed={isOpen}
                  className="flip group w-[calc(50%-0.5rem)] max-w-60 sm:w-60"
                >
                  <div className={`flip-inner ${isOpen ? "open" : ""}`}>
                    {/* Front — silhouette (Hard/Extreme zoom in to hide the shape) */}
                    <div className="flip-face flex flex-col items-center rounded-2xl border border-poke-border bg-poke-surface p-5 text-center shadow-sm transition group-hover:border-poke-red group-hover:shadow-lg">
                      <div className="flex h-40 w-full items-center justify-center overflow-hidden">
                        <img
                          src={p.artwork || p.sprite}
                          alt={c.silhouetteAlt}
                          className={`silhouette h-36 w-36 object-contain ${silhouetteZoom}`}
                          loading="lazy"
                        />
                      </div>
                      {showTypeHint && (
                        <span className="mt-2 text-xs font-semibold text-poke-dim">
                          {c.typeHint.replace(
                            "{types}",
                            p.types.map((t) => titleCase(t)).join(" · "),
                          )}
                        </span>
                      )}
                      <span className="mt-3 text-base font-semibold text-poke-dim">
                        {c.whosThat}
                      </span>
                    </div>
                    {/* Back — revealed */}
                    <div className="flip-back flip-face flex flex-col items-center rounded-2xl border border-poke-red bg-poke-surface p-5 text-center shadow-sm transition group-hover:shadow-lg">
                      <div className="flex h-40 w-full items-center justify-center">
                        <img
                          src={p.artwork || p.sprite}
                          alt={p.displayName}
                          className="h-36 w-36 object-contain drop-shadow"
                          loading="lazy"
                        />
                      </div>
                      <span className="mt-3 text-base font-semibold text-poke-red">
                        {p.displayName}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
