export type ProductCategory = "stiker" | "gantungan-kunci" | "pin" | "totebag";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  description: string;
  longDescription: string;
  specs: string[];
  emoji: string;
  color: string;
  accentColor: string;
  gformUrl: string;
  images: string[];
}