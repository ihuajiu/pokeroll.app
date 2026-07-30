// One-time Pokémon data fetcher -> data/pokedex.json
// Run: node scripts/fetch-pokedex.mjs
// Requires network access (only at fetch time). Runtime code never fetches.
import fs from "fs";
import path from "path";

const BASE = "https://pokeapi.co/api/v2";
const OUT = path.join(process.cwd(), "data", "pokedex.json");

const GEN_REGION = {
  1: "Kanto", 2: "Johto", 3: "Hoenn", 4: "Sinnoh",
  5: "Unova", 6: "Kalos", 7: "Alola", 8: "Galar", 9: "Paldea",
};
const GEN_NAME_TO_NUM = {
  "generation-i": 1, "generation-ii": 2, "generation-iii": 3,
  "generation-iv": 4, "generation-v": 5, "generation-vi": 6,
  "generation-vii": 7, "generation-viii": 8, "generation-ix": 9,
};
const MEGA_NAMES = ["charizard-mega-x","charizard-mega-y","venusaur-mega","blastoise-mega","alakazam-mega","gengar-mega","kangaskhan-mega","pinsir-mega","gyarados-mega","aerodactyl-mega","mewtwo-mega-x","mewtwo-mega-y","ampharos-mega","scizor-mega","heracross-mega","houndoom-mega","tyranitar-mega","blaziken-mega","gardevoir-mega","mawile-mega","medicham-mega","banette-mega","absol-mega","garchomp-mega","lucario-mega","abomasnow-mega","beedrill-mega","pidgeot-mega","slowbro-mega","steelix-mega","sceptile-mega","swampert-mega","sableye-mega","sharpedo-mega","camerupt-mega","altaria-mega","glalie-mega","salamence-mega","metagross-mega","latias-mega","latios-mega","rayquaza-mega","lopunny-mega","gallade-mega","audino-mega","diancie-mega"];
const MYTHICAL_NAMES = ["mew","celebi","jirachi","deoxys","manaphy","darkrai","shaymin","arceus","victini","keldeo","meloetta","genesect","diancie","hoopa","volcanion","magearna","marshadow","zacian","zamazenta","eternatus","zarude","koraidon","miraidon","pecharunt"];

function toTitle(s) {
  return s.split(/[-_]/).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}
function mapStats(arr) {
  const out = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
  for (const s of arr) {
    const k = s.stat.name;
    if (k === "hp") out.hp = s.base_stat;
    else if (k === "attack") out.atk = s.base_stat;
    else if (k === "defense") out.def = s.base_stat;
    else if (k === "special-attack") out.spa = s.base_stat;
    else if (k === "special-defense") out.spd = s.base_stat;
    else if (k === "speed") out.spe = s.base_stat;
  }
  return out;
}

async function fetchJson(url, retries = 4) {
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
      // 404 = definitely not found; never retry, fail fast
      if (res.status === 404) throw new Error("http 404");
      if (res.status === 429 || res.status >= 500) throw new Error("transient " + res.status);
      if (!res.ok) throw new Error("http " + res.status);
      return await res.json();
    } catch (e) {
      // retry only on transient/timeout/network errors, not on 404
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

// Images base on the PokeAPI sprites CDN. We mirror them locally into public/pokemon/.
const IMG_BASE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
const PUBLIC_DIR = path.join(process.cwd(), "public", "pokemon");

async function fetchImage(url, dest, retries = 3) {
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(30000) });
      if (res.status === 404) return false; // not all forms have every image
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
      console.warn("  ! img fail", path.basename(dest), e.message);
      return false;
    }
  }
  return false;
}

async function getPokemon(idOrName) {
  const p = await fetchJson(`${BASE}/pokemon/${idOrName}`);
  let species = null;
  try {
    species = await fetchJson(`${BASE}/pokemon-species/${p.id}`);
  } catch {
    species = null;
  }
  const stats = mapStats(p.stats);
  const bst = stats.hp + stats.atk + stats.def + stats.spa + stats.spd + stats.spe;
  const genName = species?.generation?.name ?? "generation-i";
  const gen = GEN_NAME_TO_NUM[genName] ?? 1;
  const hasShiny = !!p.sprites?.front_shiny;
  return {
    name: p.name,
    displayName: toTitle(p.name),
    dexNumber: p.id,
    types: (p.types ?? []).map((t) => t.type.name),
    abilities: (p.abilities ?? []).map((a) => toTitle(a.ability.name)),
    abilityNames: (p.abilities ?? []).map((a) => a.ability.name),
    stats,
    bst,
    generation: gen,
    region: GEN_REGION[gen] ?? "Unknown",
    // Local self-hosted images (downloaded below into public/pokemon/)
    sprite: `/pokemon/sprite/${p.id}.png`,
    artwork: `/pokemon/artwork/${p.id}.png`,
    shinySprite: hasShiny ? `/pokemon/shiny/${p.id}.png` : undefined,
    isLegendary: !!species?.is_legendary,
    isMythical: !!species?.is_mythical,
    moveNames: (p.moves ?? []).map((m) => m.move.name),
  };
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
  fs.mkdirSync(path.dirname(OUT), { recursive: true });

  let count = 1010;
  try {
    const meta = await fetchJson(`${BASE}/pokemon?limit=1`);
    if (typeof meta.count === "number" && meta.count > 0) count = meta.count;
  } catch (e) {
    console.warn("  could not detect count, using", count, e.message);
  }
  console.log(`Fetching ${count} Pokémon (main range)...`);

  const results = new Map();
  const ids = [];
  for (let i = 1; i <= count; i++) ids.push(i);

  await runPool(ids, 8, async (id) => {
    const p = await getPokemon(id);
    results.set(p.dexNumber, p);
  });

  const extras = [...new Set([...MEGA_NAMES, ...MYTHICAL_NAMES])];
  console.log(`Ensuring ${extras.length} extra mega/mythical entries...`);
  await runPool(extras, 8, async (nm) => {
    const p = await getPokemon(nm);
    if (!results.has(p.dexNumber)) results.set(p.dexNumber, p);
  });

  const pokemon = Array.from(results.values()).sort((a, b) => a.dexNumber - b.dexNumber);
  fs.writeFileSync(
    OUT,
    JSON.stringify({ generatedAt: new Date().toISOString(), count: pokemon.length, pokemon }, "utf8"),
  );
  console.log(`✓ Wrote ${pokemon.length} Pokémon to ${OUT}`);

  // --- Mirror sprite / artwork / shiny images locally (one-time, fetch time only) ---
  fs.mkdirSync(path.join(PUBLIC_DIR, "artwork"), { recursive: true });
  fs.mkdirSync(path.join(PUBLIC_DIR, "sprite"), { recursive: true });
  fs.mkdirSync(path.join(PUBLIC_DIR, "shiny"), { recursive: true });

  const imgTasks = [];
  for (const p of pokemon) {
    const id = p.dexNumber;
    imgTasks.push({
      url: `${IMG_BASE}/other/official-artwork/${id}.png`,
      dest: path.join(PUBLIC_DIR, "artwork", `${id}.png`),
    });
    imgTasks.push({
      url: `${IMG_BASE}/${id}.png`,
      dest: path.join(PUBLIC_DIR, "sprite", `${id}.png`),
    });
    if (p.shinySprite) {
      imgTasks.push({
        url: `${IMG_BASE}/shiny/${id}.png`,
        dest: path.join(PUBLIC_DIR, "shiny", `${id}.png`),
      });
    }
  }
  console.log(`Downloading ${imgTasks.length} images into public/pokemon/...`);
  let ok = 0;
  let fail = 0;
  await runPool(imgTasks, 12, async (t) => {
    if (await fetchImage(t.url, t.dest)) ok++;
    else fail++;
  });
  console.log(`✓ Images mirrored: ${ok} ok, ${fail} failed (skipped)`);
}

main().catch((e) => {
  console.error("FAILED:", e);
  process.exit(1);
});
