import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/shared/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Dotzy",
  description: "Dotzy — karena setiap karya layak untuk dirayakan.",
  icons: {
    icon: "/images/Dot.png",
    apple: "/images/Dot.png",
  },
  openGraph: {
    title: "Dotzy",
    description: "Dotzy — karena setiap karya layak untuk dirayakan.",
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
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-body" style={{ background: "var(--cream)", color: "var(--navy)" }}>
        {children}
      </body>
    </html>
  );
}