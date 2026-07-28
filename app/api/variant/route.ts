import { NextRequest } from "next/server";
import { getVariant } from "@/lib/pokeapi";

export const dynamic = "force-dynamic";

const ALLOWED = new Set([
  "type", "ability", "move", "bst", "number",
  "cute", "mythical", "mega", "nickname", "card",
]);

export async function GET(req: NextRequest) {
  const kind = req.nextUrl.searchParams.get("kind") ?? "type";
  const safeKind = ALLOWED.has(kind) ? kind : "type";
  try {
    const result = await getVariant(safeKind);
    return Response.json(result);
  } catch {
    return Response.json({ error: "Failed to generate variant" }, { status: 500 });
  }
}
