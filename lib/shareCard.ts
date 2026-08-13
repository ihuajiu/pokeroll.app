// Client-side share-card renderer (canvas → PNG). Flavors: the found shiny
// card, the regular Pokémon card from HeroCard, the team-challenge VS card
// and the single WINNER viral card. The WINNER card stays plain-URL (no QR);
// the Pokemon (TCG) card footer always pairs the readable link with a QR
// sticker for offline / cross-device scanning. Same-origin local artwork
// keeps the canvas untainted.
import QRCode from "qrcode";
import { TYPE_HEX } from "@/lib/typeColors";


export interface ShinyCardData {
  name: string;
  /** Local artwork url, e.g. /pokemon/shiny-artwork/81.png */
  img: string;
  encounters: number;
  verdict: string;
  /** Reveal link encoded into the QR code. */
  url: string;
  /** Shown as a pill, e.g. "EASY". */
  difficulty?: string;
  /** Odds denominator, e.g. 204 → "1 / 204". */
  odds: number;
  /** Easy mode: uniform pity draw — pill reads "guaranteed". */
  pity?: boolean;
}

const W = 1080;
const H = 1280;

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("img load failed"));
    img.src = src;
  });
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/** Shrink the font until the text fits maxWidth (long names/verdicts). */
function fitFont(
  ctx: CanvasRenderingContext2D,
  text: string,
  weight: number,
  base: number,
  maxWidth: number,
  min = 24,
): string {
  let size = base;
  const family = "Sora, Outfit, system-ui, sans-serif";
  for (;;) {
    const font = `${weight} ${size}px ${family}`;
    ctx.font = font;
    if (ctx.measureText(text).width <= maxWidth || size <= min) return font;
    size -= 2;
  }
}

/** Truncate with ellipsis so a line fits maxWidth (e.g. long URLs). */
function fitText(
  ctx: CanvasRenderingContext2D,
  text: string,
  font: string,
  maxWidth: number,
): string {
  ctx.font = font;
  if (ctx.measureText(text).width <= maxWidth) return text;
  let t = text;
  while (t.length > 10 && ctx.measureText(t + "…").width > maxWidth) {
    t = t.slice(0, -1);
  }
  return t + "…";
}

/** Gold text gradient (#fde68a → #f59e0b → #fbbf24 → #fff7d6). */
function goldGradient(
  ctx: CanvasRenderingContext2D,
  x0: number,
  x1: number,
): CanvasGradient {
  const g = ctx.createLinearGradient(x0, 0, x1, 0);
  g.addColorStop(0, "#fde68a");
  g.addColorStop(0.45, "#f59e0b");
  g.addColorStop(0.7, "#fbbf24");
  g.addColorStop(1, "#fff7d6");
  return g;
}

/** Holo foil gradient (#5eead4 → #818cf8 → #f0abfc → #fde68a). */
function holoGradient(
  ctx: CanvasRenderingContext2D,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
): CanvasGradient {
  const g = ctx.createLinearGradient(x0, y0, x1, y1);
  g.addColorStop(0, "#5eead4");
  g.addColorStop(0.32, "#818cf8");
  g.addColorStop(0.62, "#f0abfc");
  g.addColorStop(1, "#fde68a");
  return g;
}

/** Renders the found-shiny share card to a PNG blob (dark TCG foil style). */
export async function renderShinyCard(data: ShinyCardData): Promise<Blob> {
  await document.fonts?.ready.catch(() => undefined);
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;

  // Dark card backdrop (matches .tcg-card)
  ctx.fillStyle = "#14161f";
  ctx.fillRect(0, 0, W, H);
  const top = ctx.createRadialGradient(W / 2, 0, 80, W / 2, H * 0.35, H * 0.95);
  top.addColorStop(0, "#1b1e2b");
  top.addColorStop(1, "rgba(27, 30, 43, 0)");
  ctx.fillStyle = top;
  ctx.fillRect(0, 0, W, H);

  // Foil sheen band
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  const sheen = ctx.createLinearGradient(0, 0, W, H);
  sheen.addColorStop(0.15, "rgba(0, 0, 0, 0)");
  sheen.addColorStop(0.35, "rgba(94, 234, 212, 0.10)");
  sheen.addColorStop(0.48, "rgba(129, 140, 248, 0.12)");
  sheen.addColorStop(0.58, "rgba(240, 171, 252, 0.12)");
  sheen.addColorStop(0.7, "rgba(253, 230, 138, 0.10)");
  sheen.addColorStop(0.85, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = sheen;
  ctx.fillRect(0, 0, W, H);
  ctx.restore();

  // Card head: ✦ SHINY (left) + difficulty/odds pills (right)
  const shinyTag = "✦ SHINY";
  ctx.textAlign = "left";
  ctx.font = fitFont(ctx, shinyTag, 800, 30, 260);
  if ("letterSpacing" in ctx) (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = "8px";
  const tagW = ctx.measureText(shinyTag).width;
  ctx.fillStyle = goldGradient(ctx, 84, 84 + tagW);
  ctx.fillText(shinyTag, 84, 100);
  if ("letterSpacing" in ctx) (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = "0px";

  const oddsText = data.pity
    ? `✦ 1 / ${data.odds.toLocaleString()} · GUARANTEED`
    : `✦ ODDS 1 / ${data.odds.toLocaleString()}`;
  const pillTexts = data.difficulty
    ? [data.difficulty.toUpperCase(), oddsText]
    : [oddsText];
  const pillFonts = pillTexts.map((t) => fitFont(ctx, t, 700, 24, 340, 14));
  const pillWidths = pillTexts.map((t, i) => {
    ctx.font = pillFonts[i];
    return ctx.measureText(t).width + 40;
  });
  ctx.textAlign = "center";
  let right = W - 84;
  for (let i = pillTexts.length - 1; i >= 0; i--) {
    const w = pillWidths[i];
    const x = right - w;
    roundRect(ctx, x, 66, w, 52, 26);
    if (i === pillTexts.length - 1) {
      // odds pill: holo fill, dark text
      ctx.fillStyle = holoGradient(ctx, x, 66, x + w, 118);
      ctx.fill();
      ctx.fillStyle = "#0c0d15";
    } else {
      // difficulty pill: outline, light text
      ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
    }
    ctx.font = pillFonts[i];
    ctx.fillText(pillTexts[i], x + w / 2, 100);
    right = x - 14;
  }

  // Golden halo behind the artwork
  const glow = ctx.createRadialGradient(W / 2, 500, 30, W / 2, 500, 400);
  glow.addColorStop(0, "rgba(250, 204, 21, 0.32)");
  glow.addColorStop(1, "rgba(250, 204, 21, 0)");
  ctx.fillStyle = glow;
  ctx.fillRect(80, 60, W - 160, 860);

  // Twinkles
  ctx.fillStyle = "rgba(252, 211, 77, 0.9)";
  ctx.font = "400 40px Outfit, system-ui, sans-serif";
  for (const [x, y] of [
    [170, 220],
    [910, 260],
    [150, 700],
    [930, 720],
  ] as const) {
    ctx.fillText("✦", x, y);
  }

  // Artwork with golden drop shadow
  const img = await loadImage(data.img);
  const s = 460;
  ctx.save();
  ctx.shadowColor = "rgba(250, 204, 21, 0.55)";
  ctx.shadowBlur = 42;
  ctx.drawImage(img, W / 2 - s / 2, 500 - s / 2, s, s);
  ctx.restore();

  // Title: gold gradient, auto-shrunk to fit
  const title = `Shiny ${data.name}`;
  ctx.font = fitFont(ctx, title, 800, 80, W - 200);
  const titleW = ctx.measureText(title).width;
  ctx.fillStyle = goldGradient(ctx, W / 2 - titleW / 2, W / 2 + titleW / 2);
  ctx.fillText(title, W / 2, 856);

  // Result line: "Found after <amber>N encounters</amber> — verdict"
  const full = `Found after ${data.encounters.toLocaleString()} encounters — ${data.verdict}`;
  const baseFont = fitFont(ctx, full, 400, 34, W - 200);
  const numFont = baseFont.replace(/^400/, "700");
  const pre = "Found after ";
  const num = `${data.encounters.toLocaleString()} encounters`;
  const suf = ` — ${data.verdict}`;
  ctx.font = baseFont;
  const preW = ctx.measureText(pre).width;
  const sufW = ctx.measureText(suf).width;
  ctx.font = numFont;
  const numW = ctx.measureText(num).width;
  let sx = W / 2 - (preW + numW + sufW) / 2;
  ctx.textAlign = "left";
  ctx.font = baseFont;
  ctx.fillStyle = "rgba(255, 255, 255, 0.65)";
  ctx.fillText(pre, sx, 916);
  sx += preW;
  ctx.font = numFont;
  ctx.fillStyle = "#fcd34d";
  ctx.fillText(num, sx, 916);
  sx += numW;
  ctx.font = baseFont;
  ctx.fillStyle = "rgba(255, 255, 255, 0.65)";
  ctx.fillText(suf, sx, 916);
  ctx.textAlign = "center";

  // Footer brand (left) + QR (right, no caption below). The brand block is
  // vertically centered against the QR box, matching the challenge card.
  ctx.textAlign = "left";
  ctx.fillStyle = "rgba(255, 255, 255, 0.92)";
  ctx.font = "800 40px Sora, Outfit, system-ui, sans-serif";
  ctx.fillText("PokeRoll.app", 92, H - 230);
  ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
  ctx.font = "400 30px Outfit, system-ui, sans-serif";
  ctx.fillText("Shiny Hunt Challenge", 92, H - 185);
  ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
  ctx.font = "600 22px Outfit, system-ui, sans-serif";
  ctx.fillText(data.url.replace(/^https?:\/\//, ""), 92, H - 147);

  // QR (bottom-right, square, no caption below)
  const qr = await QRCode.toDataURL(data.url, {
    margin: 1,
    width: 180,
    color: { dark: "#1f2430", light: "#ffffff" },
  });
  const qrImg = await loadImage(qr);
  const bx = W - 92 - 216;
  const by = H - 92 - 216;
  roundRect(ctx, bx, by, 216, 216, 24);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.strokeStyle = "rgba(31, 36, 48, 0.14)";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.drawImage(qrImg, bx + 18, by + 18, 180, 180);

  // Holo foil border (drawn last, on top)
  roundRect(ctx, 22, 22, W - 44, H - 44, 36);
  ctx.strokeStyle = holoGradient(ctx, 0, 0, W, H);
  ctx.lineWidth = 4;
  ctx.stroke();

  return new Promise((resolve, reject) =>
    canvas.toBlob(
      (b) => (b ? resolve(b) : reject(new Error("toBlob failed"))),
      "image/png",
    ),
  );
}

function cardFileName(name: string): string {
  return `shiny-${name.toLowerCase().replace(/\s+/g, "-")}.png`;
}

function downloadBlob(blob: Blob, filename: string) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 5000);
}

/** Renders the card and downloads the PNG straight away. */
export async function downloadShinyCard(data: ShinyCardData): Promise<boolean> {
  try {
    const blob = await renderShinyCard(data);
    downloadBlob(blob, cardFileName(data.name));
    return true;
  } catch {
    return false;
  }
}

/**
 * One-tap share, best carrier first: image file share (mobile) → link share
 * → clipboard copy → PNG download as the last resort.
 */
export async function shareShinyCard(
  data: ShinyCardData,
): Promise<"shared" | "copied" | "downloaded" | null> {
  const text = `✨ I found a shiny ${data.name} after ${data.encounters.toLocaleString()} encounters! Can you beat that?`;
  try {
    const blob = await renderShinyCard(data);
    const file = new File([blob], cardFileName(data.name), {
      type: "image/png",
    });
    if (
      typeof navigator !== "undefined" &&
      navigator.canShare?.({ files: [file] })
    ) {
      // Attach the reveal link both ways: some targets ignore `url` when
      // files are present, so it also rides inside the text.
      try {
        await navigator.share({
          files: [file],
          text: `${text}\n${data.url}`,
          url: data.url,
        });
        return "shared";
      } catch {
        // Cancelled or no share targets — fall through to the next option.
      }
    }
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: "Shiny Hunt Challenge", text, url: data.url });
        return "shared";
      } catch {
        // Desktop Chromium exposes navigator.share but rejects with
        // AbortError("Share failed") — fall through to clipboard/download.
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`${text}\n${data.url}`);
        return "copied";
      } catch {
        // Permission denied — fall through to download.
      }
    }
    downloadBlob(blob, file.name);
    return "downloaded";
  } catch {
    return null;
  }
}

/* ── Regular Pokémon card (HeroCard share / download) ───────────────────── */

export interface PokemonCardMeta {
  name: string;
  /** Reproducible link shown as the plain-URL footer. */
  url: string;
  /** Module label for the footer, e.g. "Random Pokémon Generator". */
  module?: string;
  /** Legacy QR flag kept for API compatibility — the Pokemon (TCG) card now
   *  always carries the QR sticker in its footer (see buildCardFooter). */
  withQR?: boolean;
}

/** Full payload for the Pokémon share/download card. */
export interface PokemonCardData extends PokemonCardMeta {
  dex: number;
  types: string[];
  /** Local artwork url, e.g. /pokemon/artwork/81.png */
  img: string;
  stats: {
    hp: number;
    atk: number;
    def: number;
    spa: number;
    spd: number;
    spe: number;
  };
  bst: number;
  region: string;
  generation: number | string;
  height?: number; // metres
  weight?: number; // kilograms
}

/** Bounds of the solid content in a canvas (0-based, inclusive).
 *  Semi-transparent pixels (drop shadows, glows) are ignored. */
/** True when the canvas has at least one solid pixel (alpha > 200). */
function hasOpaquePixels(c: HTMLCanvasElement): boolean {
  const ctx = c.getContext("2d", { willReadFrequently: true })!;
  const { data } = ctx.getImageData(0, 0, c.width, c.height);
  for (let i = 3; i < data.length; i += 4) if (data[i] > 200) return true;
  return false;
}

function findOpaqueBounds(c: HTMLCanvasElement): {
  left: number;
  top: number;
  right: number;
  bottom: number;
} {
  const ctx = c.getContext("2d")!;
  const { data, width, height } = ctx.getImageData(0, 0, c.width, c.height);
  const solid = (i: number) => data[i * 4 + 3] > 200;
  let bottom = -1;
  outerB: for (let y = height - 1; y >= 0; y--) {
    const row = y * width;
    for (let x = 0; x < width; x++) {
      if (solid(row + x)) { bottom = y; break outerB; }
    }
  }
  if (bottom < 0) return { left: 0, top: 0, right: width - 1, bottom: height - 1 };
  let top = 0;
  outerT: for (let y = 0; y <= bottom; y++) {
    const row = y * width;
    for (let x = 0; x < width; x++) {
      if (solid(row + x)) { top = y; break outerT; }
    }
  }
  let right = 0;
  outerR: for (let x = width - 1; x >= 0; x--) {
    for (let y = top; y <= bottom; y++) {
      if (solid(y * width + x)) { right = x; break outerR; }
    }
  }
  let left = 0;
  outerL: for (let x = 0; x <= right; x++) {
    for (let y = top; y <= bottom; y++) {
      if (solid(y * width + x)) { left = x; break outerL; }
    }
  }
  return { left, top, right, bottom };
}

/** Lowest row holding real content (dark or saturated pixels) — locates the
 *  empty band at the bottom of the captured card. Side/bottom insets skip
 *  the card border and the rounded-corner curve. */
function findContentBottom(
  c: HTMLCanvasElement,
  bounds: { left: number; right: number; bottom: number },
): number {
  const ctx = c.getContext("2d")!;
  const sideInset = Math.min(120, Math.floor((bounds.right - bounds.left) * 0.1));
  const bottomInset = 18;
  const x0 = bounds.left + sideInset;
  const w = bounds.right - bounds.left - sideInset * 2;
  const h = bounds.bottom - bottomInset;
  if (w <= 0 || h <= 0) return bounds.bottom;
  const { data } = ctx.getImageData(x0, 0, w, h);
  for (let y = h - 1; y >= 0; y--) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      if (data[i + 3] > 200) {
        const r = data[i], g = data[i + 1], b = data[i + 2];
        const mx = Math.max(r, g, b);
        const mn = Math.min(r, g, b);
        if (mx - mn > 40 || mx < 170) return y;
      }
    }
  }
  return 0;
}

/**
 * Webfont CSS for the capture. The site self-hosts fonts (same-origin
 * @font-face in the app stylesheet), so html-to-image's own font pass can
 * read them from document.styleSheets — this helper only needs to cover any
 * future external stylesheet whose cssRules would throw a SecurityError.
 * Returns "" when there is no external font stylesheet to inline.
 */
let fontCssPromise: Promise<string> | null = null;
function getFontEmbedCSS(): Promise<string> {
  if (!fontCssPromise) {
    fontCssPromise = (async () => {
      try {
        const link = document.querySelector<HTMLLinkElement>(
          'link[rel="stylesheet"][href*="fonts.googleapis"]',
        );
        if (!link) return "";
        const res = await fetch(link.href);
        return res.ok ? await res.text() : "";
      } catch {
        return "";
      }
    })();
  }
  return fontCssPromise;
}

/** Slim footer strip appended inside the captured card — brand + tool name
 *  on the left, QR sticker on the right. Theme-aware (reads the card's own
 *  surface color); replaces the action-bar zone so downloads always carry the
 *  brand mark and scannable link without leaving a blank strip. */
function buildCardFooter(
  clone: HTMLElement,
  meta: PokemonCardMeta,
): HTMLElement {
  const f = document.createElement("div");
  // The card surface is a CSS gradient, so backgroundColor reads transparent -
  // follow the site theme instead (--surface flips with data-mode), matching
  // the theme-aware colors the old canvas band used.
  const dark =
    document.documentElement.getAttribute("data-mode") === "dark";
  const border = dark ? "rgba(255,255,255,0.16)" : "rgba(31,36,48,0.12)";
  const brandColor = dark ? "rgba(255,255,255,0.94)" : "rgba(31,36,48,0.94)";
  const moduleColor = dark ? "rgba(255,255,255,0.5)" : "rgba(31,36,48,0.5)";
  // Footer layout: left column carries the two text rows, a QR sticker sits
  // on the right — so the TCG card always leads back to the reproducible
  // link and is scannable offline / cross-device.
  f.style.cssText = [
    "display:flex",
    "flex-direction:row",
    "align-items:center",
    "justify-content:space-between",
    "gap:14px",
    "grid-column:1 / -1",
    "margin-top:auto",
    "border-top:1px solid " + border,
    "padding:15px 2px 2px",
    "min-width:0",
  ].join(";");
  // Line 1: PokeRoll logo + brand domain. Logo mirrors components/LogoMark
  // (square dice-ball, brand red), hardcoded colors keep it on-theme in both
  // day and night cards.
  const brandRow = document.createElement("div");
  brandRow.style.cssText = [
    "display:flex",
    "align-items:center",
    "gap:8px",
    "width:100%",
    "min-width:0",
  ].join(";");
  brandRow.innerHTML =
    '<svg viewBox="0 0 100 100" width="18" height="18" aria-hidden="true" ' +
    'style="flex-shrink:0">' +
    '<ellipse cx="50" cy="92" rx="36" ry="5" fill="#1f2430" opacity="0.1"/>' +
    '<g transform="rotate(12 50 48)">' +
    '<rect x="8" y="6" width="84" height="84" rx="20" fill="#ee3b3b"/>' +
    '<path d="M8 48h84v22a20 20 0 0 1-20 20H28a20 20 0 0 1-20-20Z" fill="#fff"/>' +
    '<rect x="8" y="42" width="84" height="12" fill="#1f2430"/>' +
    '<rect x="8" y="6" width="84" height="84" rx="20" fill="none" stroke="#1f2430" stroke-width="4"/>' +
    '<g fill="#fff"><circle cx="30" cy="27" r="6.5"/><circle cx="70" cy="27" r="6.5"/></g>' +
    '<g fill="#ee3b3b"><circle cx="30" cy="69" r="6.5"/><circle cx="70" cy="69" r="6.5"/></g>' +
    '<circle cx="50" cy="48" r="13" fill="#fff" stroke="#1f2430" stroke-width="6"/>' +
    "</g>" +
    "</svg>";
  const brand = document.createElement("span");
  brand.textContent = "PokeRoll.app";
  brand.style.cssText = [
    "font:800 14px/1.2 Outfit, system-ui, sans-serif",
    "color:" + brandColor,
    "flex-shrink:0",
  ].join(";");
  brandRow.appendChild(brand);
  // Line 2: tool description — the page's own name (the trailing "| PokeRoll"
  // brand suffix from the title is stripped), e.g. "Random Pokémon Generator".
  const descRow = document.createElement("div");
  descRow.style.cssText = [
    "display:flex",
    "align-items:center",
    "gap:8px",
    "width:100%",
    "min-width:0",
  ].join(";");
  const moduleName = document.createElement("span");
  moduleName.textContent = (meta.module || "Random Pokémon Generator").split("|")[0].trim();
  moduleName.style.cssText = [
    "font:400 11px/1.3 Outfit, system-ui, sans-serif",
    "color:" + moduleColor,
    "white-space:nowrap",
    "overflow:hidden",
    "text-overflow:ellipsis",
    "min-width:0",
  ].join(";");
  descRow.appendChild(moduleName);
  // Left column: brand row + description row.
  const left = document.createElement("div");
  left.style.cssText = [
    "display:flex",
    "flex-direction:column",
    "align-items:flex-start",
    "gap:9px",
    "min-width:0",
    "flex:1",
  ].join(";");
  left.append(brandRow, descRow);
  // Right: empty slot reserving the QR sticker's space. The QR is painted
  // straight onto the captured canvas afterwards (html-to-image mis-scales
  // embedded <img> QRs, so it is never part of the DOM capture).
  const qrSlot = document.createElement("div");
  qrSlot.setAttribute("data-qr-slot", "true");
  qrSlot.style.cssText = [
    "width:56px",
    "height:56px",
    "flex-shrink:0",
    "display:block",
  ].join(";");
  f.append(left, qrSlot);
  return f;
}

/**
 * Classic style: renders a HeroCard DOM node to a PNG blob. The card keeps
 * its own on-page style (captured via html-to-image); a QR sticker is pasted
 * onto the bottom-right corner, encoding the reproducible link.
 */
async function renderPokemonCardDom(
  el: HTMLElement,
  meta: PokemonCardMeta,
): Promise<Blob> {
  await document.fonts?.ready.catch(() => undefined);
  const { toCanvas } = await import("html-to-image");
  const scale = 3;
  const fontEmbedCSS = await getFontEmbedCSS();
  // The action bar (Share / Download / New roll) is UI chrome, not card
  // content — exclude it from the picture.
  const filter = (node: Node) =>
    !(node instanceof HTMLElement && node.classList.contains("hero-actions"));

  // The generator stages transform the card on-page (CSS `zoom`, `scale`,
  // auto margins), which breaks html-to-image's size math — a zoomed capture
  // gets a blank gutter, and an in-place capture inlines the computed margin /
  // scale origin, shifting the painted card inside the canvas (the homepage
  // hero card lost its right edge that way). Snapshot a neutralized clone
  // instead of mutating the live card. The clone sits in a fixed holder
  // inserted next to the original, so every ancestor-scoped rule (stage
  // metrics, grid overrides) still applies while the clone itself keeps plain
  // static styles: html-to-image inlines the captured node's computed
  // position, so any offset must live on the holder, never on the captured
  // node. The holder overlays the original card's on-screen rect — Chromium
  // culls painting for nodes placed off-screen or fully occluded, which used
  // to produce a transparent canvas.
  const rect = el.getBoundingClientRect();
  const holder = document.createElement("div");
  holder.style.cssText = `position:fixed;left:${Math.round(rect.left)}px;top:${Math.round(rect.top)}px;z-index:9999;pointer-events:none;`;
  // The card is zoomed (CSS zoom) on the /random stage; the neutralized
  // clone is smaller, so scale the holder to match the real card — otherwise
  // the user sees a brief "shrunk card" flash during the capture.
  const zoomFactor = parseFloat(getComputedStyle(el).zoom) || 1;
  if (zoomFactor !== 1) {
    holder.style.transformOrigin = "0 0";
    holder.style.transform = `scale(${zoomFactor})`;
  }
  const clone = el.cloneNode(true) as HTMLElement;
  // Neutralize every on-page transform so the capture renders the plain
  // 1:1 card — the same shape the /random page produces.
  clone.style.zoom = "1";
  clone.style.scale = "none";
  // Pin the clone to the original's layout box so the capture matches the
  // on-page card exactly, zoomed stage or stretched roster alike. Use
  // offsetWidth/offsetHeight — getBoundingClientRect is unreliable in the
  // presence of CSS zoom (returns neither layout nor visual size here).
  clone.style.width = `${el.offsetWidth}px`;
  clone.style.height = `${el.offsetHeight}px`;
  clone.style.margin = "0";
  // The action bar (Share / Team / Copy / Roll) is UI chrome — drop it from
  // layout too (display:none), not just from the picture, so the card content
  // adaptively fills the strip it would have left blank.
  const actionsEl = clone.querySelector<HTMLElement>(".hero-actions");
  if (actionsEl) actionsEl.style.display = "none";
  holder.appendChild(clone);
  el.parentElement?.appendChild(holder);
  // The footer (brand + readable page URL) is real card content now — a slim
  // strip pinned to the card bottom where the action bar used to sit. Rendering
  // it in the DOM (instead of painting it onto the canvas afterwards) keeps the
  // layout honest: content fills above it and nothing overlaps.
  const hasFooter = actionsEl != null;
  // The QR slot's position inside the clone (layout px, holder scale undone)
  // tells renderPokemonCardDom where to paint the QR on the final canvas.
  let qrSlotPos: { x: number; y: number; w: number; h: number } | null = null;
  if (hasFooter) {
    const footer = buildCardFooter(clone, meta);
    clone.appendChild(footer);
    const slot = footer.querySelector<HTMLElement>("[data-qr-slot]");
    if (slot) {
      const cRect = clone.getBoundingClientRect();
      const sRect = slot.getBoundingClientRect();
      qrSlotPos = {
        x: (sRect.left - cRect.left) / zoomFactor,
        y: (sRect.top - cRect.top) / zoomFactor,
        w: sRect.width / zoomFactor,
        h: sRect.height / zoomFactor,
      };
    }
  }
  // Legacy canvas band (QR + brand painted under the filtered action bar) is
  // only needed when there is no DOM footer. The clone is fully neutralized,
  // so rect math is safe here.
  let actionsTopCss: number | null = null;
  const actionsForMeasure = clone.querySelector<HTMLElement>(".hero-actions");
  if (
    actionsForMeasure instanceof HTMLElement &&
    actionsForMeasure.getClientRects().length > 0
  ) {
    actionsTopCss =
      actionsForMeasure.getBoundingClientRect().top -
      clone.getBoundingClientRect().top;
  }
  let shot: HTMLCanvasElement;
  try {
    shot = await toCanvas(clone, { pixelRatio: scale, fontEmbedCSS, filter });
  } finally {
    holder.remove();
  }

  // Some browser/version combinations render the clone as a fully transparent
  // canvas. Detect that and fall back to an in-place capture with the same
  // neutralizations (brief flicker, but always correct) instead of shipping a
  // blank image. The action-bar offset must be re-measured in this state so it
  // stays in the same coordinate space as the capture.
  if (!hasOpaquePixels(shot)) {
    const inlineZoom = el.style.zoom;
    const inlineScale = el.style.scale;
    const inlineMargin = el.style.margin;
    const liveActions = el.querySelector<HTMLElement>(".hero-actions");
    const inlineActionsDisplay = liveActions?.style.display ?? null;
    el.style.zoom = "1";
    el.style.scale = "none";
    el.style.margin = "0";
    // Match the clone: drop the action bar from layout so content fills.
    if (liveActions) liveActions.style.display = "none";
    try {
      shot = await toCanvas(el, { pixelRatio: scale, fontEmbedCSS, filter });
    } finally {
      el.style.zoom = inlineZoom;
      el.style.scale = inlineScale;
      el.style.margin = inlineMargin;
      if (liveActions) liveActions.style.display = inlineActionsDisplay ?? "";
    }
  }

  const canvas = document.createElement("canvas");
  // Compose inside the card: QR bottom-right + brand bottom-left, laid out in
  // the empty band below the last content row (the filtered action bar's
  // zone). The canvas is cropped to the card's real painted bounds — zoom /
  // grid / aspect-ratio quirks can leave transparent gutters on any side.
  const u = scale; // 1 css px in canvas px
  const b = findOpaqueBounds(shot);
  const cardW = b.right - b.left + 1;
  const cardH = b.bottom - b.top + 1;
  const contentBottom =
    actionsTopCss != null
      ? actionsTopCss * scale - b.top
      : findContentBottom(shot, b) - b.top;
  canvas.width = cardW;
  canvas.height = cardH;
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(shot, -b.left, -b.top);

  // Paint the QR sticker into the reserved footer slot. Drawing it directly
  // (instead of embedding an <img>) keeps the modules pixel-exact, so the
  // card scans reliably after the 3x upscale.
  if (qrSlotPos) {
    const q = Math.round(qrSlotPos.w * scale);
    const qx = Math.round(qrSlotPos.x * scale) - b.left;
    const qy = Math.round(qrSlotPos.y * scale) - b.top;
    const qr = await QRCode.toDataURL(meta.url, {
      margin: 0,
      width: 168,
      color: { dark: "#1f2430", light: "#ffffff" },
    });
    const qrImg = await loadImage(qr);
    ctx.save();
    ctx.shadowColor = "rgba(0, 0, 0, 0.18)";
    ctx.shadowBlur = 8 * u;
    ctx.shadowOffsetY = 2 * u;
    roundRect(ctx, qx, qy, q, q, 12 * u);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.restore();
    ctx.drawImage(qrImg, qx + 5 * u, qy + 5 * u, q - 10 * u, q - 10 * u);
  }

  const bandTop = contentBottom + 6 * u;
  const bandBottom = cardH - 14 * u;
  const bandH = bandBottom - bandTop;
  if (!hasFooter && bandH >= 40 * u) {
    const padX = 26 * u; // matches the card's own content padding
    const isDarkCard =
      document.documentElement.getAttribute("data-mode") === "dark";
    // Plain-URL fallback (gospinwheel lesson): the footer always carries the
    // readable link so screenshots and reblogs still lead back to pokeroll.app.
    // Page root link only — drop the ?p= query so the footer stays clean.
  const plainUrl = meta.url.split("?")[0].replace(/^https?:\/\//, "");
    // TCG cards always carry the QR sticker (right) — scannable offline /
    // cross-device backlink. The plain URL still renders on the left.
    let brandRight = cardW - padX;
    {
      // QR box (right), vertically centered in the band
      const q = Math.min(64 * u, bandH - 8 * u);
      const qx = cardW - padX - q;
      const qy = bandTop + (bandH - q) / 2;
      const qr = await QRCode.toDataURL(meta.url, {
        margin: 0,
        width: Math.round(q - 10 * u),
        color: { dark: "#1f2430", light: "#ffffff" },
      });
      const qrImg = await loadImage(qr);
      ctx.save();
      ctx.shadowColor = "rgba(0, 0, 0, 0.18)";
      ctx.shadowBlur = 8 * u;
      ctx.shadowOffsetY = 2 * u;
      roundRect(ctx, qx, qy, q, q, 12 * u);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.restore();
      ctx.drawImage(qrImg, qx + 5 * u, qy + 5 * u, q - 10 * u, q - 10 * u);
      brandRight = qx - 18 * u;
    }

    // Brand block (left): domain + module, then the plain URL as the回源 line.
    // Colors follow the captured card's theme — dark-mode cards need light
    // text or the brand lines vanish into the background.
    // The page link ALWAYS renders (never falls back to just the domain);
    // the module line is dropped first when the band is short.
    const lines: { text: string; font: string; color: string }[] = [
      {
        text: plainUrl,
        font: `600 ${11 * u}px Outfit, system-ui, sans-serif`,
        color: isDarkCard
          ? "rgba(255, 255, 255, 0.85)"
          : "rgba(31, 36, 48, 0.85)",
      },
      {
        text: "PokeRoll.app",
        font: `800 ${13 * u}px Sora, Outfit, system-ui, sans-serif`,
        color: isDarkCard
          ? "rgba(255, 255, 255, 0.92)"
          : "rgba(31, 36, 48, 0.92)",
      },
    ];
    if (bandH >= 50 * u) {
      lines.push({
        text: meta.module || "Random Pokémon Generator",
        font: `400 ${10 * u}px Outfit, system-ui, sans-serif`,
        color: isDarkCard
          ? "rgba(255, 255, 255, 0.5)"
          : "rgba(31, 36, 48, 0.5)",
      });
    }
    const lineH = 15 * u;
    const blockH = (lines.length - 1) * lineH;
    const baseY = bandTop + (bandH - blockH) / 2 + 5 * u;
    const maxW = Math.max(0, brandRight - (padX + 2 * u));
    ctx.textAlign = "left";
    lines.forEach((l, i) => {
      ctx.font = l.font;
      ctx.fillStyle = l.color;
      ctx.fillText(
        fitText(ctx, l.text, l.font, maxW),
        padX + 2 * u,
        baseY + i * lineH,
      );
    });
  }

  return new Promise((resolve, reject) =>
    canvas.toBlob(
      (b) => (b ? resolve(b) : reject(new Error("toBlob failed"))),
      "image/png",
    ),
  );
}

/** Renders the card to a PNG blob. */
export async function renderPokemonCard(
  el: HTMLElement,
  data: PokemonCardData,
): Promise<Blob> {
  return renderPokemonCardDom(el, data);
}

function pokemonFileName(name: string): string {
  return `pokemon-${name.toLowerCase().replace(/\s+/g, "-")}.png`;
}

/** Renders the card and downloads the PNG straight away. */
export async function downloadPokemonCard(
  el: HTMLElement,
  data: PokemonCardData,
): Promise<boolean> {
  try {
    const blob = await renderPokemonCard(el, data);
    downloadBlob(blob, pokemonFileName(data.name));
    return true;
  } catch {
    return false;
  }
}

/**
 * Link-only share: native share sheet (text + reproducible link) → clipboard
 * copy. Returns how the link was delivered, or null if nothing worked.
 */
export async function sharePokemonLink(
  meta: PokemonCardMeta,
): Promise<"shared" | "copied" | null> {
  const text = `I rolled ${meta.name} on PokeRoll.app — what will you get?`;
  if (typeof navigator !== "undefined" && navigator.share) {
    try {
      await navigator.share({ title: "Random Pokémon Generator", text, url: meta.url });
      return "shared";
    } catch {
      // Desktop Chromium exposes navigator.share but rejects with
      // AbortError("Share failed") — fall through to clipboard.
    }
  }
  if (typeof navigator !== "undefined" && navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(`${text}\n${meta.url}`);
      return "copied";
    } catch {
      // Permission denied.
    }
  }
  return null;
}

/* ── Team Challenge result card ───────────────────────────────────────── */

export interface TeamResultCardData {
  /** The team that rolled against the challenge (the "challenger"). */
  challenger: { name: string; img: string; bst: number }[];
  /** The shared challenge team. */
  challenge: { name: string; img: string; bst: number }[];
  chBst: number;
  myBst: number;
  /** Winner line, e.g. "The challenger wins!". */
  result: string;
  /** Result link (reproduces this matchup + winner). */
  url: string;
  /** Optional QR sticker (offline/cross-device). Default: plain URL footer. */
  withQR?: boolean;
}

const TCW = 1080;
const TCH = 1280;

async function drawTeamAvatar(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  x: number,
  y: number,
  size: number,
  accent: string,
) {
  roundRect(ctx, x, y, size, size, 18);
  ctx.fillStyle = "#1b1e2b";
  ctx.fill();
  ctx.strokeStyle = accent;
  ctx.lineWidth = 3;
  ctx.stroke();
  const pad = 10;
  const scale = Math.min((size - pad * 2) / img.width, (size - pad * 2) / img.height);
  const dw = img.width * scale;
  const dh = img.height * scale;
  ctx.drawImage(img, x + (size - dw) / 2, y + (size - dh) / 2, dw, dh);
}

/** Dark "versus" result card: two teams as 2x3 avatar frames, the right
 *  block offset down so the lineups stagger up-down around the VS. */
export async function renderTeamResultCard(data: TeamResultCardData): Promise<Blob> {
  await document.fonts?.ready.catch(() => undefined);
  const canvas = document.createElement("canvas");
  const W = 1080;
  const H = 1440; // 3:4 portrait
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;

  // Dark TCG backdrop
  ctx.fillStyle = "#14161f";
  ctx.fillRect(0, 0, W, H);
  const top = ctx.createRadialGradient(W / 2, 0, 80, W / 2, H * 0.32, H);
  top.addColorStop(0, "#1b1e2b");
  top.addColorStop(1, "rgba(27, 30, 43, 0)");
  ctx.fillStyle = top;
  ctx.fillRect(0, 0, W, H);

  // Foil sheen band
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  const sheen = ctx.createLinearGradient(0, 0, W, H);
  sheen.addColorStop(0.15, "rgba(0, 0, 0, 0)");
  sheen.addColorStop(0.35, "rgba(94, 234, 212, 0.10)");
  sheen.addColorStop(0.48, "rgba(129, 140, 248, 0.12)");
  sheen.addColorStop(0.58, "rgba(240, 171, 252, 0.12)");
  sheen.addColorStop(0.7, "rgba(253, 230, 138, 0.10)");
  sheen.addColorStop(0.85, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = sheen;
  ctx.fillRect(0, 0, W, H);
  ctx.restore();

  const gold = goldGradient(ctx, 60, W - 60);
  const amber = "#fbbf24";

  // Header — compact: brand tag, winner headline, totals, gold divider
  ctx.textAlign = "center";
  ctx.fillStyle = gold;
  ctx.font = "800 26px Sora, Outfit, sans-serif";
  if ("letterSpacing" in ctx) (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = "6px";
  ctx.fillText("✦ TEAM CHALLENGE ✦", W / 2, 66);
  if ("letterSpacing" in ctx) (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = "0px";
  const resFont = fitFont(ctx, data.result, 800, 46, W - 220, 26);
  ctx.font = resFont;
  const resW = ctx.measureText(data.result).width;
  ctx.fillStyle = goldGradient(ctx, W / 2 - resW / 2, W / 2 + resW / 2);
  ctx.fillText(data.result, W / 2, 148);
  ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
  ctx.font = "600 22px Sora, Outfit, sans-serif";
  ctx.fillText(
    `Challenger ${data.myBst} BST   ·   Challenge ${data.chBst} BST`,
    W / 2,
    202,
  );
  ctx.strokeStyle = "rgba(250, 204, 21, 0.25)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(96, 240);
  ctx.lineTo(W - 96, 240);
  ctx.stroke();

  // Golden halo behind the lineups
  const glow = ctx.createRadialGradient(W / 2, H / 2, 30, W / 2, H / 2, 620);
  glow.addColorStop(0, "rgba(250, 204, 21, 0.12)");
  glow.addColorStop(1, "rgba(250, 204, 21, 0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 300, W, 850);

  // Twinkles
  ctx.fillStyle = "rgba(252, 211, 77, 0.85)";
  ctx.font = "400 40px Outfit, system-ui, sans-serif";
  for (const [x, y] of [[130, 280], [940, 290], [150, 720], [930, 740], [540, 120]] as const) {
    ctx.fillText("✦", x, y);
  }

  // Load artworks
  const loadMany = async (team: { img: string }[]) =>
    Promise.all(
      team.map(async (p) => {
        try {
          return await loadImage(p.img);
        } catch {
          return null;
        }
      }),
    );
  const challengerImgs = await loadMany(data.challenger);
  const challengeImgs = await loadMany(data.challenge);

  const won = data.myBst > data.chBst;
  const lost = data.chBst > data.myBst;
  const winAccent = amber;
  const loseAccent = "rgba(255, 255, 255, 0.28)";

  const size = 96;
  const nameW = 250;
  const barW = 180;
  const barH = 9;
  const rows = [326, 458, 590, 722, 854, 986];
  // Mirrored lineups around the VS: left reads [ avatar | name + BST bar ],
  // right reads [ name + BST bar | avatar ].
  const leftAvatarX = 84;
  const leftNameX = leftAvatarX + size + 16;
  const rightNameX = 566;
  const rightAvatarX = rightNameX + nameW + 16;

  const drawColumn = (
    team: { name: string; bst: number }[],
    imgs: (HTMLImageElement | null)[],
    nameX: number,
    avatarX: number,
    accent: string,
    barColor: string,
    align: "left" | "right",
  ) => {
    team.forEach((p, i) => {
      const y = rows[i];
      const img = imgs[i];
      // avatar frame
      ctx.save();
      if (accent === winAccent) {
        ctx.shadowColor = "rgba(250, 204, 21, 0.45)";
        ctx.shadowBlur = 16;
      } else {
        ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
        ctx.shadowBlur = 8;
      }
      roundRect(ctx, avatarX, y, size, size, 16);
      ctx.fillStyle = "#1b1e2b";
      ctx.fill();
      ctx.restore();
      ctx.strokeStyle = accent;
      ctx.lineWidth = 4;
      roundRect(ctx, avatarX, y, size, size, 16);
      ctx.stroke();
      if (img) {
        const pad = 9;
        const scale = Math.min((size - pad * 2) / img.width, (size - pad * 2) / img.height);
        const dw = img.width * scale;
        const dh = img.height * scale;
        ctx.drawImage(img, avatarX + (size - dw) / 2, y + (size - dh) / 2, dw, dh);
      }
      // Name + BST bar: a stack anchored to the TOP of the row. Left column
      // is flush-left, right column is flush-right, and the right bar grows
      // toward the left so the two lineups mirror each other.
      const alignX = align === "right" ? nameX + nameW : nameX;
      ctx.textAlign = align;
      ctx.font = fitFont(ctx, p.name, 700, 22, nameW, 12);
      ctx.fillStyle = "rgba(255, 255, 255, 0.92)";
      ctx.fillText(p.name, alignX, y + 27);
      const barY = y + 41;
      // Shorter bar than the name block so the VS keeps breathing room.
      const barX = align === "right" ? nameX + nameW - barW : nameX;
      roundRect(ctx, barX, barY, barW, barH, 5);
      ctx.fillStyle = "rgba(255, 255, 255, 0.14)";
      ctx.fill();
      const frac = Math.max(0, Math.min(1, (p.bst || 0) / 800));
      if (frac > 0) {
        const fillW = Math.max(barH, barW * frac);
        const fillX = align === "right" ? nameX + nameW - fillW : nameX;
        roundRect(ctx, fillX, barY, fillW, barH, 5);
        ctx.fillStyle = barColor;
        ctx.fill();
      }
    });
  };

  // Column labels sit in their own band ABOVE the lineups — never on avatars.
  const challengeColor = lost ? winAccent : "rgba(255,255,255,0.6)";
  const challengerColor = won ? winAccent : "rgba(255,255,255,0.6)";
  const columnLabel = (text: string, x: number, color: string) => {
    ctx.textAlign = "center";
    ctx.font = "800 22px Sora, Outfit, sans-serif";
    ctx.fillStyle = color;
    ctx.fillText(text, x, 286);
  };
  columnLabel(
    lost ? "★ THE CHALLENGE — WINNER" : "THE CHALLENGE",
    (leftAvatarX + leftNameX + nameW) / 2,
    challengeColor,
  );
  columnLabel(
    won ? "★ THE CHALLENGER — WINNER" : "THE CHALLENGER",
    (rightNameX + rightAvatarX + size) / 2,
    challengerColor,
  );

  drawColumn(
    data.challenge,
    challengeImgs,
    leftNameX,
    leftAvatarX,
    lost ? winAccent : loseAccent,
    lost ? amber : "rgba(255, 255, 255, 0.5)",
    "left",
  );
  drawColumn(
    data.challenger,
    challengerImgs,
    rightNameX,
    rightAvatarX,
    won ? winAccent : loseAccent,
    won ? amber : "rgba(255, 255, 255, 0.5)",
    "right",
  );

  // VS
  ctx.textAlign = "center";
  ctx.fillStyle = gold;
  ctx.font = "900 72px Sora, Outfit, sans-serif";
  ctx.fillText("VS", 506, 696);

  // Footer: brand (left) + plain URL + opt-in QR (right, no caption)
  ctx.textAlign = "left";
  ctx.fillStyle = "rgba(255, 255, 255, 0.92)";
  ctx.font = "800 38px Sora, Outfit, system-ui, sans-serif";
  ctx.fillText("PokeRoll.app", 92, 1210);
  ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
  ctx.font = "400 26px Outfit, system-ui, sans-serif";
  ctx.fillText("Team Challenge", 92, 1252);
  ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
  ctx.font = "600 22px Outfit, system-ui, sans-serif";
  ctx.fillText(data.url.replace(/^https?:\/\//, ""), 92, 1290);

  if (data.withQR) {
    const q = 200;
    const qx = W - 90 - q;
    const qy = 1160;
    const qr = await QRCode.toDataURL(data.url, {
      margin: 1,
      width: Math.round(q - 28),
      color: { dark: "#1f2430", light: "#ffffff" },
    });
    const qrImg = await loadImage(qr);
    ctx.save();
    ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
    ctx.shadowBlur = 14;
    ctx.shadowOffsetY = 4;
    roundRect(ctx, qx, qy, q, q, 18);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.restore();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.18)";
    ctx.lineWidth = 2;
    roundRect(ctx, qx, qy, q, q, 18);
    ctx.stroke();
    ctx.drawImage(qrImg, qx + 14, qy + 14, q - 28, q - 28);
  }

  // Holo foil border
  roundRect(ctx, 22, 22, W - 44, H - 44, 40);
  ctx.strokeStyle = holoGradient(ctx, 0, 0, W, H);
  ctx.lineWidth = 4;
  ctx.stroke();

  // Rounded corners
  const mask = document.createElement("canvas");
  mask.width = W;
  mask.height = H;
  const mctx = mask.getContext("2d")!;
  roundRect(mctx, 0, 0, W, H, 44);
  mctx.fillStyle = "#fff";
  mctx.fill();
  ctx.globalCompositeOperation = "destination-in";
  ctx.drawImage(mask, 0, 0);
  ctx.globalCompositeOperation = "source-over";

  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("toBlob failed"))), "image/png"),
  );
}

function teamFileName(): string {
  return "team-challenge-result.png";
}

export async function downloadTeamResult(data: TeamResultCardData): Promise<boolean> {
  try {
    const blob = await renderTeamResultCard(data);
    downloadBlob(blob, teamFileName());
    return true;
  } catch {
    return false;
  }
}

/** One-tap share of the result card: image share → link share → clipboard → download. */
export async function shareTeamResult(
  data: TeamResultCardData,
): Promise<"shared" | "copied" | "downloaded" | null> {
  const text = data.result;
  try {
    const blob = await renderTeamResultCard(data);
    const file = new File([blob], teamFileName(), { type: "image/png" });
    if (typeof navigator !== "undefined" && navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          text: `${text}\n${data.url}`,
          url: data.url,
        });
        return "shared";
      } catch {
        // fall through
      }
    }
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: "Team Challenge Result", text, url: data.url });
        return "shared";
      } catch {
        // fall through
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`${text}\n${data.url}`);
        return "copied";
      } catch {
        // fall through
      }
    }
    downloadBlob(blob, file.name);
    return "downloaded";
  } catch {
    return null;
  }
}

/** Capture the on-page card as a clean PNG data URL (no footer band) — used
 *  as the right-side visual of the WINNER viral card. Neutralizes the card's
 *  on-page transforms the same way the TCG download does. */
export async function captureCardImage(el: HTMLElement): Promise<string> {
  await document.fonts?.ready.catch(() => undefined);
  const { toCanvas } = await import("html-to-image");
  const scale = 3;
  const fontEmbedCSS = await getFontEmbedCSS();
  // Capture the whole on-page card — including the bottom action bar — so
  // the shared image shows exactly the roll state the user saw.
  const filter = () => true;
  const rect = el.getBoundingClientRect();
  const holder = document.createElement("div");
  holder.style.cssText = `position:fixed;left:${Math.round(rect.left)}px;top:${Math.round(rect.top)}px;z-index:9999;pointer-events:none;`;
  // The card is zoomed (CSS zoom) on the /random stage; the neutralized
  // clone is smaller, so scale the holder to match the real card — otherwise
  // the user sees a brief "shrunk card" flash during the capture.
  const zoomFactor = parseFloat(getComputedStyle(el).zoom) || 1;
  if (zoomFactor !== 1) {
    holder.style.transformOrigin = "0 0";
    holder.style.transform = `scale(${zoomFactor})`;
  }
  const clone = el.cloneNode(true) as HTMLElement;
  clone.style.zoom = "1";
  clone.style.scale = "none";
  clone.style.width = `${el.offsetWidth}px`;
  clone.style.height = `${el.offsetHeight}px`;
  clone.style.margin = "0";
  holder.appendChild(clone);
  el.parentElement?.appendChild(holder);
  let shot: HTMLCanvasElement;
  try {
    shot = await toCanvas(clone, { pixelRatio: scale, fontEmbedCSS, filter });
  } finally {
    holder.remove();
  }
  if (!hasOpaquePixels(shot)) {
    // The clone was transparent (card moved / mid-animation / holder not
    // painted yet). Re-measure and retry the clone after a frame — NEVER
    // reset the live card's zoom (that visibly shrinks the on-screen card).
    const rect2 = el.getBoundingClientRect();
    holder.style.left = `${Math.round(rect2.left)}px`;
    holder.style.top = `${Math.round(rect2.top)}px`;
    el.parentElement?.appendChild(holder);
    await new Promise<void>((res) => {
      requestAnimationFrame(() => requestAnimationFrame(() => res()));
    });
    try {
      shot = await toCanvas(clone, { pixelRatio: scale, fontEmbedCSS, filter });
    } finally {
      holder.remove();
    }
    if (!hasOpaquePixels(shot)) {
      throw new Error("card capture transparent");
    }
  }
  const b = findOpaqueBounds(shot);
  const w = b.right - b.left + 1;
  const h = b.bottom - b.top + 1;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(shot, -b.left, -b.top);
  return canvas.toDataURL("image/png");
}

/** Page-title-derived module label for share cards: strips the "| PokeRoll"
 *  brand suffix and any em-dash part so the title stays clean everywhere
 *  (popup, download and share all read the same). */
export function pageModule(): string {
  if (typeof document === "undefined") return "Random Pokémon Generator";
  const t = document.title.trim();
  // Already the base page title (no ?p= Pokémon prefix) — keep as-is.
  if (/\|\s*PokeRoll\s*$/i.test(t)) return t;
  // Shared ?p= title looks like "{name} — <Tool>". The name never contains
  // an em dash, but the tool title itself may (e.g. es "…aleatorio — Equipo"),
  // so strip only the FIRST "—" segment and rebuild the base title.
  const idx = t.indexOf("—");
  if (idx > 0) {
    const tool = t.slice(idx + 1).trim();
    if (tool) return tool.replace(/\|\s*PokeRoll\s*$/i, "").trim() + " | PokeRoll";
  }
  return t;
}

/* ── WINNER viral card (single Pokémon, gospinwheel-style) ────────────── */
export interface WinnerCardData {
  name: string;
  /** Local artwork url, e.g. /pokemon/artwork/25.png (right-side visual). */
  img: string;
  /** Reproducible ?p= link. */
  url: string;
  /** Pokémon types (English slugs) — kept for compatibility. */
  types: string[];
  /** Module label, e.g. "Random Pokémon Generator" (top title). */
  module?: string;
  /** Data URL of the on-page card at roll time — shown on the right when
   *  available (falls back to the artwork circle). */
  cardImg?: string;
  /** National Pokédex number (shown as a DEX badge on the left). */
  dex?: number;
  /** Pre-rendered data URL — lets the popup open fully-formed without a
   *  loading flash while the canvas renders. */
  preview?: string;
  /** Dark (night) variant — used by the popup theme toggle. */
  dark?: boolean;
}

const WW = 1200;
const WH = 675;
const WINNER_BLUE = "#1f3a5f";
const WINNER_PINK = "#ec4899";

/** Deterministic four-point sparkles — restrained gold/rose, kept away from
 *  the left text block so the card reads calm and premium. */
function winnerSparkles(ctx: CanvasRenderingContext2D, seed: number) {
  let a = seed >>> 0;
  const rnd = () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  for (let i = 0; i < 14; i++) {
    const x = WW * (0.42 + rnd() * 0.56);
    const y = 40 + rnd() * (WH - 80);
    const size = (8 + rnd() * 12) * (WW / 1200);
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rnd() * Math.PI);
    ctx.globalAlpha = 0.18 + rnd() * 0.22;
    ctx.fillStyle = i % 2 ? "#eab308" : "#f472b6";
    const r = size / 2;
    ctx.beginPath();
    ctx.moveTo(0, -r);
    ctx.quadraticCurveTo(0, 0, r, 0);
    ctx.quadraticCurveTo(0, 0, 0, r);
    ctx.quadraticCurveTo(0, 0, -r, 0);
    ctx.quadraticCurveTo(0, 0, 0, -r);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
  ctx.globalAlpha = 1;
}

/** Small four-point sparkle (used on the trophy). */
function drawSparkle(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  size: number,
  alpha: number,
) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.globalAlpha = alpha;
  const r = size / 2;
  ctx.beginPath();
  ctx.moveTo(0, -r);
  ctx.quadraticCurveTo(0, 0, r, 0);
  ctx.quadraticCurveTo(0, 0, 0, r);
  ctx.quadraticCurveTo(0, 0, -r, 0);
  ctx.quadraticCurveTo(0, 0, 0, -r);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

/** Feather "trophy" icon embedded as SVG, tinted with a gold gradient — crisp
 *  at any size, no hand-drawn paths. The cup is solid gold, the handles/feet/
 *  base are gold strokes, and a white star is overlaid on the cup at draw time. */
const TROPHY_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" ' +
  'stroke="url(#tgold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
  '<defs><linearGradient id="tgold" x1="12" y1="2" x2="12" y2="22" ' +
  'gradientUnits="userSpaceOnUse">' +
  '<stop offset="0" stop-color="#fde68a"/><stop offset="0.5" stop-color="#fbbf24"/>' +
  '<stop offset="1" stop-color="#d97706"/></linearGradient></defs>' +
  '<path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" fill="url(#tgold)" stroke="url(#tgold)"/>' +
  '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>' +
  '<path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>' +
  '<path d="M4 22h16"/>' +
  '<path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>' +
  '<path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>' +
  "</svg>";

let trophyIconPromise: Promise<HTMLImageElement | null> | null = null;
function getTrophyIcon(): Promise<HTMLImageElement | null> {
  if (!trophyIconPromise) {
    trophyIconPromise = loadImage(
      "data:image/svg+xml," + encodeURIComponent(TROPHY_SVG),
    )
      .then((img) => img)
      .catch(() => null);
  }
  return trophyIconPromise;
}

/** Vector gold trophy (cup + handles + stem + base + star) — crisp at any size. */
function drawTrophy(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  size: number,
) {
  // Prefer the real SVG trophy icon (Feather/Lucide curves, gold gradient).
  return getTrophyIcon().then((icon) => {
    ctx.save();
    ctx.translate(cx, cy);
    if (icon) {
      ctx.drawImage(icon, -size / 2, -size / 2, size, size);
      // White star emblem inside the solid-gold cup (visible on both themes)
      ctx.fillStyle = "#ffffff";
      drawSparkle(ctx, 0, -0.27 * size, 0.2 * size, 0.95);
      ctx.restore();
      return;
    }
    // Fallback: hand-drawn trophy (safety net if the SVG ever fails to load).
    const u = size / 24;
    const gold = ctx.createLinearGradient(0, 2 * u, 0, 22 * u);
    gold.addColorStop(0, "#fde68a");
    gold.addColorStop(0.45, "#fbbf24");
    gold.addColorStop(1, "#d97706");
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(18 * u, 2 * u);
    ctx.lineTo(6 * u, 2 * u);
    ctx.lineTo(6 * u, 9 * u);
    ctx.arc(12 * u, 9 * u, 6 * u, Math.PI, 0);
    ctx.closePath();
    ctx.fillStyle = gold;
    ctx.fill();
    ctx.strokeStyle = "rgba(146, 64, 14, 0.5)";
    ctx.lineWidth = 0.9 * u;
    ctx.stroke();
    ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
    roundRect(ctx, 6 * u, 2 * u, 12 * u, 2.1 * u, 1 * u);
    ctx.fill();
    ctx.strokeStyle = "#f59e0b";
    ctx.lineWidth = 1.4 * u;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(6 * u, 9 * u);
    ctx.lineTo(4.5 * u, 9 * u);
    ctx.arc(4.5 * u, 6.5 * u, 2.5 * u, Math.PI / 2, -Math.PI / 2);
    ctx.lineTo(6 * u, 4 * u);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(18 * u, 9 * u);
    ctx.lineTo(19.5 * u, 9 * u);
    ctx.arc(19.5 * u, 6.5 * u, 2.5 * u, Math.PI / 2, -Math.PI / 2);
    ctx.lineTo(18 * u, 4 * u);
    ctx.stroke();
    ctx.fillStyle = "#ffffff";
    drawSparkle(ctx, 12 * u, 6.8 * u, 3.8 * u, 0.95);
    ctx.strokeStyle = "#f59e0b";
    ctx.lineWidth = 1.8 * u;
    ctx.beginPath();
    ctx.moveTo(10 * u, 14.66 * u);
    ctx.lineTo(10 * u, 17 * u);
    ctx.quadraticCurveTo(10 * u, 18 * u, 7 * u, 22 * u);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(14 * u, 14.66 * u);
    ctx.lineTo(14 * u, 17 * u);
    ctx.quadraticCurveTo(14 * u, 18 * u, 17 * u, 22 * u);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(4 * u, 22 * u);
    ctx.lineTo(20 * u, 22 * u);
    ctx.stroke();
    ctx.restore();
  });
}

/** Vector chain-link icon (two rounded capsules rotated ±45°). */
function drawLinkIcon(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  size: number,
) {
  ctx.save();
  ctx.translate(cx, cy);
  const u = size / 30;
  ctx.strokeStyle = WINNER_PINK;
  ctx.lineWidth = 3.4 * u;
  ctx.lineCap = "round";
  ctx.save();
  ctx.rotate(Math.PI / 4);
  roundRect(ctx, -9 * u, -15 * u, 18 * u, 30 * u, 9 * u);
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.translate(13 * u, -7 * u);
  ctx.rotate(-Math.PI / 4);
  roundRect(ctx, -9 * u, -9 * u, 18 * u, 30 * u, 9 * u);
  ctx.stroke();
  ctx.restore();
  ctx.restore();
}

/** Landscape 16:9 viral card — premium gacha reveal: refined warm gradient,
 *  restrained sparkles, vector trophy badge, hero name, personal subtitle,
 *  dex badge, link bar, and the real roll card on the right. */
export async function renderWinnerCard(data: WinnerCardData): Promise<Blob> {
  await document.fonts?.ready.catch(() => undefined);
  const canvas = document.createElement("canvas");
  canvas.width = WW;
  canvas.height = WH;
  const ctx = canvas.getContext("2d")!;
  const S = WW / 1600;
  const dark = !!data.dark; // design was authored at 1600\u00d7900; scale everything

  // Warm ivory → soft peach background with a diagonal sheen + top-right glow
  const bg = ctx.createLinearGradient(0, 0, 0, WH);
  bg.addColorStop(0, dark ? "#10131c" : "#fffdf8");
  bg.addColorStop(1, dark ? "#1a1f2b" : "#f6ecda");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, WW, WH);
  const sheen = ctx.createLinearGradient(0, 0, WW, WH);
  sheen.addColorStop(0, dark ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.5)");
  sheen.addColorStop(0.3, "rgba(255, 255, 255, 0)");
  ctx.fillStyle = sheen;
  ctx.fillRect(0, 0, WW, WH);
  const glow = ctx.createRadialGradient(WW * 0.92, 0, 20 * S, WW * 0.92, 0, WH * 0.95);
  glow.addColorStop(0, dark ? "rgba(255, 205, 120, 0.22)" : "rgba(255, 205, 120, 0.38)");
  glow.addColorStop(1, "rgba(255, 205, 120, 0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, WW, WH);

  winnerSparkles(ctx, 7);

  const LX = 76 * S;

  // Page title with refined letter-spacing + gradient underline
  ctx.textAlign = "left";
  if ("letterSpacing" in ctx) {
    (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing =
      String(1.5 * S) + "px";
  }
  ctx.fillStyle = dark ? "#e8eaf0" : WINNER_BLUE;
  const title = data.module || "Random Pok\u00e9mon Generator";
  ctx.font = fitFont(ctx, title, 700, 48 * S, 560 * S, 24 * S);
  ctx.fillText(title, LX, 122 * S);
  if ("letterSpacing" in ctx) {
    (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = "0px";
  }
  const under = ctx.createLinearGradient(LX, 0, LX + 96 * S, 0);
  under.addColorStop(0, "#fb7185");
  under.addColorStop(1, "#fb923c");
  ctx.fillStyle = under;
  roundRect(ctx, LX + 2 * S, 140 * S, 100 * S, 6 * S, 3 * S);
  ctx.fill();

  // WINNER pill: vector trophy in a ring bigger than the pill, layered on top
  const pillH = 70 * S;
  const pillY = 208 * S;
  const badgeD = 86 * S;
  const badgeCX = LX + 26 * S;
  const badgeCY = pillY + pillH / 2;
  ctx.font = "800 " + Math.round(32 * S) + "px Sora, Outfit, system-ui, sans-serif";
  const winW = ctx.measureText("WINNER").width;
  const pillW = badgeD / 2 + 18 * S + winW + 26 * S;
  ctx.save();
  ctx.shadowColor = "rgba(236, 72, 153, 0.16)";
  ctx.shadowBlur = 10 * S;
  ctx.shadowOffsetY = 3 * S;
  roundRect(ctx, badgeCX, pillY, pillW, pillH, pillH / 2);
  ctx.fillStyle = dark ? "#232838" : "#ffffff";
  ctx.fill();
  ctx.strokeStyle = "#f9a8d4";
  ctx.lineWidth = 2.5 * S;
  ctx.stroke();
  // ring on top of the pill border
  ctx.beginPath();
  ctx.arc(badgeCX, badgeCY, badgeD / 2, 0, Math.PI * 2);
  ctx.fillStyle = dark ? "#1c2130" : "#fff7fb";
  ctx.fill();
  ctx.strokeStyle = WINNER_PINK;
  ctx.lineWidth = 3.5 * S;
  ctx.stroke();
  ctx.restore();
  await drawTrophy(ctx, badgeCX, badgeCY + 1 * S, 52 * S);
  ctx.textAlign = "left";
  ctx.fillStyle = WINNER_PINK;
  ctx.font = "800 " + Math.round(32 * S) + "px Sora, Outfit, system-ui, sans-serif";
  ctx.fillText("WINNER", badgeCX + badgeD / 2 + 18 * S, pillY + pillH / 2 + 10 * S);

  // Soft halo behind the name
  const halo = ctx.createRadialGradient(LX + 280 * S, 415 * S, 40 * S, LX + 280 * S, 415 * S, 330 * S);
  halo.addColorStop(0, "rgba(236, 72, 153, 0.09)");
  halo.addColorStop(1, "rgba(236, 72, 153, 0)");
  ctx.fillStyle = halo;
  ctx.fillRect(LX, 100 * S, 620 * S, 480 * S);

  // Giant name — the hero, with a soft lift shadow. Anchored by its
  // actual painted top (measureText) so the gap to the trophy ring stays
  // constant no matter how long the name is.
  ctx.save();
  ctx.shadowColor = dark ? "rgba(0, 0, 0, 0.55)" : "rgba(31, 36, 48, 0.20)";
  ctx.shadowBlur = 14 * S;
  ctx.shadowOffsetY = 6 * S;
  ctx.fillStyle = dark ? "#f4f5f8" : "#23272f";
  ctx.font = fitFont(ctx, data.name, 900, 255 * S, 660 * S, 48 * S);
  const nM = ctx.measureText(data.name);
  const nAscent = nM.actualBoundingBoxAscent || nM.fontBoundingBoxAscent || 0;
  const nDescent = nM.actualBoundingBoxDescent || nM.fontBoundingBoxDescent || 0;
  const nameBaseline = 262 + nAscent; // name text top pinned at y=262 (airier)
  ctx.fillText(data.name, LX, nameBaseline);
  ctx.restore();
  // Personal subtitle — follows the name's painted bottom
  ctx.fillStyle = WINNER_PINK;
  ctx.font = "600 " + Math.round(24 * S) + "px Sora, Outfit, system-ui, sans-serif";
  ctx.fillText("\u2014 your teammate for today", LX + 3 * S, nameBaseline + nDescent + 24);
  // Dex badge
  ctx.fillStyle = dark ? "rgba(255, 255, 255, 0.5)" : "rgba(31, 36, 48, 0.45)";
  ctx.font = "700 " + Math.round(20 * S) + "px Outfit, system-ui, sans-serif";
  ctx.fillText("Pokédex No. " + String(data.dex ?? 0), LX + 3 * S, nameBaseline + nDescent + 50);

  // Link bar (bottom-left): vector link icon + short canonical ?p= URL
  const barY = WH - 140 * S;
  const barH = 64 * S;
  // Full page link (with the page path) so viewers can locate the exact
  // page the card came from — not just the domain.
  // Page root link only — drop the ?p= query so the footer stays clean.
  const shortUrl = data.url.split("?")[0].replace(/^https?:\/\//, "");
  ctx.font = "600 " + Math.round(22 * S) + "px Outfit, system-ui, sans-serif";
  // Let the bar grow to fit the full URL — the right side has room (the
  // card on the right starts well past the left column, at ~780px).
  const barW = Math.min(700, Math.max(290 * S, ctx.measureText(shortUrl).width + 92 * S));
  ctx.save();
  ctx.shadowColor = dark ? "rgba(0, 0, 0, 0.45)" : "rgba(31, 36, 48, 0.10)";
  ctx.shadowBlur = 10 * S;
  ctx.shadowOffsetY = 3 * S;
  roundRect(ctx, LX, barY, barW, barH, 30 * S);
  ctx.fillStyle = dark ? "#232838" : "#ffffff";
  ctx.fill();
  ctx.restore();
  ctx.strokeStyle = "#f9a8d4";
  ctx.lineWidth = 2 * S;
  roundRect(ctx, LX, barY, barW, barH, 30 * S);
  ctx.stroke();
  drawLinkIcon(ctx, LX + 26 * S, barY + barH / 2, 22 * S);
  ctx.fillStyle = WINNER_PINK;
  ctx.font = "600 " + Math.round(22 * S) + "px Outfit, system-ui, sans-serif";
  ctx.fillText(
    fitText(ctx, shortUrl, ctx.font, barW - 86 * S),
    LX + 58 * S,
    barY + barH / 2 + 8 * S,
  );

  // Right side: the actual on-page card at roll time (when available), else
  // the Pok\u00e9mon artwork — either way it's "what you pulled".
  const ax = WW - 318 * S;
  const ay = WH / 2 - 12 * S;
  if (data.cardImg) {
    const card = await loadImage(data.cardImg);
    const maxW = 480 * S;
    const maxH = WH - 120 * S;
    const ratio = card.width / card.height;
    let cw = maxW;
    let ch = cw / ratio;
    if (ch > maxH) {
      ch = maxH;
      cw = ch * ratio;
    }
    ctx.save();
    ctx.fillStyle = "rgba(31, 36, 48, 0.16)";
    ctx.beginPath();
    ctx.ellipse(ax, ay + ch / 2 + 17 * S, cw * 0.46, 15 * S, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    ctx.save();
    roundRect(ctx, ax - cw / 2, ay - ch / 2, cw, ch, 20 * S);
    ctx.clip();
    ctx.drawImage(card, ax - cw / 2, ay - ch / 2, cw, ch);
    ctx.restore();
    ctx.strokeStyle = "rgba(236, 72, 153, 0.30)";
    ctx.lineWidth = 4 * S;
    roundRect(ctx, ax - cw / 2, ay - ch / 2, cw, ch, 20 * S);
    ctx.stroke();
  } else {
    const img = await loadImage(data.img);
    const artSize = 440 * S;
    ctx.save();
    ctx.beginPath();
    ctx.arc(ax, ay, artSize / 2, 0, Math.PI * 2);
    ctx.clip();
    const sc = Math.min((artSize - 30 * S) / img.width, (artSize - 30 * S) / img.height);
    const dw = img.width * sc;
    const dh = img.height * sc;
    ctx.drawImage(img, ax - dw / 2, ay - dh / 2, dw, dh);
    ctx.restore();
    ctx.strokeStyle = "rgba(236, 72, 153, 0.35)";
    ctx.lineWidth = 6 * S;
    ctx.beginPath();
    ctx.arc(ax, ay, artSize / 2, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Elegant double frame — rose-gold gradient + hairline inset
  const inset = 22 * S;
  const frame = ctx.createLinearGradient(inset, 0, WW - inset, 0);
  frame.addColorStop(0, dark ? "rgba(236, 72, 153, 0.8)" : "rgba(236, 72, 153, 0.55)");
  frame.addColorStop(0.5, dark ? "rgba(251, 146, 60, 0.8)" : "rgba(251, 146, 60, 0.55)");
  frame.addColorStop(1, dark ? "rgba(236, 72, 153, 0.8)" : "rgba(236, 72, 153, 0.55)");
  ctx.strokeStyle = frame;
  ctx.lineWidth = 2 * S;
  roundRect(ctx, inset, inset, WW - inset * 2, WH - inset * 2, 26 * S);
  ctx.stroke();
  ctx.strokeStyle = dark ? "rgba(236, 72, 153, 0.35)" : "rgba(236, 72, 153, 0.16)";
  ctx.lineWidth = 1 * S;
  roundRect(
    ctx,
    inset + 7 * S,
    inset + 7 * S,
    WW - (inset + 7 * S) * 2,
    WH - (inset + 7 * S) * 2,
    20 * S,
  );
  ctx.stroke();

  // Rounded corners
  const mask = document.createElement("canvas");
  mask.width = WW;
  mask.height = WH;
  const mctx = mask.getContext("2d")!;
  roundRect(mctx, 0, 0, WW, WH, 24 * S);
  mctx.fillStyle = "#fff";
  mctx.fill();
  ctx.globalCompositeOperation = "destination-in";
  ctx.drawImage(mask, 0, 0);
  ctx.globalCompositeOperation = "source-over";

  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("toBlob failed"))), "image/png"),
  );
}

function winnerFileName(name: string): string {
  return "pokeroll.app-winner-" + name.toLowerCase().replace(/\s+/g, "-") + ".png";
}

/** Renders the WINNER card and downloads the PNG straight away. */
export async function downloadWinnerCard(data: WinnerCardData): Promise<boolean> {
  try {
    const blob = await renderWinnerCard(data);
    downloadBlob(blob, winnerFileName(data.name));
    return true;
  } catch {
    return false;
  }
}

/** Native image share (file + link) \u2192 clipboard fallback \u2192 download. */
export async function shareWinnerCard(
  data: WinnerCardData,
): Promise<"shared" | "copied" | "downloaded" | null> {
  const text = "I rolled " + data.name + " on PokeRoll.app \u2014 your turn!";
  try {
    const blob = await renderWinnerCard(data);
    const file = new File([blob], winnerFileName(data.name), { type: "image/png" });
    if (typeof navigator !== "undefined" && navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          text: text + "\n" + data.url,
          url: data.url,
        });
        return "shared";
      } catch {
        // fall through
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(text + "\n" + data.url);
      return "copied";
    }
    downloadBlob(blob, file.name);
    return "downloaded";
  } catch {
    return null;
  }
}
