import Link from "next/link";
import { TOOLS, TOOL_GROUPS } from "@/lib/tools";
import { GroupIcon } from "./ToolIcons";

export default function ToolsNav({ current }: { current?: string }) {
  return (
    <nav className="mt-10 border-t border-poke-border pt-6" aria-label="All tools">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-poke-dim">
        All Generators & Tools
      </h2>
      <div className="space-y-4">
        {TOOL_GROUPS.map((g) => (
          <div key={g.id}>
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#ee3b3b]">
              <GroupIcon group={g.id} className="h-4 w-4" />
              {g.title}
            </div>
            <div className="flex flex-wrap gap-2">
              {TOOLS.filter((t) => t.group === g.id).map((t) => {
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
          </div>
        ))}
      </div>
    </nav>
  );
}
