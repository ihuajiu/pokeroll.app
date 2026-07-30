import { NextRequest } from "next/server";
import { rollAdventure } from "@/lib/adventure";
import { randomSeed } from "@/lib/adventure-types";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const seed =
    new URL(req.url).searchParams.get("seed") || randomSeed();
  try {
    const adventure = await rollAdventure(seed);
    return Response.json(adventure);
  } catch (e) {
    return Response.json({ error: "Failed to roll adventure" }, { status: 500 });
  }
}
