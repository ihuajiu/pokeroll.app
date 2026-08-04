// One-time enrichment of data/pokedex.json:
//  - adds an English one-line `description` (species flavor text) to every entry
//  - tags every entry with a `form` field (mega/alolan/galarian/hisuan/paldean/gigantamax)
//  - improves form display names ("Alolan Vulpix", "Mega Charizard X", ...)
//  - adds regional forms (Alolan/Galarian/Hisuian/Paldean) with official artwork
//  - adds Gigantamax variants (reuse base artwork, clearly labeled)
// Run: node scripts/enrich-pokedex.mjs
import fs from "fs";
import path from "path";
import sharp from "sharp";

const BASE = "https://pokeapi.co/api/v2";
const IMG_BASE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
const OUT = path.join(process.cwd(), "data", "pokedex.json");
const PUBLIC_DIR = path.join(process.cwd(), "public", "pokemon");

const GEN_REGION = {1:"Kanto",2:"Johto",3:"Hoenn",4:"Sinnoh",5:"Unova",6:"Kalos",7:"Alola",8:"Galar",9:"Paldea"};
const GEN_NAME_TO_NUM = {"generation-i":1,"generation-ii":2,"generation-iii":3,"generation-iv":4,"generation-v":5,"generation-vi":6,"generation-vii":7,"generation-viii":8,"generation-ix":9};
const PREFERRED_VERSIONS = ["violet","scarlet","sword","shield","ultra-sun","ultra-moon","sun","moon","x","y","omega-ruby","alpha-sapphire","black-2","white-2","black","white","heartgold","soulsilver"];
const REGIONAL_NAMES = [
  // Alolan
  "rattata-alola","raticate-alola","raichu-alola","sandshrew-alola","sandslash-alola",
  "vulpix-alola","ninetales-alola","diglett-alola","dugtrio-alola","meowth-alola",
  "persian-alola","geodude-alola","graveler-alola","golem-alola","grimer-alola",
  "muk-alola","exeggutor-alola","marowak-alola",
  // Galarian
  "meowth-galar","ponyta-galar","rapidash-galar","slowpoke-galar",
  "slowbro-galar","farfetchd-galar","weezing-galar","mr-mime-galar","articuno-galar",
  "zapdos-galar","moltres-galar","slowking-galar","corsola-galar","zigzagoon-galar",
  "linoone-galar","darumaka-galar","darmanitan-galar-standard","yamask-galar","stunfisk-galar",
  // Hisuian
  "growlithe-hisui","arcanine-hisui","voltorb-hisui","electrode-hisui","typhlosion-hisui",
  "qwilfish-hisui","sneasel-hisui","samurott-hisui","lilligant-hisui","zorua-hisui",
  "zoroark-hisui","braviary-hisui","sliggoo-hisui","goodra-hisui","avalugg-hisui",
  "decidueye-hisui",
  // Paldean
  "wooper-paldea","tauros-paldea-combat-breed","tauros-paldea-blaze-breed","tauros-paldea-aqua-breed",
];
const GMAX_BASES = ["charizard","butterfree","pikachu","meowth","machamp","gengar","kingler","lapras","eevee","snorlax","garbodor","melmetal","corviknight","orbeetle","drednaw","coalossal","flapple","appletun","sandaconda","toxtricity-amped","centiskorch","hatterene","grimmsnarl","alcremie","copperajah","duraludon","urshifu-single-strike","venusaur","blastoise","rillaboom","cinderace","inteleon"];

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

async function fetchImage(url, dest, retries = 3) {
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(30000) });
      if (res.status === 404) return false;
      if (res.status === 429 || res.status >= 500) throw new Error("transient " + res.status);
      if (!res.ok) throw new Error("http " + res.status);
      let buf = Buffer.from(await res.arrayBuffer());
      if (dest.endsWith(".webp")) {
        buf = await sharp(buf).webp({ quality: 80 }).toBuffer();
      }
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
  // Keep complete sentences while staying within max (cards show 3 lines);
  // never append an ellipsis so short descriptions don't look cut off.
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
function fallbackDesc(p) {
  const types = (p.types || []).map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join("/");
  const art = /^[aeiou]/i.test(p.types?.[0] || "") ? "an" : "a";
  return `${p.displayName} is ${art} ${types} Pokemon from ${p.region}, introduced in Generation ${p.generation}.`;
}

function formInfo(name) {
  if (/^gigantamax-/.test(name)) return { form: "gigantamax" };
  const reg = name.match(/-(alola|galar|hisui)(?:-(standard|zen))?$/);
  if (reg) {
    return { form: reg[1] === "alola" ? "alolan" : reg[1] === "galar" ? "galarian" : "hisuian" };
  }
  if (/-paldea/.test(name)) return { form: "paldean" };
  if (/-mega(-[xy])?$/.test(name)) return { form: "mega" };
  return null;
}
function displayNameFor(name, form) {
  if (form === "gigantamax") return `Gigantamax ${toTitle(name.replace(/^gigantamax-/, ""))}`;
  if (form === "mega") {
    const m = name.match(/^(.+)-mega(?:-([xy]))?$/);
    const base = m ? m[1] : name;
    const variant = m && m[2] ? m[2].toUpperCase() : "";
    return `Mega ${toTitle(base)}${variant ? " " + variant : ""}`;
  }
  if (form === "paldean") {
    const m = name.match(/^(.+)-paldea(?:-(.+))?$/);
    const base = m ? m[1] : name;
    const variant = m && m[2] ? m[2].replace(/-breed$/, "").replace(/-/g, " ") : "";
    return `Paldean ${toTitle(base)}${variant ? " (" + toTitle(variant) + ")" : ""}`;
  }
  const label = form === "alolan" ? "Alolan" : form === "galarian" ? "Galarian" : "Hisuian";
  const base = name.replace(/-(alola|galar|hisui)(?:-(standard|zen))?$/, "");
  return `${label} ${toTitle(base)}`;
}

async function getPokemon(idOrName) {
  const p = await fetchJson(`${BASE}/pokemon/${idOrName}`);
  let species = null;
  try {
    species = await fetchJson(`${BASE}/pokemon-species/${p.id}`);
  } catch {
    species = null;
  }
  const fi = formInfo(p.name);
  const stats = mapStats(p.stats);
  const bst = stats.hp + stats.atk + stats.def + stats.spa + stats.spd + stats.spe;
  const gen = GEN_NAME_TO_NUM[species?.generation?.name ?? "generation-i"] ?? 1;
  // Regional forms share the base species in PokeAPI, so force their real
  // generation/region (Alolan=7, Galarian/Hisuian=8, Paldean=9).
  let effGen = gen;
  let effRegion = GEN_REGION[gen] ?? "Unknown";
  if (fi) {
    if (fi.form === "alolan") { effGen = 7; effRegion = "Alola"; }
    else if (fi.form === "galarian") { effGen = 8; effRegion = "Galar"; }
    else if (fi.form === "hisuian") { effGen = 8; effRegion = "Hisui"; }
    else if (fi.form === "paldean") { effGen = 9; effRegion = "Paldea"; }
  }
  const hasShiny = !!p.sprites?.front_shiny;
  const base = {
    name: p.name,
    dexNumber: p.id,
    types: (p.types ?? []).map((t) => t.type.name),
    abilities: (p.abilities ?? []).map((a) => toTitle(a.ability.name)),
    abilityNames: (p.abilities ?? []).map((a) => a.ability.name),
    stats,
    bst,
    generation: effGen,
    region: effRegion,
    sprite: `/pokemon/sprite/${p.id}.png`,
    artwork: `/pokemon/artwork/${p.id}.webp`,
    shinySprite: hasShiny ? `/pokemon/shiny/${p.id}.png` : undefined,
    shinyArtwork: hasShiny ? `/pokemon/shiny-artwork/${p.id}.webp` : undefined,
    isLegendary: !!species?.is_legendary,
    isMythical: !!species?.is_mythical,
    height: Math.round((p.height / 10) * 10) / 10,
    weight: Math.round((p.weight / 10) * 10) / 10,
    moveNames: (p.moves ?? []).map((m) => m.move.name),
  };
  base.displayName = fi ? displayNameFor(p.name, fi.form) : toTitle(p.name);
  if (fi) base.form = fi.form;
  base.description = fi
    ? fallbackDesc(base)
    : truncate(pickDescription(species)) || fallbackDesc(base);
  return base;
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
          .catch((e) => console.error("  x", item, e.message))
          .finally(() => {
            active--;
            done++;
            if (done % 200 === 0) console.log(`  progress ${done}/${total}`);
            next();
          });
      }
    }
    next();
  });
}

async function main() {
  const raw = JSON.parse(fs.readFileSync(OUT, "utf8"));
  const map = new Map(raw.pokemon.map((p) => [p.dexNumber, p]));
  console.log("existing entries:", map.size);

  console.log("step 1: enrich existing entries (description + form tag)...");
  const ids = [...map.keys()];
  await runPool(ids, 10, async (id) => {
    const p = map.get(id);
    const fi = formInfo(p.name);
    if (fi) {
      p.form = fi.form;
      p.displayName = displayNameFor(p.name, fi.form);
    }
    if (!p.description) {
      try {
        const species = await fetchJson(`${BASE}/pokemon-species/${id}`);
        p.description = truncate(pickDescription(species)) || fallbackDesc(p);
      } catch {
        p.description = fallbackDesc(p);
      }
    }
  });

  console.log("step 2: add regional forms...");
  const regionalNames = REGIONAL_NAMES;
  console.log("  regional species to add:", regionalNames.length);
  let added = 0;
  await runPool(regionalNames, 8, async (nm) => {
    try {
      const p = await getPokemon(nm);
      map.set(p.dexNumber, p);
      added++;
    } catch (e) {
      console.error("  regional fail", nm, e.message);
    }
  });
  console.log("  added regional forms:", added);

  console.log("step 3: add gigantamax variants...");
  const byName = new Map([...map.values()].map((p) => [p.name, p]));
  let gmaxAdded = 0;
  for (const nm of GMAX_BASES) {
    const base = byName.get(nm);
    if (!base) {
      console.warn("  no base for gigantamax:", nm);
      continue;
    }
    const g = {
      ...base,
      name: `gigantamax-${base.name}`,
      dexNumber: 20000 + base.dexNumber,
      form: "gigantamax",
      displayName: `Gigantamax ${base.displayName}`,
    };
    if (!map.has(g.dexNumber)) {
      map.set(g.dexNumber, g);
      gmaxAdded++;
    }
  }
  console.log("  added gigantamax:", gmaxAdded);

  const pokemon = [...map.values()].sort((a, b) => a.dexNumber - b.dexNumber);
  fs.writeFileSync(OUT, JSON.stringify({ generatedAt: new Date().toISOString(), count: pokemon.length, pokemon }, "utf8"));
  console.log("wrote", pokemon.length, "pokemon to", OUT);

  console.log("step 4: download missing images...");
  fs.mkdirSync(path.join(PUBLIC_DIR, "artwork"), { recursive: true });
  fs.mkdirSync(path.join(PUBLIC_DIR, "sprite"), { recursive: true });
  fs.mkdirSync(path.join(PUBLIC_DIR, "shiny"), { recursive: true });
  fs.mkdirSync(path.join(PUBLIC_DIR, "shiny-artwork"), { recursive: true });
  const tasks = [];
  for (const p of pokemon) {
    const artMatch = (p.artwork || "").match(/(\d+)\.webp$/);
    const id = artMatch ? Number(artMatch[1]) : p.dexNumber;
    const art = path.join(PUBLIC_DIR, "artwork", `${id}.webp`);
    if (!fs.existsSync(art)) {
      tasks.push({ url: `${IMG_BASE}/other/official-artwork/${id}.png`, dest: art });
      tasks.push({ url: `${IMG_BASE}/${id}.png`, dest: path.join(PUBLIC_DIR, "sprite", `${id}.png`) });
      if (p.shinySprite) {
        tasks.push({ url: `${IMG_BASE}/shiny/${id}.png`, dest: path.join(PUBLIC_DIR, "shiny", `${id}.png`) });
        tasks.push({ url: `${IMG_BASE}/other/official-artwork/shiny/${id}.png`, dest: path.join(PUBLIC_DIR, "shiny-artwork", `${id}.webp`) });
      }
    }
  }
  console.log("  downloading", tasks.length, "images...");
  let ok = 0;
  let fail = 0;
  await runPool(tasks, 10, async (t) => {
    if (await fetchImage(t.url, t.dest)) ok++;
    else fail++;
  });
  console.log(`images: ${ok} ok, ${fail} failed`);
  console.log("DONE");
}

main().catch((e) => {
  console.error("FAILED:", e);
  process.exit(1);
});
