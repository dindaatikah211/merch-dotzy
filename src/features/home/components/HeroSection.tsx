"use client";

import { useEffect, useRef } from "react";
import { PRODUCT_BADGES } from "../contants/Hero";

function PixelStar({ color, size = 8 }: { color: string; size?: number }) {
  return (
    <svg width={size * 3} height={size * 3} viewBox="0 0 3 3" style={{ imageRendering: "pixelated" }} aria-hidden>
      <rect x="1" y="0" width="1" height="1" fill={color} />
      <rect x="0" y="1" width="3" height="1" fill={color} />
      <rect x="1" y="2" width="1" height="1" fill={color} />
    </svg>
  );
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef     = useRef<HTMLHeadingElement>(null);
  const subtitleRef  = useRef<HTMLParagraphElement>(null);
  const btnRef       = useRef<HTMLDivElement>(null);
  const emojiRefs    = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    import("animejs").then(({ default: anime }) => {
      anime({ targets: titleRef.current, opacity: [0, 1], translateY: [40, 0], duration: 800, easing: "easeOutExpo", delay: 200 });
      anime({ targets: subtitleRef.current, opacity: [0, 1], translateY: [20, 0], duration: 700, easing: "easeOutExpo", delay: 500 });
      anime({ targets: btnRef.current, opacity: [0, 1], translateY: [20, 0], duration: 600, easing: "easeOutExpo", delay: 750 });
      anime({ targets: emojiRefs.current, opacity: [0, 1], scale: [0, 1], rotate: () => anime.random(-20, 20), duration: 600, easing: "easeOutBack", delay: anime.stagger(80, { start: 400 }) });
      emojiRefs.current.forEach((el, i) => {
        anime({ targets: el, translateY: [0, -(8 + (i % 3) * 6)], duration: 1800 + i * 200, direction: "alternate", loop: true, easing: "easeInOutSine", delay: i * 100 });
      });
    });
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-12 px-4"
      ref={containerRef}
    >
      {/* Blob backgrounds */}
      <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full blob-yellow animate-blob" style={{ animationDelay: "0s" }} />
      <div className="absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] rounded-full blob-coral animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full blob-mint animate-blob" style={{ animationDelay: "4s" }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Pixel tag */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 border-2 border-neutral-900 mb-6"
          style={{ background: "var(--yellow)", fontFamily: "'Press Start 2P', monospace", fontSize: "0.5rem" }}
        >
          <PixelStar color="var(--fg)" size={4} />
          MERCH LOKAL PENUH KARYA
          <PixelStar color="var(--fg)" size={4} />
        </div>

        <h1
          ref={titleRef}
          className="font-display text-6xl md:text-8xl leading-tight mb-6 opacity-0"
          style={{ color: "var(--fg)" }}
        >
          Dotzy <span className="gradient-text">✿</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed max-w-xl mx-auto opacity-0"
        >
          Stiker, gantungan kunci, pin, dan totebag yang didesain dengan{" "}
          <strong>sepenuh hati</strong>. Karena setiap karya layak dirayakan.
        </p>

        {/* Pixel CTA buttons */}
        <div ref={btnRef} className="flex flex-wrap gap-3 justify-center opacity-0">
          <a
            href="/#products"
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-bold border-2 border-neutral-900 transition-all duration-150 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0.5"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.6rem", background: "var(--coral)" }}
          >
           LIHAT PRODUK
          </a>
          <a
            href="/#about"
            className="inline-flex items-center gap-2 px-6 py-3 font-bold border-2 border-neutral-900 transition-all duration-150 hover:bg-[var(--yellow)] hover:-translate-y-0.5 active:translate-y-0.5"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.6rem", background: "transparent" }}
          >
            TENTANG KAMI
          </a>
        </div>

        {/* Product type badges — pixel style */}
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {PRODUCT_BADGES.map((item) => (
            <span
              key={item.label}
              className="px-4 py-2 border-2 border-neutral-900 text-xs font-bold transition-all duration-150 hover:-translate-y-0.5"
              style={{ background: item.color, fontFamily: "'Press Start 2P', monospace", fontSize: "0.5rem" }}
            > {item.label}
            </span>
          ))}
        </div>
      </div>

      {/* Pixel scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.4rem" }}>SCROLL</span>
        <svg width="8" height="20" viewBox="0 0 2 5" style={{ imageRendering: "pixelated" }} aria-hidden>
          <rect x="0" y="0" width="2" height="1" fill="#1A1A1A" className="animate-pulse" />
          <rect x="0" y="2" width="2" height="1" fill="#1A1A1A" className="animate-pulse" style={{ animationDelay: "0.2s" }} />
          <rect x="0" y="4" width="2" height="1" fill="#1A1A1A" className="animate-pulse" style={{ animationDelay: "0.4s" }} />
        </svg>
      </div>
    </section>
  );
}