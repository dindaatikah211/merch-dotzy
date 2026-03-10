"use client";

import { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Bagaimana cara memesan produk Meraki?",
    a: "Pilih produk yang kamu suka, klik tombol 'Pesan via Google Form', lalu isi form dengan lengkap. Kami akan segera menghubungimu via WhatsApp untuk konfirmasi pesanan.",
  },
  {
    q: "Berapa lama proses pengerjaan pesanan?",
    a: "Untuk stiker dan pin biasanya 3–5 hari kerja. Untuk totebag dan gantungan kunci custom bisa 5–7 hari kerja. Kami selalu info update pengerjaan via WhatsApp.",
  },
  {
    q: "Apakah bisa custom desain?",
    a: "Saat ini produk yang tersedia adalah koleksi ready stock dengan desain original Meraki. Untuk custom desain, silakan hubungi kami dulu via WhatsApp — kami terbuka untuk diskusi!",
  },
  {
    q: "Metode pembayaran apa yang tersedia?",
    a: "Kami menerima transfer bank (BCA, Mandiri), GoPay, OVO, DANA, dan QRIS. Detail rekening akan dikirim setelah konfirmasi pesanan.",
  },
  {
    q: "Apakah ada ongkos kirim?",
    a: "Ongkos kirim ditanggung pembeli sesuai jarak pengiriman. Kami menggunakan JNT, Shopee Express, atau J&J. Untuk area lokal kota Semarang bisa COD dengan syarat tertentu.",
  },
  {
    q: "Bagaimana jika produk datang dalam kondisi rusak?",
    a: "Kami selalu kemas dengan hati-hati, tapi kalau ada kejadian tidak terduga, langsung foto dan kirim ke WhatsApp kami dalam 24 jam setelah terima. Kami akan segera proses penggantian.",
  },
];

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
            Pertanyaan{" "}
            <span className="gradient-text">Umum</span>
          </h2>
          <p className="mt-3 text-neutral-500">
            Ada yang ingin ditanyakan? Cek dulu di sini ya!
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
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
                <span className="font-body font-bold text-sm md:text-base">
                  {faq.q}
                </span>
                <span
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center border-2 border-neutral-900 transition-colors"
                  style={{ background: openIdx === i ? "var(--coral)" : "var(--yellow)" }}
                >
                  {openIdx === i ? (
                    <Minus size={14} color="white" />
                  ) : (
                    <Plus size={14} />
                  )}
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: openIdx === i ? "300px" : "0px" }}
              >
                <p className="px-5 pb-5 text-neutral-600 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
