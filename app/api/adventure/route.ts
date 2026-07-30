import { NextRequest } from "next/server";
import { rollAdventure } from "@/lib/adventure";
import { randomSeed } from "@/lib/adventure-types";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const params = new URL(req.url).searchParams;
  const seed = params.get("seed") || randomSeed();
  const difficulty = params.get("difficulty") || undefined;
  try {
    const adventure = await rollAdventure(seed, difficulty ?? undefined);
    return Response.json(adventure);
  } catch (e) {
    return Response.json({ error: "Failed to roll adventure" }, { status: 500 });
  }
}
