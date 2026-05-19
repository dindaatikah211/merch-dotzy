import { Sparkles, ShoppingBag, Shield, Heart } from "lucide-react";

export const VALUES = [
  {
    icon: Sparkles,
    title: "Desain Playful & Relatable",
    desc: "Desain kartun yang terinspirasi dari keseharian mahasiswa, lucu, estetik, dan nggak pasaran.",
    color: "var(--orange)",
  },
  {
    icon: ShoppingBag,
    title: "Sistem Pre-Order",
    desc: "Produksi sesuai pesanan, harga tetap terjangkau, dan setiap batch terasa eksklusif.",
    color: "#FFD93D",
  },
  {
    icon: Shield,
    title: "Quality Control",
    desc: "Setiap produk dicek dulu sebelum dikemas, hasil kerja sama dengan vendor terpercaya.",
    color: "var(--navy)",
  },
  {
    icon: Heart,
    title: "Dibuat dengan Hati",
    desc: "Dari desain sampai packaging, semua kami kerjain dengan detail dan semangat.",
    color: "#6BCB77",
  },
] as const;