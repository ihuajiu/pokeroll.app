import Link from "next/link";
import type { CSSProperties } from "react";
import { localizeTools, RELATED_TOOLS } from "@/lib/tools";
import { pageHref, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

// Group accent colors mirror the homepage jump cards, so related tools
// keep the same color language across the site.
const GROUP_COLOR: Record<string, string> = {
  adventure: "#ee3b3b",
  generator: "#16c79a",
  challenge: "#3aa0ff",
  tool: "#a855f7",
  team: "#f5a524",
};

// Representative artwork per tool (display-layer data, kept out of
// lib/tools.ts so the catalog stays purely navigational).
const TOOL_SPRITE: Record<string, number> = {
  "/adventure": 4,
  "/random-pokemon-generator": 25,
  "/type": 37,
  "/ability": 132,
  "/move": 143,
  "/bst": 149,
  "/number": 152,
  "/starter": 1,
  "/cute": 175,
  "/mythical": 151,
  "/legendary": 150,
  "/mega": 448,
  "/nickname": 133,
  "/challenge/guess": 68,
  "/challenge/shiny": 6,
  "/no-names": 492,
  "/wheel": 35,
  "/fusion": 94,
  "/team/random": 196,
  "/team/challenge": 248,
  "/team/coach": 65,
  "/team": 445,
  "/favorites": 133,
};

// "Related tools" module for internal linking ? renders the curated set from
// RELATED_TOOLS (lib/tools.ts) as compact mini-tool cards with a Pok?mon
// artwork tile. Placed after the main content on every tool page so each
// page passes contextual links to its closest siblings instead of relying on
// header/footer alone. Card titles are h3s under the "Related tools" h2,
// giving every page a proper h2 ? h3 outline.
export default async function RelatedTools({
  current,
  hrefs,
  locale = "en",
}: {
  /** Key into RELATED_TOOLS (tool page href). Ignored when hrefs is given. */
  current?: string;
  /** Explicit tool hrefs ? for pages without a RELATED_TOOLS entry. */
  hrefs?: string[];
  locale?: Locale;
}) {
  const list = hrefs ?? (current ? RELATED_TOOLS[current] : undefined);
  if (!list?.length) return null;

  const dict = await getDictionary(locale);
  const TOOLS = localizeTools(dict);
  const tools = list
    .map((h) => TOOLS.find((t) => t.href === h))
    .filter((t): t is (typeof TOOLS)[number] => Boolean(t));

  return (
    <nav aria-label={dict.relatedTools.heading} className="mt-10">
      <h2 className="rt-head">
        <span className="rt-head-dot" aria-hidden="true" />
        {dict.relatedTools.heading}
      </h2>
      <div className="rt-grid">
        {tools.map((t) => {
          const sprite = TOOL_SPRITE[t.href] ?? 25;
          return (
            <Link
              key={t.href}
              href={pageHref(locale, t.href)}
              title={t.label}
              className="rt-card"
              style={{ "--cc": GROUP_COLOR[t.group] ?? "#a855f7" } as CSSProperties}
            >
              <span className="rt-art" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/pokemon/artwork/${sprite}.webp`}
                  alt=""
                  loading="lazy"
                  width={54}
                  height={54}
                />
              </span>
              <h3 className="rt-title">{t.label}</h3>
              <span className="rt-desc">{t.desc}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
