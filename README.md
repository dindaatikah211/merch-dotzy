# Dotzy Merch 🐰

Brand merchandise lokal dengan desain kartun playful yang relatable buat kehidupan mahasiswa — stiker, pin, gantungan kunci, dan totebag.

## Quick Start

### Prerequisites
- Node.js 18+
- pnpm

### Install & Run

\```bash
# Install dependencies
pnpm install

# Jalankan development server
pnpm dev
\```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Tech Stack

- **Next.js** — App Router
- **TypeScript**
- **Tailwind CSS**
- **Anime.js** — animasi section & hero
- **Lucide React** — icons
- **Shadcn UI** — Button, Badge, Sheet, Accordion, Card, Separator

## Struktur Folder

\```
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
\```

## Deploy ke Vercel

\```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel
\```

Atau push ke GitHub dan connect repo di [vercel.com](https://vercel.com).

## Tim

Dibuat dengan ❤️ oleh tim mahasiswa D3 Teknik Informatika — Politeknik Negeri Semarang.

| Nama | NIM |
|------|-----|
| Andra Sakti Pragata | 3.34.23.1.04 |
| Dinda Atikah Ghaisani | 3.34.23.1.09 |
| Frighyta Listhira Antoino | 3.34.23.1.12 |
| Naufal Mawar Fadhiilah | 3.34.23.1.18 |