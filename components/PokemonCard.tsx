import type { CSSProperties } from "react";
import type { Pokemon } from "@/lib/types";

// Single source of truth for type badge colors, shared visually with
// CardGenerator's TYPE_COLORS so both renderers stay perfectly consistent.
// Hex equivalents of TYPE_COLORS, drive the hover glow on .poke-card.
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

const TYPE_COLORS: Record<string, string> = {
  normal: "bg-[#A8A878] text-white",
  fire: "bg-[#F08030] text-white",
  water: "bg-[#6890F0] text-white",
  electric: "bg-[#F8D030] text-[#3b3b3b]",
  grass: "bg-[#78C850] text-white",
  ice: "bg-[#98D8D8] text-[#3b3b3b]",
  fighting: "bg-[#C03028] text-white",
  poison: "bg-[#A040A0] text-white",
  ground: "bg-[#E0C068] text-[#3b3b3b]",
  flying: "bg-[#A890F0] text-white",
  psychic: "bg-[#F85888] text-white",
  bug: "bg-[#A8B820] text-white",
  rock: "bg-[#B8A038] text-white",
  ghost: "bg-[#705898] text-white",
  dragon: "bg-[#7038F8] text-white",
  dark: "bg-[#705848] text-white",
  steel: "bg-[#B8B8D0] text-[#3b3b3b]",
  fairy: "bg-[#EE99AC] text-[#3b3b3b]",
};

export default function PokemonCard({
  pokemon,
  loading,
  shiny,
  hideName,
}: {
  pokemon: Pokemon;
  loading?: boolean;
  shiny?: boolean;
  hideName?: boolean;
}) {
  const s = pokemon.stats;
  const typeHex = TYPE_HEX[pokemon.types[0]] ?? "#A8A878";
  const spriteUrl =
    shiny && pokemon.shinySprite ? pokemon.shinySprite : pokemon.sprite;

  const cardClass = `poke-card p-6 ${
    loading ? "opacity-50" : "opacity-100"
  }`;

  // No-names / guess mode: only sprite, type and ability are shown.
  if (hideName) {
    return (
      <div className={cardClass} style={{ "--cc": typeHex } as CSSProperties}>
        {spriteUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={spriteUrl}
            alt="Mystery Pokémon"
            width={112}
            height={112}
            className="mx-auto h-28 w-28"
          />
        ) : null}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {pokemon.types.map((t) => (
            <span
              key={t}
              className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                TYPE_COLORS[t] ?? "bg-[#A8A878] text-white"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        <dl className="mt-5 text-center text-sm">
          <div>
            <dt className="text-poke-dim">Ability</dt>
            <dd className="font-medium capitalize">
              {pokemon.abilities.join(", ") || "—"}
            </dd>
          </div>
        </dl>
      </div>
    );
  }

  const statRows: [string, number][] = [
    ["HP", s.hp],
    ["Attack", s.atk],
    ["Defense", s.def],
    ["Sp. Atk", s.spa],
    ["Sp. Def", s.spd],
    ["Speed", s.spe],
  ];

  return (
    <div className={cardClass} style={{ "--cc": typeHex } as CSSProperties}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-poke-dim">
            #{String(pokemon.dexNumber).padStart(3, "0")}
          </p>
          <h2 className="text-3xl font-bold text-poke-ink">
            {shiny ? "✨ " : "✨ "}
            {pokemon.displayName}
          </h2>
          {shiny ? (
            <span className="mt-1 inline-block rounded-full bg-poke-yellow px-2 py-0.5 text-xs font-bold text-poke-ink">
              Shiny!
            </span>
          ) : null}
        </div>
        {spriteUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={spriteUrl}
            alt={pokemon.displayName}
            width={112}
            height={112}
            className="h-28 w-28"
          />
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {pokemon.types.map((t) => (
          <span
            key={t}
            className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
              TYPE_COLORS[t] ?? "bg-[#A8A878] text-white"
            }`}
          >
            {t}
          </span>
        ))}
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
        <div>
          <dt className="text-poke-dim">Ability</dt>
          <dd className="font-medium capitalize">
            {pokemon.abilities.join(", ") || "—"}
          </dd>
        </div>
        <div>
          <dt className="text-poke-dim">Generation</dt>
          <dd className="font-medium">
            Gen {pokemon.generation} · {pokemon.region}
          </dd>
        </div>
        <div>
          <dt className="text-poke-dim">Rarity</dt>
          <dd className="font-medium">
            {pokemon.isMythical
              ? "Mythical"
              : pokemon.isLegendary
                ? "Legendary"
                : "Normal"}
          </dd>
        </div>
        <div>
          <dt className="text-poke-dim">BST</dt>
          <dd className="font-medium">{pokemon.bst}</dd>
        </div>
      </dl>

      <div className="mt-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-poke-dim">
          Base Stats
        </p>
        <div className="space-y-1">
          {statRows.map(([label, val]) => (
            <div key={label} className="flex items-center gap-3 text-sm">
              <span className="w-20 text-poke-dim">{label}</span>
              <div className="h-2 flex-1 overflow-hidden rounded bg-poke-tint">
                <div
                  className="h-full rounded bg-poke-btn"
                  style={{ width: `${Math.min(100, (val / 200) * 100)}%` }}
                />
              </div>
              <span className="w-8 text-right font-medium">{val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
