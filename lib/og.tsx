import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { getPokemonById } from "./pokeapi";

const TYPE_HEX: Record<string, string> = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
};

// Site brand — same font & colors as the header LOGO + "PokeRoll" wordmark.
const BRAND_RED = "#ee3b3b";
const FONT_DIR = path.join(process.cwd(), "lib/fonts");

function readFont(file: string): ArrayBuffer {
  const buf = fs.readFileSync(path.join(FONT_DIR, file));
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
}

type OgFont = { name: string; data: ArrayBuffer; weight: 400 | 700 | 800; style: "normal" };
let ogFonts: OgFont[] = [];
try {
  const sora400 = readFont("sora-400.ttf");
  const sora700 = readFont("sora-700.ttf");
  const sora800 = readFont("sora-800.ttf");
  ogFonts = [
    { name: "Sora", data: sora400, weight: 400, style: "normal" },
    { name: "Sora", data: sora700, weight: 700, style: "normal" },
    { name: "Sora", data: sora800, weight: 800, style: "normal" },
  ];
} catch {
  // font unavailable -> fall back to the default Satori font
}

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// PokeRoll Poke Ball LOGO (mirrors components/LogoMark.tsx, colors inlined
// like app/icon.svg so it renders standalone inside the OG card).
function PokeRollLogo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <ellipse cx="50" cy="92" rx="36" ry="5" fill="#1f2430" opacity="0.1" />
      <g transform="rotate(12 50 48)">
        <rect x="8" y="6" width="84" height="84" rx="20" fill={BRAND_RED} />
        <path d="M8 48h84v22a20 20 0 0 1-20 20H28a20 20 0 0 1-20-20Z" fill="#fff" />
        <rect x="8" y="42" width="84" height="12" fill="#1f2430" />
        <rect x="8" y="6" width="84" height="84" rx="20" fill="none" stroke="#1f2430" strokeWidth="4" />
        <g fill="#fff">
          <circle cx="30" cy="27" r="6.5" />
          <circle cx="70" cy="27" r="6.5" />
        </g>
        <g fill={BRAND_RED}>
          <circle cx="30" cy="69" r="6.5" />
          <circle cx="70" cy="69" r="6.5" />
        </g>
        <circle cx="50" cy="48" r="13" fill="#fff" stroke="#1f2430" strokeWidth="6" />
      </g>
    </svg>
  );
}

// "PokeRoll" wordmark matching the site header: Poke in text color, Roll in brand red.
function PokeRollWordmark({ fontSize }: { fontSize: number }) {
  return (
    <div
      style={{
        display: "flex",
        fontSize,
        fontWeight: 700,
        fontFamily: "Sora",
        lineHeight: 1,
      }}
    >
      <span style={{ color: "#f2f5fb" }}>Poke</span>
      <span style={{ color: BRAND_RED }}>Roll</span>
    </div>
  );
}

export async function buildOgImage(p?: string, origin?: string): Promise<ImageResponse> {
  let name = "Pokémon";
  let dex = "";
  let types: string[] = [];
  let artwork = "";

  try {
    if (p) {
      const pk = await getPokemonById(p);
      name = pk.displayName || name;
      dex = `#${String(pk.dexNumber).padStart(3, "0")}`;
      types = pk.types ?? [];
      artwork = pk.artwork ?? "";
      // Satori cannot decode webp; convert the self-hosted artwork to a PNG
      // data URL so the Pokémon shows up in the share preview.
      if (artwork.startsWith("/")) {
        try {
          const file = path.join(process.cwd(), "public", artwork);
          const png = await sharp(file).png().toBuffer();
          artwork = `data:image/png;base64,${png.toString("base64")}`;
        } catch {
          // fall back to the PNG sprite (absolute URL for the img tag)
          artwork = pk.sprite ?? "";
          if (artwork.startsWith("/") && origin) artwork = origin + artwork;
        }
      } else if (artwork && origin) {
        artwork = origin + artwork;
      }
    }
  } catch {
    // API failure -> fall back to generic branding (no crash)
  }

  const mainColor = types.length
    ? TYPE_HEX[types[0]] ?? "#3B5BA5"
    : "#3B5BA5";
  const bg = `linear-gradient(135deg, ${mainColor} 0%, #1f2430 100%)`;

  if (!artwork) {
    // Generic branded card — used by the home page and every non-Pokémon tool.
    // Middle: five iconic Pokémon in circular badges ("team lineup") to fill the card.
    const ICON_DEX = [25, 6, 133, 94, 448]; // Pikachu, Charizard, Eevee, Gengar, Lucario
    // Use the 475px artwork (converted webp -> PNG) so the lineup stays crisp;
    // fall back to the small sprite if conversion fails.
    const iconSrcs: string[] = [];
    if (origin) {
      for (const d of ICON_DEX) {
        try {
          const file = path.join(process.cwd(), "public/pokemon/artwork", `${d}.webp`);
          const png = await sharp(file).png().toBuffer();
          iconSrcs.push(`data:image/png;base64,${png.toString("base64")}`);
        } catch {
          iconSrcs.push(`${origin}/pokemon/sprite/${d}.png`);
        }
      }
    }
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "52px 72px",
            background: "linear-gradient(150deg, #2b2240 0%, #1f2430 55%, #14161f 100%)",
            color: "#fff",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <PokeRollLogo size={52} />
              <div style={{ width: 16 }} />
              <PokeRollWordmark fontSize={34} />
            </div>
            <div
              style={{
                fontSize: 38,
                fontWeight: 800,
                marginTop: 18,
                fontFamily: "Sora",
              }}
            >
              Random Pokémon Generator — Team, Type, Wheel &amp; Showdown
            </div>
          </div>
          {/* Middle: five iconic Pokémon in circular badges */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 28,
            }}
          >
            {iconSrcs.map((src) => (
              <div
                key={src}
                style={{
                  width: 146,
                  height: 146,
                  borderRadius: 9999,
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.12)",
                  border: "3px solid rgba(255,255,255,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={src}
                  width={118}
                  height={118}
                  style={{ width: 118, height: 118, objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* Feature pills */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              {["Random", "Team Coach", "Wheel", "Guess", "Shiny", "Adventure"].map((f) => (
                <div
                  key={f}
                  style={{
                    fontSize: 21,
                    padding: "8px 16px",
                    margin: "0 6px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.12)",
                    fontFamily: "Sora",
                  }}
                >
                  {f}
                </div>
              ))}
            </div>
            <div
              style={{
                fontSize: 19,
                marginTop: 18,
                textAlign: "center",
                opacity: 0.7,
                fontFamily: "Sora",
              }}
            >
              Free fan-made Pokémon toolbox · pokeroll.app
            </div>
          </div>
        </div>
      ),
      { width: 1200, height: 630, fonts: ogFonts },
    );
  }

  // Pokémon card (?p=name) — type-tinted gradient + artwork.
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: bg,
          color: "white",
        }}
      >
        <img
          src={artwork}
          alt={name}
          width={220}
          height={220}
          style={{ width: 220, height: 220, objectFit: "contain", marginBottom: 16 }}
        />
        <div style={{ fontSize: 28, opacity: 0.85, fontFamily: "Sora" }}>
          Random Pokémon Generator · Fan-made
        </div>
        <div style={{ fontSize: 96, fontWeight: 800, marginTop: 16, fontFamily: "Sora" }}>
          {name}
        </div>
        {dex ? (
          <div style={{ fontSize: 40, opacity: 0.9, marginTop: 8, fontFamily: "Sora" }}>{dex}</div>
        ) : null}
        <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
          {types.map((t) => (
            <div
              key={t}
              style={{
                fontSize: 30,
                padding: "8px 20px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.18)",
                border: "2px solid rgba(255,255,255,0.5)",
                color: "white",
                fontFamily: "Sora",
              }}
            >
              {cap(t)}
            </div>
          ))}
        </div>
        <div style={{ fontSize: 22, opacity: 0.7, marginTop: "auto", fontFamily: "Sora" }}>
          Not affiliated with Nintendo or The Pokémon Company.
        </div>
      </div>
    ),
    { width: 1200, height: 630, fonts: ogFonts },
  );
}