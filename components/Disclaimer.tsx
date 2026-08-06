export default function Disclaimer() {
  return (
    <footer className="mt-16 border-t border-poke-border pt-6 text-center text-xs text-poke-dim">
      <p>
        This is a fan-made tool. Not affiliated with Nintendo or The Pokémon Company.
      </p>
      <p className="mt-1">
        Pokémon data provided by{" "}
        <a
          href="https://pokeapi.co/"
          title="PokéAPI"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          PokéAPI
        </a>
        .
      </p>
    </footer>
  );
}
