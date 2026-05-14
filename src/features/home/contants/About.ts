import { Palette, Heart, Zap, Globe } from "lucide-react";

export const VALUES = [
  {
    icon: Palette,
    title: "Desain Original",
    desc: "Semua desain dibuat sendiri dari nol — tidak ada yang copy-paste dari mana-mana.",
    color: "var(--orange)",
  },
  {
    icon: Heart,
    title: "Dibuat dengan Hati",
    desc: "Dotzy artinya mengerjakan sesuatu dengan sepenuh jiwa dan cinta. Itu filosofi kami.",
    color: "#FFD93D",
  },
  {
    icon: Zap,
    title: "Kualitas Terjamin",
    desc: "Material premium pilihan agar produkmu tahan lama dan tetap keren.",
    color: "var(--navy)",
  },
  {
    icon: Globe,
    title: "Untuk Semua Orang",
    desc: "Bukan hanya anak IT — siapa pun bisa menemukan produk yang cocok di sini.",
    color: "#6BCB77",
  },
] as const;