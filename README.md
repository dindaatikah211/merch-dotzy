# Dotzy ✿ — Merch Penuh Hati

Website merch untuk produk stiker, gantungan kunci, pin, dan totebag dengan pixel arcade style.

## Quick Start

### Prerequisites
- Node.js 18+
- pnpm

### Install & Run

```bash
# Install dependencies
pnpm install

# Jalankan development server
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Tech Stack

- **Next.js 16** — App Router
- **TypeScript**
- **Tailwind CSS**
- **Anime.js** — animasi section & hero
- **Lucide React** — icons
- **Shadcn UI** — komponen UI (Button, Badge, Sheet, Accordion, Card, Separator)
- **Press Start 2P** — pixel arcade font

## Struktur Folder

```
src/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Halaman utama
│   ├── globals.css             # Global styles & CSS variables
│   └── products/[slug]/        # Dynamic product pages
├── features/                   # Feature-based modules
│   ├── home/                   # Hero, Marquee, About, FAQ, CTA
│   │   ├── components/
│   │   └── contants/
│   └── products/               # Product grid, detail, data
│       ├── components/
│       ├── contants/
│       ├── helpers/
│       ├── services/
│       └── types/
└── shared/                     # Reusable components & utils
    ├── components/
    │   ├── commons/
    │   │   ├── footer/
    │   │   │   └── Footer.tsx
    │   │   └── navbar/
    │   │       ├── components/
    │   │       │   └── Navbar.tsx
    │   │       └── contants/
    │   │           └── index.ts
    │   └── ui/                 # Shadcn UI components
    │       ├── accordion.tsx
    │       ├── badge.tsx
    │       ├── button.tsx
    │       ├── card.tsx
    │       ├── separator.tsx
    │       └── sheet.tsx
    └── lib/
        └── utils.ts            # cn() utility
```

##  Deploy ke Vercel

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

Atau push ke GitHub dan connect repo di [vercel.com](https://vercel.com).