// One-time: add the complete English flavor text as descriptionFull so the
// card can show the full description on hover when the short one is cut off.
// Run: node scripts/add-full-descriptions.mjs
import fs from "fs";
import path from "path";

const BASE = "https://pokeapi.co/api/v2";
const OUT = path.join(process.cwd(), "data", "pokedex.json");
const PREFERRED_VERSIONS = ["violet","scarlet","sword","shield","ultra-sun","ultra-moon","sun","moon","x","y","omega-ruby","alpha-sapphire","black-2","white-2","black","white","heartgold","soulsilver"];

async function fetchJson(url, retries = 4) {
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
      if (res.status === 404) throw new Error("http 404");
      if (res.status === 429 || res.status >= 500) throw new Error("transient " + res.status);
      if (!res.ok) throw new Error("http " + res.status);
      return await res.json();
    } catch (e) {
      const isFatal = e.message === "http 404";
      if (!isFatal && i < retries) { await new Promise((r) => setTimeout(r, 400 * (i + 1))); continue; }
      throw e;
    }
  }
  throw new Error("unreachable");
}
function cleanFlavor(t) { return t.replace(/[\f\n\r]+/g, " ").replace(/\s+/g, " ").trim(); }
function pickDescription(species) {
  if (!species) return undefined;
  const en = (species.flavor_text_entries ?? []).filter((e) => e.language.name === "en");
  if (!en.length) return undefined;
  const pick = en.find((e) => PREFERRED_VERSIONS.includes(e.version.name)) ?? en[0];
  return cleanFlavor(pick.flavor_text);
}
function runPool(items, concurrency, fn) {
  return new Promise((resolve) => {
    let i = 0, active = 0, done = 0;
    const total = items.length;
    function next() {
      if (i >= total && active === 0) return resolve();
      while (active < concurrency && i < total) {
        const item = items[i++];
        active++;
        fn(item).catch(() => {}).finally(() => { active--; done++; if (done % 200 === 0) console.log("  progress", done + "/" + total); next(); });
      }
    }
    next();
  });
}

async function main() {
  const dex = JSON.parse(fs.readFileSync(OUT, "utf8"));
  // species id per entry (forms share the base species)
  const nameToSpecies = new Map();
  const formNames = dex.pokemon.filter((p) => p.dexNumber > 1025 && p.dexNumber < 20000).map((p) => p.name);
  await runPool(formNames, 8, async (nm) => {
    try {
      const p = await fetchJson(BASE + "/pokemon/" + nm);
      nameToSpecies.set(nm, Number(p.species.url.split("/").filter(Boolean).pop()));
    } catch {}
  });
  const speciesIdOf = (p) => {
    if (p.dexNumber <= 1025) return p.dexNumber;
    if (p.dexNumber >= 20000) return p.dexNumber - 20000;
    return nameToSpecies.get(p.name) ?? p.dexNumber;
  };
  const uniqueSpecies = [...new Set(dex.pokemon.map(speciesIdOf))];
  console.log("fetching", uniqueSpecies.length, "species...");
  const fullCache = new Map();
  await runPool(uniqueSpecies, 10, async (id) => {
    try {
      const species = await fetchJson(BASE + "/pokemon-species/" + id);
      fullCache.set(id, pickDescription(species) || "");
    } catch {}
  });
  let added = 0;
  for (const p of dex.pokemon) {
    const full = fullCache.get(speciesIdOf(p));
    if (full && full !== p.description) {
      p.descriptionFull = full;
      added++;
    }
  }
  fs.writeFileSync(OUT, JSON.stringify({ generatedAt: dex.generatedAt, count: dex.pokemon.length, pokemon: dex.pokemon }));
  console.log("added descriptionFull to", added, "entries");
  console.log("DONE");
}
main().catch((e) => { console.error("FAILED:", e); process.exit(1); });
