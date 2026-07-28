import type { Metadata } from "next";
import HomeTool from "@/components/HomeTool";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ p?: string }>;
}): Promise<Metadata> {
  const { p } = await searchParams;
  if (!p) return {};
  return {
    openGraph: {
      images: [{ url: `/api/og?p=${p}`, width: 1200, height: 630 }],
    },
  };
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ p?: string }>;
}) {
  const sp = await searchParams;
  return <HomeTool p={sp.p} />;
}
