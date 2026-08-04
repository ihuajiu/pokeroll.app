// One-time restore: refetch full English flavor text for base Pokemon and
// truncate to ~112 chars (fits 3 lines on the standard card), keeping only
// complete sentences (no ellipsis). Form entries keep their generated
// form-aware description.
// Run: node scripts/restore-descriptions.mjs
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
      if (!isFatal && i < retries) {
        await new Promise((r) => setTimeout(r, 400 * (i + 1)));
        continue;
      }
      throw e;
    }
  }
  throw new Error("unreachable");
}

function cleanFlavor(t) {
  return t.replace(/[\f\n\r]+/g, " ").replace(/\s+/g, " ").trim();
}
function pickDescription(species) {
  if (!species) return undefined;
  const en = (species.flavor_text_entries ?? []).filter((e) => e.language.name === "en");
  if (!en.length) return undefined;
  const pick = en.find((e) => PREFERRED_VERSIONS.includes(e.version.name)) ?? en[0];
  return cleanFlavor(pick.flavor_text);
}
function truncate(text, max = 94) {
  if (!text) return text;
  if (text.length <= max) return text;
  const sentences = text.match(/[^.!?]*[.!?]+/g) || [];
  let out = "";
  for (const s of sentences) {
    if ((out + s).length <= max) out += s;
    else break;
  }
  if (out.trim().length >= 30) return out.trim();
  const cut = text.slice(0, max);
  const sp = cut.lastIndexOf(" ");
  return sp > 50 ? cut.slice(0, sp) : cut;
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
        fn(item)
          .catch((e) => console.error("  x", item, e.message))
          .finally(() => { active--; done++; if (done % 200 === 0) console.log("  progress", done + "/" + total); next(); });
      }
    }
    next();
  });
}

async function main() {
  const dex = JSON.parse(fs.readFileSync(OUT, "utf8"));
  // Only base (non-form) entries get refetched; forms keep generated text.
  const base = dex.pokemon.filter((p) => !p.form);
  const ids = [...new Set(base.map((p) => p.dexNumber))];
  console.log("refetching", ids.length, "species...");
  const descCache = new Map();
  await runPool(ids, 10, async (id) => {
    try {
      const species = await fetchJson(BASE + "/pokemon-species/" + id);
      descCache.set(id, truncate(pickDescription(species)) || "");
    } catch (e) {
      console.error("species fail", id, e.message);
    }
  });
  let updated = 0;
  for (const p of dex.pokemon) {
    if (p.form) continue;
    const d = descCache.get(p.dexNumber);
    if (d) { p.description = d; updated++; }
  }
  fs.writeFileSync(OUT, JSON.stringify({ generatedAt: dex.generatedAt, count: dex.pokemon.length, pokemon: dex.pokemon }));
  console.log("updated", updated, "descriptions");
  console.log("DONE");
}

main().catch((e) => { console.error("FAILED:", e); process.exit(1); });
