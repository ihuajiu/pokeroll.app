import Link from "next/link";
import { TOOLS, RELATED_TOOLS } from "@/lib/tools";

// "Related tools" module for internal linking — renders the curated set from
// RELATED_TOOLS (lib/tools.ts) as compact cards. Placed after the main
// content on every tool page so each page passes contextual links to its
// closest siblings instead of relying on header/footer alone.
// Card titles are h3s under the "Related tools" h2, giving every page a
// proper h2 → h3 outline.
export default function RelatedTools({
  current,
  hrefs,
}: {
  /** Key into RELATED_TOOLS (tool page href). Ignored when hrefs is given. */
  current?: string;
  /** Explicit tool hrefs — for pages without a RELATED_TOOLS entry. */
  hrefs?: string[];
}) {
  const list = hrefs ?? (current ? RELATED_TOOLS[current] : undefined);
  if (!list?.length) return null;

  const tools = list
    .map((h) => TOOLS.find((t) => t.href === h))
    .filter((t): t is (typeof TOOLS)[number] => Boolean(t));

  return (
    <nav aria-label="Related tools" className="mt-10">
      <h2 className="text-xs font-semibold uppercase tracking-wide text-poke-dim">
        Related tools
      </h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="group flex flex-col gap-1 rounded-xl border border-poke-border bg-poke-surface p-3 transition hover:border-poke-violet"
          >
            <span className="text-lg" aria-hidden="true">
              {t.icon}
            </span>
            <h3 className="text-sm font-semibold text-poke-ink group-hover:text-poke-violet">
              {t.label}
            </h3>
            <span className="text-xs leading-snug text-poke-dim">
              {t.desc}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
