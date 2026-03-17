"use client";

import { useEffect, useRef } from "react";
import { Instagram, MessageCircle, ExternalLink } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_URL } from "../contants/cta";

function PixelStar({ color, size = 8 }: { color: string; size?: number }) {
  return (
    <svg width={size * 3} height={size * 3} viewBox="0 0 3 3" style={{ imageRendering: "pixelated" }} aria-hidden>
      <rect x="1" y="0" width="1" height="1" fill={color} />
      <rect x="0" y="1" width="3" height="1" fill={color} />
      <rect x="1" y="2" width="1" height="1" fill={color} />
    </svg>
  );
}

function PixelDiamond({ color, size = 8 }: { color: string; size?: number }) {
  return (
    <svg width={size * 3} height={size * 3} viewBox="0 0 3 3" style={{ imageRendering: "pixelated" }} aria-hidden>
      <rect x="1" y="0" width="1" height="1" fill={color} />
      <rect x="0" y="1" width="3" height="1" fill={color} />
      <rect x="1" y="2" width="1" height="1" fill={color} />
    </svg>
  );
}

export function CtaSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    import("animejs").then(({ default: anime }) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            anime({ targets: ".cta-animate", opacity: [0, 1], translateY: [30, 0], duration: 700, easing: "easeOutExpo", delay: anime.stagger(120) });
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    });
  }, []);

  return (
    <section ref={ref} className="py-20 px-4">
      <div
        className="max-w-4xl mx-auto border-4 border-neutral-900 overflow-hidden relative"
        style={{ background: "var(--coral)", boxShadow: "8px 8px 0 #1A1A1A" }}
      >
        {/* Pixel decorations */}
        <div className="absolute top-6 left-6 flex gap-2 opacity-30">
          <PixelStar color="white" size={6} />
          <PixelDiamond color="white" size={5} />
          <PixelStar color="white" size={4} />
        </div>
        <div className="absolute top-6 right-6 flex gap-2 opacity-30">
          <PixelStar color="white" size={4} />
          <PixelDiamond color="white" size={5} />
          <PixelStar color="white" size={6} />
        </div>

        <div className="relative z-10 text-center py-14 px-6">


          <h2
            className="text-white cta-animate opacity-0 mb-4"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(0.7rem, 2.5vw, 1.1rem)", lineHeight: 2 }}
          >
            YUK, FOLLOW & ORDER<br />SEKARANG!
          </h2>

          <p className="text-white/80 text-sm max-w-lg mx-auto cta-animate opacity-0 mb-8 leading-relaxed">
            Update produk terbaru, behind the scenes, dan promo eksklusif ada di Instagram kami.
            Order langsung via WhatsApp atau Google Form.
          </p>

          <div className="flex flex-wrap justify-center gap-3 cta-animate opacity-0">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 font-bold border-2 border-neutral-900 transition-all duration-150 hover:bg-[var(--yellow)] hover:-translate-y-0.5 active:translate-y-0.5"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.5rem", background: "white", color: "var(--fg)" }}
            >
              <Instagram size={14} />
              INSTAGRAM
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 font-bold border-2 border-neutral-900 transition-all duration-150 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0.5"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.5rem", background: "var(--mint)", color: "var(--fg)" }}
            >
              <MessageCircle size={14} />
              WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}