import fs from "fs";
import path from "path";
import type { Pokemon } from "./types";

// Local Pokédex built once by `scripts/fetch-pokedex.mjs`.
// Runtime never touches the network — everything is served from data/pokedex.json.
const DATA_PATH = path.join(process.cwd(), "data", "pokedex.json");

let all: Pokemon[] | null = null;
let byId: Map<number, Pokemon> | null = null;
let byName: Map<string, Pokemon> | null = null;
let byAbility: Map<string, number[]> | null = null;
let byMove: Map<string, number[]> | null = null;
let abilityList: string[] | null = null;
let moveList: string[] | null = null;

function load() {
  if (all) return;
  const raw = fs.readFileSync(DATA_PATH, "utf8");
  const json = JSON.parse(raw) as { pokemon: Pokemon[] };
  const list = json.pokemon ?? [];
  all = list;
  byId = new Map();
  byName = new Map();
  byAbility = new Map();
  byMove = new Map();
  const aSet = new Set<string>();
  const mSet = new Set<string>();

  for (const p of list) {
    byId.set(p.dexNumber, p);
    byName.set(p.name, p);
    for (const a of p.abilityNames ?? []) {
      aSet.add(a);
      const arr = byAbility.get(a) ?? [];
      arr.push(p.dexNumber);
      byAbility.set(a, arr);
    }
    for (const m of p.moveNames ?? []) {
      mSet.add(m);
      const arr = byMove.get(m) ?? [];
      arr.push(p.dexNumber);
      byMove.set(m, arr);
    }
  }
  abilityList = Array.from(aSet).sort();
  moveList = Array.from(mSet).sort();
}

export function getAllPokemon(): Pokemon[] {
  load();
  return all!;
}

export function getPokemonByIdLocal(id: number): Pokemon | undefined {
  load();
  return byId!.get(id);
}

export function getPokemonByNameLocal(name: string): Pokemon | undefined {
  load();
  return byName!.get(name);
}

export function getPoolByTypeLocal(type: string): number[] {
  load();
  return all!.filter((p) => p.types.includes(type)).map((p) => p.dexNumber);
}

export function getPoolByGenerationLocal(gen: number): number[] {
  load();
  return all!.filter((p) => p.generation === gen).map((p) => p.dexNumber);
}

export function getPoolByAbilityLocal(ability: string): number[] {
  load();
  return byAbility!.get(ability) ?? [];
}

export function getPoolByMoveLocal(move: string): number[] {
  load();
  return byMove!.get(move) ?? [];
}

export function getAbilityListLocal(): string[] {
  load();
  return abilityList!;
}

export function getMoveListLocal(): string[] {
  load();
  return moveList!;
}

export function getDexCountLocal(): number {
  load();
  return all!.length;
}
