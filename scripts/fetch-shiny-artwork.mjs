// One-off: mirror official SHINY artwork locally + add `shinyArtwork` to data/pokedex.json
// Run: node scripts/fetch-shiny-artwork.mjs
// Same pattern as fetch-pokedex.mjs — network only at fetch time, runtime stays local.
import fs from "fs";
import path from "path";

const IMG_BASE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny";
const PUBLIC_DIR = path.join(process.cwd(), "public", "pokemon", "shiny-artwork");
const DATA = path.join(process.cwd(), "data", "pokedex.json");

async function fetchImage(id, dest, retries = 3) {
  const url = `${IMG_BASE}/${id}.png`;
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(30000) });
      if (res.status === 404) return false; // not every mon has shiny official artwork
      if (res.status === 429 || res.status >= 500) throw new Error("transient " + res.status);
      if (!res.ok) throw new Error("http " + res.status);
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buf);
      return true;
    } catch (e) {
      const isFatal = e.message === "http 404";
      if (!isFatal && i < retries) {
        await new Promise((r) => setTimeout(r, 500 * (i + 1)));
        continue;
      }
      console.warn("  ! img fail", id, e.message);
      return false;
    }
  }
  return false;
}

function runPool(items, concurrency, fn) {
  return new Promise((resolve) => {
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
          .catch((e) => console.error("  ✗", item, e.message))
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
  const json = JSON.parse(fs.readFileSync(DATA, "utf8"));
  const pokemon = json.pokemon ?? [];
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });

  const ids = pokemon.filter((p) => p.shinySprite).map((p) => p.dexNumber);
  console.log(`Downloading shiny official artwork for ${ids.length} Pokémon...`);

  const ok = new Set();
  await runPool(ids, 12, async (id) => {
    const dest = path.join(PUBLIC_DIR, `${id}.png`);
    if (fs.existsSync(dest)) {
      ok.add(id);
      return;
    }
    if (await fetchImage(id, dest)) ok.add(id);
  });

  let tagged = 0;
  for (const p of pokemon) {
    if (ok.has(p.dexNumber)) {
      p.shinyArtwork = `/pokemon/shiny-artwork/${p.dexNumber}.png`;
      tagged++;
    } else {
      delete p.shinyArtwork;
    }
  }
  json.generatedAt = new Date().toISOString();
  fs.writeFileSync(DATA, JSON.stringify(json), "utf8");
  console.log(`✓ ${ok.size}/${ids.length} images mirrored, ${tagged} entries tagged shinyArtwork`);
}

main().catch((e) => {
  console.error("FAILED:", e);
  process.exit(1);
});
