import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/shared/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Dotzy",
  description:
    "Stiker, gantungan kunci, pin, dan totebag yang didesain dengan sepenuh hati. Dotzy — karena setiap karya layak untuk dirayakan.",
  keywords: ["merch", "stiker", "totebag", "pin", "gantungan kunci", "dotzy"],
  openGraph: {
    title: "Dotzy",
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
    <html lang="id" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-body bg-neutral-50 text-neutral-900">
        {children}
      </body>
    </html>
  );
}