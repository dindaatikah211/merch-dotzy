import { Palette, Heart, Zap, Globe } from "lucide-react";

export const VALUES = [
  {
    icon: Palette,
    title: "Desain Original",
    desc: "Semua desain dibuat sendiri dari nol — tidak ada yang copy-paste dari mana-mana.",
    color: "var(--yellow)",
  },
  {
    icon: Heart,
    title: "Dibuat dengan Hati",
    desc: "Meraki artinya mengerjakan sesuatu dengan sepenuh jiwa dan cinta. Itu filosofi kami.",
    color: "var(--coral)",
  },
  {
    icon: Zap,
    title: "Kualitas Terjamin",
    desc: "Material premium pilihan agar produkmu tahan lama dan tetap keren.",
    color: "var(--sky)",
  },
  {
    icon: Globe,
    title: "Untuk Semua Orang",
    desc: "Bukan hanya anak IT — siapa pun bisa menemukan produk yang cocok di sini.",
    color: "var(--mint)",
  },
] as const;