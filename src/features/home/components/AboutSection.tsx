"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/shared/components/ui/card";
import { VALUES } from "../contants/About";

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
      style={{ background: "var(--navy)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text */}
          <div className="animate-on-scroll">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-4"
              style={{ background: "var(--orange)", color: "#fff", border: "2px solid #fff" }}
            >
              Tentang Dotzy
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-2 mb-4 text-white" style={{ fontWeight: 700 }}>
              Lebih dari{" "}
              <span style={{ color: "var(--orange)" }}>sekedar merch</span>
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

          {/* Mascot decoration */}
          <div className="animate-on-scroll flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/images/logo dotzy about.png"
                alt="Dotzy Merch Logo"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {VALUES.map((v, i) => (
            <Card
              key={v.title}
              className="animate-on-scroll border-0 rounded-2xl hover:-translate-y-1 transition-all duration-200"
              style={{
                transitionDelay: `${i * 100}ms`,
                background: "rgba(255,255,255,0.08)",
                border: "2px solid rgba(255,255,255,0.15)",
              }}
            >
              <CardContent className="p-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: v.color }}
                >
                  <v.icon size={20} color={v.color === "var(--navy)" ? "#fff" : "var(--navy)"} />
                </div>
                <h3 className="text-white font-bold text-sm mb-2" style={{ fontWeight: 700 }}>
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