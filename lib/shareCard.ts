// Client-side share-card renderer for a found shiny (canvas → PNG).
// The QR in the bottom-right encodes the reveal link, so anyone scanning
// it lands on this exact result card. Same-origin local artwork keeps the
// canvas untainted.
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
      await navigator.share({
        files: [file],
        text: `${text}\n${data.url}`,
        url: data.url,
      });
      return "shared";
    }
    if (typeof navigator !== "undefined" && navigator.share) {
      await navigator.share({ title: "Shiny Hunt Challenge", text, url: data.url });
      return "shared";
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(`${text}\n${data.url}`);
      return "copied";
    }
    downloadBlob(blob, file.name);
    return "downloaded";
  } catch {
    return null;
  }
}
