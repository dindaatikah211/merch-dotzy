import { type ProductCategory } from "../types";

export const ALL = "all" as const;
export type Filter = typeof ALL | ProductCategory;

export const FILTER_OPTIONS: { value: Filter; label: string; emoji: string }[] = [
  { value: ALL,               label: "Semua",          emoji: "🎨" },
  { value: "stiker",          label: "Stiker",          emoji: "✨" },
  { value: "gantungan-kunci", label: "Gantungan Kunci", emoji: "🔑" },
  { value: "pin",             label: "Pin",             emoji: "📌" },
  { value: "totebag",         label: "Totebag",         emoji: "👜" },
];

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  stiker: "Stiker",
  "gantungan-kunci": "Gantungan Kunci",
  pin: "Pin",
  totebag: "Totebag",
};