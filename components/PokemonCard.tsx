import type { CSSProperties } from "react";
import type { Pokemon } from "@/lib/types";
import { TYPE_HEX } from "@/lib/typeColors";
import TypeBadge from "./TypeBadge";
import StatBar from "./StatBar";

const statRows = (s: Pokemon["stats"]): [string, number][] => [
  ["HP", s.hp],
  ["Attack", s.atk],
  ["Defense", s.def],
  ["Sp. Atk", s.spa],
  ["Sp. Def", s.spd],
  ["Speed", s.spe],
];

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
  const typeHex = TYPE_HEX[pokemon.types[0]] ?? "#A8A878";
  const spriteUrl =
    shiny && pokemon.shinySprite ? pokemon.shinySprite : pokemon.sprite;

  const cardClass = `poke-card animate-popIn p-6 ${
    loading ? "opacity-50" : "opacity-100"
  }`;

  // Guess mode: sprite + type + ability only (no name / stats).
  if (hideName) {
    return (
      <div className={cardClass} style={{ "--cc": typeHex } as CSSProperties}>
        <div className="flex items-center justify-between">
          <span className="font-mono text-sm text-poke-dim">
            #{String(pokemon.dexNumber).padStart(3, "0")}
          </span>
          <span className="section-chip">Mystery</span>
        </div>
        <div className="mt-3 grid place-items-center rounded-2xl bg-poke-tint/60 p-4">
          {spriteUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={spriteUrl}
              alt="Mystery Pokémon"
              width={128}
              height={128}
              className="h-32 w-32 drop-shadow"
            />
          ) : null}
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {pokemon.types.map((t) => (
            <TypeBadge key={t} type={t} />
          ))}
        </div>
        <dl className="mt-5 text-center text-sm">
          <dt className="text-poke-dim">Ability</dt>
          <dd className="mt-0.5 font-semibold capitalize">
            {pokemon.abilities.join(", ") || "—"}
          </dd>
        </dl>
      </div>
    );
  }

  return (
    <div className={cardClass} style={{ "--cc": typeHex } as CSSProperties}>
      {/* Screen header */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm text-poke-dim">
              #{String(pokemon.dexNumber).padStart(3, "0")}
            </span>
            {shiny ? (
              <span className="rounded-full bg-poke-yellow px-2 py-0.5 text-xs font-bold text-poke-ink">
                ✨ Shiny
              </span>
            ) : null}
          </div>
          <h2 className="mt-1 truncate text-3xl font-display font-bold text-poke-ink">
            {pokemon.displayName}
          </h2>
        </div>
        <div className="shrink-0 rounded-2xl bg-poke-tint/70 p-3 ring-1 ring-black/5">
          {spriteUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={spriteUrl}
              alt={pokemon.displayName}
              width={112}
              height={112}
              className="h-28 w-28 drop-shadow"
            />
          ) : null}
        </div>
      </div>

      {/* Type badges */}
      <div className="mt-4 flex flex-wrap gap-2">
        {pokemon.types.map((t) => (
          <TypeBadge key={t} type={t} />
        ))}
      </div>

      {/* Meta grid */}
      <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
        <div>
          <dt className="text-poke-dim">Ability</dt>
          <dd className="mt-0.5 font-semibold capitalize">
            {pokemon.abilities.join(", ") || "—"}
          </dd>
        </div>
        <div>
          <dt className="text-poke-dim">Generation</dt>
          <dd className="mt-0.5 font-semibold">
            Gen {pokemon.generation} · {pokemon.region}
          </dd>
        </div>
        <div>
          <dt className="text-poke-dim">Rarity</dt>
          <dd className="mt-0.5 font-semibold">
            {pokemon.isMythical
              ? "Mythical"
              : pokemon.isLegendary
                ? "Legendary"
                : "Normal"}
          </dd>
        </div>
        <div>
          <dt className="text-poke-dim">BST</dt>
          <dd className="mt-0.5 font-mono font-semibold">{pokemon.bst}</dd>
        </div>
      </dl>

      {/* Base stats */}
      <div className="mt-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-poke-dim">
          Base Stats
        </p>
        <div className="space-y-1.5">
          {statRows(pokemon.stats).map(([label, val]) => (
            <StatBar key={label} label={label} value={val} />
          ))}
        </div>
      </div>
    </div>
  );
}
