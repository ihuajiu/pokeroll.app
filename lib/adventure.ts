import { getPokemonById, getPoolByRegion, getStarters } from "@/lib/pokeapi";
import { REGIONS } from "@/lib/seo";
import { hashSeed, mulberry32 } from "@/lib/challenge";
import type { Pokemon } from "@/lib/types";
import {
  CHALLENGES,
  GOALS,
  TRAINER_NAMES,
  TRAINER_ROLES,
  TRAINER_STYLES,
  type Adventure,
} from "./adventure-types";

export type { Adventure } from "./adventure-types";
export {
  CHALLENGES,
  GOALS,
  TRAINER_NAMES,
  TRAINER_ROLES,
  TRAINER_STYLES,
  randomSeed,
  shareText,
} from "./adventure-types";

function pick<T>(arr: readonly T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

async function pickDistinct(
  pool: number[],
  count: number,
  rng: () => number,
): Promise<Pokemon[]> {
  if (!pool.length) return [];
  const arr = [...pool];
  const n = Math.min(count, arr.length);
  for (let i = 0; i < n; i++) {
    const j = i + Math.floor(rng() * (arr.length - i));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  const ids = arr.slice(0, n);
  const list = await Promise.all(
    ids.map(async (id) => {
      try {
        return await getPokemonById(id);
      } catch {
        return null;
      }
    }),
  );
  return list.filter((p): p is Pokemon => p !== null);
}

/**
 * Roll a full Pokémon adventure from a seed. Same seed → same adventure
 * (deterministic via mulberry32). Region drives the team pool so the squad
 * is always thematically tied to where the adventure takes place.
 *
 * SERVER-ONLY: pulls from lib/pokeapi (fs-backed pokedex). Do not import
 * this function from a "use client" module — import Adventure type and
 * shareText/randomSeed from lib/adventure-types instead.
 */
export async function rollAdventure(seed: string): Promise<Adventure> {
  const rng = mulberry32(hashSeed(seed));

  const trainer = {
    name: pick(TRAINER_NAMES, rng),
    role: pick(TRAINER_ROLES, rng),
    style: pick(TRAINER_STYLES, rng),
  };
  const region = pick(REGIONS, rng);
  const goal = pick(GOALS, rng);
  const challenge = pick(CHALLENGES, rng);

  const starters = getStarters();
  const starterId = starters[Math.floor(rng() * starters.length)];
  const starter = await getPokemonById(starterId).catch(() =>
    getPokemonById(1),
  );

  const pool = await getPoolByRegion(region);
  const team = await pickDistinct(pool, 6, rng);

  return { seed, trainer, region, goal, challenge, starter, team };
}
