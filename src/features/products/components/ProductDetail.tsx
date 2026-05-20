"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, Check, ChevronRight } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import { Separator } from "@/shared/components/ui/separator";
import { type Product } from "../types";
import { formatPrice } from "../helpers";

export function ProductDetail({ product }: { product: Product }) {
  const [activeImg, setActiveImg] = useState(0);
  const [activeVariant, setActiveVariant] = useState<number | null>(
    product.variants ? 0 : null
  );

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

  const handleImgClick = (i: number) => {
    setActiveImg(i);
    if (product.variants) {
      const variantIdx = product.variants.findIndex(
        (v) => v.image === product.images[i]
      );
      setActiveVariant(variantIdx !== -1 ? variantIdx : null);
    }
  };

  const handleVariantClick = (i: number) => {
    setActiveVariant(i);
    if (product.variants) {
      const imgIdx = product.images.indexOf(product.variants[i].image);
      if (imgIdx !== -1) setActiveImg(imgIdx);
    }
  };

  const activeLabel =
    product.variants && activeVariant !== null
      ? product.variants[activeVariant].label
      : null;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12" style={{ background: "var(--cream)", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm mb-8 product-content opacity-0">
        <Link href="/" className="font-medium transition-colors hover:text-[var(--orange)]" style={{ color: "var(--navy)", opacity: 0.6 }}>
          Beranda
        </Link>
        <ChevronRight size={14} style={{ color: "var(--navy)", opacity: 0.4 }} />
        <Link href="/#products" className="font-medium transition-colors hover:text-[var(--orange)]" style={{ color: "var(--navy)", opacity: 0.6 }}>
          Produk
        </Link>
        <ChevronRight size={14} style={{ color: "var(--navy)", opacity: 0.4 }} />
        <span className="font-bold" style={{ color: "var(--navy)" }}>{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Images */}
        <div className="product-content opacity-0">
          {/* Gambar utama */}
          <div className="relative mb-3">
            <div
              className="relative aspect-square overflow-hidden rounded-2xl"
              style={{ background: product.color, border: "3px solid var(--navy)", boxShadow: "6px 6px 0 var(--navy)" }}
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
            {/* Label selalu tampil di pojok bawah gambar utama */}
            <div
              className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-bold"
              style={{
                background: "var(--navy)",
                color: "white",
                border: "2px solid white",
              }}
            >
              {activeLabel ?? product.name}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 flex-wrap">
            {product.images.map((img, i) => {
              const thumbVariant = product.variants?.find((v) => v.image === img);
              const thumbLabel = thumbVariant ? thumbVariant.label : product.name;
              return (
                <div key={i} className="flex flex-col items-center gap-1">
                  <button
                    onClick={() => handleImgClick(i)}
                    className="relative w-20 h-20 overflow-hidden rounded-xl transition-all duration-150 hover:-translate-y-0.5"
                    style={{
                      border: activeImg === i ? "2.5px solid var(--navy)" : "2px solid #D1D5DB",
                      boxShadow: activeImg === i ? "3px 3px 0 var(--orange)" : "none",
                      opacity: activeImg === i ? 1 : 0.6,
                    }}
                  >
                    <Image src={img} alt={thumbLabel} fill className="object-cover" sizes="80px" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-4 product-content opacity-0">
          <Badge
            className="w-fit rounded-full font-bold text-xs border-0"
            style={{ background: "var(--navy)", color: "white" }}
          >
            {product.category.replace("-", " ")}
          </Badge>

          <h1 className="font-display text-3xl font-bold" style={{ color: "var(--navy)" }}>
            {product.name}
            {activeLabel && (
              <span style={{ color: "var(--orange)" }}> — {activeLabel}</span>
            )}
          </h1>

          {/* Price */}
          <div
            className="inline-flex items-center px-5 py-2.5 rounded-full w-fit font-bold"
            style={{
              background: "var(--orange)",
              color: "white",
              border: "2.5px solid var(--navy)",
              boxShadow: "3px 3px 0 var(--navy)",
            }}
          >
            <span className="font-display text-xl">{formatPrice(product.price)}</span>
          </div>

          {/* Variants */}
          {product.variants && (
            <div>
              <p className="font-bold text-sm mb-2 uppercase tracking-wider" style={{ color: "var(--navy)" }}>
                Pilih Varian
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => handleVariantClick(i)}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl font-bold text-sm transition-all duration-150 hover:-translate-y-0.5"
                    style={{
                      border: activeVariant === i ? "2.5px solid var(--navy)" : "2px solid #D1D5DB",
                      boxShadow: activeVariant === i ? "3px 3px 0 var(--orange)" : "none",
                      background: activeVariant === i ? "var(--navy)" : "white",
                      color: activeVariant === i ? "white" : "var(--navy)",
                    }}
                  >
                    <div className="relative w-6 h-6 rounded overflow-hidden shrink-0">
                      <Image src={v.image} alt={v.label} fill className="object-cover" sizes="24px" />
                    </div>
                    {v.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <p className="leading-relaxed" style={{ color: "var(--navy)", opacity: 0.7 }}>
            {product.longDescription}
          </p>

          <Separator style={{ background: "var(--navy)", opacity: 0.1 }} />

          {/* Specs */}
          <div
            className="rounded-2xl p-4"
            style={{ background: "white", border: "2px solid var(--navy)", boxShadow: "3px 3px 0 var(--navy)" }}
          >
            <p className="font-bold text-sm mb-3 uppercase tracking-wider" style={{ color: "var(--navy)" }}>
              Spesifikasi
            </p>
            <ul className="flex flex-col gap-2">
              {product.specs.map((spec, i) => (
                <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "var(--navy)", opacity: 0.8 }}>
                  <Check size={14} style={{ color: "var(--orange)" }} className="shrink-0" />
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 rounded-full font-bold transition-all duration-150 hover:-translate-y-0.5"
              style={{
                border: "2.5px solid var(--navy)",
                color: "var(--navy)",
                boxShadow: "3px 3px 0 var(--navy)",
                fontWeight: 700,
              }}
              asChild
            >
              <Link href="/">
                <ArrowLeft size={15} />
                Kembali
              </Link>
            </Button>

            <Button
              className="flex-1 rounded-full font-bold text-white transition-all duration-150 hover:-translate-y-0.5"
              style={{
                background: "var(--orange)",
                border: "2.5px solid var(--navy)",
                boxShadow: "3px 3px 0 var(--navy)",
                fontWeight: 700,
              }}
              asChild
            >
              <a href={product.gformUrl} target="_blank" rel="noopener noreferrer">
                <ShoppingBag size={15} />
                Pesan Sekarang
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}