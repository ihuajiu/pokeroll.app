// Generate data/abilities-es.json + data/abilities-de.json + data/abilities-fr.json:
// localized ability display names from PokéAPI ability.names[] (official game
// UI terms). pt is not fetched — Pokémon has no official Portuguese localization.
// Keyed by the English display name ("Overgrow") so components can look up with
// the display string they already hold. Cached per ability under
// scripts/.cache/abilities/ so interrupted runs resume without re-fetching.
// Run: node scripts/fetch-ability-names.mjs
import fs from "fs";
import path from "path";

const BASE = "https://pokeapi.co/api/v2";
const POKEDEX = path.join(process.cwd(), "data", "pokedex.json");
const CACHE_DIR = path.join(process.cwd(), "scripts", ".cache", "abilities");
const LANGS = ["es", "de", "fr"];
const CONCURRENCY = 6;

fs.mkdirSync(CACHE_DIR, { recursive: true });

async function fetchJson(url, retries = 4) {
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return await res.json();
      throw new Error(`HTTP ${res.status}`);
    } catch (e) {
      if (i === retries) throw e;
      await new Promise((r) => setTimeout(r, 500 * 2 ** i));
    }
  }
}

async function getAbility(slug) {
  const file = path.join(CACHE_DIR, `${slug}.json`);
  if (fs.existsSync(file)) return JSON.parse(fs.readFileSync(file, "utf8"));
  const data = await fetchJson(`${BASE}/ability/${slug}`);
  fs.writeFileSync(file, JSON.stringify(data));
  return data;
}

const dex = JSON.parse(fs.readFileSync(POKEDEX, "utf8")).pokemon;
const slugs = [...new Set(dex.flatMap((p) => p.abilityNames ?? []))].sort();
console.log(`${slugs.length} unique abilities`);

const out = Object.fromEntries(LANGS.map((l) => [l, {}]));
let done = 0;
for (let i = 0; i < slugs.length; i += CONCURRENCY) {
  await Promise.all(
    slugs.slice(i, i + CONCURRENCY).map(async (slug) => {
      const data = await getAbility(slug);
      const en = data.names.find((n) => n.language.name === "en")?.name;
      if (!en) {
        console.warn(`no en name: ${slug}`);
        return;
      }
      for (const lang of LANGS) {
        const v = data.names.find((n) => n.language.name === lang)?.name;
        if (v) out[lang][slug] = { en, name: v };
      }
    }),
  );
  done += CONCURRENCY;
  if (done % 60 === 0) console.log(`${Math.min(done, slugs.length)}/${slugs.length}`);
}

for (const lang of LANGS) {
  const file = path.join(process.cwd(), "data", `abilities-${lang}.json`);
  fs.writeFileSync(file, JSON.stringify(out[lang], null, 1) + "\n");
  console.log(`${lang}: ${Object.keys(out[lang]).length} → ${file}`);
}
