"use client";

import { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { FAQS } from "../contants/Faq";

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
    <section id="faq" ref={sectionRef} className="py-20 px-4" style={{ background: "var(--cream)" }}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 animate-on-scroll">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-4"
            style={{ background: "var(--navy)", color: "#fff" }}
          >
            <HelpCircle size={14} />
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl" style={{ color: "var(--navy)", fontWeight: 700 }}>
            Pertanyaan{" "}
            <span style={{ color: "var(--orange)" }}>Umum</span>
          </h2>
          <p className="mt-3 text-sm" style={{ color: "var(--navy)", opacity: 0.6 }}>
            Ada yang ingin ditanyakan? Cek dulu di sini ya!
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="animate-on-scroll bg-white rounded-2xl overflow-hidden transition-all duration-150"
              style={{
                border: "2px solid var(--navy)",
                boxShadow: "3px 3px 0 var(--navy)",
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <AccordionTrigger className="px-5 py-4 text-left font-body font-bold text-sm md:text-base hover:bg-orange-50 hover:no-underline transition-colors [&>svg]:hidden group">
                <div className="flex items-center justify-between w-full gap-4">
                  <span style={{ color: "var(--navy)", fontWeight: 700 }}>{faq.q}</span>
                  <span
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold transition-colors group-data-[state=open]:text-white group-data-[state=closed]:text-[var(--navy)]"
                    style={{
                      background: "transparent",
                      border: "2px solid var(--navy)",
                    }}
                  >
                    <span className="group-data-[state=open]:hidden text-sm">+</span>
                    <span className="group-data-[state=closed]:hidden text-sm" style={{ color: "var(--orange)" }}>−</span>
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-0 pb-0">
                <div className="mx-5 h-px mb-0" style={{ background: "var(--navy)", opacity: 0.1 }} />
                <p className="px-5 py-4 text-sm leading-relaxed" style={{ color: "var(--navy)", opacity: 0.7 }}>{faq.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}