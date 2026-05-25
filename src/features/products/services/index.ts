import { type Product } from "../types";

const GFORM_URL = "https://forms.gle/UD9PxZszKRNfnG1H6";

export const products: Product[] = [
    {
    id: "1",
    slug: "paket-1-dotzy",
    name: "Paket 1 Dotzy",
    category: "bundle",
    price: 85000,
    description: "Bundle lengkap semua produk Dotzy dalam satu paket.",
    longDescription:
      "Paket paling lengkap dari Dotzy! Satu paket buat kamu yang mau punya semua koleksi Dotzy dengan harga yang jauh lebih hemat dari beli satuan.",
    specs: [
      "Isi: Stiker Dot / Zy + Pin Set + Gantungan Kunci Dot / Zy + Totebag Canvas ",
      "Stiker: Vinyl premium waterproof",
      "Pin: Pin plastik",
      "Gantungan Kunci: Acrylic double-side, ±7 cm",
      "Totebag: Warna cream, canvas, 30x40 cm, resleting, dan tali panjang",
    ],
    color: "#FFD93D",
    accentColor: "#f14a1d",
    gformUrl: GFORM_URL,
    images: [
      "/images/product/paket 1.png",
      "/images/product/stiker.png",
      "/images/product/pin.png",
      "/images/product/ganci.png",
      "/images/product/totebag.png",
    ],
  },
  {
    id: "2",
    slug: "paket-2-dotzy",
    name: "Paket 2 Dotzy",
    category: "bundle",
    price: 55000,
    description: "Bundle product Dotzy yang berisi Totebag Canvas dan Stiker Dot / Zy.",
    longDescription:
      "Paket bundle berisi Totebag Canvas Dotzy dan Stiker Dot / Zy. Paket yang pas buat tampil beda ke kampus!",
    specs: [
      "Isi: Stiker Dot / Zy + Totebag Canvas ",
      "Stiker: Vinyl premium waterproof",
      "Totebag: Warna cream, canvas, 30x40 cm, resleting, dan tali panjang",
    ],
    color: "#4D96FF",
    accentColor: "#f14a1d",
    gformUrl: GFORM_URL,
    images: [
      "/images/product/paket 2.png",
      "/images/product/totebag.png",
      "/images/product/stiker.png",
    ],
  },
  {
    id: "3",
    slug: "paket-3-dotzy",
    name: "Paket 3 Dotzy",
    category: "bundle",
    price: 35000,
    description: "Bundle hemat product Dotzy yang berisi Stiker Dot / Zy + Pin Set + Gantungan Kunci Dot / Zy.",
    longDescription:
      "Paket bundle berisi Stiker Dot / Zy, Pin Set, dan Gantungan Kunci Dot / Zy. Tiga item sekaligus buat kamu yang mau koleksi product Dotzy favoritmu. Harga spesial, kualitas tetap oke!",
    specs: [
      "Isi: Stiker Dot / Zy + Pin Set + Gantungan Kunci Dot / Zy",
      "Stiker: Vinyl premium waterproof",
      "Pin: Pin plastik",
      "Gantungan Kunci: Acrylic double-side, ±7 cm",
    ],
    color: "#6BCB77",
    accentColor: "#2f318b",
    gformUrl: GFORM_URL,
    images: [
      "/images/product/paket 3.png",
      "/images/product/stiker.png",
      "/images/product/pin.png",
      "/images/product/ganci.png",
    ],
  },
  {
    id: "4",
    slug: "paket-4-dotzy",
    name: "Paket 4 Dotzy",
    category: "bundle",
    price: 28000,
    description: "Bundle hemat product Dotzy yang berisi Pin Set + Gantungan Kunci Dot / Zy.",
    longDescription:
      "Paket bundle hemat berisi Pin Set Dot / Zy dan Gantungan Kunci Dot / Zy — dua item favorit dalam satu paket. Cocok buat kamu yang mau tampil cute tanpa harus beli satuan. Lebih hemat, lebih seru!",
    specs: [
      "Isi: Pin Set Dot / Zy + Gantungan Kunci Dot / Zy",
      "Pin: Pin plastik",
      "Gantungan Kunci: Acrylic double-side, ±7 cm",
    ],
    color: "#f14a1d",
    accentColor: "#2f318b",
    gformUrl: GFORM_URL,
    images: [
      "/images/product/paket 4.png",
      "/images/product/pin.png",
      "/images/product/ganci.png",
    ],
  },
  {
    id: "5",
    slug: "totebag-canvas-dotzy",
    name: "Totebag Canvas Dotzy",
    category: "totebag",
    price: 50000,
    description: "Totebag canvas tebal dengan desain eksklusif karakter Dotzy.",
    longDescription:
      "Totebag canvas dengan sablon desain eksklusif karakter Dotzy. Cocok untuk kuliah, hangout, atau kegiatan sehari-hari.",
    specs: [
      "Bahan: Canvas",
      "Ukuran: 30x40 cm",
      "Bisa menampung buku, laptop 14 inch, atau belanjaan harian",
      "Tali panjang yang nyaman di bahu",
      "Terdapat resleting",
    ],
    color: "#4D96FF",
    accentColor: "#f14a1d",
    gformUrl: GFORM_URL,
    images: [
      "/images/product/totebag.png",
    ],
  },
  {
    id: "6",
    slug: "gantungan-kunci-dotzy",
    name: "Gantungan Kunci Dotzy",
    category: "gantungan-kunci",
    price: 15000,
    description: "Gantungan kunci acrylic karakter Dot & Zy yang lucu.",
    longDescription:
      "Gantungan kunci acrylic dua sisi dengan desain eksklusif karakter Dotzy. Tersedia pilihan karakter Dot (cloud bear) dan Zy (cloud bunny).",
    specs: [
      "Bahan: Acrylic double-side",
      "Ukuran: ±7 cm",
      "Tersedia varian: Dot & Zy",
    ],
    color: "#6BCB77",
    accentColor: "#2f318b",
    gformUrl: GFORM_URL,
    images: [
      "/images/product/ganci.png",
      "/images/product/ganci dot.png",
      "/images/product/ganci zy.png",
    ],
    variants: [
      { label: "Ganci Dot", image: "/images/product/ganci dot.png" },
      { label: "Ganci Zy", image: "/images/product/ganci zy.png" },
    ],
  },
  {
    id: "7",
    slug: "pin-set-dotzy",
    name: "Pin Set Dotzy",
    category: "pin",
    price: 15000,
    description: "Set pin button karakter Dotzy, cocok untuk aksesoris.",
    longDescription:
      "Set pin button dengan desain cute & playful karakter Dotzy. Hadir dalam set lengkap karakter Dot dan Zy.",
    specs: [
      "Bahan: Plastik",
      "Desain karakter Dotzy original",
      "Jarum pengunci aman",
    ],
    color: "#f14a1d",
    accentColor: "#2f318b",
    gformUrl: GFORM_URL,
    images: [
      "/images/product/pin.png",
    ],
  },
  {
    id: "8",
    slug: "stiker-pack-dotzy",
    name: "Stiker Pack Dotzy",
    category: "stiker",
    price: 10000,
    description: "Pack stiker vinyl waterproof motif karakter Dot / Zy yang cute.",
    longDescription:
      "Dapatkan pack stiker vinyl premium bergambar karakter Dotzy — Dot dan Zy! Tahan air dan sinar UV, cocok untuk laptop, tumbler, notebook, atau mana saja yang kamu mau.",
    specs: [
      "Bahan: Vinyl waterproof",
      "Desain karakter Dotzy original",
      "Tersedia varian: Dot & Zy",
    ],
    color: "#FFD93D",
    accentColor: "#f14a1d",
    gformUrl: GFORM_URL,
    images: [
      "/images/product/stiker.png",
      "/images/product/stiker dot.png",
      "/images/product/stiker zy.png",
    ],
    variants: [
      { label: "Stiker Dot", image: "/images/product/stiker dot.png" },
      { label: "Stiker Zy", image: "/images/product/stiker zy.png" },
    ],
  },
];