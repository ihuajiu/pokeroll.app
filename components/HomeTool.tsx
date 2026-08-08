/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";
import HeroCard from "@/components/HeroCard";
import LocalizedLink from "@/components/LocalizedLink";
import { getRandomPokemon } from "@/lib/pokeapi";
import { localizeTools, localizeToolGroups, type ToolId } from "@/lib/tools";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

const SPRITE = (id: number) => `/pokemon/artwork/${id}.webp`;

type JumpTool = {
  id: ToolId;
  href: string;
  color: string;
  p: number;
  count: string;
  icon: React.ReactNode;
};

const SvgIcon = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
    {children}
  </svg>
);

// Display-layer data for the "Jump straight in" cards; label/desc come from
// the dictionary (tools.jump, keyed by the same tool id).
const JUMP_TOOLS: JumpTool[] = [
  {
    id: "randomPokemon", href: "/random-pokemon-generator",
    color: "#16c79a", p: 25, count: "MAIN",
    icon: <SvgIcon><rect x="4" y="4" width="16" height="16" rx="3" /><circle cx="9" cy="9" r="1.1" fill="currentColor" /><circle cx="15" cy="15" r="1.1" fill="currentColor" /><circle cx="15" cy="9" r="1.1" fill="currentColor" /><circle cx="9" cy="15" r="1.1" fill="currentColor" /></SvgIcon>,
  },
  {
    id: "adventure", href: "/adventure",
    color: "#ee3b3b", p: 4, count: "ADV",
    icon: <SvgIcon><path d="M5 8h14M5 12h14M5 16h8" /></SvgIcon>,
  },
  {
    id: "randomTeam", href: "/team/random",
    color: "#f5a524", p: 196, count: "SQUAD",
    icon: <SvgIcon><circle cx="8" cy="8" r="2.4" /><circle cx="16" cy="8" r="2.4" /><circle cx="8" cy="16" r="2.4" /><circle cx="16" cy="16" r="2.4" /></SvgIcon>,
  },
  {
    id: "fusion", href: "/fusion",
    color: "#a855f7", p: 94, count: "FUSION",
    icon: <SvgIcon><circle cx="8.5" cy="9.5" r="4" /><circle cx="15" cy="14" r="4" /><path d="M11.5 12.5l4-4" strokeWidth="1.8" /></SvgIcon>,
  },
  {
    id: "shiny", href: "/challenge/shiny",
    color: "#fbbf24", p: 6, count: "SHINY",
    icon: <SvgIcon><path d="M12 2l2.4 5 5.6.8-4 4 1 5.6L12 20l-5 2.4 1-5.6-4-4 5.6-.8z" /></SvgIcon>,
  },
  {
    id: "guess", href: "/challenge/guess",
    color: "#8b5cf6", p: 68, count: "GUESS",
    icon: <SvgIcon><path d="M9 9a3 3 0 1 1 4.5 2.6c-1 .6-1.5 1.2-1.5 2.4" /><circle cx="12" cy="18" r="1" fill="currentColor" /></SvgIcon>,
  },
];

// Group accent colors mirror the featured cards above.
const GROUP_COLOR: Record<string, string> = {
  generator: "#16c79a",
  challenge: "#3aa0ff",
  tool: "#a855f7",
  team: "#f5a524",
};

// Decorative sprite per tool (dex number) — display-layer data, kept out of
// lib/tools.ts so the catalog stays purely navigational.
const TOOL_SPRITE: Record<string, number> = {
  "/random-pokemon-generator": 25,
  "/type": 37,
  "/ability": 132,
  "/move": 143,
  "/bst": 149,
  "/number": 152,
  "/starter": 1,
  "/cute": 175,
  "/mythical": 151,
  "/mega": 448,
  "/nickname": 133,
  "/challenge/guess": 68,
  "/challenge/shiny": 6,
  "/no-names": 492,
  "/wheel": 35,
  "/fusion": 94,
  "/team": 445,
  "/team/random": 196,
};

export default async function Home({ locale = "en" }: { locale?: Locale }) {
  // Build-time random showcase card — visitors can re-roll it client-side
  // right in the hero (writes ?p= so the pull is shareable).
  const initial = await getRandomPokemon();
  const dict = await getDictionary(locale);
  const d = dict.homeTool;
  const TOOLS = localizeTools(dict);
  const TOOL_GROUPS = localizeToolGroups(dict);
  const artworkAlt = (label: string) =>
    dict.common.toolArtworkAlt.replace("{label}", label);
  return (
    <>
      {/* Hero */}
      <section className="relative pt-10">
        <div className="grid items-center gap-10 xl:grid-cols-2">
          <div className="hero-copy">
            <span className="eyebrow">{d.eyebrow}</span>
            <h1 className="font-display font-extrabold">
              {d.title}{" "}
              <span className="accent">{d.titleAccent}</span>.
            </h1>
            <p className="lead">{d.lead}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <LocalizedLink href="/random-pokemon-generator" title={d.randomGeneratorTitle} className="btn-primary">
                {d.rollPokemon}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </LocalizedLink>
              <LocalizedLink href="/adventure" title={dict.common.rollAdventure} className="btn-ghost">{dict.common.rollAdventure}</LocalizedLink>
            </div>
            <div className="hero-meta">
              <div>
                <div className="num">1000+</div>
                <div className="lbl">{d.stats.species}</div>
              </div>
              <div>
                <div className="num">18</div>
                <div className="lbl">{d.stats.types}</div>
              </div>
              <div>
                <div className="num">9</div>
                <div className="lbl">{d.stats.generations}</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="stage">
              <div className="stage-rings" />
              <div className="stage-ball">
                <svg
                  viewBox="0 0 100 100"
                  className="h-24 w-24 text-poke-violet/30"
                  aria-hidden="true"
                >
                  <path
                    d="M50 8a42 42 0 0 0-42 42h84A42 42 0 0 0 50 8z"
                    fill="currentColor"
                  />
                  <path d="M8 50h84" stroke="rgb(var(--bg))" strokeWidth="6" />
                  <circle cx="50" cy="50" r="13" fill="rgb(var(--bg))" />
                  <circle cx="50" cy="50" r="6" fill="currentColor" />
                </svg>
              </div>
              <HeroCard pokemon={initial} variant="wide" favoritable flipHint />
            </div>
          </div>
        </div>
      </section>

      {/* Jump straight in */}
      <section className="block" id="tools">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="sec-head">
            <div>
              <span className="eyebrow">{d.jumpEyebrow}</span>
              <h2>{d.jumpTitle}</h2>
            </div>
            <p>{d.jumpDesc}</p>
          </div>
          <div className="cat-grid">
            {JUMP_TOOLS.map((t) => {
              const label = dict.tools.jump[t.id as keyof typeof dict.tools.jump].label;
              const desc = dict.tools.jump[t.id as keyof typeof dict.tools.jump].desc;
              return (
              <LocalizedLink
                key={label}
                href={t.href} title={label}
                className="cat-card"
                style={{ "--cc": t.color } as CSSProperties}
              >
                <div className="cc-top">
                  <span className="cc-em">{t.icon}</span>
                  <span className="cc-title">{label}</span>
                  <span className="cc-count">{t.count}</span>
                </div>
                <p>{desc}</p>
                <span className="cc-go">
                  {d.explore} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
                <img
                  className="cc-mon"
                  src={SPRITE(t.p)}
                  alt={artworkAlt(label)}
                  loading="lazy"
                />
              </LocalizedLink>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tool matrix — grouped catalog, single source of truth: lib/tools.ts */}
      <section className="block" id="browse">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="sec-head">
            <div>
              <span className="eyebrow">{d.browseEyebrow}</span>
              <h2>{d.browseTitle}</h2>
            </div>
            <p>{d.browseDesc}</p>
          </div>
          {TOOL_GROUPS.filter((g) => g.id !== "adventure").map((g) => (
            <div key={g.id} className="mb-10 last:mb-0">
              <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-lg font-bold text-poke-ink">
                  {g.title}
                </h3>
                <p className="text-sm text-poke-dim">{g.desc}</p>
              </div>
              <div className="browse-grid">
                {TOOLS.filter((t) => t.group === g.id).map((t) => (
                  <LocalizedLink
                    key={t.href}
                    href={t.href} title={t.label}
                    className="browse-card"
                    style={{ "--cc": GROUP_COLOR[g.id] } as CSSProperties}
                  >
                    <div className="art">
                      <img
                        src={SPRITE(TOOL_SPRITE[t.href] ?? 25)}
                        alt={artworkAlt(t.label)}
                        loading="lazy"
                      />
                    </div>
                    <div className="body">
                      <span className="cat">
                        <span className="dot" />
                        {g.title}
                      </span>
                      <h3>{t.label}</h3>
                      <p>{t.desc}</p>
                      <div className="foot">
                        <span className="gen">{t.href}</span>
                        <span className="open">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                        </span>
                      </div>
                    </div>
                  </LocalizedLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
