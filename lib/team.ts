import {
  getAllPokemon,
  getPokemonById,
  getPoolByGeneration,
  getPoolByRegion,
  getPoolByType,
} from "@/lib/pokeapi";
import type { Pokemon } from "@/lib/types";
import { hashSeed, mulberry32 } from "@/lib/challenge";

export interface TeamRandomParams {
  region?: string;
  type?: string;
  gen?: string;
  count?: string;
  difficulty?: string;
  seed?: string;
}

export interface TeamRandomOptions {
  region?: string;
  type?: string;
  gen?: string | number;
  count?: string | number;
  difficulty?: string;
  seed?: string;
}

function pick<T>(arr: readonly T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

async function fetchById(id: number): Promise<Pokemon | null> {
  try {
    return await getPokemonById(id);
  } catch {
    return null;
  }
}

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export async function getRandomTeam(
  options: TeamRandomOptions = {},
): Promise<{ seed: string; pokemon: Pokemon[] }> {
  const {
    region,
    type,
    gen,
    count: countRaw,
    difficulty: diffRaw,
    seed: seedRaw,
  } = options;

  const countNum = Number(countRaw);
  const count = Math.min(12, Math.max(1, Number.isNaN(countNum) ? 6 : countNum));
  const difficulty = diffRaw || "Normal";
  const seed = seedRaw || Math.random().toString(36).slice(2, 10);

  // Pools intersect: gen ∩ region ∩ type. A single filter behaves exactly
  // as before; combining filters narrows the pool instead of silently
  // ignoring the later ones. With no filters at all, fall back to the
  // full dex — an empty pool here previously rolled an empty team.
  let pool: number[] | null = null;
  if (gen) pool = await getPoolByGeneration(Number(gen));
  if (region) {
    const r = await getPoolByRegion(region);
    pool = pool ? pool.filter((id) => r.includes(id)) : r;
  }
  if (type) {
    const t = await getPoolByType(type);
    pool = pool ? pool.filter((id) => t.includes(id)) : t;
  }
  const effectivePool = pool ?? getAllPokemon().map((p) => p.dexNumber);

  const rng = mulberry32(hashSeed(seed));
  const result: Pokemon[] = [];
  const usedDex = new Set<number>();
  const usedTypes = new Set<string>();

  const shuffled = shuffle(effectivePool, rng);
  let poolIndex = 0;
  let guard = 0;

  while (result.length < count && guard < count * 40) {
    guard++;

    let pokemon: Pokemon | null = null;
    if (effectivePool.length > 0 && poolIndex < shuffled.length) {
      pokemon = await fetchById(shuffled[poolIndex]);
      poolIndex++;
    }

    if (!pokemon) continue;

    if (difficulty !== "Easy" && usedDex.has(pokemon.dexNumber)) continue;

    const primaryType = pokemon.types[0];
    if (
      (difficulty === "Hard" || difficulty === "Extreme") &&
      primaryType &&
      usedTypes.has(primaryType)
    ) {
      continue;
    }

    usedDex.add(pokemon.dexNumber);
    if (primaryType) usedTypes.add(primaryType);
    result.push(pokemon);
  }

  return { seed, pokemon: result };
}
