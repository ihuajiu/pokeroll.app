import type { Pokemon } from "./types";
import {
  getAllPokemon,
  getPokemonByIdLocal,
  getPokemonByNameLocal,
  getPoolByTypeLocal,
  getPoolByGenerationLocal,
  getPoolByAbilityLocal,
  getPoolByMoveLocal,
  getAbilityListLocal,
  getMoveListLocal,
} from "./pokedex";

export { getAllPokemon } from "./pokedex";

const GEN_REGION: Record<number, string> = {
  1: "Kanto",
  2: "Johto",
  3: "Hoenn",
  4: "Sinnoh",
  5: "Unova",
  6: "Kalos",
  7: "Alola",
  8: "Galar",
  9: "Paldea",
};
export { GEN_REGION };

const ALL_TYPES = [
  "normal", "fire", "water", "electric", "grass", "ice", "fighting",
  "poison", "ground", "flying", "psychic", "bug", "rock", "ghost",
  "dragon", "dark", "steel", "fairy",
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ---- Local-only data access (no runtime network) ----

export async function getPokemonById(idOrName: number | string): Promise<Pokemon> {
  const p =
    typeof idOrName === "number"
      ? getPokemonByIdLocal(idOrName)
      : getPokemonByNameLocal(idOrName);
  if (!p) throw new Error(`Pokémon not found: ${idOrName}`);
  return p;
}

export async function getRandomPokemon(pool?: number[]): Promise<Pokemon> {
  if (pool && pool.length > 0) {
    let lastErr: unknown;
    for (let i = 0; i < 5; i++) {
      const id = pool[Math.floor(Math.random() * pool.length)];
      try {
        return await getPokemonById(id);
      } catch (e) {
        lastErr = e;
      }
    }
    throw lastErr instanceof Error ? lastErr : new Error("No Pokémon in pool");
  }
  const all = getAllPokemon();
  const p = all[Math.floor(Math.random() * all.length)];
  if (!p) throw new Error("Pokédex is empty");
  return p;
}

export async function getPoolByGeneration(gen: number): Promise<number[]> {
  return getPoolByGenerationLocal(gen);
}

export async function getPoolByType(type: string): Promise<number[]> {
  return getPoolByTypeLocal(type);
}

export async function getPoolByRegion(region: string): Promise<number[]> {
  const entry = Object.entries(GEN_REGION).find(
    ([, r]) => r.toLowerCase() === region.toLowerCase(),
  );
  if (!entry) return [];
  return getPoolByGenerationLocal(Number(entry[0]));
}

const STARTER_IDS = [1, 4, 7, 152, 155, 158, 252, 255, 258, 387, 390, 393, 495, 498, 501, 650, 653, 656, 722, 725, 728, 810, 813, 816, 906, 909, 912];
export function getStarters(): number[] {
  return STARTER_IDS;
}

// ---- Ability / Move (local indexing) ----

let abilityListCache: string[] | null = null;
let moveListCache: string[] | null = null;

export async function getAbilityList(): Promise<string[]> {
  if (!abilityListCache) abilityListCache = getAbilityListLocal();
  return abilityListCache;
}
export async function getMoveList(): Promise<string[]> {
  if (!moveListCache) moveListCache = getMoveListLocal();
  return moveListCache;
}

export async function getPoolByAbility(ability: string): Promise<number[]> {
  return getPoolByAbilityLocal(ability);
}
export async function getPoolByMove(move: string): Promise<number[]> {
  return getPoolByMoveLocal(move);
}

// ---- Fun variants ----

const CUTE_TYPES = ["fairy", "normal", "grass", "water", "electric", "psychic"];
async function getPoolByCute(): Promise<number[]> {
  const pools = await Promise.all(CUTE_TYPES.map((t) => getPoolByTypeLocal(t)));
  return Array.from(new Set(pools.flat()));
}

const MYTHICAL_NAMES = ["mew", "celebi", "jirachi", "deoxys", "manaphy", "darkrai", "shaymin", "arceus", "victini", "keldeo", "meloetta", "genesect", "diancie", "hoopa", "volcanion", "magearna", "marshadow", "zacian", "zamazenta", "eternatus", "zarude", "koraidon", "miraidon", "pecharunt"];
const MEGA_NAMES = ["charizard-mega-x", "charizard-mega-y", "venusaur-mega", "blastoise-mega", "alakazam-mega", "gengar-mega", "kangaskhan-mega", "pinsir-mega", "gyarados-mega", "aerodactyl-mega", "mewtwo-mega-x", "mewtwo-mega-y", "ampharos-mega", "scizor-mega", "heracross-mega", "houndoom-mega", "tyranitar-mega", "blaziken-mega", "gardevoir-mega", "mawile-mega", "medicham-mega", "banette-mega", "absol-mega", "garchomp-mega", "lucario-mega", "abomasnow-mega", "beedrill-mega", "pidgeot-mega", "slowbro-mega", "steelix-mega", "sceptile-mega", "swampert-mega", "sableye-mega", "sharpedo-mega", "camerupt-mega", "altaria-mega", "glalie-mega", "salamence-mega", "metagross-mega", "latias-mega", "latios-mega", "rayquaza-mega", "lopunny-mega", "gallade-mega", "audino-mega", "diancie-mega", "metagross-mega"];

async function randomPokemonFromNames(names: string[]): Promise<Pokemon> {
  const name = pick(names);
  return getPokemonByNameLocal(name) ?? getRandomPokemon();
}

const NICKNAMES = ["Sparky", "Bubbles", "Echo", "Pixel", "Mochi", "Zephyr", "Nova", "Cocoa", "Wisp", "Comet", "Pebble", "Indigo"];
function getNickname(): string {
  return pick(NICKNAMES);
}

export type VariantKey =
  | "type" | "ability" | "move" | "bst" | "number"
  | "starter" | "shiny" | "no-names"
  | "cute" | "mythical" | "mega" | "nickname" | "card";

export type VariantResult =
  | { kind: VariantKey; value: string; pokemon: Pokemon }
  | { kind: VariantKey; pokemon: Pokemon };

export async function getVariant(kind: string): Promise<VariantResult> {
  switch (kind) {
    case "type": {
      const type = pick(ALL_TYPES);
      const pool = getPoolByTypeLocal(type);
      const pokemon = await getRandomPokemon(pool);
      return { kind, value: type, pokemon };
    }
    case "ability": {
      const list = await getAbilityList();
      const ability = pick(list);
      const pool = getPoolByAbilityLocal(ability);
      const pokemon = await getRandomPokemon(pool);
      return { kind, value: ability, pokemon };
    }
    case "move": {
      const list = await getMoveList();
      const move = pick(list);
      const pool = getPoolByMoveLocal(move);
      const pokemon = await getRandomPokemon(pool);
      return { kind, value: move, pokemon };
    }
    case "bst": {
      const all = getAllPokemon();
      const pokemon = all.reduce((a, b) => (b.bst > a.bst ? b : a));
      return { kind, value: String(pokemon.bst), pokemon };
    }
    case "number": {
      const all = getAllPokemon();
      const pokemon = pick(all);
      return { kind, value: String(pokemon.dexNumber), pokemon };
    }
    case "cute": {
      const pool = await getPoolByCute();
      const pokemon = await getRandomPokemon(pool);
      return { kind, pokemon };
    }
    case "mythical": {
      const pokemon = await randomPokemonFromNames(MYTHICAL_NAMES);
      return { kind, pokemon };
    }
    case "mega": {
      const pokemon = await randomPokemonFromNames(MEGA_NAMES);
      return { kind, pokemon };
    }
    case "nickname": {
      const pokemon = await getRandomPokemon();
      return { kind, value: getNickname(), pokemon };
    }
    case "card":
    case "starter":
    case "shiny":
    case "no-names": {
      const pokemon =
        kind === "starter"
          ? await getRandomPokemon(getStarters())
          : await getRandomPokemon();
      return { kind, pokemon };
    }
    default:
      return { kind: kind as VariantKey, pokemon: await getRandomPokemon() };
  }
}
