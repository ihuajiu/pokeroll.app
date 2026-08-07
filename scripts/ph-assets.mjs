// ph-assets.mjs — 从线上站抓取 Product Hunt 发布素材
// 产出: ph-assets/ 下的页面截图、翻卡 GIF、240x240 图标
// 用法: node scripts/ph-assets.mjs
import { chromium } from "playwright";
import sharp from "sharp";
import { execFileSync } from "node:child_process";
import { mkdirSync, existsSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";

const BASE = "https://pokeroll.app";
const OUT = "ph-assets";
const FFMPEG = path.join(
  homedir(),
  "AppData/Local/ms-playwright/ffmpeg-1011/ffmpeg-win64.exe",
);
mkdirSync(OUT, { recursive: true });
mkdirSync(`${OUT}/frames`, { recursive: true });

const browser = await chromium.launch({
  // 使用已缓存的 chromium r1228（与 playwright 期望的 r1234 兼容）
  executablePath: path.join(
    homedir(),
    "AppData/Local/ms-playwright/chromium-1228/chrome-win64/chrome.exe",
  ),
});
const page = await browser.newPage({
  viewport: { width: 1280, height: 800 },
  deviceScaleFactor: 2,
});

async function shot(url, file, wait = 2500) {
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(wait);
  await page.screenshot({ path: `${OUT}/${file}` });
  console.log("✓", file);
}

// ---- 1. 首页 Hero（整视口）+ 各页元素级截图（卡片/网格/转盘完整入镜）----
await shot(BASE, "01-home-hero.png");

// 生成器卡片正面（元素级）
await page.goto(`${BASE}/random-pokemon-generator`, { waitUntil: "networkidle" });
await page.waitForTimeout(2500);
const cardEl = page.locator(".team-card.hero-card").first();
await cardEl.screenshot({ path: `${OUT}/02-generator-card.png` });
console.log("✓ 02-generator-card.png");

// 团队 6 卡网格（元素级，先点 Roll 确保有卡）
await page.goto(`${BASE}/team/random`, { waitUntil: "networkidle" });
await page.waitForTimeout(2000);
const rollBtn = page.getByRole("button", { name: /^roll$/i }).first();
if (await rollBtn.count()) {
  await rollBtn.click();
  await page.waitForTimeout(3000);
}
await page.locator("div.grid.gap-6").first().screenshot({ path: `${OUT}/03-team-grid.png` });
console.log("✓ 03-team-grid.png");

// 转盘（元素级）
await page.goto(`${BASE}/wheel`, { waitUntil: "networkidle" });
await page.waitForTimeout(2500);
await page
  .locator("div.relative.mx-auto:has(div.rounded-full)")
  .first()
  .screenshot({ path: `${OUT}/04-wheel.png` });
console.log("✓ 04-wheel.png");

// 冒险面板（元素级）
await page.goto(`${BASE}/adventure`, { waitUntil: "networkidle" });
await page.waitForTimeout(2500);
const manifest = page.locator(".adventure-manifest").first();
if (await manifest.count()) {
  await manifest.screenshot({ path: `${OUT}/05-adventure.png` });
} else {
  await page.screenshot({ path: `${OUT}/05-adventure.png` });
}
console.log("✓ 05-adventure.png");

// ---- 2. 翻卡 GIF 帧（元素级：只截卡片，roll → 翻卡 → Showdown 背面）----
await page.goto(`${BASE}/random-pokemon-generator`, { waitUntil: "networkidle" });
await page.waitForTimeout(2500);
const card = page.locator(".team-card.hero-card").first();
await card.screenshot({ path: `${OUT}/frames/f0.png` });
await page.waitForTimeout(400);
await card.screenshot({ path: `${OUT}/frames/f1.png` });
await card.click(); // 触发翻卡
const marks = [250, 450, 700, 900, 1100, 1400, 1800];
let prev = 0;
for (let i = 0; i < marks.length; i++) {
  await page.waitForTimeout(marks[i] - prev);
  prev = marks[i];
  await card.screenshot({ path: `${OUT}/frames/f${i + 2}.png` });
}
console.log("✓ frames", marks.length + 2);

// ---- 3. gifenc 合成 GIF（纯 JS 编码器；Playwright 自带 ffmpeg 无 GIF 支持）----
{
  const { createRequire } = await import("node:module");
  const { GIFEncoder, quantize, applyPalette } = createRequire(import.meta.url)("gifenc");
  const gif = GIFEncoder();
  const W = 960;
  const frameCount = marks.length + 2;
  const delay = 200; // ms/帧
  for (let i = 0; i < frameCount; i++) {
    const { data, info } = await sharp(`${OUT}/frames/f${i}.png`)
      .resize({ width: W })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    const palette = quantize(data, 256);
    const index = applyPalette(data, palette);
    // 最后一帧停留更久（1.2s）
    gif.writeFrame(index, info.width, info.height, {
      palette,
      delay: i === frameCount - 1 ? 1200 : delay,
    });
  }
  gif.finish();
  const { writeFileSync } = await import("node:fs");
  writeFileSync(`${OUT}/flip.gif`, gif.bytes());
  console.log("✓ flip.gif");
}

// ---- 4. 240x240 PH 图标 ----
await sharp("app/icon.svg", { density: 300 })
  .resize(240, 240, { fit: "contain", background: { r: 15, g: 23, b: 42, alpha: 1 } })
  .png()
  .toFile(`${OUT}/icon-240.png`);
console.log("✓ icon-240.png");

await browser.close();
console.log("\n全部产出在 ph-assets/");
