import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy — PokeRoll",
  description:
    "PokeRoll privacy policy — we use anonymous Google Analytics, store favorites and theme in your browser's localStorage only, and never collect personal data.",
  keywords: [
    "pokeroll privacy policy",
    "pokemon tool privacy",
    "fan site privacy",
  ],
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl py-10">
      <PageHeader title="Privacy Policy" />
      <div className="space-y-4 text-sm leading-relaxed text-poke-dim">
        <p>
          PokeRoll is a free fan-made Pokémon toolbox. We keep data collection
          to an absolute minimum — you can use every tool without an account,
          and we never ask for personal information.
        </p>
        <p>
          <strong>Analytics:</strong> We use Google Analytics to understand
          overall traffic (which pages are visited, roughly how many visitors).
          This data is aggregated and anonymous — we do not use it to identify
          individual users.
        </p>
        <p>
          <strong>Browser storage:</strong> Your favorites, team picks and
          theme preferences are stored in your browser&apos;s localStorage
          only. This data never leaves your device and is never uploaded to
          our servers.
        </p>
        <p>
          <strong>Personal data:</strong> We do not collect names, email
          addresses or any other personal data. There is no sign-up and no
          tracking beyond the anonymous analytics described above.
        </p>
        <p>
          <strong>Affiliate links:</strong> Some shopping links on this site
          are affiliate links — see the{" "}
          <Link
            href="/disclaimer"
            title="Disclaimer"
            className="underline text-poke-red"
          >
            disclaimer
          </Link>{" "}
          for details. Affiliate partners may use their own cookies per their
          own privacy policies.
        </p>
        <p>
          <strong>Contact:</strong> Questions about this policy? Email{" "}
          <a
            href="mailto:smith.chou.2023@gmail.com"
            className="underline text-poke-red"
          >
            smith.chou.2023@gmail.com
          </a>
          .
        </p>
        <p>
          <Link href="/" title="PokeRoll home" className="font-semibold text-poke-red underline">
            ← Back to the generator
          </Link>
        </p>
      </div>
    </main>
  );
}
