// One-off migration: convert official artwork PNGs to WebP (quality 80).
// Only artwork/ and shiny-artwork/ — the 475x475 official art, ~120-200KB
// per PNG. sprite/ and shiny/ stay PNG: they are tiny pixel-art sprites
// (~3MB total each) where lossy compression would blur hard edges.
// Run: node scripts/convert-to-webp.mjs
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const DIRS = ["public/pokemon/artwork", "public/pokemon/shiny-artwork"];
const CONCURRENCY = 8;

async function convertDir(dir) {
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".png"));
  let done = 0;
  let before = 0;
  let after = 0;
  const queue = [...files];
  async function worker() {
    while (queue.length) {
      const f = queue.shift();
      const src = path.join(dir, f);
      const dst = path.join(dir, f.replace(/\.png$/, ".webp"));
      before += fs.statSync(src).size;
      await sharp(src).webp({ quality: 80 }).toFile(dst);
      after += fs.statSync(dst).size;
      done++;
      if (done % 200 === 0) console.log(`${dir}: ${done}/${files.length}`);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  console.log(
    `${dir}: ${files.length} files, ${(before / 1e6).toFixed(1)}MB -> ${(after / 1e6).toFixed(1)}MB`,
  );
}

for (const dir of DIRS) {
  await convertDir(dir);
}
console.log("done");
