import type { Pokemon } from "@/lib/types";

// ---- Static narrative datasets (no external API, client-safe) ----

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

export const TRAINER_STYLES = [
  "Aggressive",
  "Defensive",
  "Tactical",
  "Balanced",
  "Reckless",
  "Patient",
  "Cunning",
  "Adaptive",
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

// ---- Adventure shape (client-safe, no fs/pokeapi) ----

export interface Adventure {
  seed: string;
  trainer: { name: string; role: string; style: string };
  region: string;
  goal: string;
  challenge: string;
  starter: Pokemon;
  team: Pokemon[];
}

export function randomSeed(): string {
  return Math.random().toString(36).slice(2, 10);
}

export function shareText(a: Adventure): string {
  const lines = [
    "My Pokémon Adventure",
    "",
    `Trainer: ${a.trainer.name} — ${a.trainer.role} (${a.trainer.style})`,
    `Region: ${a.region.charAt(0).toUpperCase() + a.region.slice(1)}`,
    `Starter: ${a.starter.displayName}`,
    `Challenge: ${a.challenge}`,
    `Team: ${a.team.length} Pokémon`,
    `Goal: ${a.goal}`,
    "",
    "Roll yours at PockRoll",
  ];
  return lines.join("\n");
}
