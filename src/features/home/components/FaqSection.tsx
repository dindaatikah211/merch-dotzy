"use client";

import { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";
import { FAQS } from "../contants/Faq";

function PixelStar({ color, size = 8 }: { color: string; size?: number }) {
  return (
    <svg width={size * 3} height={size * 3} viewBox="0 0 3 3" style={{ imageRendering: "pixelated" }} aria-hidden>
      <rect x="1" y="0" width="1" height="1" fill={color} />
      <rect x="0" y="1" width="3" height="1" fill={color} />
      <rect x="1" y="2" width="1" height="1" fill={color} />
    </svg>
  );
}

export function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 animate-on-scroll">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-neutral-900 mb-4"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.45rem", background: "var(--sky)" }}
          >
            <PixelStar color="var(--fg)" size={3} />
            FAQ
            <PixelStar color="var(--fg)" size={3} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl">
            Pertanyaan <span className="gradient-text">Umum</span>
          </h2>
          <p className="mt-3 text-neutral-500 text-sm">
            Ada yang ingin ditanyakan? Cek dulu di sini ya!
          </p>
        </div>

        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="animate-on-scroll bg-white border-2 border-neutral-900 overflow-hidden transition-all duration-150 px-0"
              style={{
                boxShadow: "3px 3px 0 var(--fg)",
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <AccordionTrigger className="px-5 py-4 text-left font-body font-bold text-sm md:text-base hover:bg-neutral-50 hover:no-underline transition-colors [&>svg]:hidden group">
                <div className="flex items-center justify-between w-full gap-4">
                  <span>{faq.q}</span>
                  {/* + saat closed, − saat open — pakai data-state dari Radix via group */}
                  <span
                    className="shrink-0 w-7 h-7 flex items-center justify-center border-2 border-neutral-900 group-data-[state=open]:bg-[var(--coral)] group-data-[state=closed]:bg-[var(--yellow)] transition-colors"
                  >
                    <span
                      className="group-data-[state=open]:hidden"
                      style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.6rem" }}
                    >+</span>
                    <span
                      className="group-data-[state=closed]:hidden text-white"
                      style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.6rem" }}
                    >−</span>
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-0 pb-0">
                <div
                  className="mx-5 h-0.5"
                  style={{
                    backgroundImage: `repeating-linear-gradient(90deg, var(--coral) 0px, var(--coral) 6px, transparent 6px, transparent 10px)`,
                  }}
                />
                <p className="px-5 py-4 text-neutral-600 text-sm leading-relaxed">{faq.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}