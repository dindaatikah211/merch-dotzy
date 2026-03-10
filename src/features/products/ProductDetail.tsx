"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, Check, ChevronRight } from "lucide-react";
import { type Product, formatPrice } from "./products.data";

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
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-sm text-neutral-400 mb-8 product-content opacity-0">
        <Link href="/" className="hover:text-[var(--coral)]">Beranda</Link>
        <ChevronRight size={14} />
        <Link href="/#products" className="hover:text-[var(--coral)]">Produk</Link>
        <ChevronRight size={14} />
        <span className="text-neutral-700 font-semibold">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Images */}
        <div className="product-content opacity-0">
          <div
            className="relative rounded-3xl overflow-hidden border-3 aspect-square mb-3"
            style={{ border: "3px solid var(--fg)", background: product.color }}
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
                className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                  activeImg === i
                    ? "border-neutral-900 shadow-[3px_3px_0_var(--coral)]"
                    : "border-neutral-300 opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" sizes="80px" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-4 product-content opacity-0">
          <span
            className="section-tag w-fit"
            style={{ background: product.color }}
          >
            {product.emoji} {product.category.replace("-", " ")}
          </span>

          <h1 className="font-display text-4xl">{product.name}</h1>

          <p
            className="font-display text-3xl"
            style={{ color: product.accentColor }}
          >
            {formatPrice(product.price)}
          </p>

          <p className="text-neutral-600 leading-relaxed">
            {product.longDescription}
          </p>

          {/* Specs */}
          <div className="bg-neutral-100 rounded-2xl p-4">
            <p className="font-bold mb-2 text-sm uppercase tracking-wider">Spesifikasi</p>
            <ul className="flex flex-col gap-1.5">
              {product.specs.map((spec, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <Check size={14} style={{ color: product.accentColor }} className="shrink-0" />
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          {/* Order button */}
          <a
            href={product.gformUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base justify-center"
            style={{ background: product.accentColor }}
          >
            <ShoppingBag size={20} />
            Pesan via Google Form
          </a>

          <Link
            href="/"
            className="btn-secondary text-sm justify-center"
          >
            <ArrowLeft size={16} />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
