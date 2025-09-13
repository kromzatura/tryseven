import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Resolve Sanity internationalized array string or generic objects with `value`
// to a plain string. Falls back to the first available entry.
export function resolveSanityString(input: unknown, locale: string = "en"): string {
  if (typeof input === "string") return input;

  const asRecord = (o: unknown): Record<string, unknown> | null =>
    typeof o === "object" && o !== null ? (o as Record<string, unknown>) : null;

  if (Array.isArray(input)) {
    const arr = input as unknown[];

    // Try to find matching locale entry with `_key` and `value` string
    for (const it of arr) {
      const rec = asRecord(it);
      if (!rec) continue;
      const key = rec["_key"];
      const val = rec["value"];
      if (key === locale && typeof val === "string") return val;
    }

    // Otherwise first entry that has a string `value`
    for (const it of arr) {
      const rec = asRecord(it);
      if (!rec) continue;
      const val = rec["value"];
      if (typeof val === "string") return val;
    }

    // Or the first plain string in the array
    const firstString = arr.find((it) => typeof it === "string");
    if (typeof firstString === "string") return firstString;

    return "";
  }

  const rec = asRecord(input);
  if (rec && typeof rec["value"] === "string") return rec["value"] as string;

  return "";
}
