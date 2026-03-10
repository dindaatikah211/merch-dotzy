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
  color: string;      // bg color token
  accentColor: string;
  gformUrl: string;   // replace with your Google Form URL
  images: string[];
}

export const products: Product[] = [
  {
    id: "1",
    slug: "stiker-aesthetic-pack",
    name: "Stiker Aesthetic Pack",
    category: "stiker",
    price: 15000,
    description: "Pack 5 stiker vinyl waterproof motif aesthetic kekinian.",
    longDescription:
      "Dapatkan pack 5 lembar stiker vinyl premium yang tahan air dan sinar UV. Desain aesthetic yang cocok untuk laptop, tumbler, notebook, atau mana saja yang kamu mau. Dicetak dengan tinta berkualitas tinggi agar warna tetap cerah.",
    specs: [
      "Bahan: Vinyl premium waterproof",
      "Ukuran: 5–8 cm per stiker",
      "Tahan air & UV",
      "Isi: 5 stiker per pack",
    ],
    emoji: "✨",
    color: "#FFD93D",
    accentColor: "#FF6B6B",
    gformUrl: "https://forms.gle/REPLACE_WITH_YOUR_FORM",
    images: [
      "https://placehold.co/600x600/FFD93D/1A1A1A?text=Stiker+Pack",
      "https://placehold.co/600x600/FF6B6B/ffffff?text=Detail+1",
      "https://placehold.co/600x600/C77DFF/ffffff?text=Detail+2",
    ],
  },
  {
    id: "2",
    slug: "gantungan-kunci-acrylic",
    name: "Gantungan Kunci Acrylic",
    category: "gantungan-kunci",
    price: 20000,
    description: "Gantungan kunci acrylic custom desain lucu & unik.",
    longDescription:
      "Gantungan kunci acrylic dua sisi dengan desain eksklusif Meraki. Material acrylic tebal 3mm, transparan dan jernih. Dilengkapi ring logam anti karat. Pas buat kunci, tas, atau ransel kamu!",
    specs: [
      "Bahan: Acrylic 3mm double-side",
      "Ukuran: ±5x5 cm",
      "Ring logam anti karat",
      "Full colour printing",
    ],
    emoji: "🔑",
    color: "#6BCB77",
    accentColor: "#4D96FF",
    gformUrl: "https://forms.gle/REPLACE_WITH_YOUR_FORM",
    images: [
      "https://placehold.co/600x600/6BCB77/1A1A1A?text=Gantungan+Kunci",
      "https://placehold.co/600x600/4D96FF/ffffff?text=Detail+1",
      "https://placehold.co/600x600/FFD93D/1A1A1A?text=Detail+2",
    ],
  },
  {
    id: "3",
    slug: "pin-button-set",
    name: "Pin Button Set",
    category: "pin",
    price: 12000,
    description: "Set 3 pin button motif cute, cocok untuk jaket & tas.",
    longDescription:
      "Set 3 buah pin button dengan desain cute & playful dari Meraki. Terbuat dari metal dengan kaca depan glossy. Ukuran standar 44mm pas banget ditempel di jaket jeans, tas, atau topi kamu.",
    specs: [
      "Bahan: Metal + kaca glossy",
      "Diameter: 44mm",
      "Isi: 3 pin per set",
      "Jarum pengunci aman",
    ],
    emoji: "📌",
    color: "#FF6B6B",
    accentColor: "#C77DFF",
    gformUrl: "https://forms.gle/REPLACE_WITH_YOUR_FORM",
    images: [
      "https://placehold.co/600x600/FF6B6B/ffffff?text=Pin+Set",
      "https://placehold.co/600x600/C77DFF/ffffff?text=Detail+1",
      "https://placehold.co/600x600/6BCB77/1A1A1A?text=Detail+2",
    ],
  },
  {
    id: "4",
    slug: "totebag-canvas-meraki",
    name: "Totebag Canvas Meraki",
    category: "totebag",
    price: 65000,
    description: "Totebag canvas tebal dengan desain eksklusif Meraki.",
    longDescription:
      "Totebag canvas premium 12oz dengan sablon desain eksklusif Meraki. Kuat menampung buku, laptop tipis, atau belanjaan harian. Tali panjang yang nyaman di bahu. Cocok untuk kuliah, hangout, atau kegiatan sehari-hari.",
    specs: [
      "Bahan: Canvas 12oz",
      "Ukuran: 38x42 cm",
      "Tali panjang: 65 cm",
      "Sablon: Water-based eco ink",
    ],
    emoji: "👜",
    color: "#4D96FF",
    accentColor: "#FFB347",
    gformUrl: "https://forms.gle/REPLACE_WITH_YOUR_FORM",
    images: [
      "https://placehold.co/600x600/4D96FF/ffffff?text=Totebag",
      "https://placehold.co/600x600/FFB347/1A1A1A?text=Detail+1",
      "https://placehold.co/600x600/FF6B6B/ffffff?text=Detail+2",
    ],
  },
  {
    id: "5",
    slug: "stiker-hologram-pack",
    name: "Stiker Hologram Pack",
    category: "stiker",
    price: 22000,
    description: "Pack 4 stiker hologram shimmer efek pelangi yang keren.",
    longDescription:
      "Stiker hologram premium dengan efek rainbow shimmer yang eye-catching. Setiap stiker terlihat berbeda tergantung sudut pandang cahaya. Pack isi 4 stiker ukuran besar, perfect buat laptop atau tumbler.",
    specs: [
      "Bahan: Vinyl hologram premium",
      "Ukuran: 8–10 cm per stiker",
      "Efek rainbow shimmer",
      "Isi: 4 stiker per pack",
    ],
    emoji: "🌈",
    color: "#C77DFF",
    accentColor: "#FFD93D",
    gformUrl: "https://forms.gle/REPLACE_WITH_YOUR_FORM",
    images: [
      "https://placehold.co/600x600/C77DFF/ffffff?text=Hologram+Pack",
      "https://placehold.co/600x600/FFD93D/1A1A1A?text=Detail+1",
      "https://placehold.co/600x600/4D96FF/ffffff?text=Detail+2",
    ],
  },
  {
    id: "6",
    slug: "pin-enamel-exclusive",
    name: "Pin Enamel Exclusive",
    category: "pin",
    price: 35000,
    description: "Pin enamel hard premium edisi eksklusif, limited stock!",
    longDescription:
      "Pin enamel hard premium dengan detail warna yang tajam dan tahan lama. Finishing glossy dengan outline silver/gold. Edisi terbatas, stok terbatas! Cocok untuk kolektor atau hadiah spesial.",
    specs: [
      "Bahan: Hard enamel premium",
      "Ukuran: 38mm",
      "Finishing: Glossy + silver outline",
      "Limited edition",
    ],
    emoji: "⭐",
    color: "#FFB347",
    accentColor: "#FF6B6B",
    gformUrl: "https://forms.gle/REPLACE_WITH_YOUR_FORM",
    images: [
      "https://placehold.co/600x600/FFB347/1A1A1A?text=Enamel+Pin",
      "https://placehold.co/600x600/FF6B6B/ffffff?text=Detail+1",
      "https://placehold.co/600x600/C77DFF/ffffff?text=Detail+2",
    ],
  },
];

export const categoryLabels: Record<ProductCategory, string> = {
  stiker: "Stiker",
  "gantungan-kunci": "Gantungan Kunci",
  pin: "Pin",
  totebag: "Totebag",
};

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}
