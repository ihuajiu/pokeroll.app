import en from "@/lib/i18n/dict/en";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export type ToolId = keyof Dictionary["tools"]["items"];
export type ToolGroupId = keyof Dictionary["tools"]["groups"];

export interface ToolMeta {
  id: ToolId;
  href: string;
  label: string;
  desc: string;
  group: ToolGroupId;
  /** Emoji icon, used by header dropdowns. */
  icon: string;
}

export interface ToolGroupMeta {
  id: ToolGroupId;
  title: string;
  desc: string;
}

/* Structural catalog (id / href / group / icon). The user-facing label and
 * desc live in the dictionary (lib/i18n/dict/*) — TOOLS below merges the
 * English defaults so existing call sites keep working; localized consumers
 * use localizeTools()/localizeToolGroups() with their locale's dictionary. */
const TOOL_DEFS: {
  id: ToolId;
  href: string;
  group: ToolGroupId;
  icon: string;
}[] = [
  { id: "adventure", href: "/adventure", group: "adventure", icon: "🗺️" },
  { id: "randomPokemon", href: "/random-pokemon-generator", group: "generator", icon: "🎲" },
  { id: "type", href: "/type", group: "generator", icon: "🌀" },
  { id: "ability", href: "/ability", group: "generator", icon: "⚡" },
  { id: "move", href: "/move", group: "generator", icon: "🥊" },
  { id: "bst", href: "/bst", group: "generator", icon: "📊" },
  { id: "number", href: "/number", group: "generator", icon: "🔢" },
  { id: "starter", href: "/starter", group: "generator", icon: "🌱" },
  { id: "cute", href: "/cute", group: "generator", icon: "🧸" },
  { id: "mythical", href: "/mythical", group: "generator", icon: "🌟" },
  { id: "legendary", href: "/legendary", group: "generator", icon: "👑" },
  { id: "mega", href: "/mega", group: "generator", icon: "🔷" },
  { id: "nickname", href: "/nickname", group: "generator", icon: "🏷️" },
  { id: "guess", href: "/challenge/guess", group: "challenge", icon: "🎯" },
  { id: "shiny", href: "/challenge/shiny", group: "challenge", icon: "✨" },
  { id: "mystery", href: "/no-names", group: "generator", icon: "❓" },
  { id: "wheel", href: "/wheel", group: "challenge", icon: "🎡" },
  { id: "fusion", href: "/fusion", group: "tool", icon: "🧬" },
  { id: "randomTeam", href: "/team/random", group: "team", icon: "🤝" },
  { id: "teamChallenge", href: "/team/challenge", group: "team", icon: "⚔️" },
  { id: "teamCoach", href: "/team/coach", group: "team", icon: "🧠" },
  { id: "myTeam", href: "/team", group: "team", icon: "🧰" },
];

const GROUP_DEFS: ToolGroupId[] = [
  "adventure",
  "generator",
  "challenge",
  "tool",
  "team",
];

function mergeTools(dict: Dictionary): ToolMeta[] {
  return TOOL_DEFS.map((d) => ({
    ...d,
    ...(dict.tools.items[d.id] ?? en.tools.items[d.id]),
  }));
}

function mergeGroups(dict: Dictionary): ToolGroupMeta[] {
  return GROUP_DEFS.map((id) => ({
    id,
    ...(dict.tools.groups[id] ?? en.tools.groups[id]),
  }));
}

/** English catalog — same shape/values as before the i18n refactor. */
export const TOOLS: ToolMeta[] = mergeTools(en);

export const TOOL_GROUPS: ToolGroupMeta[] = mergeGroups(en);

/** Tool catalog with labels/descs from the given dictionary. */
export function localizeTools(dict: Dictionary): ToolMeta[] {
  return mergeTools(dict);
}

/** Group titles/descs from the given dictionary. */
export function localizeToolGroups(dict: Dictionary): ToolGroupMeta[] {
  return mergeGroups(dict);
}

// Curated internal-link graph: for each tool page (key = href), the 4-5 most
// relevant other tools. Powers the RelatedTools module on every tool page.
// Principle: cluster by theme (stats / looks / gameplay), and always include
// one of the two main entry points (/random or /adventure).
export const RELATED_TOOLS: Record<string, string[]> = {
  "/adventure": ["/random-pokemon-generator", "/team/random", "/challenge/shiny", "/wheel", "/fusion"],
  "/random-pokemon-generator": ["/adventure", "/team/random", "/starter", "/legendary", "/nickname"],
  "/type": ["/random-pokemon-generator", "/starter", "/ability", "/move", "/legendary"],
  "/ability": ["/move", "/bst", "/type", "/random-pokemon-generator", "/adventure"],
  "/move": ["/ability", "/bst", "/type", "/random-pokemon-generator"],
  "/bst": ["/number", "/ability", "/move", "/random-pokemon-generator", "/legendary"],
  "/number": ["/bst", "/nickname", "/random-pokemon-generator", "/adventure"],
  "/starter": ["/type", "/random-pokemon-generator", "/adventure", "/cute"],
  "/cute": ["/mythical", "/nickname", "/starter", "/random-pokemon-generator"],
  "/mythical": ["/legendary", "/mega", "/cute", "/random-pokemon-generator", "/adventure"],
  "/legendary": ["/mythical", "/mega", "/challenge/shiny", "/random-pokemon-generator", "/adventure"],
  "/mega": ["/legendary", "/mythical", "/fusion", "/random-pokemon-generator"],
  "/nickname": ["/number", "/cute", "/team", "/random-pokemon-generator"],
  "/challenge/guess": ["/no-names", "/challenge/shiny", "/wheel", "/adventure"],
  "/challenge/shiny": ["/challenge/guess", "/legendary", "/adventure", "/random-pokemon-generator"],
  "/no-names": ["/challenge/guess", "/nickname", "/random-pokemon-generator", "/adventure"],
  "/wheel": ["/challenge/guess", "/challenge/shiny", "/fusion", "/adventure", "/random-pokemon-generator"],
  "/fusion": ["/wheel", "/mega", "/adventure", "/random-pokemon-generator"],
  "/team/random": ["/team/challenge", "/team/coach", "/team", "/adventure", "/random-pokemon-generator"],
  "/team": ["/team/challenge", "/team/coach", "/team/random", "/adventure", "/nickname"],
  "/team/challenge": ["/team/coach", "/team/random", "/team", "/adventure", "/random-pokemon-generator"],
  "/team/coach": ["/team/random", "/team", "/team/challenge", "/adventure", "/random-pokemon-generator"],
  "/favorites": ["/random-pokemon-generator", "/team/random", "/adventure", "/legendary", "/cute"],
};
