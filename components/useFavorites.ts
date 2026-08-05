"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { Pokemon } from "@/lib/types";

const KEY = "rpg-favorites";

/** Free tier keeps up to 15 favorites; more is a Premium feature. */
export const MAX_FAVORITES = 15;

function load(): Pokemon[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Pokemon[]) : [];
  } catch {
    return [];
  }
}

// Module-level shared store so every useFavorites() consumer stays in sync
// (e.g. the nav heart badge updates the moment a card is favorited anywhere).
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

// Another tab wrote the favorites — reload so this tab's badge matches.
function onStorage(e: StorageEvent) {
  if (e.key !== null && e.key !== KEY) return;
  store = load();
  emit();
}

function subscribe(cb: () => void) {
  if (listeners.size === 0 && typeof window !== "undefined") {
    window.addEventListener("storage", onStorage);
  }
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
    if (listeners.size === 0 && typeof window !== "undefined") {
      window.removeEventListener("storage", onStorage);
    }
  };
}

function getSnapshot(): Pokemon[] {
  return ensure();
}

function getServerSnapshot(): Pokemon[] {
  return EMPTY;
}

export function useFavorites() {
  const favorites = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const add = useCallback((p: Pokemon): "added" | "exists" | "limit" => {
    const cur = ensure();
    if (cur.some((x) => x.dexNumber === p.dexNumber)) return "exists";
    if (cur.length >= MAX_FAVORITES) return "limit";
    setStore([...cur, p]);
    return "added";
  }, []);

  const remove = useCallback((dexNumber: number) => {
    setStore(ensure().filter((x) => x.dexNumber !== dexNumber));
  }, []);

  const toggle = useCallback((p: Pokemon): "added" | "removed" | "limit" => {
    const cur = ensure();
    if (cur.some((x) => x.dexNumber === p.dexNumber)) {
      setStore(cur.filter((x) => x.dexNumber !== p.dexNumber));
      return "removed";
    }
    if (cur.length >= MAX_FAVORITES) return "limit";
    setStore([...cur, p]);
    return "added";
  }, []);

  // Merge a batch of pokemon (e.g. imported from a shared snapshot link),
  // skipping any already favorited by dexNumber.
  const merge = useCallback((list: Pokemon[]) => {
    const cur = ensure();
    const seen = new Set(cur.map((x) => x.dexNumber));
    const fresh = list.filter((x) => !seen.has(x.dexNumber));
    const room = Math.max(0, MAX_FAVORITES - cur.length);
    const accepted = fresh.slice(0, room);
    if (accepted.length > 0) setStore([...cur, ...accepted]);
    return accepted.length;
  }, []);

  const has = useCallback(
    (dexNumber: number) => favorites.some((x) => x.dexNumber === dexNumber),
    [favorites],
  );

  const clear = useCallback(() => {
    setStore([]);
  }, []);

  const isFull = favorites.length >= MAX_FAVORITES;

  return { favorites, add, remove, toggle, merge, has, clear, isFull };
}
