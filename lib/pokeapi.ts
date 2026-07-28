import type { Pokemon, PokemonStats } from "./types";

const BASE = "https://pokeapi.co/api/v2";

// Generation number -> region (1:1 for the main regions)
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

function genNameToNumber(gen: string): number {
  // e.g. "generation-i" -> 1
  const map: Record<string, number> = {
    "generation-i": 1,
    "generation-ii": 2,
    "generation-iii": 3,
    "generation-iv": 4,
    "generation-v": 5,
    "generation-vi": 6,
    "generation-vii": 7,
    "generation-viii": 8,
    "generation-ix": 9,
  };
  return map[gen] ?? 0;
}

function toTitle(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function mapStats(arr: { base_stat: number; stat: { name: string } }[]): PokemonStats {
  const get = (n: string) => arr.find((s) => s.stat.name === n)?.base_stat ?? 0;
  const hp = get("hp");
  const atk = get("attack");
  const def = get("defense");
  const spa = get("special-attack");
  const spd = get("special-defense");
  const spe = get("speed");
  return { hp, atk, def, spa, spd, spe };
}

// Hardcoded starter pokemon ids across generations (the "cool" final or middle not needed)
const STARTER_IDS: number[] = [
  // Gen1
  1, 4, 7,
  // Gen2
  152, 155, 158,
  // Gen3
  252, 255, 258,
  // Gen4
  387, 390, 393,
  // Gen5
  495, 498, 501,
  // Gen6
  650, 653, 656,
  // Gen7
  722, 725, 728,
  // Gen8
  810, 813, 816,
  // Gen9
  906, 909, 912,
];

async function fetchJson(url: string, revalidate = 86400, retries = 2): Promise<any> {
  let lastErr: unknown;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, { next: { revalidate } });
      if (res.status === 429 || res.status >= 500) {
        // rate limited / transient server error -> retry with backoff
        throw new Error(`PokeAPI transient ${res.status} for ${url}`);
      }
      if (!res.ok) throw new Error(`PokeAPI request failed: ${url} (${res.status})`);
      return res.json();
    } catch (e) {
      lastErr = e;
      if (attempt < retries) {
        await new Promise((r) => setTimeout(r, 300 * (attempt + 1)));
      }
    }
  }
  throw lastErr;
}

// Fallback if the dex-count probe fails (keeps the generator alive during API outages)
const FALLBACK_DEX_COUNT = 1010;
let dexCountCache: number | null = null;
async function getDexCount(): Promise<number> {
  if (dexCountCache) return dexCountCache;
  let count = FALLBACK_DEX_COUNT;
  try {
    const data = await fetchJson(`${BASE}/pokemon?limit=1`, 86400 * 30);
    if (typeof data.count === "number" && data.count > 0) count = data.count;
  } catch {
    // keep fallback on API outage
  }
  dexCountCache = count;
  return count;
}

function randomInt(max: number): number {
  return Math.floor(Math.random() * max) + 1;
}

export async function getPokemonById(idOrName: number | string): Promise<Pokemon> {
  const p = await fetchJson(`${BASE}/pokemon/${idOrName}`);
  const species = await fetchJson(`${BASE}/pokemon-species/${p.id}`);

  const stats = mapStats(p.stats);
  const bst = stats.hp + stats.atk + stats.def + stats.spa + stats.spd + stats.spe;
  const gen = genNameToNumber(species.generation?.name ?? "generation-i");

  return {
    name: p.name,
    displayName: toTitle(p.name),
    dexNumber: p.id,
    types: p.types.map((t: any) => t.type.name),
    abilities: (p.abilities ?? []).map((a: any) => toTitle(a.ability.name)),
    stats,
    bst,
    generation: gen,
    region: GEN_REGION[gen] ?? "Unknown",
    sprite: p.sprites?.front_default ?? "",
    shinySprite: p.sprites?.front_shiny ?? undefined,
    isLegendary: !!species.is_legendary,
    isMythical: !!species.is_mythical,
  };
}

export async function getRandomPokemon(pool?: number[]): Promise<Pokemon> {
  if (pool && pool.length > 0) {
    let lastErr: unknown;
    for (let attempt = 0; attempt < 5; attempt++) {
      const id = pool[Math.floor(Math.random() * pool.length)];
      try {
        return await getPokemonById(id);
      } catch (e) {
        lastErr = e;
      }
    }
    throw lastErr;
  }
  const count = await getDexCount();
  let lastErr: unknown;
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      return await getPokemonById(randomInt(count));
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr;
}

export async function getPoolByGeneration(gen: number): Promise<number[]> {
  const data = await fetchJson(`${BASE}/generation/${gen}`);
  return (data.pokemon_species ?? []).map((s: any) => {
    const parts = (s.url as string).split("/").filter(Boolean);
    return Number(parts[parts.length - 1]);
  });
}

export async function getPoolByType(type: string): Promise<number[]> {
  const data = await fetchJson(`${BASE}/type/${type}`);
  return (data.pokemon ?? []).map((s: any) => {
    const url = s.pokemon?.url ?? s.url;
    const parts = (url as string).split("/").filter(Boolean);
    return Number(parts[parts.length - 1]);
  });
}

export function getPoolByRegion(region: string): Promise<number[]> {
  const entry = Object.entries(GEN_REGION).find(([, r]) => r.toLowerCase() === region.toLowerCase());
  if (!entry) return Promise.resolve([]);
  return getPoolByGeneration(Number(entry[0]));
}

export function getStarters(): number[] {
  return STARTER_IDS;
}

// ---------------------------------------------------------------------------
// Variant generators (T2.2 data-type + T2.3 play-type helpers)
// ---------------------------------------------------------------------------

const ALL_TYPES = [
  "normal", "fire", "water", "electric", "grass", "ice", "fighting",
  "poison", "ground", "flying", "psychic", "bug", "rock", "ghost",
  "dragon", "dark", "steel", "fairy",
];

let abilityListCache: string[] | null = null;
let moveListCache: string[] | null = null;

async function getAbilityList(): Promise<string[]> {
  if (abilityListCache) return abilityListCache;
  let list: string[] = [];
  try {
    const data = await fetchJson(`${BASE}/ability?limit=2000`);
    list = (data.results ?? []).map((r: any) => r.name);
  } catch {
    list = [];
  }
  abilityListCache = list;
  return list;
}

async function getMoveList(): Promise<string[]> {
  if (moveListCache) return moveListCache;
  let list: string[] = [];
  try {
    const data = await fetchJson(`${BASE}/move?limit=2000`);
    list = (data.results ?? []).map((r: any) => r.name);
  } catch {
    list = [];
  }
  moveListCache = list;
  return list;
}

export async function getPoolByAbility(ability: string): Promise<number[]> {
  const data = await fetchJson(`${BASE}/ability/${ability}`);
  return (data.pokemon ?? []).map((e: any) => {
    const parts = (e.pokemon.url as string).split("/").filter(Boolean);
    return Number(parts[parts.length - 1]);
  });
}

export async function getPoolByMove(move: string): Promise<number[]> {
  const data = await fetchJson(`${BASE}/move/${move}`);
  return (data.learned_by_pokemon ?? []).map((e: any) => {
    const parts = (e.url as string).split("/").filter(Boolean);
    return Number(parts[parts.length - 1]);
  });
}

function pick<T>(arr: T[]): T | undefined {
  return arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined;
}

export type VariantResult = {
  kind: string;
  value?: string | number;
  pokemon: Pokemon;
};

export async function getVariant(kind: string): Promise<VariantResult> {
  switch (kind) {
    case "type": {
      const t = pick(ALL_TYPES);
      if (!t) return { kind, pokemon: await getRandomPokemon() };
      const pool = await getPoolByType(t);
      const pokemon = pool.length ? await getRandomPokemon(pool) : await getRandomPokemon();
      return { kind, value: t, pokemon };
    }
    case "ability": {
      const list = await getAbilityList();
      const a = pick(list);
      if (!a) return { kind, pokemon: await getRandomPokemon() };
      const pool = await getPoolByAbility(a);
      const pokemon = pool.length ? await getRandomPokemon(pool) : await getRandomPokemon();
      return { kind, value: a, pokemon };
    }
    case "move": {
      const list = await getMoveList();
      const m = pick(list);
      if (!m) return { kind, pokemon: await getRandomPokemon() };
      const pool = await getPoolByMove(m);
      const pokemon = pool.length ? await getRandomPokemon(pool) : await getRandomPokemon();
      return { kind, value: m, pokemon };
    }
    case "bst": {
      const pokemon = await getRandomPokemon();
      return { kind, value: pokemon.bst, pokemon };
    }
    case "number": {
      const pokemon = await getRandomPokemon();
      return { kind, value: pokemon.dexNumber, pokemon };
    }
    case "cute": {
      const pool = await getPoolByCute();
      const pokemon = pool.length ? await getRandomPokemon(pool) : await getRandomPokemon();
      return { kind, pokemon };
    }
    case "mythical": {
      return { kind, pokemon: await randomPokemonFromNames(MYTHICAL_NAMES) };
    }
    case "mega": {
      return { kind, pokemon: await randomPokemonFromNames(MEGA_NAMES) };
    }
    case "nickname": {
      const pokemon = await getRandomPokemon();
      return { kind, value: getNickname(pokemon), pokemon };
    }
    case "card": {
      const pokemon = await getRandomPokemon();
      return { kind, pokemon };
    }
    default:
      return { kind, pokemon: await getRandomPokemon() };
  }
}

// ---------------------------------------------------------------------------
// T2.5 enhanced variant helpers (cute / mythical / mega / nickname)
// ---------------------------------------------------------------------------

const CUTE_TYPES = ["fairy", "normal", "bug", "grass"];

let cutePoolCache: number[] | null = null;
async function getPoolByCute(): Promise<number[]> {
  if (cutePoolCache) return cutePoolCache;
  const pools = await Promise.all(
    CUTE_TYPES.map((t) => getPoolByType(t).catch(() => [] as number[])),
  );
  const set = new Set<number>();
  pools.flat().forEach((id) => set.add(id));
  cutePoolCache = Array.from(set);
  return cutePoolCache;
}

const MYTHICAL_NAMES = [
  "mew", "celebi", "jirachi", "deoxys", "phione", "manaphy", "darkrai",
  "shaymin", "arceus", "victini", "keldeo", "meloetta", "genesect",
  "diancie", "hoopa", "volcanion", "magearna", "marshadow", "zeraora",
  "meltan", "melmetal", "zarude", "pecharunt",
];

const MEGA_NAMES = [
  "venusaur-mega", "charizard-mega-x", "charizard-mega-y", "blastoise-mega",
  "beedrill-mega", "pidgeot-mega", "alakazam-mega", "slowbro-mega",
  "gengar-mega", "kangaskhan-mega", "pinsir-mega", "gyarados-mega",
  "aerodactyl-mega", "mewtwo-mega-x", "mewtwo-mega-y", "ampharos-mega",
  "steelix-mega", "scizor-mega", "heracross-mega", "houndoom-mega",
  "tyranitar-mega", "blaziken-mega", "gardevoir-mega", "mawile-mega",
  "medicham-mega", "manectric-mega", "banette-mega", "absol-mega",
  "garchomp-mega", "lucario-mega", "abomasnow-mega", "gallade-mega",
  "audino-mega", "diancie-mega", "metagross-mega", "latias-mega",
  "latios-mega", "kyogre-primal", "groudon-primal", "rayquaza-mega",
  "swampert-mega", "sableye-mega", "sharpedo-mega", "camerupt-mega",
  "altaria-mega", "glalie-mega", "salamence-mega", "lopunny-mega",
  "sceptile-mega", "aggron-mega",
];

function getNickname(p: Pokemon): string {
  const prefixes = [
    "Lil'", "Sir", "Captain", "Princess", "Queen", "King", "Baby",
    "Fluffy", "Shadow", "Sparky", "Bubbly", "Tiny", "Mighty", "Sleepy",
    "Brave", "Cuddly", "Pixel", "Echo", "Star", "Chibi",
  ];
  const suffixes = ["-chan", "-kun", " Jr.", " the Great", "kins", "ling", "puff", "y"];
  if (Math.random() < 0.5) {
    const pre = prefixes[Math.floor(Math.random() * prefixes.length)];
    return `${pre} ${p.displayName}`;
  }
  const suf = suffixes[Math.floor(Math.random() * suffixes.length)];
  return `${p.displayName}${suf}`;
}

async function randomPokemonFromNames(names: string[]): Promise<Pokemon> {
  const name = pick(names);
  if (name) {
    try {
      return await getPokemonById(name);
    } catch {
      // fall through to fully random on any API failure
    }
  }
  return getRandomPokemon();
}

export { GEN_REGION };
