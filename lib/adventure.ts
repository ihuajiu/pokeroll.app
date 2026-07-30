import {
  getAllPokemon,
  getPokemonById,
  getPoolByRegion,
  getStarters,
  GEN_REGION,
} from "@/lib/pokeapi";
import { REGIONS } from "@/lib/seo";
import { hashSeed, mulberry32 } from "@/lib/challenge";
import type { Pokemon } from "@/lib/types";
import {
  CHALLENGES,
  DIFFICULTIES,
  GOALS,
  GYM_JOURNEYS,
  LEGENDARY_ROLES,
  RIVAL_NAMES,
  RIVAL_TITLES,
  TRAINER_NAMES,
  TRAINER_ROLES,
  TRAINER_STYLES,
  type Adventure,
} from "./adventure-types";

export type { Adventure, GymStop } from "./adventure-types";
export {
  CHALLENGES,
  DIFFICULTIES,
  GOALS,
  GYM_JOURNEYS,
  LEGENDARY_ROLES,
  RIVAL_NAMES,
  RIVAL_TITLES,
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

const COUNTER_TYPE: Record<string, string> = {
  fire: "water",
  water: "grass",
  grass: "fire",
};

function byDexMap(all: Pokemon[]): Map<number, Pokemon> {
  return new Map(all.map((p) => [p.dexNumber, p]));
}

function getDifficultyPool(
  pool: number[],
  difficulty: string,
  rng: () => number,
  all: Pokemon[],
): number[] {
  if (difficulty === "Normal" || pool.length === 0) return pool;

  const byId = byDexMap(all);
  const bsts = pool
    .map((id) => byId.get(id)?.bst ?? 0)
    .filter((b) => b > 0);

  if (difficulty === "Easy" || difficulty === "Hard") {
    if (bsts.length === 0) return pool;
    const sorted = [...bsts].sort((a, b) => a - b);
    const median = sorted[Math.floor(sorted.length / 2)];
    const filtered = pool.filter((id) => {
      const bst = byId.get(id)?.bst ?? 0;
      return difficulty === "Easy" ? bst >= median : bst < median;
    });
    return filtered.length >= 6 ? filtered : pool;
  }

  if (difficulty === "Extreme") {
    const typeCounts = new Map<string, number>();
    const typeIds = new Map<string, number[]>();
    for (const id of pool) {
      const p = byId.get(id);
      if (!p) continue;
      for (const t of p.types) {
        typeCounts.set(t, (typeCounts.get(t) ?? 0) + 1);
        const arr = typeIds.get(t) ?? [];
        arr.push(id);
        typeIds.set(t, arr);
      }
    }
    const viable = Array.from(typeCounts.entries())
      .filter(([, count]) => count >= 6)
      .map(([t]) => t);
    if (viable.length === 0) return pool;
    const type = pick(viable, rng);
    return typeIds.get(type) ?? pool;
  }

  return pool;
}

async function getRivalStarter(
  starter: Pokemon,
  regionPool: number[],
  rng: () => number,
  all: Pokemon[],
): Promise<Pokemon> {
  const byId = byDexMap(all);
  const starterType = starter.types[0]?.toLowerCase();
  const counterType = starterType ? COUNTER_TYPE[starterType] : undefined;

  let candidatePool = regionPool;
  if (counterType) {
    const counterPool = regionPool.filter((id) => {
      const p = byId.get(id);
      return p?.types.includes(counterType);
    });
    if (counterPool.length > 0) {
      candidatePool = counterPool;
    }
  }

  const excludingStarter = candidatePool.filter((id) => id !== starter.dexNumber);
  if (excludingStarter.length > 0) candidatePool = excludingStarter;

  const pickId =
    candidatePool[Math.floor(rng() * candidatePool.length)] ??
    regionPool[0] ??
    1;
  return getPokemonById(pickId).catch(() => getPokemonById(1));
}

function getLegendaryPool(region: string, all: Pokemon[]): number[] {
  const entry = Object.entries(GEN_REGION).find(
    ([, r]) => r.toLowerCase() === region.toLowerCase(),
  );
  const gen = entry ? Number(entry[0]) : undefined;
  const pool = all
    .filter(
      (p) =>
        (gen === undefined || p.generation === gen) &&
        (p.isLegendary || p.isMythical),
    )
    .map((p) => p.dexNumber);
  if (pool.length > 0) return pool;
  return all
    .filter((p) => p.isLegendary || p.isMythical)
    .map((p) => p.dexNumber);
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
export async function rollAdventure(
  seed: string,
  difficulty?: string,
): Promise<Adventure> {
  const rng = mulberry32(hashSeed(seed));

  const trainer = {
    name: pick(TRAINER_NAMES, rng),
    role: pick(TRAINER_ROLES, rng),
    style: pick(TRAINER_STYLES, rng),
  };
  const region = pick(REGIONS, rng);
  const diff =
    difficulty && DIFFICULTIES.includes(difficulty as (typeof DIFFICULTIES)[number])
      ? difficulty
      : pick(DIFFICULTIES, rng);
  const goal = pick(GOALS, rng);
  const challenge = pick(CHALLENGES, rng);

  const starters = getStarters();
  const starterId = starters[Math.floor(rng() * starters.length)];
  const starter = await getPokemonById(starterId).catch(() =>
    getPokemonById(1),
  );

  const regionPool = await getPoolByRegion(region);
  const all = getAllPokemon();

  const rival = {
    name: pick(RIVAL_NAMES, rng),
    title: pick(RIVAL_TITLES, rng),
    starter: await getRivalStarter(starter, regionPool, rng, all),
  };

  const difficultyPool = getDifficultyPool(regionPool, diff, rng, all);
  const team = await pickDistinct(difficultyPool, 6, rng);

  const legendaryPool = getLegendaryPool(region, all);
  const legendaryId =
    legendaryPool[Math.floor(rng() * legendaryPool.length)] ?? 1;
  const legendaryPokemon = await getPokemonById(legendaryId).catch(() =>
    getPokemonById(1),
  );
  const legendary = {
    pokemon: legendaryPokemon,
    role: pick(LEGENDARY_ROLES, rng),
  };

  // Static lookup — gyms are fixed game knowledge, no RNG involved, so
  // seed-replay semantics are unaffected.
  const gymJourney = GYM_JOURNEYS[region] ?? GYM_JOURNEYS.kanto;

  return {
    seed,
    trainer,
    region,
    difficulty: diff,
    goal,
    challenge,
    starter,
    team,
    rival,
    legendary,
    gymJourney,
  };
}
