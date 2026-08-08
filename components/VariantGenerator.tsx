"use client";

import { useState } from "react";
import type { Pokemon } from "@/lib/types";
import { useI18n } from "@/components/I18nProvider";
import LocalizedLink from "@/components/LocalizedLink";
import HeroCard from "./HeroCard";
import AddToTeamButton from "./AddToTeamButton";

export type VariantPayload = {
  kind: string;
  value?: string | number;
  pokemon: Pokemon;
};

const VALUE_KINDS = new Set(["type", "ability", "move", "bst", "number", "nickname"]);

export default function VariantGenerator({
  kind,
  initial,
  mode,
}: {
  kind: string;
  initial: VariantPayload;
  mode?: "shiny" | "no-names";
}) {
  const [data, setData] = useState<VariantPayload>(initial);
  const [loading, setLoading] = useState(false);
  const { dict } = useI18n();
  const v = dict.variantGenerator;
  const kindKey = data.kind === "no-names" ? "noNames" : data.kind;
  const kindLabel =
    (v.kinds as Record<string, string>)[kindKey] ?? data.kind;

  const showValue = data.value !== undefined && VALUE_KINDS.has(data.kind);
  const valueText = data.kind === "number" ? `#${data.value}` : String(data.value);

  async function regenerate() {
    setLoading(true);
    try {
      const res = await fetch(`/api/variant?kind=${kind}`);
      if (!res.ok) throw new Error("failed");
      setData(await res.json());
    } catch {
      // keep previous result on error
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-[640px]">
      <div className="mb-4 text-center">
        <p className="text-lg font-semibold text-poke-ink">{v.welcome}</p>
        <p className="text-sm text-poke-dim">
          {v.yourRandom.replace("{kind}", kindLabel)}
        </p>
        {showValue && (
          <p className="mt-1 text-2xl font-bold capitalize text-poke-red">
            {valueText}
          </p>
        )}
      </div>
      <div className="card-stage flex justify-center">
        <HeroCard
          pokemon={data.pokemon}
          loading={loading}
          hideName={mode === "no-names"}
          onRoll={regenerate}
          variant="wide"
          favoritable
        />
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <AddToTeamButton pokemon={data.pokemon} />
        <LocalizedLink
          href="/team" title={dict.common.viewYourTeam}
          className="rounded-xl border border-poke-border bg-poke-surface px-5 py-2.5 font-semibold text-poke-ink shadow-sm transition hover:border-poke-red hover:text-poke-red"
        >
          {v.buildTeam}
        </LocalizedLink>
      </div>
    </div>
  );
}
