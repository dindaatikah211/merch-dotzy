"use client";

import { useEffect, useRef } from "react";
import { Instagram, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "@/shared/components/ui/button";
import { INSTAGRAM_URL, WHATSAPP_URL } from "../contants/cta";

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
    <section ref={ref} className="py-20 px-4" style={{ background: "var(--cream)" }}>
      <div
        className="max-w-4xl mx-auto rounded-3xl overflow-hidden relative"
        style={{
          background: "var(--navy)",
          border: "3px solid var(--navy)",
          boxShadow: "8px 8px 0 var(--orange)",
        }}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2" style={{ background: "var(--orange)" }} />
        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-10 translate-y-1/2 -translate-x-1/2" style={{ background: "#fff" }} />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          {/* Mascot */}
          <div className="cta-animate opacity-0 flex justify-center p-8 md:p-12">
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <Image
                src="/images/logo dotzy about.png"
                alt="Zy maskot Dotzy"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left px-8 pb-12 md:py-12 md:pr-12 md:pl-0">
            <h2
              className="font-display text-3xl md:text-4xl font-bold text-white cta-animate opacity-0 mb-3"
              style={{ fontWeight: 700 }}
            >
              Yuk, follow &<br />
              <span style={{ color: "var(--orange)" }}>order sekarang!</span>
            </h2>

            <p className="text-white/70 text-sm max-w-sm mx-auto md:mx-0 cta-animate opacity-0 mb-8 leading-relaxed">
              Update produk terbaru, behind the scenes, dan promo eksklusif ada di Instagram kami.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 cta-animate opacity-0">
              <Button
                variant="outline"
                className="rounded-full font-bold text-sm transition-all duration-150 hover:-translate-y-0.5"
                style={{
                  background: "white",
                  color: "var(--navy)",
                  border: "2.5px solid white",
                  boxShadow: "3px 3px 0 var(--orange)",
                  fontWeight: 700,
                }}
                asChild
              >
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  <Instagram size={15} />
                  Instagram
                </a>
              </Button>
              <Button
                className="rounded-full font-bold text-sm transition-all duration-150 hover:-translate-y-0.5"
                style={{
                  background: "var(--orange)",
                  color: "#fff",
                  border: "2.5px solid white",
                  boxShadow: "3px 3px 0 var(--orange)",
                  fontWeight: 700,
                }}
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}