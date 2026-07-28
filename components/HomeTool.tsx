import Link from "next/link";
import { getPokemonById, getRandomPokemon } from "@/lib/pokeapi";
import PokemonGenerator from "@/components/PokemonGenerator";
import { GroupIcon, JumpIcon } from "@/components/ToolIcons";
import { TOOLS, TOOL_GROUPS } from "@/lib/tools";
import SeoNav from "@/components/SeoNav";
import ToolsNav from "@/components/ToolsNav";
import AffiliateStrip from "@/components/AffiliateStrip";
import Disclaimer from "@/components/Disclaimer";

const FEATURED = [
  {
    href: "/fusion",
    label: "Fusion Tool",
    desc: "Fuse two Pokémon into a brand-new creature with combined stats.",
    cta: "Fuse now",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
        <circle cx="9" cy="12" r="5" />
        <circle cx="15" cy="12" r="5" />
      </svg>
    ),
  },
  {
    href: "/challenge",
    label: "Challenge Maker",
    desc: "Build a shareable guess, collect or team challenge for a friend.",
    cta: "Make a challenge",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: "/wheel",
    label: "Spin the Wheel",
    desc: "Let the spin of the wheel decide your next Pokémon.",
    cta: "Spin it",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v9l6 4" />
      </svg>
    ),
  },
];

const JUMP_TOOLS = [
  { href: "/", label: "Random", icon: "random" },
  { href: "/type", label: "By Type", icon: "type" },
  { href: "/fusion", label: "Fusion", icon: "fusion" },
  { href: "/wheel", label: "Wheel", icon: "wheel" },
  { href: "/challenge", label: "Challenge", icon: "challenge" },
  { href: "/card", label: "Card", icon: "card" },
];

export default async function HomeTool({ p }: { p?: string }) {
  const initial = p
    ? await getPokemonById(p).catch(() => getRandomPokemon())
    : await getRandomPokemon();

  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6">
      {/* ---------- Hero ---------- */}
      <section className="grid items-center gap-8 lg:grid-cols-2">
        <div className="animate-reveal">
          <span className="section-chip">Random Pokémon Generator</span>
          <h1 className="mt-4 text-4xl font-display font-bold leading-tight text-poke-ink sm:text-5xl">
            Spin up a{" "}
            <span className="bg-gradient-to-r from-poke-violet to-poke-scarlet bg-clip-text text-transparent">
              random
            </span>{" "}
            Pokémon in one tap.
          </h1>
          <p className="mt-4 max-w-md text-base text-poke-dim">
            Pick a region, type, or generation — or just hit generate and see
            what the Poké-ball drops. Stats, abilities, and shinies included.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/random-pokemon-generator"
              className="game-btn game-btn-primary px-6 py-3 text-base"
            >
              Generate a Pokémon
            </Link>
            <Link
              href="/type"
              className="game-btn game-btn-ghost px-6 py-3 text-base"
            >
              Browse types
            </Link>
          </div>
        </div>

        {/* Live generator card */}
        <div className="animate-reveal [animation-delay:120ms]">
          <PokemonGenerator initial={initial} />
        </div>
      </section>

      {/* ---------- Jump straight in ---------- */}
      <section className="mt-16 animate-reveal">
        <span className="section-chip">Quick start</span>
        <h2 className="mt-3 font-display text-2xl font-bold text-poke-ink">
          Jump straight in
        </h2>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {JUMP_TOOLS.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="poke-card group flex flex-col items-center gap-3 p-5 text-center"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-poke-violet/10 text-poke-violet ring-1 ring-poke-violet/20">
                <JumpIcon name={c.icon} className="h-6 w-6" />
              </span>
              <span className="text-sm font-semibold text-poke-ink transition group-hover:text-poke-violet">
                {c.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- Browse by category ---------- */}
      <section className="mt-16 animate-reveal">
        <span className="section-chip">All tools</span>
        <h2 className="mt-3 font-display text-2xl font-bold text-poke-ink">
          Browse by category
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOL_GROUPS.map((g) => {
            const count = TOOLS.filter((t) => t.group === g.id).length;
            const first = TOOLS.find((t) => t.group === g.id);
            return (
              <div key={g.id} className="poke-card flex flex-col p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-poke-violet/10 text-poke-violet">
                    <GroupIcon group={g.id} className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-poke-chip px-2.5 py-0.5 text-xs font-semibold text-poke-dim">
                    {count} tools
                  </span>
                </div>
                <h3 className="text-lg font-bold text-poke-ink">{g.title}</h3>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-poke-dim">
                  {g.desc}
                </p>
                <Link
                  href={first?.href ?? "/"}
                  className="mt-4 inline-block font-semibold text-poke-violet hover:underline"
                >
                  Explore &rarr;
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------- Featured play ---------- */}
      <section id="featured" className="mt-16 animate-reveal scroll-mt-24">
        <span className="section-chip">Featured</span>
        <h2 className="mt-3 font-display text-2xl font-bold text-poke-ink">
          Featured Play
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {FEATURED.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="poke-card group flex flex-col p-6 transition duration-200 hover:-translate-y-1"
            >
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-poke-violet/10 text-poke-violet">
                {f.icon}
              </span>
              <h3 className="text-lg font-bold text-poke-ink">{f.label}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-poke-dim">
                {f.desc}
              </p>
              <span className="mt-4 inline-block font-semibold text-poke-violet group-hover:underline">
                {f.cta} &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <SeoNav />
      <ToolsNav />
      <AffiliateStrip />
      <Disclaimer />
    </main>
  );
}
