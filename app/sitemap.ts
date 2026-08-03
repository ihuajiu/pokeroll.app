import type { MetadataRoute } from "next";
import { REGIONS, TYPES, GENS } from "@/lib/seo";

const BASE = process.env.SITE_URL ?? "https://pokeroll.app";

const VARIANTS = [
  "type",
  "ability",
  "move",
  "bst",
  "number",
  "starter",
  "no-names",
  "cute",
  "mythical",
  "legendary",
  "mega",
  "nickname",
  "fusion",
  "wheel",
  "challenge",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();

  const staticPages = [
    `${BASE}/`,
    `${BASE}/random-pokemon-generator`,
    `${BASE}/adventure`,
    `${BASE}/team`,
    `${BASE}/team/random`,
    `${BASE}/challenge/guess`,
    `${BASE}/challenge/shiny`,
    `${BASE}/disclaimer`,
  ].map((url) => ({ url, lastModified: today }));

  const variantPages = VARIANTS.map((v) => ({
    url: `${BASE}/${v}`,
    lastModified: today,
  }));

  const regionPages = REGIONS.map((r) => ({
    url: `${BASE}/by/${r}`,
    lastModified: today,
  }));

  const typePages = TYPES.map((t) => ({
    url: `${BASE}/type/${t}`,
    lastModified: today,
  }));

  const genPages = GENS.map((g) => ({
    url: `${BASE}/gen/${g}`,
    lastModified: today,
  }));

  return [...staticPages, ...variantPages, ...regionPages, ...typePages, ...genPages];
}
