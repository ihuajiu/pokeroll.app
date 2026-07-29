import { ImageResponse } from "next/og";
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

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export async function buildOgImage(p?: string): Promise<ImageResponse> {
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
    }
  } catch {
    // API failure -> fall back to generic branding (no crash)
  }

  const mainColor = types.length
    ? TYPE_HEX[types[0]] ?? "#3B5BA5"
    : "#3B5BA5";
  const bg = `linear-gradient(135deg, ${mainColor} 0%, #1f2430 100%)`;

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
        {artwork ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={artwork}
            alt={name}
            width={220}
            height={220}
            style={{ width: 220, height: 220, objectFit: "contain", marginBottom: 16 }}
          />
        ) : null}
        <div style={{ fontSize: 28, opacity: 0.85 }}>
          Random Pokémon Generator · Fan-made
        </div>
        <div style={{ fontSize: 96, fontWeight: 800, marginTop: 16 }}>{name}</div>
        {dex ? (
          <div style={{ fontSize: 40, opacity: 0.9, marginTop: 8 }}>{dex}</div>
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
              }}
            >
              {cap(t)}
            </div>
          ))}
        </div>
        <div style={{ fontSize: 22, opacity: 0.7, marginTop: "auto" }}>
          Not affiliated with Nintendo or The Pokémon Company.
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
