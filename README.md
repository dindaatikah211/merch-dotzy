# Meraki ✿ — Merch Penuh Hati

Website merch untuk produk stiker, gantungan kunci, pin, dan totebag.

## 🚀 Quick Start

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

## 🛠 Tech Stack

- **Next.js 15** — App Router
- **TypeScript**
- **Tailwind CSS**
- **Anime.js** — animasi
- **Lucide React** — icons
- **Shadcn UI** — komponen UI

## 📁 Struktur Folder

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Halaman utama
│   ├── globals.css         # Global styles
│   └── products/[slug]/    # Dynamic product pages
├── features/               # Feature-based modules
│   ├── home/               # Sections: Hero, Marquee, About, FAQ, CTA
│   └── products/           # Product grid, detail, data
└── shared/                 # Reusable components & utils
    ├── components/
    │   └── commons/
    │       ├── navbar/     # Navbar component
    │       └── Footer.tsx
    └── lib/
        └── utils.ts        # cn() utility
```

## 🔧 Yang Perlu Diganti

1. **`src/shared/components/commons/navbar/Navbar.tsx`**
   - `INSTAGRAM_URL` → link Instagram kamu
   - `WHATSAPP_URL` → link WhatsApp kamu (format: `https://wa.me/628XXXXXXXXXX`)

2. **`src/shared/components/commons/Footer.tsx`**
   - Sama seperti Navbar — ganti URL sosmed

3. **`src/features/home/CtaSection.tsx`**
   - Ganti URL sosmed

4. **`src/features/products/products.data.ts`**
   - Ganti `gformUrl` di setiap produk dengan link Google Form kamu
   - Tambah/edit produk sesuai kebutuhan
   - Ganti placeholder images dengan foto produk asli

## 📦 Deploy ke Vercel

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

Atau push ke GitHub dan connect repo di [vercel.com](https://vercel.com).

## 🎨 Customisasi

- **Warna brand**: Edit variabel di `src/app/globals.css` (`:root` section)
- **Nama brand**: Cari & replace `Meraki` di semua file
- **Font**: Ganti Google Fonts import di `globals.css` dan update `tailwind.config.ts`
- **Produk**: Edit `src/features/products/products.data.ts`
