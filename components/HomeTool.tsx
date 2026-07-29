/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import HeroCard from "@/components/HeroCard";
import HeroActions from "@/components/HeroActions";
import ToolsNav from "@/components/ToolsNav";
import AffiliateStrip from "@/components/AffiliateStrip";
import { getRandomPokemon } from "@/lib/pokeapi";
import type { Pokemon } from "@/lib/types";

export const metadata: Metadata = {
  title: "PokeField — Random Pokémon Generator",
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

const SPRITE = (id: number) =>
  `https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/other/official-artwork/${id}.png`;

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
    href: "/", label: "Random Generator", desc: "Summon a random Pokémon with full stats & artwork.",
    color: "#ee3b3b", p: 25, count: "MAIN",
    icon: <SvgIcon><rect x="4" y="4" width="16" height="16" rx="3" /><circle cx="9" cy="9" r="1.1" fill="currentColor" /><circle cx="15" cy="15" r="1.1" fill="currentColor" /><circle cx="15" cy="9" r="1.1" fill="currentColor" /><circle cx="9" cy="15" r="1.1" fill="currentColor" /></SvgIcon>,
  },
  {
    href: "/no-names", label: "No Names", desc: "Hide the name, guess from its artwork & types.",
    color: "#8a5cf6", p: 492, count: "GUESS",
    icon: <SvgIcon><path d="M9 9a3 3 0 1 1 4.5 2.6c-1 .6-1.5 1.2-1.5 2.4" /><circle cx="12" cy="18" r="1" fill="currentColor" /></SvgIcon>,
  },
  {
    href: "/", label: "Mystery Egg", desc: "Crack open a surprise species you've never met.",
    color: "#16c79a", p: 175, count: "RNG",
    icon: <SvgIcon><path d="M12 3c4 0 7 4 7 9a7 7 0 0 1-14 0c0-5 3-9 7-9z" /></SvgIcon>,
  },
  {
    href: "/wheel", label: "Spin Wheel", desc: "Let chance decide your next encounter.",
    color: "#ff7a3c", p: 35, count: "RNG",
    icon: <SvgIcon><circle cx="12" cy="12" r="9" /><path d="M12 3v9l6.4 4.3" /><circle cx="12" cy="12" r="1.3" fill="currentColor" /></SvgIcon>,
  },
  {
    href: "/type", label: "Type Generator", desc: "Roll one of the 18 elemental types.",
    color: "#3aa0ff", p: 37, count: "18 TYPES",
    icon: <SvgIcon><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" /></SvgIcon>,
  },
  {
    href: "/team", label: "Team Builder", desc: "Collect favourites into a themed squad.",
    color: "#f5a524", p: 196, count: "SQUAD",
    icon: <SvgIcon><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.2" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0M15.5 14.5a4.5 4.5 0 0 1 5 4.5" /></SvgIcon>,
  },
  {
    href: "/", label: "AI Generator", desc: "Invent a brand-new creature & its lore.",
    color: "#ee3b3b", p: 778, count: "NEW",
    icon: <SvgIcon><path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z" /><path d="M18 13.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z" /></SvgIcon>,
  },
  {
    href: "/shiny", label: "Shiny Generator", desc: "Hunt the rare recolored form.",
    color: "#ffd23f", p: 6, count: "1/4096",
    icon: <SvgIcon><path d="M12 2l2.4 5 5.6.8-4 4 1 5.6L12 20l-5 2.4 1-5.6-4-4 5.6-.8z" /></SvgIcon>,
  },
];

type Module = {
  href: string;
  cat: string;
  gen: string;
  label: string;
  p: number;
  desc: string;
};

const CAT_COLOR: Record<string, string> = {
  Core: "#3aa0ff",
  Guess: "#8a5cf6",
  AI: "#ee3b3b",
  Wheel: "#ff7a3c",
  Squad: "#f5a524",
  RNG: "#16c79a",
  Shiny: "#ffd23f",
  Region: "#9ca3af",
  "18 Types": "#3aa0ff",
};

const BROWSE_MODULES: Module[] = [
  { href: "/", cat: "Core", gen: "DEX 1–1010", label: "Random Generator", p: 25, desc: "Summon a random Pokémon with full stats & artwork." },
  { href: "/no-names", cat: "Guess", gen: "DEX 1–1010", label: "No Names", p: 492, desc: "Hide the name, guess from its artwork & types." },
  { href: "/wheel", cat: "Wheel", gen: "DEX 1–1010", label: "Spin Wheel", p: 35, desc: "Let chance decide your next encounter." },
  { href: "/", cat: "RNG", gen: "EGG", label: "Mystery Egg", p: 175, desc: "Crack open a surprise species you never met." },
  { href: "/type", cat: "18 Types", gen: "DEX 1–1010", label: "Type Generator", p: 37, desc: "Roll one of the 18 elemental types." },
  { href: "/team", cat: "Squad", gen: "SQUAD", label: "Team Builder", p: 196, desc: "Collect favourites into a themed squad." },
  { href: "/", cat: "AI", gen: "V3", label: "AI Generator", p: 778, desc: "Invent a brand-new creature & its lore." },
  { href: "/shiny", cat: "Shiny", gen: "1/4096", label: "Shiny Generator", p: 6, desc: "Hunt the rare recolored form." },
  { href: "/number", cat: "Region", gen: "GEN 1–9", label: "By Region", p: 150, desc: "Filter Kanto → Paldea." },
];

export default async function Home() {
  const initial: Pokemon = await getRandomPokemon(true);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-10">
        <div className="grid items-center gap-10 xl:grid-cols-2">
          <div className="hero-copy">
            <span className="eyebrow">Random Pokémon Generator</span>
            <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Your random <span className="accent">Pokémon</span> awaits.
            </h1>
            <p className="mt-4 max-w-xl text-poke-dim">
              Spin up a random Pokémon in one tap — every roll comes with its
              name, type, ability, stats and an official sprite. Then send it to
              your team, your wallpaper or a friend.
            </p>
            <HeroActions />
            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <div className="font-display text-2xl font-bold">1000+</div>
                <div className="text-xs uppercase tracking-wide text-poke-faint">
                  Species
                </div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold">18</div>
                <div className="text-xs uppercase tracking-wide text-poke-faint">
                  Types
                </div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold">9</div>
                <div className="text-xs uppercase tracking-wide text-poke-faint">
                  Generations
                </div>
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
              <HeroCard initial={initial} />
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
            <p>A matrix of fan-made mini-tools — no account, no grinding. Just Pokémon and a bit of luck.</p>
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

      {/* Tool matrix */}
      <section className="block" id="browse">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Tool matrix</span>
              <h2>Every way to roll</h2>
            </div>
            <p>From AI creatures to shiny hunts — the full generator family mapped to search intent.</p>
          </div>
          <div className="browse-grid">
            {BROWSE_MODULES.map((m) => (
              <Link
                key={m.label}
                href={m.href}
                className="browse-card"
                style={{ "--cc": CAT_COLOR[m.cat] } as CSSProperties}
              >
                <div className="art">
                  <img src={SPRITE(m.p)} alt="" loading="lazy" />
                </div>
                <div className="body">
                  <span className="cat">
                    <span className="dot" />
                    {m.cat}
                  </span>
                  <h3>{m.label}</h3>
                  <p>{m.desc}</p>
                  <div className="foot">
                    <span className="gen">{m.gen}</span>
                    <span className="open">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ToolsNav />
      <AffiliateStrip />
    </>
  );
}
