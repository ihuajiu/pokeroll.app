import {
  getPokemonById,
  getRandomPokemon,
  getPoolByType,
  getPoolByGeneration,
  getPoolByRegion,
} from "@/lib/pokeapi";
import { getAllPokemon } from "@/lib/pokedex";
import { DIFFICULTIES } from "@/lib/adventure-types";
import type { Pokemon } from "@/lib/types";

export type ChallengeMode = "guess" | "shiny";
export type ChallengeDifficulty = (typeof DIFFICULTIES)[number];

export interface ChallengeConfig {
  mode: ChallengeMode;
  count?: number;
  type?: string;
  gen?: number;
  region?: string;
  seed: string;
  difficulty?: ChallengeDifficulty;
}

export interface Challenge {
  config: ChallengeConfig;
  title: string;
  description: string;
  pokemon: Pokemon[];
  encounters?: number;
  /** Shiny mode: the denominator of the 1-in-N odds for this difficulty. */
  odds?: number;
  /** Shiny mode: true on Easy — uniform pity draw, guaranteed within `odds`. */
  pity?: boolean;
}

// Shiny odds per difficulty — Normal matches the modern games' base rate.
// Easy is 2048/10 truncated (204) and uses a pity draw (see below).
const SHINY_ODDS: Record<string, number> = {
  Easy: 204,
  Normal: 4096,
  Hard: 8192,
  Extreme: 16384,
};

export function hashSeed(str: string): number {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return (h ^= h >>> 16) >>> 0;
}

export function mulberry32(a: number): () => number {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

async function pickDistinct(
  pool: number[],
  count: number,
  rng: () => number,
): Promise<Pokemon[]> {
  const arr = [...pool];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  const ids = arr.slice(0, Math.min(count, arr.length));
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

function maxCountForDifficulty(difficulty: string | undefined): number {
  switch (difficulty) {
    case "Normal":
      return 10;
    case "Hard":
      return 8;
    case "Extreme":
      return 6;
    case "Easy":
    default:
      // No difficulty = default of Easy.
      return 12;
  }
}

export async function getChallenge(config: ChallengeConfig): Promise<Challenge> {
  const { mode, count = 4, type, gen, region, seed, difficulty } = config;
  const maxCount = maxCountForDifficulty(difficulty);
  const clamped = Math.max(1, Math.min(count, maxCount));
  const rng = mulberry32(
    hashSeed([seed, mode, clamped, type ?? "", gen ?? "", region ?? "", difficulty ?? ""].join("|")),
  );

  if (mode === "shiny") {
    const odds = SHINY_ODDS[difficulty ?? "Easy"] ?? SHINY_ODDS.Easy;
    const p = 1 / odds;
    const r = rng();
    // Easy uses a pity draw — uniform in 1..odds, so the hunt is guaranteed
    // to end within `odds` clicks (avg ~odds/2). Other difficulties keep
    // the games' true geometric distribution, which can run long.
    const encounters =
      difficulty === "Easy"
        ? Math.max(1, Math.ceil(r * odds))
        : Math.max(
            1,
            Math.floor(Math.log(1 - r) / Math.log(1 - p)),
          );
    // Seeded target pick: the shared link must reproduce the exact shiny,
    // not just the encounter count. Second rng() call keeps existing N intact.
    const dex = getAllPokemon();
    const pokemon = [dex[Math.floor(rng() * dex.length)]];
    return {
      config,
      title: "Shiny Hunt Challenge",
      description:
        difficulty === "Easy"
          ? `Your next shiny appears after ${encounters.toLocaleString()} encounters — guaranteed within ${odds.toLocaleString()}.`
          : `Your next shiny appears after ${encounters.toLocaleString()} random encounters. How long will you grind?`,
      pokemon,
      encounters,
      odds,
      pity: difficulty === "Easy",
    };
  }

  let pool: number[] = [];
  if (region) {
    pool = await getPoolByRegion(region);
  } else if (type) {
    pool = await getPoolByType(type);
  } else if (gen) {
    pool = await getPoolByGeneration(gen);
  }

  let pokemon: Pokemon[];
  if (pool.length) {
    pokemon = await pickDistinct(pool, clamped, rng);
  } else {
    pokemon = [];
    const used = new Set<number>();
    let guard = 0;
    while (pokemon.length < clamped && guard < clamped * 8) {
      const p = await getRandomPokemon();
      if (p.dexNumber && !used.has(p.dexNumber)) {
        used.add(p.dexNumber);
        pokemon.push(p);
      }
      guard++;
    }
  }

  // Only "guess" reaches here — "shiny" returns early above.
  const title = "Guess the Pokémon";
  const description = `We hid the names of ${clamped} random Pokémon. Reveal them one by one and test your Poké-knowledge!`;

  return { config, title, description, pokemon };
}
