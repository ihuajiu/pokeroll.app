// Client-side share-card renderer (canvas → PNG). Two flavors: the found
// shiny card and the regular Pokémon card from HeroCard. The QR in the
// bottom-right encodes the reproducible link, so anyone scanning it lands
// on this exact result. Same-origin local artwork keeps the canvas untainted.
import QRCode from "qrcode";

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

  // Footer brand (left)
  ctx.textAlign = "left";
  ctx.fillStyle = "rgba(255, 255, 255, 0.92)";
  ctx.font = "800 40px Sora, Outfit, system-ui, sans-serif";
  ctx.fillText("PokeRoll.app", 92, H - 108);
  ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
  ctx.font = "400 30px Outfit, system-ui, sans-serif";
  ctx.fillText("Shiny Hunt Challenge", 92, H - 66);

  // QR (bottom-right) with caption
  const qr = await QRCode.toDataURL(data.url, {
    margin: 1,
    width: 180,
    color: { dark: "#1f2430", light: "#ffffff" },
  });
  const qrImg = await loadImage(qr);
  const bx = W - 92 - 216;
  const by = H - 92 - 256;
  roundRect(ctx, bx, by, 216, 256, 24);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.strokeStyle = "rgba(31, 36, 48, 0.14)";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.drawImage(qrImg, bx + 18, by + 18, 180, 180);
  ctx.textAlign = "center";
  ctx.fillStyle = "#6b7280";
  ctx.font = "600 17px Outfit, system-ui, sans-serif";
  ctx.fillText("Scan to hunt your own", bx + 108, by + 228);

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
  /** Reproducible link encoded into the QR code. */
  url: string;
  /** Module label for the footer, e.g. "Random Pokémon Generator". */
  module?: string;
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
  holder.appendChild(clone);
  el.parentElement?.appendChild(holder);
  // The QR/brand band lives where the action bar sits. Locate it in the DOM
  // instead of pixel-scanning for the "empty" area: in dark mode the card's
  // own dark background reads as content everywhere, so the scan finds no
  // empty band and the QR was silently skipped (dark-mode downloads lost the
  // QR + brand). The clone is fully neutralized, so rect math is safe here.
  let actionsTopCss: number | null = null;
  const actionsEl = clone.querySelector(".hero-actions");
  if (actionsEl instanceof HTMLElement) {
    actionsTopCss =
      actionsEl.getBoundingClientRect().top -
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
    el.style.zoom = "1";
    el.style.scale = "none";
    el.style.margin = "0";
    const liveActions = el.querySelector(".hero-actions");
    if (liveActions instanceof HTMLElement) {
      actionsTopCss =
        liveActions.getBoundingClientRect().top -
        el.getBoundingClientRect().top;
    }
    try {
      shot = await toCanvas(el, { pixelRatio: scale, fontEmbedCSS, filter });
    } finally {
      el.style.zoom = inlineZoom;
      el.style.scale = inlineScale;
      el.style.margin = inlineMargin;
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

  const bandTop = contentBottom + 6 * u;
  const bandBottom = cardH - 14 * u;
  const bandH = bandBottom - bandTop;
  if (bandH >= 40 * u) {
    const padX = 26 * u; // matches the card's own content padding
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

    // Brand block (left): domain + module, same info as the shiny card.
    // Colors follow the captured card's theme — dark-mode cards need light
    // text or the brand lines vanish into the background.
    const isDarkCard =
      document.documentElement.getAttribute("data-mode") === "dark";
    const lines: { text: string; font: string; color: string }[] = [
      {
        text: "PokeRoll.app",
        font: `800 ${15 * u}px Sora, Outfit, system-ui, sans-serif`,
        color: isDarkCard
          ? "rgba(255, 255, 255, 0.92)"
          : "rgba(31, 36, 48, 0.92)",
      },
      {
        text: meta.module || "Random Pokémon Generator",
        font: `400 ${11.5 * u}px Outfit, system-ui, sans-serif`,
        color: isDarkCard
          ? "rgba(255, 255, 255, 0.55)"
          : "rgba(31, 36, 48, 0.55)",
      },
    ];
    if (bandH >= 56 * u) {
      lines.push({
        text: "Scan to roll your own",
        font: `600 ${10 * u}px Outfit, system-ui, sans-serif`,
        color: isDarkCard
          ? "rgba(255, 255, 255, 0.4)"
          : "rgba(31, 36, 48, 0.4)",
      });
    }
    const lineH = 15 * u;
    const blockH = (lines.length - 1) * lineH;
    const baseY = bandTop + (bandH - blockH) / 2 + 5 * u;
    ctx.textAlign = "left";
    lines.forEach((l, i) => {
      ctx.font = l.font;
      ctx.fillStyle = l.color;
      ctx.fillText(l.text, padX + 2 * u, baseY + i * lineH);
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
  challenger: { name: string; img: string }[];
  /** The shared challenge team. */
  challenge: { name: string; img: string }[];
  chBst: number;
  myBst: number;
  /** Winner line, e.g. "The challenger wins!". */
  result: string;
  /** Result link (reproduces this matchup + winner). */
  url: string;
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

  const red = "#ee3b3b";
  const ink = "#1f2430";
  const gray = "#7a8294";

  // Light backdrop
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, "#ffffff");
  bg.addColorStop(1, "#eef1f6");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // Red header band
  const band = ctx.createLinearGradient(0, 0, W, 0);
  band.addColorStop(0, "#ee3b3b");
  band.addColorStop(1, "#d9292f");
  ctx.fillStyle = band;
  ctx.fillRect(0, 0, W, 250);

  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  ctx.font = "700 24px Sora, Outfit, sans-serif";
  ctx.fillText("POKEROLL · TEAM CHALLENGE", W / 2, 78);
  ctx.fillStyle = "#ffffff";
  ctx.font = "800 60px Sora, Outfit, sans-serif";
  ctx.fillText("RESULT", W / 2, 152);
  ctx.fillStyle = "#ffffff";
  ctx.font = "800 38px Sora, Outfit, sans-serif";
  ctx.fillText(data.result, W / 2, 212);
  ctx.fillStyle = "rgba(255,255,255,0.9)";
  ctx.font = "600 24px Sora, Outfit, sans-serif";
  ctx.fillText(
    `Challenger ${data.myBst} BST   ·   Challenge ${data.chBst} BST`,
    W / 2,
    250,
  );

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
  const accentW = red;
  const accentL = "#c3c8d2";
  const chAccent = won ? accentW : accentL;
  const ch2Accent = lost ? accentW : accentL;

  const size = 150;
  const lx = [100, 280];
  const ly = [340, 510, 680];
  // Right block offset down 60 for a subtle up-down stagger.
  const rx = [700, 880];
  const ry = [400, 570, 740];

  // Team labels
  ctx.textAlign = "center";
  ctx.font = "800 26px Sora, Outfit, sans-serif";
  ctx.fillStyle = won ? red : gray;
  ctx.fillText(won ? "★ THE CHALLENGER — WINNER" : "THE CHALLENGER", (lx[0] + lx[1] + size) / 2, 306);
  ctx.fillStyle = lost ? red : gray;
  ctx.fillText(lost ? "★ THE CHALLENGE — WINNER" : "THE CHALLENGE", (rx[0] + rx[1] + size) / 2, 366);

  const drawGrid = (
    team: { name: string }[],
    imgs: (HTMLImageElement | null)[],
    xs: number[],
    ys: number[],
    accent: string,
  ) => {
    team.forEach((p, i) => {
      const x = xs[i % 2];
      const y = ys[Math.floor(i / 2)];
      const img = imgs[i];
      // frame
      ctx.save();
      ctx.shadowColor = "rgba(31,36,48,0.12)";
      ctx.shadowBlur = 10;
      ctx.shadowOffsetY = 4;
      roundRect(ctx, x, y, size, size, 22);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.restore();
      ctx.strokeStyle = accent;
      ctx.lineWidth = 4;
      roundRect(ctx, x, y, size, size, 22);
      ctx.stroke();
      if (img) {
        const pad = 12;
        const scale = Math.min((size - pad * 2) / img.width, (size - pad * 2) / img.height);
        const dw = img.width * scale;
        const dh = img.height * scale;
        ctx.drawImage(img, x + (size - dw) / 2, y + (size - dh) / 2, dw, dh);
      }
      // name
      ctx.textAlign = "center";
      ctx.font = fitFont(ctx, p.name, 700, 20, size - 8, 12);
      ctx.fillStyle = ink;
      ctx.fillText(p.name, x + size / 2, y + size + 26);
    });
  };

  drawGrid(data.challenger, challengerImgs, lx, ly, chAccent);
  drawGrid(data.challenge, challengeImgs, rx, ry, ch2Accent);

  // VS badge
  ctx.textAlign = "center";
  ctx.fillStyle = red;
  ctx.font = "900 96px Sora, Outfit, sans-serif";
  ctx.fillText("VS", 540, 545);

  // Footer
  const q = 150;
  const qx = W - 70 - q;
  const qy = 1180;
  const qr = await QRCode.toDataURL(data.url, {
    margin: 0,
    width: Math.round(q - 24),
    color: { dark: "#1f2430", light: "#ffffff" },
  });
  const qrImg = await loadImage(qr);
  ctx.save();
  ctx.shadowColor = "rgba(31,36,48,0.18)";
  ctx.shadowBlur = 14;
  ctx.shadowOffsetY = 4;
  roundRect(ctx, qx, qy, q, q, 16);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.restore();
  ctx.drawImage(qrImg, qx + 12, qy + 12, q - 24, q - 24);

  ctx.textAlign = "left";
  ctx.fillStyle = ink;
  ctx.font = "800 34px Sora, Outfit, sans-serif";
  ctx.fillText("PokeRoll.app", 70, qy + 62);
  ctx.fillStyle = gray;
  ctx.font = "400 24px Outfit, sans-serif";
  ctx.fillText("Team Challenge", 70, qy + 100);
  ctx.fillStyle = gray;
  ctx.font = "600 22px Outfit, sans-serif";
  ctx.fillText("Scan to take the challenge", 70, qy + 134);

  // Rounded corners (transparent)
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
