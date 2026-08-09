// Generate data/flavor-es.json + data/flavor-de.json + data/flavor-fr.json:
// localized Pokédex flavor text from PokéAPI pokemon-species.flavor_text_entries[]
// (last entry per language = newest game version). pt is not fetched — PokéAPI
// has no Portuguese flavor text. Forms (mega/gigantamax/alola…) map back to
// their base species. Results are cached per species under scripts/.cache/flavor/
// so interrupted runs resume without re-fetching.
// Run: node scripts/fetch-flavor.mjs
import fs from "fs";
import path from "path";

const BASE = "https://pokeapi.co/api/v2";
const POKEDEX = path.join(process.cwd(), "data", "pokedex.json");
const CACHE_DIR = path.join(process.cwd(), "scripts", ".cache", "flavor");
const RESOLVE_CACHE = path.join(CACHE_DIR, "_resolve.json");
const LANGS = ["es", "de", "fr"];

// Slugs whose species lookup needs a different base than affix-stripping yields.
const SPECIAL_BASE = {
  "toxtricity-amped": "toxtricity",
  "urshifu-single-strike": "urshifu",
  "darmanitan-galar-standard": "darmanitan",
};

function parseSlug(slug) {
  if (SPECIAL_BASE[slug]) return SPECIAL_BASE[slug];
  let s = slug;
  if (s.startsWith("gigantamax-")) return s.slice("gigantamax-".length);
  if (s.endsWith("-mega-x") || s.endsWith("-mega-y")) return s.slice(0, -"-mega-x".length);
  if (s.endsWith("-mega")) return s.slice(0, -"-mega".length);
  const m = s.match(/^(.*)-(alola|galar|hisui|paldea)(?:-(combat|blaze|aqua)-breed)?$/);
  if (m) return m[1];
  return s;
}

function clean(text) {
  return text.replace(/[\n\f\r]/g, " ").replace(/\s+/g, " ").trim();
}

function shorten(full) {
  const i = full.indexOf(". ");
  if (i === -1) return full;
  return full.slice(0, i + 1);
}

async function fetchJson(url, retries = 4) {
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return await res.json();
      throw new Error(`HTTP ${res.status}`);
    } catch (e) {
      if (i === retries) {
        console.warn(`  WARN fetch failed ${url}: ${e.message}`);
        return null;
      }
      await new Promise((r) => setTimeout(r, 500 * (i + 1)));
    }
  }
}

fs.mkdirSync(CACHE_DIR, { recursive: true });
const cachePath = (species) => path.join(CACHE_DIR, `${species}.json`);
const readCache = (species) => {
  try {
    return JSON.parse(fs.readFileSync(cachePath(species), "utf8"));
  } catch {
    return undefined;
  }
};

const pokedex = JSON.parse(fs.readFileSync(POKEDEX, "utf8")).pokemon;
const parsed = pokedex.map((p) => ({ slug: p.name, base: parseSlug(p.name) }));
const bases = [...new Set(parsed.map((x) => x.base))];
console.log(`${pokedex.length} entries, ${bases.length} unique species bases`);

// Resolve each base slug to an actual pokemon-species name (default-form
// variants like lycanroc-midday need trailing segments stripped), with cache.
let resolve = {};
try {
  resolve = JSON.parse(fs.readFileSync(RESOLVE_CACHE, "utf8"));
} catch {}
let resolveChanged = false;
for (const b of bases) {
  if (b in resolve) continue;
  let data = await fetchJson(`${BASE}/pokemon-species/${b}`);
  const parts = b.split("-");
  while (!data && parts.length > 1) {
    parts.pop();
    data = await fetchJson(`${BASE}/pokemon-species/${parts.join("-")}`);
  }
  resolve[b] = data ? parts.join("-") : null;
  resolveChanged = true;
}
if (resolveChanged) {
  fs.writeFileSync(RESOLVE_CACHE, JSON.stringify(resolve, null, 1) + "\n", "utf8");
}
const speciesList = [...new Set(Object.values(resolve).filter(Boolean))];
console.log(`${speciesList.length} species to fetch flavor text for`);

// Fetch flavor text per species with modest concurrency, cached per species.
let done = 0;
let fromCache = 0;
const CONCURRENCY = 6;
for (let i = 0; i < speciesList.length; i += CONCURRENCY) {
  const chunk = speciesList.slice(i, i + CONCURRENCY);
  await Promise.all(
    chunk.map(async (sp) => {
      if (readCache(sp) !== undefined) {
        fromCache++;
        return;
      }
      const data = await fetchJson(`${BASE}/pokemon-species/${sp}`);
      const flavors = {};
      if (data) {
        for (const lang of LANGS) {
          // Last occurrence in the array = newest game version.
          const hit = [...data.flavor_text_entries].reverse().find((e) => e.language.name === lang);
          if (hit) flavors[lang] = clean(hit.flavor_text);
        }
      }
      fs.writeFileSync(cachePath(sp), JSON.stringify(flavors), "utf8");
      done++;
      if (done % 100 === 0) console.log(`  fetched ${done}/${speciesList.length}`);
    }),
  );
}
console.log(`fetch done (${done} fetched, ${fromCache} from cache)`);

// Compose per-entry output; forms share their base species' flavor text.
const out = { es: {}, de: {}, fr: {} };
const missing = { es: [], de: [], fr: [] };
for (const { slug, base } of parsed) {
  const sp = resolve[base];
  const flavors = sp ? readCache(sp) : undefined;
  for (const lang of LANGS) {
    const full = flavors?.[lang];
    if (!full) {
      missing[lang].push(slug);
      continue; // runtime falls back to English
    }
    out[lang][slug] = { short: shorten(full), full };
  }
}

for (const lang of LANGS) {
  const file = path.join(process.cwd(), "data", `flavor-${lang}.json`);
  fs.writeFileSync(file, JSON.stringify(out[lang], null, 1) + "\n", "utf8");
  console.log(`${file} — ${Object.keys(out[lang]).length}/${pokedex.length} entries, missing: ${missing[lang].length}`);
  if (missing[lang].length && missing[lang].length <= 60) {
    console.log(`  missing ${lang}: ${missing[lang].join(", ")}`);
  }
}
// Spot checks
for (const [slug, lang] of [["bulbasaur", "de"], ["gigantamax-hatterene", "fr"], ["sprigatito", "es"]]) {
  console.log(`${slug} (${lang}) →`, out[lang][slug]?.full ?? "—");
}
