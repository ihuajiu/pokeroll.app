import {
  getPokemonById,
  getPoolByRegion,
  getStarters,
} from "@/lib/pokeapi";
import { REGIONS, titleCase } from "@/lib/seo";
import { hashSeed, mulberry32 } from "@/lib/challenge";
import type { Pokemon } from "@/lib/types";

// ---- Static narrative datasets (no external API) ----

export const TRAINER_NAMES = [
  "Alex", "Sora", "Mira", "Kai", "Iris", "Nova", "Ren", "Lyra",
  "Theo", "Vera", "Jin", "Cleo",
] as const;

export const TRAINER_ROLES = [
  "Ace Trainer",
  "Dragon Tamer",
  "Gym Challenger",
  "Researcher",
  "Rival",
  "Explorer",
  "Collector",
] as const;

export const GOALS = [
  "Become Champion",
  "Complete Pokédex",
  "Discover Legendary Pokémon",
  "Build the Ultimate Team",
  "Defeat All Gyms",
  "Become a Type Master",
] as const;

export const CHALLENGES = [
  "Nuzlocke Challenge",
  "Hardcore Nuzlocke",
  "Mono-Type Run",
  "No Healing Items",
  "Set Mode Only",
  "Scramble Challenge",
  "Wonder Locke",
  "Egglocke",
] as const;

// ---- Adventure shape ----

export interface Adventure {
  seed: string;
  trainer: { name: string; role: string };
  region: string;
  goal: string;
  challenge: string;
  starter: Pokemon;
  team: Pokemon[];
}

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
  // Fisher–Yates partial shuffle using provided RNG (deterministic)
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
 */
export async function rollAdventure(seed: string): Promise<Adventure> {
  const rng = mulberry32(hashSeed(seed));

  const trainer = {
    name: pick(TRAINER_NAMES, rng),
    role: pick(TRAINER_ROLES, rng),
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

export function randomSeed(): string {
  return Math.random().toString(36).slice(2, 10);
}

export function shareText(a: Adventure): string {
  const lines = [
    "My Pokémon Adventure",
    "",
    `Trainer: ${a.trainer.name} — ${a.trainer.role}`,
    `Region: ${titleCase(a.region)}`,
    `Starter: ${a.starter.displayName}`,
    `Challenge: ${a.challenge}`,
    `Team: ${a.team.length} Pokémon`,
    `Goal: ${a.goal}`,
    "",
    "Roll yours at PockRoll",
  ];
  return lines.join("\n");
}
