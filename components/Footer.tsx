import Link from "next/link";

const COLS: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    title: "Generators",
    links: [
      { label: "Random", href: "/" },
      { label: "By Type", href: "/type" },
      { label: "By Ability", href: "/ability" },
      { label: "By Region", href: "/number" },
    ],
  },
  {
    title: "Play",
    links: [
      { label: "Fusion", href: "/fusion" },
      { label: "Wheel", href: "/wheel" },
      { label: "Card", href: "/card" },
      { label: "Challenge", href: "/challenge" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Home", href: "/" },
      { label: "Types", href: "/type" },
      { label: "Data: PokéAPI", href: "https://pokeapi.co/", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-grid">
        <div className="foot-brand">
          <div className="brand-name">PokeField</div>
          <p>
            Your random Pokémon generator — roll names, types, stats and
            shinies in one tap.
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
