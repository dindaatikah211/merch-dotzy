export type ProductCategory = "stiker" | "gantungan-kunci" | "pin" | "totebag" | "bundle";

export interface ProductVariant {
  label: string;
  image: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  description: string;
  longDescription: string;
  specs: string[];
  color: string;
  accentColor: string;
  gformUrl: string;
  images: string[];
  variants?: ProductVariant[];
}