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

export const DIFFICULTIES = [
  "Easy",
  "Normal",
  "Hard",
  "Extreme",
] as const;

export const RIVAL_NAMES = [
  "Leo", "Zoe", "Max", "Rin", "Tess", "Noah", "Elio", "Mina",
] as const;

export const RIVAL_TITLES = [
  "Childhood Rival",
  "Mysterious Prodigy",
  "Gym Leader's Kid",
  "Roaming Challenger",
  "Team Rocket hopeful",
  "Professor's Assistant",
  "Rival from Another Region",
] as const;

export const LEGENDARY_ROLES = [
  "Final Trial",
  "Roaming Legend",
  "Mythic Clue",
  "Ancient Guardian",
  "Prophecy Encounter",
  "Hidden Sanctuary",
] as const;

// ---- Gym Journey: 8 fixed stops per region (static, no RNG) ----
// Alola has no gyms — the Island Challenge trials stand in for them.
// Version picks: Unova = BW, Galar = Sword side, Hoenn 8th = Wallace.

export interface GymStop {
  leader: string;
  type: string;
  badge: string;
}

export const GYM_JOURNEYS: Record<string, GymStop[]> = {
  kanto: [
    { leader: "Brock", type: "rock", badge: "Boulder Badge" },
    { leader: "Misty", type: "water", badge: "Cascade Badge" },
    { leader: "Lt. Surge", type: "electric", badge: "Thunder Badge" },
    { leader: "Erika", type: "grass", badge: "Rainbow Badge" },
    { leader: "Koga", type: "poison", badge: "Soul Badge" },
    { leader: "Sabrina", type: "psychic", badge: "Marsh Badge" },
    { leader: "Blaine", type: "fire", badge: "Volcano Badge" },
    { leader: "Giovanni", type: "ground", badge: "Earth Badge" },
  ],
  johto: [
    { leader: "Falkner", type: "flying", badge: "Zephyr Badge" },
    { leader: "Bugsy", type: "bug", badge: "Hive Badge" },
    { leader: "Whitney", type: "normal", badge: "Plain Badge" },
    { leader: "Morty", type: "ghost", badge: "Fog Badge" },
    { leader: "Chuck", type: "fighting", badge: "Storm Badge" },
    { leader: "Jasmine", type: "steel", badge: "Mineral Badge" },
    { leader: "Pryce", type: "ice", badge: "Glacier Badge" },
    { leader: "Clair", type: "dragon", badge: "Rising Badge" },
  ],
  hoenn: [
    { leader: "Roxanne", type: "rock", badge: "Stone Badge" },
    { leader: "Brawly", type: "fighting", badge: "Knuckle Badge" },
    { leader: "Wattson", type: "electric", badge: "Dynamo Badge" },
    { leader: "Flannery", type: "fire", badge: "Heat Badge" },
    { leader: "Norman", type: "normal", badge: "Balance Badge" },
    { leader: "Winona", type: "flying", badge: "Feather Badge" },
    { leader: "Tate & Liza", type: "psychic", badge: "Mind Badge" },
    { leader: "Wallace", type: "water", badge: "Rain Badge" },
  ],
  sinnoh: [
    { leader: "Roark", type: "rock", badge: "Coal Badge" },
    { leader: "Gardenia", type: "grass", badge: "Forest Badge" },
    { leader: "Maylene", type: "fighting", badge: "Cobble Badge" },
    { leader: "Crasher Wake", type: "water", badge: "Fen Badge" },
    { leader: "Fantina", type: "ghost", badge: "Relic Badge" },
    { leader: "Byron", type: "steel", badge: "Mine Badge" },
    { leader: "Candice", type: "ice", badge: "Icicle Badge" },
    { leader: "Volkner", type: "electric", badge: "Beacon Badge" },
  ],
  unova: [
    { leader: "Cilan", type: "grass", badge: "Trio Badge" },
    { leader: "Lenora", type: "normal", badge: "Basic Badge" },
    { leader: "Burgh", type: "bug", badge: "Insect Badge" },
    { leader: "Elesa", type: "electric", badge: "Bolt Badge" },
    { leader: "Clay", type: "ground", badge: "Quake Badge" },
    { leader: "Skyla", type: "flying", badge: "Jet Badge" },
    { leader: "Drayden", type: "dragon", badge: "Legend Badge" },
    { leader: "Marlon", type: "water", badge: "Wave Badge" },
  ],
  kalos: [
    { leader: "Viola", type: "bug", badge: "Bug Badge" },
    { leader: "Grant", type: "rock", badge: "Cliff Badge" },
    { leader: "Korrina", type: "fighting", badge: "Rumble Badge" },
    { leader: "Ramos", type: "grass", badge: "Plant Badge" },
    { leader: "Clemont", type: "electric", badge: "Voltage Badge" },
    { leader: "Valerie", type: "fairy", badge: "Fairy Badge" },
    { leader: "Olympia", type: "psychic", badge: "Psychic Badge" },
    { leader: "Wulfric", type: "ice", badge: "Iceberg Badge" },
  ],
  alola: [
    { leader: "Ilima", type: "normal", badge: "Verdant Cavern Trial" },
    { leader: "Lana", type: "water", badge: "Brooklet Hill Trial" },
    { leader: "Kiawe", type: "fire", badge: "Wela Volcano Trial" },
    { leader: "Mallow", type: "grass", badge: "Lush Jungle Trial" },
    { leader: "Sophocles", type: "electric", badge: "Hokulani Observatory Trial" },
    { leader: "Acerola", type: "ghost", badge: "Thrifty Megamart Trial" },
    { leader: "Mina", type: "fairy", badge: "Poni Island Trial" },
    { leader: "Hala", type: "fighting", badge: "Melemele Grand Trial" },
  ],
  galar: [
    { leader: "Milo", type: "grass", badge: "Grass Badge" },
    { leader: "Nessa", type: "water", badge: "Water Badge" },
    { leader: "Kabu", type: "fire", badge: "Fire Badge" },
    { leader: "Bea", type: "fighting", badge: "Fighting Badge" },
    { leader: "Opal", type: "fairy", badge: "Fairy Badge" },
    { leader: "Gordie", type: "rock", badge: "Rock Badge" },
    { leader: "Piers", type: "dark", badge: "Dark Badge" },
    { leader: "Raihan", type: "dragon", badge: "Dragon Badge" },
  ],
  paldea: [
    { leader: "Katy", type: "bug", badge: "Bug Badge" },
    { leader: "Brassius", type: "grass", badge: "Grass Badge" },
    { leader: "Iono", type: "electric", badge: "Electric Badge" },
    { leader: "Kofu", type: "water", badge: "Water Badge" },
    { leader: "Larry", type: "normal", badge: "Normal Badge" },
    { leader: "Ryme", type: "ghost", badge: "Ghost Badge" },
    { leader: "Tulip", type: "psychic", badge: "Psychic Badge" },
    { leader: "Grusha", type: "ice", badge: "Ice Badge" },
  ],
};

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
  difficulty: string;
  starter: Pokemon;
  team: Pokemon[];
  rival: { name: string; title: string; starter: Pokemon };
  legendary: { pokemon: Pokemon; role: string };
  gymJourney: GymStop[];
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
    `Difficulty: ${a.difficulty}`,
    `Starter: ${a.starter.displayName}`,
    `Challenge: ${a.challenge}`,
    `Team: ${a.team.length} Pokémon`,
    a.region === "alola"
      ? `Gym Journey: ${a.gymJourney.length} trials in Alola`
      : `Gym Journey: ${a.gymJourney.length} gyms in ${a.region.charAt(0).toUpperCase() + a.region.slice(1)}`,
    `Goal: ${a.goal}`,
    "",
    "Roll yours at PockRoll",
  ];
  return lines.join("\n");
}
