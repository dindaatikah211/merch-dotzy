"use client";

import Image from "next/image";
import { Instagram, MessageCircle, Heart } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Separator } from "@/shared/components/ui/separator";
import { INSTAGRAM_URL, NAV_LINKS, WHATSAPP_URL, TIKTOK_URL } from "../navbar/contants";

function TikTokIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer style={{ background: "var(--navy)", color: "#fff" }}>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">

          {/* Brand */}
          <div className="flex-col flex items-start gap-4">
            <Image
              src="/images/logo dotzy about.png"
              alt="Dotzy Merch"
              width={200}
              height={52}
              className="h-14 w-auto object-contain"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              Merch penuh hati, desain penuh makna.
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="w-9 h-9 rounded-full border-2 transition-all duration-200 hover:bg-[var(--orange)] hover:border-[var(--orange)] hover:text-white"
                style={{ borderColor: "rgba(255,255,255,0.3)", background: "transparent", color: "white" }}
                asChild
              >
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={15} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-9 h-9 rounded-full border-2 transition-all duration-200 hover:bg-[var(--orange)] hover:border-[var(--orange)] hover:text-white"
                style={{ borderColor: "rgba(255,255,255,0.3)", background: "transparent", color: "white" }}
                asChild
              >
                <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <TikTokIcon size={15} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-9 h-9 rounded-full border-2 transition-all duration-200 hover:bg-[var(--orange)] hover:border-[var(--orange)] hover:text-white"
                style={{ borderColor: "rgba(255,255,255,0.3)", background: "transparent", color: "white" }}
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <MessageCircle size={15} />
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile: 2 kolom sejajar, Desktop: 2 kolom terpisah */}
          <div className="grid grid-cols-2 gap-6 md:contents">
            {/* Nav */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--orange)" }}>
                Menu
              </p>
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-sm font-medium text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--orange)" }}>
                Info
              </p>
              <div className="flex flex-col gap-2">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                  TikTok
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-6" style={{ background: "rgba(255,255,255,0.1)" }} />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs flex items-center gap-1.5 text-white/40">
            Made with <Heart size={11} fill="var(--orange)" stroke="var(--orange)" /> by Dotzy
          </p>
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Dotzy Merch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}