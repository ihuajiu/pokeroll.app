export const REGIONS = [
  "kanto",
  "johto",
  "hoenn",
  "sinnoh",
  "unova",
  "kalos",
  "alola",
  "galar",
  "paldea",
] as const;

export const TYPES = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
] as const;

export const GENS = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

export const REGION_GAME: Record<string, string> = {
  kanto: "Red & Blue",
  johto: "Gold & Silver",
  hoenn: "Ruby & Sapphire",
  sinnoh: "Diamond & Pearl",
  unova: "Black & White",
  kalos: "X & Y",
  alola: "Sun & Moon",
  galar: "Sword & Shield",
  paldea: "Scarlet & Violet",
};

// Region ↔ generation correspondence (region debuted in that generation).
export const REGION_GEN: Record<string, number> = {
  kanto: 1,
  johto: 2,
  hoenn: 3,
  sinnoh: 4,
  unova: 5,
  kalos: 6,
  alola: 7,
  galar: 8,
  paldea: 9,
};

export const GEN_REGION: Record<number, string> = Object.fromEntries(
  Object.entries(REGION_GEN).map(([r, g]) => [g, r]),
) as Record<number, string>;

// Types that debuted after Gen 1 (all others default to 1).
export const TYPE_GEN: Record<string, number> = {
  dark: 2,
  steel: 2,
  fairy: 6,
};

export function titleCase(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
