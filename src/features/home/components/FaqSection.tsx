"use client";

import { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "../contants/FAQ";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
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
          <span className="section-tag">FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl">
            Pertanyaan <span className="gradient-text">Umum</span>
          </h2>
          <p className="mt-3 text-neutral-500">
            Ada yang ingin ditanyakan? Cek dulu di sini ya!
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="animate-on-scroll bg-white rounded-2xl border-2 border-neutral-900 overflow-hidden"
              style={{
                boxShadow: openIdx === i ? "4px 4px 0 var(--coral)" : "3px 3px 0 var(--fg)",
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
              >
                <span className="font-body font-bold text-sm md:text-base">{faq.q}</span>
                <span
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center border-2 border-neutral-900 transition-colors"
                  style={{ background: openIdx === i ? "var(--coral)" : "var(--yellow)" }}
                >
                  {openIdx === i ? <Minus size={14} color="white" /> : <Plus size={14} />}
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: openIdx === i ? "300px" : "0px" }}
              >
                <p className="px-5 pb-5 text-neutral-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}