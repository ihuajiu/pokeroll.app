import { buildOgImage } from "@/lib/og";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const p = url.searchParams.get("p") ?? undefined;
  const origin = url.origin;
  return buildOgImage(p, origin);
}
