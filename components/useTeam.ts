"use client";

import { useCallback, useEffect, useState } from "react";
import type { Pokemon } from "@/lib/types";

const KEY = "rpg-team";
export const TEAM_MAX = 6;

function load(): Pokemon[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Pokemon[]) : [];
  } catch {
    return [];
  }
}

export function useTeam() {
  const [team, setTeam] = useState<Pokemon[]>([]);

  useEffect(() => {
    setTeam(load());
  }, []);

  const persist = useCallback((next: Pokemon[]) => {
    setTeam(next);
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      // storage may be unavailable; keep in-memory state
    }
  }, []);

  const add = useCallback(
    (p: Pokemon) => {
      setTeam((prev) => {
        if (prev.some((x) => x.dexNumber === p.dexNumber)) return prev;
        const next = [...prev, p].slice(-TEAM_MAX);
        try {
          localStorage.setItem(KEY, JSON.stringify(next));
        } catch {
          // ignore
        }
        return next;
      });
    },
    [],
  );

  const remove = useCallback((dexNumber: number) => {
    setTeam((prev) => {
      const next = prev.filter((x) => x.dexNumber !== dexNumber);
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const has = useCallback(
    (dexNumber: number) => team.some((x) => x.dexNumber === dexNumber),
    [team],
  );

  const clear = useCallback(() => {
    setTeam([]);
    try {
      localStorage.removeItem(KEY);
    } catch {
      // ignore
    }
  }, []);

  return { team, add, remove, has, clear, max: TEAM_MAX };
}
