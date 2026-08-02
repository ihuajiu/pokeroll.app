/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import HeroAdventureTeaser from "@/components/HeroAdventureTeaser";
import { TOOLS, TOOL_GROUPS } from "@/lib/tools";

export const metadata: Metadata = {
  title: "PokeRoll — Random Pokémon Generator",
  description:
    "Roll a random Pokémon in one tap. Every pull comes with a name, type, ability, base stats, generation and an official sprite.",
  keywords: [
    "random pokemon generator",
    "pokemon generator",
    "random pokemon",
    "pokeball",
    "pokedex",
  ],
  alternates: { canonical: "/" },
};

const SPRITE = (id: number) => `/pokemon/artwork/${id}.png`;

type JumpTool = {
  href: string;
  label: string;
  desc: string;
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

const JUMP_TOOLS: JumpTool[] = [
  {
    href: "/adventure", label: "Adventure Mode", desc: "Roll a full Pokémon adventure — trainer, starter, team, challenge & goal.",
    color: "#ee3b3b", p: 4, count: "MAIN",
    icon: <SvgIcon><path d="M5 8h14M5 12h14M5 16h8" /></SvgIcon>,
  },
  {
    href: "/random", label: "Random Generator", desc: "Summon a random Pokémon with full stats & artwork.",
    color: "#16c79a", p: 25, count: "DEX",
    icon: <SvgIcon><rect x="4" y="4" width="16" height="16" rx="3" /><circle cx="9" cy="9" r="1.1" fill="currentColor" /><circle cx="15" cy="15" r="1.1" fill="currentColor" /><circle cx="15" cy="9" r="1.1" fill="currentColor" /><circle cx="9" cy="15" r="1.1" fill="currentColor" /></SvgIcon>,
  },
  {
    href: "/team/random", label: "Random Team", desc: "Roll a ready-made squad of six random Pokémon.",
    color: "#f5a524", p: 196, count: "SQUAD",
    icon: <SvgIcon><circle cx="8" cy="8" r="2.4" /><circle cx="16" cy="8" r="2.4" /><circle cx="8" cy="16" r="2.4" /><circle cx="16" cy="16" r="2.4" /></SvgIcon>,
  },
  {
    href: "/fusion", label: "Fusion Generator", desc: "Fuse two Pokémon into one hybrid creature.",
    color: "#a855f7", p: 94, count: "FUSION",
    icon: <SvgIcon><circle cx="8.5" cy="9.5" r="4" /><circle cx="15" cy="14" r="4" /><path d="M11.5 12.5l4-4" strokeWidth="1.8" /></SvgIcon>,
  },
  {
    href: "/shiny", label: "Shiny Generator", desc: "Hunt the rare recolored form.",
    color: "#fbbf24", p: 6, count: "SHINY",
    icon: <SvgIcon><path d="M12 2l2.4 5 5.6.8-4 4 1 5.6L12 20l-5 2.4 1-5.6-4-4 5.6-.8z" /></SvgIcon>,
  },
  {
    href: "/no-names", label: "No Names", desc: "Hide the name, guess from its artwork & types.",
    color: "#8b5cf6", p: 492, count: "GUESS",
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
  "/random": 25,
  "/type": 37,
  "/ability": 132,
  "/move": 143,
  "/bst": 149,
  "/number": 152,
  "/starter": 1,
  "/shiny": 6,
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

export default async function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-10">
        <div className="grid items-center gap-10 xl:grid-cols-2">
          <div className="hero-copy">
            <span className="eyebrow">Random Adventure Platform</span>
            <h1 className="font-display font-extrabold">
              Roll Your Pokémon <span className="accent">Adventure</span>.
            </h1>
            <p className="lead">
              One tap rolls your trainer, region, starter, team, challenge and
              goal — a full Pokémon adventure, every time you roll.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/adventure" className="btn-primary">
                Roll Adventure
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
              <a href="#tools" className="btn-ghost">Explore Tools</a>
            </div>
            <div className="hero-meta">
              <div>
                <div className="num">1000+</div>
                <div className="lbl">Species</div>
              </div>
              <div>
                <div className="num">18</div>
                <div className="lbl">Types</div>
              </div>
              <div>
                <div className="num">9</div>
                <div className="lbl">Generations</div>
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
              <HeroAdventureTeaser />
            </div>
          </div>
        </div>
      </section>

      {/* Jump straight in */}
      <section className="block" id="tools">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Jump straight in</span>
              <h2>Pick a tool, start playing</h2>
            </div>
            <p>The most popular generators — one tap, instant fun.</p>
          </div>
          <div className="cat-grid">
            {JUMP_TOOLS.map((t) => (
              <Link
                key={t.label}
                href={t.href}
                className="cat-card"
                style={{ "--cc": t.color } as CSSProperties}
              >
                <div className="cc-top">
                  <span className="cc-em">{t.icon}</span>
                  <span className="cc-title">{t.label}</span>
                  <span className="cc-count">{t.count}</span>
                </div>
                <p>{t.desc}</p>
                <span className="cc-go">
                  Explore <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
                <img className="cc-mon" src={SPRITE(t.p)} alt="" loading="lazy" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tool matrix — grouped catalog, single source of truth: lib/tools.ts */}
      <section className="block" id="browse">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Tool matrix</span>
              <h2>Every way to roll</h2>
            </div>
            <p>The complete tool catalog — every way to roll a Pokémon.</p>
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
                  <Link
                    key={t.href}
                    href={t.href}
                    className="browse-card"
                    style={{ "--cc": GROUP_COLOR[g.id] } as CSSProperties}
                  >
                    <div className="art">
                      <img src={SPRITE(TOOL_SPRITE[t.href] ?? 25)} alt="" loading="lazy" />
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
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
