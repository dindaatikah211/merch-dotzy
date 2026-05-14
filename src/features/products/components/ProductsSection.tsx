"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import { products } from "../services";
import { FILTER_OPTIONS, CATEGORY_LABELS, ALL, type Filter } from "../contants";
import { formatPrice } from "../helpers";

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
    <section id="products" ref={sectionRef} className="py-20 px-4" style={{ background: "var(--cream)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-4"
            style={{ background: "var(--navy)", color: "#fff" }}
          >
            Koleksi Kami
          </span>
          <h2 className="font-display text-4xl md:text-5xl" style={{ color: "var(--navy)", fontWeight: 700 }}>
            Temukan <span style={{ color: "var(--orange)" }}>Favoritmu</span>
          </h2>
          <p className="mt-3 text-base max-w-lg mx-auto" style={{ color: "var(--navy)", opacity: 0.6 }}>
            Setiap produk dibuat dengan detail penuh perhatian dan desain yang bikin senyum.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTER_OPTIONS.map((opt) => (
            <Button
              key={opt.value}
              onClick={() => setActive(opt.value)}
              className="rounded-full font-bold text-sm transition-all duration-150 hover:-translate-y-0.5"
              style={{
                background: active === opt.value ? "var(--navy)" : "white",
                color: active === opt.value ? "white" : "var(--navy)",
                border: "2px solid var(--navy)",
                boxShadow: active === opt.value ? "3px 3px 0 var(--orange)" : "2px 2px 0 var(--navy)",
                fontWeight: 700,
              }}
            >
              {opt.label}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className="animate-on-scroll bg-white rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 group"
              style={{
                border: "2.5px solid var(--navy)",
                transitionDelay: `${i * 80}ms`,
                boxShadow: "4px 4px 0 var(--navy)",
              }}
            >
              <div className="relative h-52 overflow-hidden" style={{ background: product.color }}>
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <Badge
                  className="absolute top-3 left-3 rounded-full font-bold text-xs border-0"
                  style={{ background: "var(--navy)", color: "white" }}
                >
                  {CATEGORY_LABELS[product.category]}
                </Badge>
              </div>

              <div className="p-5">
                <h3 className="font-display text-xl mb-1 font-bold" style={{ color: "var(--navy)" }}>
                  {product.name}
                </h3>
                <p className="text-sm mb-4 line-clamp-2" style={{ color: "var(--navy)", opacity: 0.6 }}>
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-bold" style={{ color: "var(--orange)" }}>
                    {formatPrice(product.price)}
                  </span>
                  <Button
                    size="sm"
                    className="rounded-full font-bold text-xs transition-all duration-150 hover:-translate-y-0.5"
                    style={{
                      background: "var(--orange)",
                      color: "white",
                      border: "2px solid var(--navy)",
                      boxShadow: "2px 2px 0 var(--navy)",
                      fontWeight: 700,
                    }}
                    asChild
                  >
                    <Link href={`/products/${product.slug}`}>
                      Detail <ArrowRight size={13} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}