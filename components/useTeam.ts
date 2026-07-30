"use client";

import { useCallback, useSyncExternalStore } from "react";
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

// Module-level shared store so every useTeam() consumer stays in sync
// (e.g. a nav badge updates the moment a card is added from any page).
let store: Pokemon[] | null = null;
const EMPTY: Pokemon[] = [];
const listeners = new Set<() => void>();

function ensure(): Pokemon[] {
  if (store === null) store = load();
  return store;
}

function emit() {
  listeners.forEach((l) => l());
}

function setStore(next: Pokemon[]) {
  store = next;
  try {
    if (next.length === 0) localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // storage may be unavailable; keep in-memory state
  }
  emit();
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

function getSnapshot(): Pokemon[] {
  return ensure();
}

function getServerSnapshot(): Pokemon[] {
  return EMPTY;
}

export function useTeam() {
  const team = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const add = useCallback((p: Pokemon) => {
    const cur = ensure();
    if (cur.some((x) => x.dexNumber === p.dexNumber)) return;
    setStore([...cur, p].slice(-TEAM_MAX));
  }, []);

  const remove = useCallback((dexNumber: number) => {
    setStore(ensure().filter((x) => x.dexNumber !== dexNumber));
  }, []);

  const has = useCallback(
    (dexNumber: number) => team.some((x) => x.dexNumber === dexNumber),
    [team],
  );

  const clear = useCallback(() => {
    setStore([]);
  }, []);

  return { team, add, remove, has, clear, max: TEAM_MAX };
}
