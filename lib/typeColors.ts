// Single source of truth for Pokémon type colors.
// Hex values drive the per-card type-colored glow (--cc) and the badge fills.
// text is chosen for legible contrast (#3b3b3b on light pastel types).

export const TYPE_HEX: Record<string, string> = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
};

export const TYPE_COLORS: Record<string, string> = {
  normal: "bg-[#A8A878] text-white",
  fire: "bg-[#F08030] text-white",
  water: "bg-[#6890F0] text-white",
  electric: "bg-[#F8D030] text-[#3b3b3b]",
  grass: "bg-[#78C850] text-white",
  ice: "bg-[#98D8D8] text-[#3b3b3b]",
  fighting: "bg-[#C03028] text-white",
  poison: "bg-[#A040A0] text-white",
  ground: "bg-[#E0C068] text-[#3b3b3b]",
  flying: "bg-[#A890F0] text-white",
  psychic: "bg-[#F85888] text-white",
  bug: "bg-[#A8B820] text-white",
  rock: "bg-[#B8A038] text-white",
  ghost: "bg-[#705898] text-white",
  dragon: "bg-[#7038F8] text-white",
  dark: "bg-[#705848] text-white",
  steel: "bg-[#B8B8D0] text-[#3b3b3b]",
  fairy: "bg-[#EE99AC] text-[#3b3b3b]",
};

// Game-console style type-tinted gradient (used for hero screens / panels).
export function typeGradient(type: string): string {
  const hex = TYPE_HEX[type] ?? TYPE_HEX.normal;
  return `linear-gradient(150deg, ${hex} 0%, #1f2433 100%)`;
}
