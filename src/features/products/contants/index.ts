import { type ProductCategory } from "../types";

export const ALL = "all" as const;
export type Filter = typeof ALL | ProductCategory;

export const FILTER_OPTIONS: { value: Filter; label: string; }[] = [
  { value: ALL, label: "Semua" },
  { value: "stiker", label: "Stiker" },
  { value: "gantungan-kunci", label: "Gantungan Kunci" },
  { value: "pin", label: "Pin" },
  { value: "totebag", label: "Totebag" },
];

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  stiker: "Stiker",
  "gantungan-kunci": "Gantungan Kunci",
  pin: "Pin",
  totebag: "Totebag",
};