"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  products,
  categoryLabels,
  formatPrice,
  type ProductCategory,
} from "./products.data";

const ALL = "all" as const;
type Filter = typeof ALL | ProductCategory;

const filterOptions: { value: Filter; label: string; emoji: string }[] = [
  { value: ALL,              label: "Semua",          emoji: "🎨" },
  { value: "stiker",         label: "Stiker",          emoji: "✨" },
  { value: "gantungan-kunci",label: "Gantungan Kunci", emoji: "🔑" },
  { value: "pin",            label: "Pin",             emoji: "📌" },
  { value: "totebag",        label: "Totebag",         emoji: "👜" },
];

export function ProductsSection() {
  const [active, setActive] = useState<Filter>(ALL);
  const sectionRef = useRef<HTMLElement>(null);

  const filtered =
    active === ALL ? products : products.filter((p) => p.category === active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
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
        <span className="section-tag">Koleksi Kami</span>
        <h2 className="font-display text-4xl md:text-5xl">
          Temukan{" "}
          <span className="gradient-text">Favoritmu</span>
        </h2>
        <p className="mt-3 text-neutral-500 text-lg max-w-lg mx-auto">
          Setiap produk dibuat dengan detail penuh perhatian dan desain yang bikin senyum.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {filterOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setActive(opt.value)}
            className={`px-5 py-2 rounded-full border-2 border-neutral-900 font-body font-bold text-sm transition-all duration-200 ${
              active === opt.value
                ? "bg-neutral-900 text-white shadow-[3px_3px_0_var(--coral)]"
                : "bg-white hover:bg-[var(--yellow)]"
            }`}
          >
            {opt.emoji} {opt.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product, i) => (
          <div
            key={product.id}
            className="animate-on-scroll sticker-card bg-white rounded-3xl border-3 border-neutral-900 overflow-hidden"
            style={{
              border: "3px solid var(--fg)",
              transitionDelay: `${i * 80}ms`,
            }}
          >
            {/* Image */}
            <div
              className="relative h-48 overflow-hidden"
              style={{ background: product.color }}
            >
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <span
                className="absolute top-3 right-3 text-3xl"
                aria-hidden="true"
              >
                {product.emoji}
              </span>
            </div>

            {/* Body */}
            <div className="p-5">
              <span
                className="text-xs font-bold px-2 py-1 rounded-full border border-neutral-300 mb-2 inline-block"
                style={{ background: product.color + "55" }}
              >
                {categoryLabels[product.category]}
              </span>
              <h3 className="font-display text-xl mb-1">{product.name}</h3>
              <p className="text-sm text-neutral-500 mb-4 line-clamp-2">
                {product.description}
              </p>

              <div className="flex items-center justify-between">
                <span
                  className="font-display text-xl"
                  style={{ color: product.accentColor }}
                >
                  {formatPrice(product.price)}
                </span>
                <Link
                  href={`/products/${product.slug}`}
                  className="flex items-center gap-1 text-sm font-bold hover:underline"
                  style={{ color: "var(--coral)" }}
                >
                  Detail <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
