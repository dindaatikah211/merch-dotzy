"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import { Separator } from "@/shared/components/ui/separator";
import { type Product } from "../types";
import { formatPrice } from "../helpers";

function PixelCheck({ color }: { color: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 3 3" style={{ imageRendering: "pixelated" }} aria-hidden>
      <rect x="0" y="2" width="1" height="1" fill={color} />
      <rect x="1" y="1" width="1" height="1" fill={color} />
      <rect x="2" y="0" width="1" height="1" fill={color} />
    </svg>
  );
}

export function ProductDetail({ product }: { product: Product }) {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    import("animejs").then(({ default: anime }) => {
      anime({
        targets: ".product-content",
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 700,
        easing: "easeOutExpo",
        delay: anime.stagger(100),
      });
    });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Pixel breadcrumb */}
      <nav
        className="flex items-center gap-1 mb-8 product-content opacity-0"
        style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.45rem" }}
      >
        <Link href="/" className="text-neutral-400 hover:text-[var(--coral)] transition-colors">BERANDA</Link>
        <span className="text-neutral-300 mx-1">▸</span>
        <Link href="/#products" className="text-neutral-400 hover:text-[var(--coral)] transition-colors">PRODUK</Link>
        <span className="text-neutral-300 mx-1">▸</span>
        <span className="text-neutral-700 font-bold">{product.name.toUpperCase()}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Images */}
        <div className="product-content opacity-0">
          <div
            className="relative aspect-square mb-3 overflow-hidden"
            style={{ border: "4px solid var(--fg)", background: product.color, boxShadow: "6px 6px 0 #1A1A1A" }}
          >
            <Image
              src={product.images[activeImg]}
              alt={product.name}
              fill
              className="object-cover transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="flex gap-2">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className="relative w-20 h-20 overflow-hidden border-2 transition-all duration-150 hover:-translate-y-0.5"
                style={{
                  borderColor: activeImg === i ? "var(--fg)" : "#D1D5DB",
                  boxShadow: activeImg === i ? "3px 3px 0 var(--coral)" : "2px 2px 0 #D1D5DB",
                  opacity: activeImg === i ? 1 : 0.6,
                }}
              >
                <Image src={img} alt="" fill className="object-cover" sizes="80px" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-4 product-content opacity-0">
          <Badge
            className="w-fit border-2 border-neutral-900 rounded-none"
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "0.45rem",
              background: product.color,
              color: "var(--fg)",
            }}
          > {product.category.replace("-", " ").toUpperCase()}
          </Badge>

          <h1 className="font-display text-4xl">{product.name}</h1>

          {/* Price */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-neutral-900 w-fit"
            style={{ background: product.accentColor }}
          >
            <span
              className="text-white font-bold"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.8rem" }}
            >
              {formatPrice(product.price)}
            </span>
          </div>

          <p className="text-neutral-600 leading-relaxed">{product.longDescription}</p>

          <Separator className="bg-neutral-200" />

          {/* Specs */}
          <div className="border-2 border-neutral-900 p-4" >
            <p
              className="mb-3 border-b-2 border-neutral-900 pb-2"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.5rem" }}
            >
              ▸ SPESIFIKASI
            </p>
            <ul className="flex flex-col gap-2">
              {product.specs.map((spec, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <PixelCheck color={product.accentColor} />
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 border-2 border-neutral-900 rounded-none transition-all duration-150 hover:bg-[var(--yellow)] hover:-translate-y-0.5 active:translate-y-0.5"
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "0.5rem",
              }}
              asChild
            >
              <Link href="/">
                <ArrowLeft size={14} />
                KEMBALI
              </Link>
            </Button>

            <Button
              className="flex-1 border-2 border-neutral-900 rounded-none text-white transition-all duration-150 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0.5"
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "0.5rem",
                background: "var(--coral)",
              }}
              asChild
            >
              <a href={product.gformUrl} target="_blank" rel="noopener noreferrer">
                <ShoppingBag size={14} />
                PESAN
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}