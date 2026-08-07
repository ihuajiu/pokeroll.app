import type { Metadata } from "next";
import HomeTool from "@/components/HomeTool";

export const metadata: Metadata = {
  title: "PokeRoll — Random Pokémon Tools, Teams & Adventures",
  description:
    "PokeRoll is a free fan-made Pokémon toolbox — roll random Pokémon, build a random team of six, take on challenges or roll a full adventure in one tap, and copy any card to Showdown.",
  keywords: [
    "pokemon generator",
    "pokemon randomizer",
    "pokemon tools",
    "pokemon team generator",
    "pokemon adventure",
  ],
  alternates: { canonical: "/" },
};

// ISR:首页从 CDN 缓存直接返回(TTFB 从 ~2.25s 降到 ~100ms),
// 每小时重新生成一次,Hero 展示卡随之换一只。
export const revalidate = 3600;

export default function Page() {
  return (
    <main className="pt-1 pb-10">
      <HomeTool />
    </main>
  );
}
