import { buildOgImage } from "@/lib/og";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const p = url.searchParams.get("p") ?? undefined;
  return buildOgImage(p);
}
