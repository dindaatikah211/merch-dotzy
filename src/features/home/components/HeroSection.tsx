"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/shared/components/ui/button";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef     = useRef<HTMLHeadingElement>(null);
  const subtitleRef  = useRef<HTMLParagraphElement>(null);
  const btnRef       = useRef<HTMLDivElement>(null);
  const dotRef       = useRef<HTMLDivElement>(null); // desktop
  const zyRef        = useRef<HTMLDivElement>(null);  // desktop
  const dotMobRef    = useRef<HTMLDivElement>(null); // mobile
  const zyMobRef     = useRef<HTMLDivElement>(null);  // mobile

  useEffect(() => {
    import("animejs").then(({ default: anime }) => {
      anime({ targets: titleRef.current,    opacity: [0, 1], translateY: [40, 0], duration: 800, easing: "easeOutExpo", delay: 200 });
      anime({ targets: subtitleRef.current, opacity: [0, 1], translateY: [20, 0], duration: 700, easing: "easeOutExpo", delay: 450 });
      anime({ targets: btnRef.current,      opacity: [0, 1], translateY: [20, 0], duration: 600, easing: "easeOutExpo", delay: 650 });

      // Desktop mascots
      anime({ targets: dotRef.current,    opacity: [0, 1], translateX: [-60, 0], translateY: [30, 0], duration: 900, easing: "easeOutBack",    delay: 500 });
      anime({ targets: zyRef.current,     opacity: [0, 1], translateX: [60, 0],  translateY: [30, 0], duration: 900, easing: "easeOutBack",    delay: 650 });
      anime({ targets: dotRef.current,    translateY: [0, -12], duration: 2200, direction: "alternate", loop: true, easing: "easeInOutSine", delay: 900  });
      anime({ targets: zyRef.current,     translateY: [0, -16], duration: 2600, direction: "alternate", loop: true, easing: "easeInOutSine", delay: 1100 });

      // Mobile mascots
      anime({ targets: dotMobRef.current, opacity: [0, 1], translateX: [-60, 0], translateY: [30, 0], duration: 900, easing: "easeOutBack",    delay: 500 });
      anime({ targets: zyMobRef.current,  opacity: [0, 1], translateX: [60, 0],  translateY: [30, 0], duration: 900, easing: "easeOutBack",    delay: 650 });
      anime({ targets: dotMobRef.current, translateY: [0, -12], duration: 2200, direction: "alternate", loop: true, easing: "easeInOutSine", delay: 900  });
      anime({ targets: zyMobRef.current,  translateY: [0, -16], duration: 2600, direction: "alternate", loop: true, easing: "easeInOutSine", delay: 1100 });
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      {/* Top cream section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center pt-32 pb-16 px-6">
        <h1
          ref={titleRef}
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-5 opacity-0"
          style={{ color: "var(--navy)", fontWeight: 700 }}
        >
          Desain Playful,{" "}
          <span style={{ color: "var(--orange)" }}>Kualitas</span>
          <br />Terjamin!
        </h1>
        <p
          ref={subtitleRef}
          className="text-base md:text-lg mb-8 leading-relaxed max-w-xl mx-auto opacity-0"
          style={{ color: "var(--navy)", opacity: 0.75 }}
        >
          Stiker, gantungan kunci, pin, dan totebag yang didesain dengan{" "}
          <strong>sepenuh hati</strong>. Karena setiap karya layak dirayakan.
        </p>
        <div ref={btnRef} className="flex flex-wrap gap-3 justify-center opacity-0">
          <Button
            className="px-7 py-3 rounded-full text-white font-bold text-base md:text-lg transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "var(--orange)",
              border: "2.5px solid var(--navy)",
              boxShadow: "4px 4px 0 var(--navy)",
              fontWeight: 700,
            }}
            asChild
          >
            <a href="/#products">Lihat Produk</a>
          </Button>
          <Button
            variant="outline"
            className="px-7 py-3 rounded-full font-bold text-base md:text-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--navy)] hover:text-white"
            style={{
              background: "#FFFFFF",
              border: "2.5px solid var(--navy)",
              boxShadow: "4px 4px 0 var(--navy)",
              fontWeight: 700,
              color: "var(--navy)",
            }}
            asChild
          >
            <a href="/#about">Tentang Kami</a>
          </Button>
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative z-10 w-full" style={{ marginBottom: "-2px" }}>
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-28">
          <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" fill="#f14a1d" />
        </svg>
      </div>

      {/* Bottom orange section — maskot */}
      <div className="relative w-full pt-0 pb-6" style={{ background: "var(--orange)" }}>
        {/* Decorative dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-10"
              style={{
                width: `${20 + (i % 4) * 15}px`,
                height: `${20 + (i % 4) * 15}px`,
                background: "#fff",
                left: `${(i * 13) % 90}%`,
                top: `${(i * 17) % 80}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4">

          {/* Desktop layout — dari kode 2 */}
          <div className="hidden md:flex items-center justify-between">
            <div ref={dotRef} className="opacity-0 w-48 md:w-64 lg:w-72 shrink-0">
              <Image
                src="/images/Dot.png"
                alt="Dot maskot Dotzy"
                width={300}
                height={380}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
            <div className="text-center px-4 flex-1">
              <p className="font-display text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontWeight: 700 }}>
                Meet the crew!
              </p>
              <p className="text-white/60 text-lg inline-flex items-center gap-1.5 justify-center">
                Dot & Zy siap menemani setiap harimu
              </p>
            </div>
            <div ref={zyRef} className="opacity-0 w-48 md:w-64 lg:w-72 shrink-0">
              <Image
                src="/images/Zy.png"
                alt="Zy maskot Dotzy"
                width={300}
                height={380}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Mobile layout — dari kode 1 */}
          <div className="flex md:hidden flex-col items-center gap-2">
            <div className="text-center pt-2 pb-1">
              <p className="font-display text-2xl font-bold text-white" style={{ fontWeight: 700 }}>
                Meet the crew!
              </p>
              <p className="text-white/70 text-sm mt-1">
                Dot & Zy siap menemani setiap harimu
              </p>
            </div>
            <div className="flex items-end justify-center gap-2 w-full">
              <div ref={dotMobRef} className="opacity-0 w-36 shrink-0">
                <Image
                  src="/images/Dot.png"
                  alt="Dot maskot Dotzy"
                  width={200}
                  height={260}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>
              <div ref={zyMobRef} className="opacity-0 w-36 shrink-0">
                <Image
                  src="/images/Zy.png"
                  alt="Zy maskot Dotzy"
                  width={200}
                  height={260}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-1.5 mt-4 opacity-40">
          <span className="text-white text-xs font-bold tracking-widest uppercase">Scroll</span>
          <div className="w-0.5 h-5 bg-white rounded animate-pulse" />
        </div>
      </div>
    </section>
  );
}