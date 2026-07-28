import Link from "next/link";
import { REGIONS, TYPES, GENS, titleCase } from "@/lib/seo";

export default function SeoNav({
  current,
}: {
  current?: { type: "region" | "type" | "gen"; value: string };
}) {
  const linkClass = (active: boolean) =>
    `text-xs underline ${active ? "font-semibold text-poke-red" : "text-poke-dim hover:text-poke-red"}`;

  return (
    <nav className="mt-10 border-t border-poke-border pt-6" aria-label="Pokémon generator index">
      <div className="mb-4">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-poke-dim">
          By Region
        </h2>
        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
          {REGIONS.map((r) => (
            <Link
              key={r}
              href={`/by/${r}`}
              className={linkClass(current?.type === "region" && current.value === r)}
            >
              {titleCase(r)}
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-poke-dim">
          By Type
        </h2>
        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
          {TYPES.map((t) => (
            <Link
              key={t}
              href={`/type/${t}`}
              className={linkClass(current?.type === "type" && current.value === t)}
            >
              {titleCase(t)}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wide text-poke-dim">
          By Generation
        </h2>
        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
          {GENS.map((g) => (
            <Link
              key={g}
              href={`/gen/${g}`}
              className={linkClass(current?.type === "gen" && current.value === String(g))}
            >
              Gen {g}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
