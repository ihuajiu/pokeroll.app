import { NextRequest } from "next/server";
import { getRandomTeam } from "@/lib/team";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const result = await getRandomTeam({
    region: searchParams.get("region") || undefined,
    type: searchParams.get("type") || undefined,
    gen: searchParams.get("gen") || undefined,
    count: searchParams.get("count") || undefined,
    difficulty: searchParams.get("difficulty") || undefined,
    seed: searchParams.get("seed") || undefined,
  });

  return Response.json(result);
}
