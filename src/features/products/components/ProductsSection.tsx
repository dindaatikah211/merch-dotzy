"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import { products } from "../services";
import { FILTER_OPTIONS, CATEGORY_LABELS, ALL, type Filter } from "../contants";
import { formatPrice } from "../helpers";

function PixelStar({ color, size = 8 }: { color: string; size?: number }) {
  return (
    <svg width={size * 3} height={size * 3} viewBox="0 0 3 3" style={{ imageRendering: "pixelated" }} aria-hidden>
      <rect x="1" y="0" width="1" height="1" fill={color} />
      <rect x="0" y="1" width="3" height="1" fill={color} />
      <rect x="1" y="2" width="1" height="1" fill={color} />
    </svg>
  );
}

function PixelArrow() {
  return (
    <svg width="12" height="10" viewBox="0 0 3 2" style={{ imageRendering: "pixelated" }} aria-hidden>
      <rect x="0" y="0" width="2" height="1" fill="currentColor" />
      <rect x="1" y="0" width="1" height="2" fill="currentColor" />
    </svg>
  );
}

export function ProductsSection() {
  const [active, setActive] = useState<Filter>(ALL);
  const sectionRef = useRef<HTMLElement>(null);

  const filtered =
    active === ALL ? products : products.filter((p) => p.category === active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const cards = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [filtered]);

  return (
    <section id="products" ref={sectionRef} className="py-20 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-neutral-900 mb-4"
          style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.45rem", background: "var(--mint)" }}
        >
          <PixelStar color="var(--fg)" size={3} />
          KOLEKSI KAMI
          <PixelStar color="var(--fg)" size={3} />
        </div>
        <h2 className="font-display text-4xl md:text-5xl">
          Temukan <span className="gradient-text">Favoritmu</span>
        </h2>
        <p className="mt-3 text-neutral-500 text-base max-w-lg mx-auto">
          Setiap produk dibuat dengan detail penuh perhatian dan desain yang bikin senyum.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {FILTER_OPTIONS.map((opt) => (
          <Button
            key={opt.value}
            variant={active === opt.value ? "default" : "outline"}
            onClick={() => setActive(opt.value)}
            className="border-2 border-neutral-900 rounded-none transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0.5"
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "0.5rem",
              background: active === opt.value ? "var(--fg)" : "white",
              color: active === opt.value ? "white" : "var(--fg)",
            }}
          > {opt.label}
          </Button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product, i) => (
          <div
            key={product.id}
            className="animate-on-scroll bg-white overflow-hidden transition-all duration-150 hover:-translate-y-1 group"
            style={{
              border: "3px solid var(--fg)",
              transitionDelay: `${i * 80}ms`,
              boxShadow: "4px 4px 0 #1A1A1A",
            }}
          >
            {/* Image */}
            <div
              className="relative h-48 overflow-hidden border-b-2 border-neutral-900"
              style={{ background: product.color }}
            >
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <Badge
                className="absolute top-3 left-3 border-2 border-neutral-900 rounded-none"
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: "0.4rem",
                  background: product.color,
                  color: "var(--fg)",
                }}
              > {CATEGORY_LABELS[product.category]}
              </Badge>
            </div>

            {/* Body */}
            <div className="p-5">
              <h3 className="font-display text-xl mb-1">{product.name}</h3>
              <p className="text-sm text-neutral-500 mb-4 line-clamp-2">{product.description}</p>

              <div className="flex items-center justify-between">
                <span className="font-display text-xl" style={{ color: product.accentColor }}>
                  {formatPrice(product.price)}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-2 border-neutral-900 rounded-none transition-all duration-150 hover:bg-[var(--yellow)] hover:-translate-y-0.5 active:translate-y-0.5"
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: "0.45rem",
                  }}
                  asChild
                >
                  <Link href={`/products/${product.slug}`}>
                    DETAIL <PixelArrow />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}