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

// 2×2 HUD grid cell: text rows (Ability/Region) show a solid presence bar,
// numeric rows (BST/Gen) show a proportional bar. Long text truncates.
function MetaCell({
  label,
  value,
  pct,
  solid,
}: {
  label: string;
  value: string;
  pct?: number;
  solid?: boolean;
}) {
  const width = solid ? 100 : Math.min(100, Math.max(6, pct ?? 0));
  return (
    <div className="min-w-0">
      <div className="flex items-baseline justify-between gap-2">
        <dt className="text-xs font-semibold uppercase tracking-wide text-poke-dim">
          {label}
        </dt>
        <dd
          className="truncate text-right text-sm font-semibold text-poke-ink"
          title={value}
        >
          {value}
        </dd>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-poke-tint">
        <div
          className="h-full rounded-full"
          style={{
            width: `${width}%`,
            background: solid
              ? "rgb(var(--brand) / 0.55)"
              : "linear-gradient(90deg, rgb(var(--brand)), rgb(var(--accent)))",
          }}
        />
      </div>
    </div>
  );
}

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
    shiny && pokemon.shinySprite ? pokemon.shinySprite : pokemon.artwork || pokemon.sprite;
  const artBg = `radial-gradient(120% 120% at 50% 0%, color-mix(in srgb, ${typeHex} 30%, transparent), rgb(var(--surface-2)) 72%)`;

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
        <div
          className="mt-3 grid place-items-center rounded-2xl p-4 ring-1 ring-black/5"
          style={{ background: artBg }}
        >
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
        <div
          className="poke-art shrink-0 rounded-2xl p-2 ring-1 ring-black/5"
          style={{ background: artBg }}
        >
          <div className="grid h-24 w-24 place-items-center overflow-hidden rounded-xl bg-poke-card/70 ring-1 ring-black/5 sm:h-28 sm:w-28">
            {spriteUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={spriteUrl}
                alt={pokemon.displayName}
                width={112}
                height={112}
                className="h-24 w-24 drop-shadow sm:h-28 sm:w-28"
              />
            ) : null}
          </div>
        </div>
      </div>

      {/* Type badges */}
      <div className="mt-4 flex flex-wrap gap-2">
        {pokemon.types.map((t) => (
          <TypeBadge key={t} type={t} />
        ))}
      </div>

      {/* 2×2 HUD data grid */}
      <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
        <MetaCell
          label="Ability"
          value={pokemon.abilities.join(", ") || "—"}
          solid
        />
        <MetaCell label="Region" value={pokemon.region || "—"} solid />
        <MetaCell
          label="BST"
          value={String(pokemon.bst)}
          pct={(pokemon.bst / 600) * 100}
        />
        <MetaCell
          label="Gen"
          value={String(pokemon.generation)}
          pct={(pokemon.generation / 9) * 100}
        />
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
