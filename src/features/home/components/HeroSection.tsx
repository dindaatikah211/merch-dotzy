"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { FLOATING_EMOJIS, PRODUCT_BADGES } from "../contants/Hero";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef     = useRef<HTMLHeadingElement>(null);
  const subtitleRef  = useRef<HTMLParagraphElement>(null);
  const btnRef       = useRef<HTMLDivElement>(null);
  const emojiRefs    = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    import("animejs").then(({ default: anime }) => {
      anime({
        targets: titleRef.current,
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 800,
        easing: "easeOutExpo",
        delay: 200,
      });

      anime({
        targets: subtitleRef.current,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 700,
        easing: "easeOutExpo",
        delay: 500,
      });

      anime({
        targets: btnRef.current,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        easing: "easeOutExpo",
        delay: 750,
      });

      anime({
        targets: emojiRefs.current,
        opacity: [0, 1],
        scale: [0, 1],
        rotate: () => anime.random(-20, 20),
        duration: 600,
        easing: "easeOutBack",
        delay: anime.stagger(80, { start: 400 }),
      });

      emojiRefs.current.forEach((el, i) => {
        anime({
          targets: el,
          translateY: [0, -(8 + (i % 3) * 6)],
          duration: 1800 + i * 200,
          direction: "alternate",
          loop: true,
          easing: "easeInOutSine",
          delay: i * 100,
        });
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

      {/* Floating emojis */}
      <div className="absolute inset-0 pointer-events-none">
        {FLOATING_EMOJIS.map((emoji, i) => (
          <span
            key={i}
            ref={(el) => { if (el) emojiRefs.current[i] = el; }}
            className="absolute text-2xl md:text-3xl select-none opacity-0"
            style={{ left: `${8 + (i * 9) % 84}%`, top: `${10 + (i * 13) % 75}%` }}
          >
            {emoji}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <span className="section-tag mb-4">
          <Sparkles size={14} className="inline mr-1" />
          Merch Lokal Penuh Karya
        </span>

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

        <div ref={btnRef} className="flex flex-wrap gap-4 justify-center opacity-0">
          <a href="#products" className="btn-primary">
            Lihat Produk <ArrowRight size={18} />
          </a>
          <a href="#about" className="btn-secondary">
            Tentang Kami
          </a>
        </div>

        {/* Product type badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {PRODUCT_BADGES.map((item) => (
            <span
              key={item.label}
              className="px-4 py-2 rounded-full border-2 border-neutral-900 text-sm font-bold font-body shadow-[3px_3px_0_var(--fg)]"
              style={{ background: item.color }}
            >
              {item.emoji} {item.label}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
        <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-8 bg-neutral-400 rounded animate-pulse" />
      </div>
    </section>
  );
}