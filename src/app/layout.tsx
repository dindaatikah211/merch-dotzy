import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meraki — Merch Penuh Hati",
  description:
    "Stiker, gantungan kunci, pin, dan totebag yang didesain dengan sepenuh hati. Meraki — karena setiap karya layak untuk dirayakan.",
  keywords: ["merch", "stiker", "totebag", "pin", "gantungan kunci", "meraki"],
  openGraph: {
    title: "Meraki — Merch Penuh Hati",
    description: "Stiker, gantungan kunci, pin, dan totebag unik buatan lokal.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased font-body bg-neutral-50 text-neutral-900">
        {children}
      </body>
    </html>
  );
}
