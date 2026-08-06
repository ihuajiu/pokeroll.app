// One-time move metadata fetcher -> data/moves.json
// Run: node scripts/fetch-moves.mjs
// Pulls PokeAPI metadata for every move used by the site's pokemon so the
// Showdown exporter can do STAB-aware, score-based move picks.
import fs from "fs";
import path from "path";

const BASE = "https://pokeapi.co/api/v2";
const POKEDEX = path.join(process.cwd(), "data", "pokedex.json");
const OUT = path.join(process.cwd(), "data", "moves.json");

// Curated categories (stable across generations).
const HAZARD = new Set(["stealth-rock","spikes","toxic-spikes","sticky-web","stone-axe","ceaseless-edge"]);
const SPEED_CONTROL = new Set([
  "thunder-wave","will-o-wisp","tailwind","trick-room","icy-wind","electroweb","string-shot",
  "scary-face","cotton-spore","rock-tomb","memento","glare","stun-spore","parabolic-charge",
  "nuzzle","spore","sleep-powder","hypnosis","sing","yawn","lovey-dovey","thunder-punch",
  "body-slam","twave","t-wave",
]);
const STALL = new Set([
  "protect","substitute","detect","endure","baneful-bunker","spiky-shield","kings-shield",
  "silk-trap","burning-bulwark","wide-guard","quick-guard","ally-switch","destiny-bond",
]);
// Wish/rest/lunar-blessing heal but PokeAPI meta.healing is 0 for them.
const HEAL_EXTRA = new Set(["wish","rest","lunar-blessing","life-dew","jungle-healing","floral-healing","strength-sap"]);

async function fetchJson(url, retries = 4) {
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
      if (res.status === 404) throw new Error("http 404");
      if (res.status === 429 || res.status >= 500) throw new Error("transient " + res.status);
      if (!res.ok) throw new Error("http " + res.status);
      return await res.json();
    } catch (e) {
      if (e.message === "http 404") throw e;
      if (i < retries) {
        await new Promise((r) => setTimeout(r, 500 * (i + 1)));
        continue;
      }
      throw e;
    }
  }
  throw new Error("unreachable");
}

function slugSetFromStats(m) {
  // returns Set of stat names being boosted (positive) on self, else null
  const changes = m?.meta?.stat_changes ?? [];
  if (!changes.length) return null;
  const up = new Set();
  const down = new Set();
  for (const c of changes) {
    if (c.change > 0) up.add(c.stat.name);
    else if (c.change < 0) down.add(c.stat.name);
  }
  // Only consider "self-targeted" boosts (move target is self)
  const target = m?.target?.name ?? "";
  if (target === "user" || target === "user-or-ally" || target === "entire-field") return up.size ? up : null;
  return null;
}

const pokedex = JSON.parse(fs.readFileSync(POKEDEX, "utf8"));
const slugs = [...new Set(pokedex.pokemon.flatMap((p) => p.moveNames ?? []))].sort();
console.log("unique moves:", slugs.length);

let moves = {};
if (fs.existsSync(OUT)) moves = JSON.parse(fs.readFileSync(OUT, "utf8"));

let done = 0, failed = 0;
for (const slug of slugs) {
  if (moves[slug]) { done++; continue; }
  try {
    const m = await fetchJson(`${BASE}/move/${slug}`);
    const en = m.names?.find((n) => n.language.name === "en")?.name ?? slug;
    const boostSet = slugSetFromStats(m);
    moves[slug] = {
      slug,
      name: en,
      type: m.type?.name ?? "normal",
      power: m.power ?? null,
      accuracy: m.accuracy ?? null,
      priority: m.priority ?? 0,
      damageClass: m.damage_class?.name ?? "status",
      healing: m.meta?.healing ?? 0,
      drain: m.meta?.drain ?? 0,
      isHeal: (m.meta?.healing ?? 0) > 0 || (m.meta?.drain ?? 0) > 0 || HEAL_EXTRA.has(slug),
      isHazard: HAZARD.has(slug),
      isSetup: boostSet ? true : false,
      setupStats: boostSet ? [...boostSet] : [],
      isSpeedControl: SPEED_CONTROL.has(slug),
      isStall: STALL.has(slug),
    };
    done++;
    if (done % 50 === 0) {
      fs.writeFileSync(OUT, JSON.stringify(moves, null, 0));
      console.log(`progress: ${done}/${slugs.length} (failed ${failed})`);
    }
  } catch (e) {
    failed++;
    moves[slug] = { slug, name: slug, type: "normal", power: null, accuracy: null, priority: 0, damageClass: "status", healing: 0, drain: 0, isHeal: false, isHazard: false, isSetup: false, setupStats: [], isSpeedControl: false, isStall: false, failed: true };
    console.log("FAIL", slug, e.message);
  }
  await new Promise((r) => setTimeout(r, 90));
}
fs.writeFileSync(OUT, JSON.stringify(moves, null, 0));
console.log("done. total:", Object.keys(moves).length, "failed:", failed);
