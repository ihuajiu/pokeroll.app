import { buildOgImage } from "@/lib/og";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const p = url.searchParams.get("p") ?? undefined;
  const origin = url.origin;
  const res = await buildOgImage(p, origin);
  // OG cards are versioned in the URL (?v=) — see lib/og-meta.ts. Keep the
  // CDN TTL short so a future redesign isn't pinned for a year (Vercel was
  // previously serving /api/og with `immutable, max-age=31536000`).
  res.headers.set(
    "Cache-Control",
    "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
  );
  return res;
}