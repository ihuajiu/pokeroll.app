export interface ToolMeta {
  href: string;
  label: string;
  desc: string;
  group: "adventure" | "generator" | "challenge" | "tool" | "team";
  /** Emoji icon, used by header dropdowns. */
  icon: string;
}

export const TOOLS: ToolMeta[] = [
  {
    href: "/adventure",
    label: "Pokémon Adventure",
    desc: "Roll a full adventure — trainer, starter, team, challenge & goal.",
    group: "adventure",
    icon: "🗺️",
  },
  {
    href: "/random",
    label: "Random Pokémon",
    desc: "A fully random Pokémon with stats, type and sprite.",
    group: "generator",
    icon: "🎲",
  },
  {
    href: "/type",
    label: "Type Generator",
    desc: "Roll a random type and a matching Pokémon.",
    group: "generator",
    icon: "🌀",
  },
  {
    href: "/ability",
    label: "Ability Generator",
    desc: "Roll a random ability, see who has it.",
    group: "generator",
    icon: "⚡",
  },
  {
    href: "/move",
    label: "Move Generator",
    desc: "Discover a random move and one of its users.",
    group: "generator",
    icon: "🥊",
  },
  {
    href: "/bst",
    label: "BST Generator",
    desc: "Random base stat total, then reveal the Pokémon.",
    group: "generator",
    icon: "📊",
  },
  {
    href: "/number",
    label: "Number Generator",
    desc: "Roll a Pokédex number and reveal which Pokémon.",
    group: "generator",
    icon: "🔢",
  },
  {
    href: "/starter",
    label: "Starter Generator",
    desc: "A random partner from every generation.",
    group: "generator",
    icon: "🌱",
  },
  {
    href: "/shiny",
    label: "Shiny Generator",
    desc: "Reveal a shiny Pokémon's alternate colors.",
    group: "generator",
    icon: "💫",
  },
  {
    href: "/cute",
    label: "Cute Generator",
    desc: "Soft, fluffy and adorable picks.",
    group: "generator",
    icon: "🧸",
  },
  {
    href: "/mythical",
    label: "Mythical Generator",
    desc: "Mew, Celebi, Arceus and friends.",
    group: "generator",
    icon: "🌟",
  },
  {
    href: "/legendary",
    label: "Legendary Generator",
    desc: "Roll only Legendary Pokémon.",
    group: "generator",
    icon: "👑",
  },
  {
    href: "/mega",
    label: "Mega Generator",
    desc: "Mega Evolutions and Primal Reversions.",
    group: "generator",
    icon: "🔷",
  },
  {
    href: "/nickname",
    label: "Nickname Generator",
    desc: "A Pokémon paired with a fun cute nickname.",
    group: "generator",
    icon: "🏷️",
  },
  {
    href: "/challenge/guess",
    label: "Guess the Pokémon",
    desc: "Names hidden — guess from the silhouette, reveal to check.",
    group: "challenge",
    icon: "🎯",
  },
  {
    href: "/challenge/shiny",
    label: "Shiny Hunt",
    desc: "How many encounters until your next shiny?",
    group: "challenge",
    icon: "✨",
  },
  {
    href: "/no-names",
    label: "Mystery Pokémon",
    desc: "Guess the Pokémon from its hidden name.",
    group: "generator",
    icon: "❓",
  },
  {
    href: "/wheel",
    label: "Spin the Wheel",
    desc: "Let the wheel decide your next Pokémon.",
    group: "generator",
    icon: "🎡",
  },
  {
    href: "/fusion",
    label: "Fusion Tool",
    desc: "Fuse two Pokémon into one new creature.",
    group: "tool",
    icon: "🧬",
  },
  {
    href: "/team/random",
    label: "Random Team",
    desc: "Roll a ready-made squad of six random Pokémon.",
    group: "team",
    icon: "🤝",
  },
  {
    href: "/team",
    label: "Team Builder",
    desc: "Collect favourites into a themed squad.",
    group: "team",
    icon: "🧰",
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
    desc: "Guess, hunt or spin — shareable challenges for you and your friends.",
  },
  {
    id: "tool",
    title: "Tools",
    desc: "Handy utilities built on top of the random rolls.",
  },
  {
    id: "team",
    title: "Team",
    desc: "Build your squad or roll a ready-made team of six.",
  },
];
