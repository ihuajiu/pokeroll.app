export interface ToolMeta {
  href: string;
  label: string;
  desc: string;
  group: "adventure" | "generator" | "challenge" | "tool" | "team";
}

export const TOOLS: ToolMeta[] = [
  {
    href: "/adventure",
    label: "Pokémon Adventure",
    desc: "Roll a full adventure — trainer, starter, team, challenge & goal.",
    group: "adventure",
  },
  {
    href: "/random",
    label: "Random Pokémon",
    desc: "A fully random Pokémon with stats, type and sprite.",
    group: "generator",
  },
  {
    href: "/type",
    label: "Type Generator",
    desc: "Roll a random type and a matching Pokémon.",
    group: "generator",
  },
  {
    href: "/ability",
    label: "Ability Generator",
    desc: "Roll a random ability, see who has it.",
    group: "generator",
  },
  {
    href: "/move",
    label: "Move Generator",
    desc: "Discover a random move and one of its users.",
    group: "generator",
  },
  {
    href: "/bst",
    label: "BST Generator",
    desc: "Random base stat total, then reveal the Pokémon.",
    group: "generator",
  },
  {
    href: "/number",
    label: "Number Generator",
    desc: "Roll a Pokédex number and reveal which Pokémon.",
    group: "generator",
  },
  {
    href: "/starter",
    label: "Starter Generator",
    desc: "A random partner from every generation.",
    group: "generator",
  },
  {
    href: "/shiny",
    label: "Shiny Generator",
    desc: "Reveal a shiny Pokémon's alternate colors.",
    group: "generator",
  },
  {
    href: "/cute",
    label: "Cute Generator",
    desc: "Soft, fluffy and adorable picks.",
    group: "generator",
  },
  {
    href: "/mythical",
    label: "Mythical Generator",
    desc: "Mew, Celebi, Arceus and friends.",
    group: "generator",
  },
  {
    href: "/legendary",
    label: "Legendary Generator",
    desc: "Roll only Legendary Pokémon.",
    group: "generator",
  },
  {
    href: "/mega",
    label: "Mega Generator",
    desc: "Mega Evolutions and Primal Reversions.",
    group: "generator",
  },
  {
    href: "/nickname",
    label: "Nickname Generator",
    desc: "A Pokémon paired with a fun cute nickname.",
    group: "generator",
  },
  {
    href: "/challenge",
    label: "Challenge Maker",
    desc: "Build a shareable guess, collect or team challenge.",
    group: "challenge",
  },
  {
    href: "/no-names",
    label: "Mystery Pokémon",
    desc: "Guess the Pokémon from its hidden name.",
    group: "challenge",
  },
  {
    href: "/wheel",
    label: "Spin the Wheel",
    desc: "Let the wheel decide your next Pokémon.",
    group: "challenge",
  },
  {
    href: "/fusion",
    label: "Fusion Tool",
    desc: "Fuse two Pokémon into one new creature.",
    group: "tool",
  },
  {
    href: "/card",
    label: "Trading Card",
    desc: "Turn any Pokémon into a collectible card.",
    group: "tool",
  },
  {
    href: "/team/random",
    label: "Random Team",
    desc: "Roll a ready-made squad of six random Pokémon.",
    group: "team",
  },
  {
    href: "/team",
    label: "Team Builder",
    desc: "Collect favourites into a themed squad.",
    group: "team",
  },
];

export const TOOL_GROUPS: {
  id: ToolMeta["group"];
  title: string;
  desc: string;
}[] = [
  {
    id: "adventure",
    title: "Adventure",
    desc: "Roll your trainer, region, starter, team, challenge and goal in one tap.",
  },
  {
    id: "generator",
    title: "Generators",
    desc: "Random Pokémon pulls by type, ability, move, stat, number and more.",
  },
  {
    id: "challenge",
    title: "Challenges",
    desc: "Guess, collect, spin or build a shareable challenge for you and your friends.",
  },
  {
    id: "tool",
    title: "Tools",
    desc: "Fuse two Pokémon or turn one into a collectible trading card.",
  },
  {
    id: "team",
    title: "Team",
    desc: "Build your squad or roll a ready-made team of six.",
  },
];
