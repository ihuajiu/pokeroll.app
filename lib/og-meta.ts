// Bump OG_VERSION whenever the OG card design changes. Vercel/CDN may pin
// /api/og with a 1-year immutable Cache-Control, so the version query forces
// scrapers and browsers to fetch a fresh image URL after a redesign.
export const OG_VERSION = "3";

export function ogImageUrl(p?: string): string {
  return p
    ? `/api/og?p=${encodeURIComponent(p)}&v=${OG_VERSION}`
    : `/api/og?v=${OG_VERSION}`;
}