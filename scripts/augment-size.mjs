// One-time augment: add height (m) / weight (kg) to data/pokedex.json
// Run: node scripts/augment-size.mjs
// Requires network access (only at fetch time). Runtime code never fetches.
import fs from "fs";
import path from "path";

const BASE = "https://pokeapi.co/api/v2";
const OUT = path.join(process.cwd(), "data", "pokedex.json");

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

function runPool(items, concurrency, fn) {
  return new Promise((resolve, reject) => {
    let i = 0;
    let active = 0;
    let done = 0;
    const total = items.length;
    function next() {
      if (i >= total && active === 0) return resolve();
      while (active < concurrency && i < total) {
        const item = items[i++];
        active++;
        fn(item)
          .catch((e) => console.error("  ✗", item.name ?? item, e.message))
          .finally(() => {
            active--;
            done++;
            if (done % 100 === 0) console.log(`  progress ${done}/${total}`);
            next();
          });
      }
    }
    next();
  });
}

async function main() {
  const db = JSON.parse(fs.readFileSync(OUT, "utf8"));
  const missing = db.pokemon.filter((p) => p.height == null || p.weight == null);
  console.log(`Augmenting height/weight for ${missing.length}/${db.pokemon.length} Pokémon...`);

  await runPool(missing, 8, async (p) => {
    const api = await fetchJson(`${BASE}/pokemon/${p.name}`);
    // PokeAPI: height in decimetres, weight in hectograms -> store m / kg
    p.height = Math.round((api.height / 10) * 10) / 10;
    p.weight = Math.round((api.weight / 10) * 10) / 10;
  });

  db.generatedAt = new Date().toISOString();
  fs.writeFileSync(OUT, JSON.stringify(db), "utf8");
  const still = db.pokemon.filter((p) => p.height == null || p.weight == null);
  console.log(`✓ Done. ${db.pokemon.length - still.length} entries have size data, ${still.length} still missing.`);
}

main().catch((e) => {
  console.error("FAILED:", e);
  process.exit(1);
});
