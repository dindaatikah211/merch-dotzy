"use client";

import { useEffect, useRef } from "react";
import { Instagram, MessageCircle, ExternalLink } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/REPLACE_YOUR_IG";
const WHATSAPP_URL  = "https://wa.me/628XXXXXXXXXX";

export function CtaSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    import("animejs").then(({ default: anime }) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            anime({
              targets: ".cta-animate",
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 700,
              easing: "easeOutExpo",
              delay: anime.stagger(120),
            });
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
        className="max-w-4xl mx-auto rounded-5xl border-4 border-neutral-900 overflow-hidden relative"
        style={{ background: "var(--coral)" }}
      >
        {/* Decorative blobs inside card */}
        <div
          className="absolute top-[-60px] right-[-60px] w-48 h-48 rounded-full opacity-30"
          style={{ background: "var(--yellow)", filter: "blur(40px)" }}
        />
        <div
          className="absolute bottom-[-40px] left-[-40px] w-40 h-40 rounded-full opacity-20"
          style={{ background: "var(--purple)", filter: "blur(40px)" }}
        />

        <div className="relative z-10 text-center py-16 px-6">
          <p className="text-5xl mb-4 cta-animate opacity-0">🎉</p>

          <h2 className="font-display text-4xl md:text-5xl text-white cta-animate opacity-0 mb-4">
            Yuk, follow & order sekarang!
          </h2>

          <p className="text-white/80 text-lg max-w-lg mx-auto cta-animate opacity-0 mb-8">
            Update produk terbaru, behind the scenes, dan promo eksklusif ada di Instagram kami.
            Order langsung via WhatsApp atau Google Form.
          </p>

          <div className="flex flex-wrap justify-center gap-4 cta-animate opacity-0">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ background: "white", border: "3px solid var(--fg)", color: "var(--fg)" }}
            >
              <Instagram size={18} />
              Follow Instagram
              <ExternalLink size={14} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ background: "var(--mint)", border: "3px solid var(--fg)", color: "var(--fg)" }}
            >
              <MessageCircle size={18} />
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
