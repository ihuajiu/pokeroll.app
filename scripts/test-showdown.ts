import fs from "node:fs";
import { buildShowdownSet, buildShowdownTeam, speciesName } from "@/lib/showdown";
import type { Pokemon } from "@/lib/types";

const pokedex = JSON.parse(fs.readFileSync("data/pokedex.json", "utf8"));
const byName = new Map<string, Pokemon>(pokedex.pokemon.map((p: Pokemon) => [p.name, p]));

const tests = [
  "pikachu",
  "charizard-mega-x",
  "darmanitan-galar-standard",
  "gigantamax-charizard",
  "tauros-paldea-combat-breed",
  "farfetchd",
  "mewtwo",
  "gengar-mega",
];

for (const name of tests) {
  const p = byName.get(name);
  if (!p) { console.log(`MISSING ${name}`); continue; }
  console.log(`\n===== ${name} -> species ${speciesName(p)} =====`);
  console.log(buildShowdownSet(p, { level: 100 }));
}

// Team of 3
const team = ["pikachu", "charizard", "snorlax"].map((n) => byName.get(n)!);
console.log("\n\n===== TEAM (lv50) =====");
console.log(buildShowdownTeam(team, { level: 50 }));
