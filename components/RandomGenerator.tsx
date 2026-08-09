"use client";

import { useState } from "react";
import HeroCard from "@/components/HeroCard";
import { TYPES } from "@/lib/seo";
import { typeName } from "@/lib/i18n/names";
import { useI18n } from "@/components/I18nProvider";
import { useFavorites } from "@/components/useFavorites";
import type { Pokemon } from "@/lib/types";

const GENERATIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const REGIONS = [
  "kanto",
  "johto",
  "hoenn",
  "sinnoh",
  "unova",
  "kalos",
  "alola",
  "galar",
  "paldea",
];

// Region and generation are the same axis (each region is exactly one gen);
// keep the two selects in sync so their intersection can never be empty.
const GEN_TO_REGION: Record<string, string> = {
  "1": "kanto",
  "2": "johto",
  "3": "hoenn",
  "4": "sinnoh",
  "5": "unova",
  "6": "kalos",
  "7": "alola",
  "8": "galar",
  "9": "paldea",
};
const REGION_TO_GEN: Record<string, string> = Object.fromEntries(
  Object.entries(GEN_TO_REGION).map(([g, r]) => [r, g]),
);

const selectCls =
  "rounded-lg border border-poke-border bg-white px-2 py-1.5 text-sm text-poke-ink focus:border-poke-red focus:outline-none";
const labelCls =
  "flex w-full flex-col gap-1 text-xs font-semibold text-poke-dim lg:w-[104px]";

/**
 * The /random generator: one-tap roll by default, with a collapsible
 * "Advanced Filters" panel (gen / region / type / legendary / starter) for
 * users who want to control the result. Filters intersect server-side —
 * see app/api/pokemon/random/route.ts.
 */
export default function RandomGenerator({ initial }: { initial: Pokemon }) {
  const [pokemon, setPokemon] = useState<Pokemon>(initial);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [gen, setGen] = useState("");
  const [region, setRegion] = useState("");
  const [type, setType] = useState("");
  const [legendary, setLegendary] = useState(""); // "" any, "1" only, "0" exclude
  const [starter, setStarter] = useState(""); // "" any, "1" only
  const [excludeFav, setExcludeFav] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const { favorites } = useFavorites();
  const { locale, dict } = useI18n();
  const r = dict.randomGenerator;

  function flash(msg: string) {
    setNotice(msg);
    setTimeout(() => setNotice(null), 2600);
  }

  async function roll() {
    if (loading) return;
    setLoading(true);
    try {
      const p = new URLSearchParams();
      p.set("locale", locale);
      if (gen) p.set("gen", gen);
      if (region) p.set("region", region);
      if (type) p.set("type", type);
      if (legendary) p.set("legendary", legendary);
      if (starter) p.set("starter", starter);
      if (excludeFav && favorites.length > 0) {
        p.set("exclude", favorites.map((f) => f.dexNumber).join(","));
      }
      const res = await fetch(`/api/pokemon/random?${p.toString()}`, {
        cache: "no-store",
      });
      if (res.status === 404) {
        flash(r.noMatch);
        return;
      }
      if (!res.ok) throw new Error("roll failed");
      const next: Pokemon = await res.json();
      setPokemon(next);
      // Keep the URL in sync so the Share button copies a reproducible link.
      window.history.replaceState(null, "", `/random-pokemon-generator?p=${next.name}`);
    } catch {
      // keep previous result on failure
    } finally {
      setLoading(false);
    }
  }

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
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );

  const selects = (
    <>
      <label className={labelCls}>
        {r.generation}
        <select
          value={gen}
          onChange={(e) => {
            const v = e.target.value;
            setGen(v);
            setRegion(v ? GEN_TO_REGION[v] : "");
          }}
          className={selectCls}
        >
          <option value="">{r.all}</option>
          {GENERATIONS.map((g) => (
            <option key={g} value={String(g)}>
              {dict.common.genShort.replace("{n}", String(g))}
            </option>
          ))}
        </select>
      </label>
      <label className={labelCls}>
        {r.region}
        <select
          value={region}
          onChange={(e) => {
            const v = e.target.value;
            setRegion(v);
            setGen(v ? REGION_TO_GEN[v] : "");
          }}
          className={selectCls}
        >
          <option value="">{r.all}</option>
          {REGIONS.map((reg) => (
            <option key={reg} value={reg}>
              {reg.charAt(0).toUpperCase() + reg.slice(1)}
            </option>
          ))}
        </select>
      </label>
      <label className={labelCls}>
        {r.type}
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className={selectCls}
        >
          <option value="">{r.all}</option>
          {TYPES.map((t) => (
            <option key={t} value={t}>
              {typeName(t, locale)}
            </option>
          ))}
        </select>
      </label>
      <label className={labelCls}>
        {r.legendary}
        <select
          value={legendary}
          onChange={(e) => setLegendary(e.target.value)}
          className={selectCls}
        >
          <option value="">{r.any}</option>
          <option value="1">{r.only}</option>
          <option value="0">{r.exclude}</option>
        </select>
      </label>
      <label className={labelCls}>
        {r.starter}
        <select
          value={starter}
          onChange={(e) => setStarter(e.target.value)}
          className={selectCls}
        >
          <option value="">{r.any}</option>
          <option value="1">{r.only}</option>
        </select>
      </label>
      <label className={labelCls} title={r.favoritesTitle}>
        {r.favorites}
        <select
          value={excludeFav ? "exclude" : ""}
          onChange={(e) => setExcludeFav(e.target.value === "exclude")}
          className={selectCls}
        >
          <option value="">{r.any}</option>
          <option value="exclude">{r.exclude}</option>
        </select>
      </label>
    </>
  );

  // The filter control lives centered above the card. Collapsed it is just a
  // gear icon; clicking expands the bar outward into a single row of five
  // selects, so the card never moves more than one row down.
  return (
    <div className="mx-auto max-w-[1080px] px-0 lg:px-6">
      <div className="mb-4 flex justify-center">
        <div
          className={`overflow-hidden transition-[width] duration-300 ${
            open
              ? "w-[760px] max-w-full rounded-xl border border-poke-border bg-poke-surface shadow-sm"
              : "breathe w-11"
          }`}
        >
          {open ? (
            <div className="flex items-start gap-3 p-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-expanded={open}
                aria-label={r.collapseAria}
                title={r.collapseTitle}
                className="game-btn game-btn-ghost flex h-9 w-9 shrink-0 items-center justify-center self-end"
              >
                {gearIcon}
              </button>
              <div className="grid flex-1 grid-cols-2 gap-2.5 sm:grid-cols-3 lg:flex lg:flex-initial lg:flex-wrap">
                {selects}
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-label={r.advancedFilters}
              title={r.advancedFilters}
              className="flex h-11 w-11 items-center justify-center text-poke-dim transition hover:text-poke-red"
            >
              {gearIcon}
            </button>
          )}
        </div>
      </div>

      {notice && (
        <p
          role="status"
          className="mx-auto mb-2 max-w-[640px] text-sm font-medium text-poke-ink"
        >
          {notice}
        </p>
      )}

      {/* Single centered card; desktop width is viewport-driven (3:4). */}
      <div className="random-stage grid items-start gap-6">
        <HeroCard pokemon={pokemon} loading={loading} onRoll={roll} variant="wide" favoritable />
      </div>
    </div>
  );
}
