import type { Dictionary } from "@/lib/i18n/dictionaries";
import LocalizedLink from "./LocalizedLink";

// 玩法长文(各工具页通用):引言 + 四种玩法卡片 + 规则哲学 + 样本结果 + 窄池内链。
// 放在工具下方、FAQ 上方,补足"怎么玩"的编辑型内容(对标 gospinwheel 长文)。
// 各页面的 guide 数据结构与 pages.teamRandom.guide 一致。
export type PlayGuideData = Dictionary["pages"]["teamRandom"]["guide"];

/** 模板页(type/gen/region)的 guide 文案含 {placeholder},渲染前逐字段替换。 */
export function fillGuide(
  g: PlayGuideData,
  vars: Record<string, string>,
): PlayGuideData {
  const fill = (s: string) =>
    Object.entries(vars).reduce(
      (acc, [k, v]) => acc.replaceAll(`{${k}}`, v),
      s,
    );
  return {
    ...g,
    introTitle: fill(g.introTitle),
    intro: fill(g.intro),
    waysTitle: fill(g.waysTitle),
    ways: g.ways.map((w) => ({ t: fill(w.t), d: fill(w.d) })),
    rulesTitle: fill(g.rulesTitle),
    rules: g.rules.map(fill),
    sampleTitle: fill(g.sampleTitle),
    sample: fill(g.sample),
    linksTitle: fill(g.linksTitle),
    linksTextBefore: fill(g.linksTextBefore),
    links: g.links.map((l) => ({ label: fill(l.label), href: fill(l.href) })),
    linksTextAfter: fill(g.linksTextAfter),
  };
}

export default function PlayGuide({ guide: d }: { guide: PlayGuideData }) {
  const h2Cls = "text-xs font-semibold uppercase tracking-wide text-poke-dim";
  const pCls = "mt-2 text-sm leading-relaxed text-poke-dim";

  return (
    <section className="mt-10 space-y-8">
      <div>
        <h2 className={h2Cls}>{d.introTitle}</h2>
        <p className={pCls}>{d.intro}</p>
      </div>

      <div>
        <h2 className={h2Cls}>{d.waysTitle}</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {d.ways.map((w) => (
            <div
              key={w.t}
              className="rounded-xl border border-poke-border bg-poke-surface p-4"
            >
              <h3 className="text-sm font-semibold text-poke-ink">{w.t}</h3>
              <p className="mt-1 text-sm leading-relaxed text-poke-dim">
                {w.d}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className={h2Cls}>{d.rulesTitle}</h2>
        {d.rules.map((r, i) => (
          <p key={i} className={pCls}>
            {r}
          </p>
        ))}
      </div>

      <div className="rounded-xl border border-poke-border bg-poke-surface p-4">
        <h2 className={h2Cls}>{d.sampleTitle}</h2>
        <p className={pCls}>{d.sample}</p>
      </div>

      <div>
        <h2 className={h2Cls}>{d.linksTitle}</h2>
        <p className={pCls}>
          {d.linksTextBefore}{" "}
          {d.links.map((l, i) => (
            <span key={l.href}>
              {i > 0 && (
                <span>
                  {i === d.links.length - 1 ? ` ${d.linksJoinOr} ` : ", "}
                </span>
              )}
              <LocalizedLink
                href={l.href}
                className="font-semibold text-[#ee3b3b] underline decoration-[#ee3b3b]/40 underline-offset-2 transition hover:decoration-[#ee3b3b]"
              >
                {l.label}
              </LocalizedLink>
            </span>
          ))}{" "}
          {d.linksTextAfter}
        </p>
      </div>
    </section>
  );
}
