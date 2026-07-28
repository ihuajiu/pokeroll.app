"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Challenge, ChallengeMode } from "@/lib/challenge";
import { TYPES, REGIONS, GENS, titleCase } from "@/lib/seo";
import { useTeam } from "./useTeam";
import PokemonCard from "./PokemonCard";

const MODES: { value: ChallengeMode; label: string; hint: string }[] = [
  { value: "guess", label: "Guess the Pokémon", hint: "Names hidden — reveal to check" },
  { value: "collect", label: "Collect a Type", hint: "Round up N of one type" },
  { value: "team", label: "Build a Team", hint: "Assemble a random squad" },
  { value: "shiny", label: "Shiny Hunt", hint: "How many encounters to a shiny?" },
];

const selectClass =
  "rounded-lg border border-poke-border bg-poke-surface px-3 py-2 text-sm text-poke-ink focus:border-poke-red focus:outline-none";

export default function ChallengeGenerator({ challenge }: { challenge: Challenge }) {
  const router = useRouter();
  const { config } = challenge;
  const { add } = useTeam();

  const [mode, setMode] = useState<ChallengeMode>(config.mode);
  const [count, setCount] = useState(config.count);
  const [type, setType] = useState(config.type ?? "");
  const [region, setRegion] = useState(config.region ?? "");
  const [gen, setGen] = useState(config.gen ?? 0);
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [copied, setCopied] = useState(false);

  // Sync the seed into the URL so the current challenge is shareable/reproducible.
  useEffect(() => {
    const url = new URL(window.location.href);
    if (!url.searchParams.get("seed")) {
      url.searchParams.set("seed", config.seed);
      window.history.replaceState(null, "", url.toString());
    }
    setRevealed(new Set());
  }, [config.seed]);

  function buildHref(next: Record<string, string | number | undefined>): string {
    const p = new URLSearchParams();
    p.set("mode", String(next.mode ?? mode));
    p.set("count", String(next.count ?? count));
    const t = (next.type as string) ?? type;
    const r = (next.region as string) ?? region;
    const g = (next.gen as number) ?? gen;
    if (t) p.set("type", t);
    if (r) p.set("region", r);
    if (g) p.set("gen", String(g));
    p.set("seed", Math.random().toString(36).slice(2, 10));
    return `/challenge?${p.toString()}`;
  }

  function generate() {
    router.push(buildHref({}));
  }

  function copyLink() {
    navigator.clipboard
      ?.writeText(window.location.href)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch(() => {});
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

  function addAll() {
    challenge.pokemon.forEach((p) => add(p));
  }

  const showFilters = mode !== "shiny";

  return (
    <div>
      {/* Controls */}
      <div className="mb-6 rounded-2xl border border-poke-border bg-poke-surface p-4">
        <div className="flex flex-wrap gap-3">
          <label className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-poke-dim">Mode</span>
            <select
              className={selectClass}
              value={mode}
              onChange={(e) => setMode(e.target.value as ChallengeMode)}
            >
              {MODES.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>
          </label>

          {showFilters && (
            <label className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-poke-dim">
                {mode === "collect" ? "Count" : "Count (max 12)"}
              </span>
              <input
                type="number"
                min={1}
                max={12}
                className={`${selectClass} w-24`}
                value={count}
                onChange={(e) =>
                  setCount(Math.max(1, Math.min(12, Number(e.target.value) || 1)))
                }
              />
            </label>
          )}

          {mode === "collect" && (
            <label className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-poke-dim">Type</span>
              <select
                className={selectClass}
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Any</option>
                {TYPES.map((t) => (
                  <option key={t} value={t}>
                    {titleCase(t)}
                  </option>
                ))}
              </select>
            </label>
          )}

          {mode === "team" && (
            <>
              <label className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-poke-dim">Region</span>
                <select
                  className={selectClass}
                  value={region}
                  onChange={(e) => {
                    setRegion(e.target.value);
                    setGen(0);
                  }}
                >
                  <option value="">Any</option>
                  {REGIONS.map((r) => (
                    <option key={r} value={r}>
                      {titleCase(r)}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-poke-dim">Generation</span>
                <select
                  className={selectClass}
                  value={gen}
                  onChange={(e) => {
                    setGen(Number(e.target.value));
                    setRegion("");
                  }}
                >
                  <option value={0}>Any</option>
                  {GENS.map((g) => (
                    <option key={g} value={g}>
                      Gen {g}
                    </option>
                  ))}
                </select>
              </label>
            </>
          )}

          {mode === "guess" && (
            <>
              <label className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-poke-dim">
                  Type filter
                </span>
                <select
                  className={selectClass}
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="">Any</option>
                  {TYPES.map((t) => (
                    <option key={t} value={t}>
                      {titleCase(t)}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-poke-dim">
                  Region filter
                </span>
                <select
                  className={selectClass}
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                >
                  <option value="">Any</option>
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

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            onClick={generate}
            className="rounded-xl bg-poke-btn px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-poke-btnHover"
          >
            Create Challenge
          </button>
          <button
            onClick={copyLink}
            className="rounded-xl border border-poke-border bg-poke-surface px-5 py-2.5 font-semibold text-poke-ink shadow-sm transition hover:border-poke-red hover:text-poke-red"
          >
            {copied ? "Link copied!" : "Copy challenge link"}
          </button>
          <span className="text-xs text-poke-dim">
            {MODES.find((m) => m.value === mode)?.hint}
          </span>
        </div>
      </div>

      {/* Challenge header */}
      <div className="mb-4 text-center">
        <h2 className="text-xl font-bold text-poke-ink">{challenge.title}</h2>
        <p className="mt-1 text-sm text-poke-dim">{challenge.description}</p>
      </div>

      {/* Shiny */}
      {mode === "shiny" && challenge.pokemon[0] && (
        <div className="mx-auto max-w-sm">
          <div className="mb-3 rounded-xl bg-yellow-100 px-4 py-3 text-center text-sm font-semibold text-yellow-800">
            ⭐ Next shiny in {challenge.encounters?.toLocaleString()} encounters
          </div>
          <PokemonCard pokemon={challenge.pokemon[0]} />
        </div>
      )}

      {/* Guess */}
      {mode === "guess" && (
        <>
          <div className="mb-3 flex items-center justify-center gap-3 text-sm text-poke-dim">
            <span>
              Revealed {revealed.size} / {challenge.pokemon.length}
            </span>
            <button
              onClick={() =>
                setRevealed(
                  new Set(challenge.pokemon.map((p) => p.dexNumber ?? 0)),
                )
              }
              className="underline hover:text-poke-red"
            >
              Reveal all
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {challenge.pokemon.map((p) => {
              const isOpen = revealed.has(p.dexNumber ?? 0);
              return (
                <button
                  key={p.dexNumber ?? p.name}
                  onClick={() => toggleReveal(p.dexNumber)}
                  className="flex flex-col items-center rounded-2xl border border-poke-border bg-poke-surface p-3 text-center shadow-sm transition hover:border-poke-red"
                >
                  <div className="flex h-20 w-20 items-center justify-center">
                    {isOpen ? (
                      <img
                        src={p.sprite}
                        alt={p.displayName}
                        className="h-20 w-20 object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-poke-chip text-2xl font-bold text-poke-dim">
                        ?
                      </div>
                    )}
                  </div>
                  <span
                    className={`mt-2 text-sm font-semibold ${
                      isOpen ? "text-poke-red" : "text-poke-dim"
                    }`}
                  >
                    {isOpen ? p.displayName : "Hidden"}
                  </span>
                </button>
              );
            })}
          </div>
        </>
      )}

      {/* Collect / Team */}
      {(mode === "collect" || mode === "team") && (
        <>
          {mode === "team" && (
            <div className="mb-3 text-center">
              <button
                onClick={addAll}
                className="rounded-xl border border-poke-red bg-poke-surface px-5 py-2.5 font-semibold text-poke-red shadow-sm transition hover:bg-poke-btn hover:text-white"
              >
                Add all to team
              </button>
            </div>
          )}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {challenge.pokemon.map((p) => (
              <PokemonCard key={p.dexNumber ?? p.name} pokemon={p} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
