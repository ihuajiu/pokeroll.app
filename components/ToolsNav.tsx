import Link from "next/link";
import { TOOLS } from "@/lib/tools";

export default function ToolsNav({ current }: { current?: string }) {
  return (
    <nav className="mt-10 border-t border-poke-border pt-6" aria-label="Generator tools">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-poke-dim">
        All Tools
      </h2>
      <div className="flex flex-wrap gap-x-3 gap-y-2">
        {TOOLS.map((t) => {
          const active =
            current === t.href || (t.href === "/" && current === undefined);
          return (
            <Link
              key={t.href}
              href={t.href}
              aria-current={active ? "page" : undefined}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                active
                  ? "border-poke-violet bg-poke-violet text-white"
                  : "border-poke-border bg-poke-surface text-poke-dim hover:border-poke-violet hover:text-poke-violet"
              }`}
            >
              {t.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
