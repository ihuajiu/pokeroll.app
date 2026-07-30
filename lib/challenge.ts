import {
  getPokemonById,
  getRandomPokemon,
  getPoolByType,
  getPoolByGeneration,
  getPoolByRegion,
} from "@/lib/pokeapi";
import type { Pokemon } from "@/lib/types";
import { titleCase } from "@/lib/seo";

export type ChallengeMode = "guess" | "collect" | "team" | "shiny";

export interface ChallengeConfig {
  mode: ChallengeMode;
  count: number;
  type?: string;
  gen?: number;
  region?: string;
  seed: string;
}

export interface Challenge {
  config: ChallengeConfig;
  title: string;
  description: string;
  pokemon: Pokemon[];
  encounters?: number;
}

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

export async function getChallenge(config: ChallengeConfig): Promise<Challenge> {
  const { mode, count, type, gen, region, seed } = config;
  const clamped = Math.max(1, Math.min(count, 12));
  const rng = mulberry32(
    hashSeed([seed, mode, clamped, type ?? "", gen ?? "", region ?? ""].join("|")),
  );

  if (mode === "shiny") {
    const p = 1 / 4096;
    const r = rng();
    const encounters = Math.max(
      1,
      Math.floor(Math.log(1 - r) / Math.log(1 - p)),
    );
    const pokemon = [await getRandomPokemon()];
    return {
      config,
      title: "Shiny Hunt Challenge",
      description: `Your next shiny appears after ${encounters.toLocaleString()} random encounters. How long will you grind?`,
      pokemon,
      encounters,
    };
  }

  let pool: number[] = [];
  let label = "";
  if (region) {
    pool = await getPoolByRegion(region);
    label = titleCase(region);
  } else if (type) {
    pool = await getPoolByType(type);
    label = titleCase(type);
  } else if (gen) {
    pool = await getPoolByGeneration(gen);
    label = `Gen ${gen}`;
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

  let title = "Pokémon Challenge";
  let description = "";
  if (mode === "guess") {
    title = "Guess the Pokémon";
    description = `We hid the names of ${clamped} random Pokémon. Reveal them one by one and test your Poké-knowledge!`;
  } else if (mode === "collect") {
    title = `Collect ${clamped} ${label ? label + " " : ""}Pokémon`;
    description = `Your mission: round up ${clamped} ${
      label ? label + "-type " : ""
    }Pokémon.`;
  } else if (mode === "team") {
    title = `Build a ${clamped}-Pokémon Team`;
    description = `Assemble a squad of ${clamped} Pokémon${
      label ? ` from ${label}` : ""
    }. Add them all to your team when ready!`;
  }

  return { config, title, description, pokemon };
}
