"use client";

import { useEffect, useRef } from "react";
import { Palette, Heart, Zap, Globe } from "lucide-react";
import { VALUES } from "../contants/About";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
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
            <span
              className="section-tag"
              style={{ background: "var(--yellow)", color: "var(--fg)" }}
            >
              Tentang Meraki
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-2 mb-4">
              Lebih dari{" "}
              <span style={{ color: "var(--yellow)" }}>sekedar merch</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-4">
              Meraki lahir dari keinginan untuk menghadirkan merch yang benar-benar berkarakter.
              Bukan sekadar barang massal — tapi karya yang bisa kamu banggakan.
            </p>
            <p className="text-white/70 leading-relaxed">
              Kami adalah mahasiswa informatika yang percaya bahwa seni dan teknologi
              bisa berjalan beriringan. Setiap produk dirancang dengan detail,
              dicetak dengan kualitas terbaik, dan dikirim dengan penuh semangat.
            </p>
          </div>

          {/* Big emoji decorative */}
          <div className="animate-on-scroll flex justify-center">
            <div className="relative">
              <div
                className="w-64 h-64 rounded-5xl border-4 border-white/20 flex items-center justify-center text-9xl"
                style={{ background: "rgba(255,255,255,0.07)" }}
              >
                🎨
              </div>
              <span className="absolute -top-4 -right-4 text-4xl animate-wiggle" aria-hidden>✨</span>
              <span className="absolute -bottom-4 -left-4 text-4xl animate-float" aria-hidden>💫</span>
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {VALUES.map((v, i) => (
            <div
              key={v.title}
              className="animate-on-scroll rounded-3xl p-6 border-2 border-white/10 hover:border-white/30 transition-colors"
              style={{ transitionDelay: `${i * 100}ms`, background: "rgba(255,255,255,0.05)" }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: v.color }}
              >
                <v.icon size={22} color="var(--fg)" />
              </div>
              <h3 className="font-display text-lg mb-2">{v.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}