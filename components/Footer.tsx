import Link from "next/link";
import { REGIONS, TYPES, GENS, titleCase } from "@/lib/seo";

const COLS: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    title: "Generators",
    links: [
      { label: "Random", href: "/" },
      { label: "By Type", href: "/type" },
      { label: "By Ability", href: "/ability" },
      { label: "By Move", href: "/move" },
      { label: "By Number", href: "/number" },
      { label: "By BST", href: "/bst" },
    ],
  },
  {
    title: "Play",
    links: [
      { label: "Fusion", href: "/fusion" },
      { label: "Wheel", href: "/wheel" },
      { label: "Card", href: "/card" },
      { label: "Challenge", href: "/challenge" },
      { label: "Shiny", href: "/shiny" },
      { label: "No Names", href: "/no-names" },
    ],
  },
  {
    title: "More Tools",
    links: [
      { label: "Starter", href: "/starter" },
      { label: "Team Builder", href: "/team" },
      { label: "Cute", href: "/cute" },
      { label: "Mythical", href: "/mythical" },
      { label: "Mega", href: "/mega" },
      { label: "Nickname", href: "/nickname" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Home", href: "/" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Data: PokéAPI", href: "https://pokeapi.co/", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-grid">
        <div className="foot-brand">
          <div className="brand-name">
            <svg className="ball" viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="50" cy="50" r="46" fill="currentColor" />
              <path d="M4 50a46 46 0 0 1 92 0Z" fill="#fff" />
              <rect x="2" y="45" width="96" height="10" fill="#1f2430" />
              <circle cx="50" cy="50" r="15" fill="#fff" stroke="#1f2430" strokeWidth="7" />
            </svg>
            <span>Pock<span className="red">Roll</span></span>
          </div>
          <p>
            Roll a random Pokémon — names, types, stats and shinies in one tap.
          </p>
        </div>
        {COLS.map((col) => (
          <div key={col.title} className="foot-col">
            <h4>{col.title}</h4>
            {col.links.map((l) =>
              l.external ? (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {l.label}
                </a>
              ) : (
                <Link key={l.label} href={l.href}>
                  {l.label}
                </Link>
              ),
            )}
          </div>
        ))}
      </div>

      <div className="foot-browse">
        <div className="fb-block">
          <h4>By Region</h4>
          <div className="fb-chips">
            {REGIONS.map((r) => (
              <Link key={r} href={`/by/${r}`}>
                {titleCase(r)}
              </Link>
            ))}
          </div>
        </div>
        <div className="fb-block">
          <h4>By Type</h4>
          <div className="fb-chips">
            {TYPES.map((t) => (
              <Link key={t} href={`/type/${t}`}>
                {titleCase(t)}
              </Link>
            ))}
          </div>
        </div>
        <div className="fb-block">
          <h4>By Generation</h4>
          <div className="fb-chips">
            {GENS.map((g) => (
              <Link key={g} href={`/gen/${g}`}>
                Gen {g}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="foot-disclaim">
        This is a fan-made tool. Not affiliated with Nintendo, Game Freak or The
        Pokémon Company. Pokémon data provided by{" "}
        <a
          href="https://pokeapi.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          PokéAPI
        </a>
        .
      </div>
    </footer>
  );
}
