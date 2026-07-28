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

export function titleCase(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
