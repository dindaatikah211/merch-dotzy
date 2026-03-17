"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/shared/components/ui/card";
import { VALUES } from "../contants/About";

function PixelStar({ color, size = 8 }: { color: string; size?: number }) {
  return (
    <svg width={size * 3} height={size * 3} viewBox="0 0 3 3" style={{ imageRendering: "pixelated" }} aria-hidden>
      <rect x="1" y="0" width="1" height="1" fill={color} />
      <rect x="0" y="1" width="3" height="1" fill={color} />
      <rect x="1" y="2" width="1" height="1" fill={color} />
    </svg>
  );
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    const els = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4"
      style={{ background: "var(--fg)", color: "#fff" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text */}
          <div className="animate-on-scroll">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-white/30 mb-4"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.45rem", color: "var(--fg)", background: "var(--yellow)" }}
            >
              <PixelStar color="var(--fg)" size={3} />
              TENTANG DOTZY
            </div>
            <h2 className="font-display text-4xl md:text-5xl mt-2 mb-4">
              Lebih dari{" "}
              <span style={{ color: "var(--yellow)" }}>sekedar merch</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-4">
              Dotzy lahir dari keinginan untuk menghadirkan merch yang benar-benar berkarakter.
              Bukan sekadar barang massal — tapi karya yang bisa kamu banggakan.
            </p>
            <p className="text-white/70 leading-relaxed">
              Kami adalah mahasiswa informatika yang percaya bahwa seni dan teknologi
              bisa berjalan beriringan. Setiap produk dirancang dengan detail,
              dicetak dengan kualitas terbaik, dan dikirim dengan penuh semangat.
            </p>
          </div>

          {/* Pixel art decorative box */}
          <div className="animate-on-scroll flex justify-center">
            <div className="relative">
              <div
                className="w-56 h-56 md:w-64 md:h-64 border-4 border-white/30 flex items-center justify-center text-8xl"
                style={{ background: "rgba(255,255,255,0.05)", boxShadow: "6px 6px 0 rgba(255,255,255,0.1)" }}
              >
                🎨
              </div>
              <div className="absolute -top-3 -left-3">
                <PixelStar color="var(--yellow)" size={5} />
              </div>
              <div className="absolute -bottom-3 -right-3">
                <PixelStar color="var(--coral)" size={5} />
              </div>
              <span className="absolute -top-4 -right-4 text-3xl animate-wiggle" aria-hidden>✨</span>
              <span className="absolute -bottom-4 -left-4 text-3xl animate-float" aria-hidden>💫</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {VALUES.map((v, i) => (
            <Card
              key={v.title}
              className="animate-on-scroll border-2 border-white/20 rounded-none hover:border-white/50 transition-all duration-150 hover:-translate-y-1"
              style={{
                transitionDelay: `${i * 100}ms`,
                background: "rgba(255,255,255,0.05)",
                boxShadow: "3px 3px 0 rgba(255,255,255,0.08)",
              }}
            >
              <CardContent className="p-5">
                <div
                  className="w-10 h-10 flex items-center justify-center mb-3 border-2 border-white/20"
                  style={{ background: v.color }}
                >
                  <v.icon size={18} color="var(--fg)" />
                </div>
                <h3
                  className="text-white font-bold mb-2"
                  style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.5rem", lineHeight: 1.6 }}
                >
                  {v.title}
                </h3>
                <p className="text-white/60 text-xs leading-relaxed">{v.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}