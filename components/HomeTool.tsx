/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import HeroCard from "@/components/HeroCard";
import HeroActions from "@/components/HeroActions";
import ToolsNav from "@/components/ToolsNav";
import { getRandomPokemon, getPokemonById } from "@/lib/pokeapi";
import type { Pokemon } from "@/lib/types";

export const metadata: Metadata = {
  title: "PockRoll — Random Pokémon Generator",
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
    href: "/random", label: "Random Generator", desc: "Summon a random Pokémon with full stats & artwork.",
    color: "#ee3b3b", p: 25, count: "MAIN",
    icon: <SvgIcon><rect x="4" y="4" width="16" height="16" rx="3" /><circle cx="9" cy="9" r="1.1" fill="currentColor" /><circle cx="15" cy="15" r="1.1" fill="currentColor" /><circle cx="15" cy="9" r="1.1" fill="currentColor" /><circle cx="9" cy="15" r="1.1" fill="currentColor" /></SvgIcon>,
  },
  {
    href: "/team/random", label: "Random Team", desc: "Roll a ready-made squad of six random Pokémon.",
    color: "#f5a524", p: 196, count: "SQUAD",
    icon: <SvgIcon><circle cx="8" cy="8" r="2.4" /><circle cx="16" cy="8" r="2.4" /><circle cx="8" cy="16" r="2.4" /><circle cx="16" cy="16" r="2.4" /></SvgIcon>,
  },
  {
    href: "/shiny", label: "Shiny Generator", desc: "Hunt the rare recolored form.",
    color: "#fbbf24", p: 6, count: "SHINY",
    icon: <SvgIcon><path d="M12 2l2.4 5 5.6.8-4 4 1 5.6L12 20l-5 2.4 1-5.6-4-4 5.6-.8z" /></SvgIcon>,
  },
  {
    href: "/fusion", label: "Fusion Generator", desc: "Fuse two Pokémon into one hybrid creature.",
    color: "#a855f7", p: 94, count: "FUSION",
    icon: <SvgIcon><circle cx="8.5" cy="9.5" r="4" /><circle cx="15" cy="14" r="4" /><path d="M11.5 12.5l4-4" strokeWidth="1.8" /></SvgIcon>,
  },
  {
    href: "/wheel", label: "Spin Wheel", desc: "Let chance decide your next encounter.",
    color: "#f97316", p: 35, count: "WHEEL",
    icon: <SvgIcon><circle cx="12" cy="12" r="9" /><path d="M12 3v9l6.4 4.3" /><circle cx="12" cy="12" r="1.3" fill="currentColor" /></SvgIcon>,
  },
  {
    href: "/no-names", label: "No Names", desc: "Hide the name, guess from its artwork & types.",
    color: "#8b5cf6", p: 492, count: "GUESS",
    icon: <SvgIcon><path d="M9 9a3 3 0 1 1 4.5 2.6c-1 .6-1.5 1.2-1.5 2.4" /><circle cx="12" cy="18" r="1" fill="currentColor" /></SvgIcon>,
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
  Core: "#ee3b3b",
  AI: "#f43f5e",
  Shiny: "#fbbf24",
  Fusion: "#a855f7",
  Wheel: "#f97316",
  Guess: "#8b5cf6",
  Starter: "#f59e0b",
  Type: "#3aa0ff",
  RNG: "#16c79a",
  Squad: "#f5a524",
  Region: "#9ca3af",
  Variant: "#6366f1",
  Create: "#ec4899",
};

const BROWSE_MODULES: Module[] = [
  { href: "/random", cat: "Core", gen: "DEX 1–1010", label: "Random Generator", p: 25, desc: "Summon a random Pokémon with full stats & artwork." },
  { href: "/shiny", cat: "Shiny", gen: "1/4096", label: "Shiny Generator", p: 6, desc: "Hunt the rare recolored form." },
  { href: "/fusion", cat: "Fusion", gen: "PLAY", label: "Fusion Generator", p: 94, desc: "Fuse two Pokémon into one hybrid." },
  { href: "/wheel", cat: "Wheel", gen: "DEX 1–1010", label: "Spin Wheel", p: 35, desc: "Let chance decide your next encounter." },
  { href: "/no-names", cat: "Guess", gen: "DEX 1–1010", label: "No Names", p: 492, desc: "Hide the name, guess from its artwork & types." },
  { href: "/challenge", cat: "Starter", gen: "9 GENS", label: "Starter Generator", p: 1, desc: "A random starter from every generation." },
  { href: "/type", cat: "Type", gen: "18 TYPES", label: "Type Generator", p: 37, desc: "Roll one of the 18 elemental types." },
  { href: "/challenge", cat: "RNG", gen: "EGG", label: "Mystery Egg", p: 175, desc: "Crack open a surprise species you never met." },
  { href: "/team", cat: "Squad", gen: "SQUAD", label: "Team Builder", p: 196, desc: "Collect favourites into a themed squad." },
  { href: "/team/random", cat: "Squad", gen: "6×DEX", label: "Random Team", p: 196, desc: "Roll a ready-made squad of six random Pokémon." },
  { href: "/by/kanto", cat: "Region", gen: "GEN 1–9", label: "By Region", p: 150, desc: "Filter Kanto → Paldea by region." },
  { href: "/card", cat: "Create", gen: "BUILD", label: "Card Generator", p: 6, desc: "Generate a custom Pokémon trading card." },
  { href: "/ability", cat: "Variant", gen: "DEX 1–1010", label: "Ability Generator", p: 25, desc: "Roll a random Ability and see who has it." },
  { href: "/move", cat: "Variant", gen: "DEX 1–1010", label: "Move Generator", p: 143, desc: "Discover a random move and its user." },
  { href: "/bst", cat: "Variant", gen: "DEX 1–1010", label: "BST Generator", p: 149, desc: "Random base stat total, reveal the Pokémon." },
  { href: "/number", cat: "Variant", gen: "DEX 1–1010", label: "Number Generator", p: 152, desc: "Roll a Pokédex number, reveal the Pokémon." },
];

export default async function Home({ p }: { p?: string }) {
  const initial: Pokemon = p
    ? await getPokemonById(p).catch(() => getRandomPokemon())
    : await getRandomPokemon();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-10">
        <div className="grid items-center gap-10 xl:grid-cols-2">
          <div className="hero-copy">
            <span className="eyebrow">Random Pokémon Generator</span>
            <h1 className="font-display font-extrabold">
              Your random <span className="accent">Pokémon</span> awaits.
            </h1>
            <p className="lead">
              Spin up a random Pokémon in one tap — every roll comes with its
              name, type, ability, stats and an official sprite. Then send it to
              your team, your wallpaper or a friend.
            </p>
            <HeroActions />
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
              <HeroCard pokemon={initial} rollButtonId="heroRollBtn" />
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

      {/* Tool matrix */}
      <section className="block" id="browse">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Tool matrix</span>
              <h2>Every way to roll</h2>
            </div>
            <p>The complete tool catalog — every way to roll a Pokémon.</p>
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
    </>
  );
}
