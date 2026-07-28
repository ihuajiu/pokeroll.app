export interface ToolMeta {
  href: string;
  label: string;
  desc: string;
  group: "core" | "variant" | "play";
}

export const TOOLS: ToolMeta[] = [
  {
    href: "/",
    label: "Random Pokémon",
    desc: "A fully random Pokémon with stats, type and sprite.",
    group: "core",
  },
  {
    href: "/type",
    label: "Type Generator",
    desc: "Roll a random type and a matching Pokémon.",
    group: "variant",
  },
  {
    href: "/ability",
    label: "Ability Generator",
    desc: "Roll a random ability, see who has it.",
    group: "variant",
  },
  {
    href: "/move",
    label: "Move Generator",
    desc: "Discover a random move and one of its users.",
    group: "variant",
  },
  {
    href: "/bst",
    label: "BST Generator",
    desc: "Random base stat total, then reveal the Pokémon.",
    group: "variant",
  },
  {
    href: "/number",
    label: "Number Generator",
    desc: "Roll a Pokédex number and reveal which Pokémon.",
    group: "variant",
  },
  {
    href: "/starter",
    label: "Starter Generator",
    desc: "A random partner from every generation.",
    group: "variant",
  },
  {
    href: "/shiny",
    label: "Shiny Generator",
    desc: "Reveal a shiny Pokémon's alternate colors.",
    group: "variant",
  },
  {
    href: "/no-names",
    label: "Mystery Pokémon",
    desc: "Guess the Pokémon from its hidden name.",
    group: "variant",
  },
  {
    href: "/cute",
    label: "Cute Generator",
    desc: "Soft, fluffy and adorable picks.",
    group: "variant",
  },
  {
    href: "/mythical",
    label: "Mythical Generator",
    desc: "Mew, Celebi, Arceus and friends.",
    group: "variant",
  },
  {
    href: "/mega",
    label: "Mega Generator",
    desc: "Mega Evolutions and Primal Reversions.",
    group: "variant",
  },
  {
    href: "/nickname",
    label: "Nickname Generator",
    desc: "A Pokémon paired with a fun cute nickname.",
    group: "variant",
  },
  {
    href: "/fusion",
    label: "Fusion Tool",
    desc: "Fuse two Pokémon into one new creature.",
    group: "play",
  },
  {
    href: "/wheel",
    label: "Spin the Wheel",
    desc: "Let the wheel decide your next Pokémon.",
    group: "play",
  },
  {
    href: "/card",
    label: "Trading Card",
    desc: "Turn any Pokémon into a collectible card.",
    group: "play",
  },
  {
    href: "/challenge",
    label: "Challenge Maker",
    desc: "Build a shareable guess, collect or team challenge.",
    group: "play",
  },
];

export const TOOL_GROUPS: {
  id: ToolMeta["group"];
  title: string;
  desc: string;
}[] = [
  {
    id: "core",
    title: "Core Generator",
    desc: "The one-tap random Pokémon pull — name, type, ability and stats.",
  },
  {
    id: "variant",
    title: "Variant Generators",
    desc: "Roll by type, region, generation, ability, nature, stat and more.",
  },
  {
    id: "play",
    title: "Play & Challenges",
    desc: "Fuse two Pokémon, spin the wheel, draw a card or build a challenge.",
  },
];
