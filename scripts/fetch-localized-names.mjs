// Generate data/names-de.json + data/names-fr.json:
// localized Pokémon display names (species names from PokéAPI
// pokemon-species.names[]; forms composed with official affix patterns —
// de "Mega-/Alola-/Gigadynamax-X", fr "Méga-X / X d'Alola / X Gigamax").
// Run: node scripts/fetch-localized-names.mjs
import fs from "fs";
import path from "path";

const BASE = "https://pokeapi.co/api/v2";
const POKEDEX = path.join(process.cwd(), "data", "pokedex.json");
const LANGS = ["de", "fr"];

// Slugs whose species lookup needs a different base than affix-stripping yields.
const SPECIAL_BASE = {
  "toxtricity-amped": "toxtricity",
  "urshifu-single-strike": "urshifu",
  "darmanitan-galar-standard": "darmanitan",
};

function parseSlug(slug) {
  if (SPECIAL_BASE[slug]) {
    // toxtricity-amped etc.: base form variant — plain localized species name.
    return { base: SPECIAL_BASE[slug], form: null, extra: null };
  }
  let s = slug;
  let form = null;
  let extra = null;
  if (s.startsWith("gigantamax-")) {
    form = "gigantamax";
    s = s.slice("gigantamax-".length);
  } else if (s.endsWith("-mega-x") || s.endsWith("-mega-y")) {
    extra = s.endsWith("-x") ? "X" : "Y";
    form = "mega";
    s = s.slice(0, -"-mega-x".length);
  } else if (s.endsWith("-mega")) {
    form = "mega";
    s = s.slice(0, -"-mega".length);
  } else {
    const m = s.match(/^(.*)-(alola|galar|hisui|paldea)(?:-(combat|blaze|aqua)-breed)?$/);
    if (m) {
      s = m[1];
      form = m[2];
      extra = m[3] ?? null;
    }
  }
  return { base: s, form, extra };
}

const DE_REGION = { alola: "Alola", galar: "Galar", hisui: "Hisui", paldea: "Paldea" };
const FR_REGION = { alola: "d'Alola", galar: "de Galar", hisui: "de Hisui", paldea: "de Paldea" };

function compose(lang, speciesName, form, extra) {
  if (!form) return speciesName;
  if (lang === "de") {
    if (form === "mega") return `Mega-${speciesName}${extra ? ` ${extra}` : ""}`;
    if (form === "gigantamax") return `Gigadynamax-${speciesName}`;
    const breed = extra ? ` (${extra.charAt(0).toUpperCase() + extra.slice(1)} Breed)` : "";
    return `${DE_REGION[form]}-${speciesName}${breed}`;
  }
  // fr
  if (form === "mega") return `Méga-${speciesName}${extra ? ` ${extra}` : ""}`;
  if (form === "gigantamax") return `${speciesName} Gigamax`;
  const breed = extra ? ` (${extra.charAt(0).toUpperCase() + extra.slice(1)} Breed)` : "";
  return `${speciesName} ${FR_REGION[form]}${breed}`;
}

async function fetchJson(url, retries = 4) {
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return await res.json();
      throw new Error(`HTTP ${res.status}`);
    } catch (e) {
      if (i === retries) {
        console.warn(`  WARN fetch failed ${url}: ${e.message} — English fallback`);
        return null;
      }
      await new Promise((r) => setTimeout(r, 500 * (i + 1)));
    }
  }
}

const pokedex = JSON.parse(fs.readFileSync(POKEDEX, "utf8")).pokemon;
const parsed = pokedex.map((p) => ({ slug: p.name, ...parseSlug(p.name) }));
const bases = [...new Set(parsed.map((x) => x.base))];
console.log(`${pokedex.length} entries, ${bases.length} unique species to fetch`);

// Fetch species localized names with modest concurrency.
const speciesNames = { de: {}, fr: {} };
let done = 0;
const CONCURRENCY = 6;
for (let i = 0; i < bases.length; i += CONCURRENCY) {
  const chunk = bases.slice(i, i + CONCURRENCY);
  await Promise.all(
    chunk.map(async (b) => {
      // Default-form variants (lycanroc-midday, eiscue-ice…) have no
      // pokemon-species entry — strip trailing segments until one resolves.
      let data = await fetchJson(`${BASE}/pokemon-species/${b}`);
      const parts = b.split("-");
      while (!data && parts.length > 1) {
        parts.pop();
        data = await fetchJson(`${BASE}/pokemon-species/${parts.join("-")}`);
      }
      if (!data) return;
      for (const lang of LANGS) {
        const hit = data.names.find((n) => n.language.name === lang);
        if (hit) speciesNames[lang][b] = hit.name;
      }
      done++;
      if (done % 100 === 0) console.log(`  ${done}/${bases.length}`);
    }),
  );
}

// Compose per-entry display names.
const out = { de: {}, fr: {} };
let fallback = 0;
for (const { slug, base, form, extra } of parsed) {
  for (const lang of LANGS) {
    const species = speciesNames[lang][base];
    if (!species) {
      fallback++;
      continue; // caller falls back to English displayName
    }
    out[lang][slug] = compose(lang, species, form, extra);
  }
}

for (const lang of LANGS) {
  const file = path.join(process.cwd(), "data", `names-${lang}.json`);
  fs.writeFileSync(file, JSON.stringify(out[lang], null, 1) + "\n", "utf8");
  console.log(`${file} — ${Object.keys(out[lang]).length} entries`);
}
if (fallback) console.log(`(no localized name for ${fallback} entry-lang pairs — English fallback)`);
// Spot checks
for (const probe of ["venusaur", "charizard-mega-x", "gigantamax-hatterene", "vulpix-alola", "tauros-paldea-combat-breed", "pikachu"]) {
  console.log(probe, "→ de:", out.de[probe] ?? "—", "| fr:", out.fr[probe] ?? "—");
}
