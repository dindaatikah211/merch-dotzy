"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/shared/components/ui/sheet";
import { INSTAGRAM_URL, NAV_LINKS, WHATSAPP_URL } from "../contants";

function PixelStar({ color, size = 8 }: { color: string; size?: number }) {
  return (
    <svg width={size * 3} height={size * 3} viewBox="0 0 3 3" style={{ imageRendering: "pixelated" }} aria-hidden>
      <rect x="1" y="0" width="1" height="1" fill={color} />
      <rect x="0" y="1" width="3" height="1" fill={color} />
      <rect x="1" y="2" width="1" height="1" fill={color} />
    </svg>
  );
}

function PixelCoin({ color, size = 8 }: { color: string; size?: number }) {
  return (
    <svg width={size * 3} height={size * 3} viewBox="0 0 3 3" style={{ imageRendering: "pixelated" }} aria-hidden>
      <rect x="1" y="0" width="1" height="1" fill={color} />
      <rect x="0" y="1" width="1" height="1" fill={color} />
      <rect x="2" y="1" width="1" height="1" fill={color} />
      <rect x="1" y="2" width="1" height="1" fill={color} />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "shadow-[0_4px_0_0_#1A1A1A]" : ""
      }`}
      style={{ background: scrolled ? "#FDFDF8" : "transparent" }}
    >
      <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.85rem", color: "var(--fg)" }}>
            DOTZY
          </span>
          <PixelStar color="var(--yellow)" size={5} />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="h-9 px-4 inline-flex items-center font-bold uppercase tracking-wider transition-all duration-150 hover:bg-[var(--yellow)] border-2 border-transparent hover:border-neutral-900"
                style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.55rem", color: "var(--fg)" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop socials + CTA */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" size="icon" className="w-9 h-9 border-2 border-neutral-900 rounded-none hover:bg-[var(--yellow)] transition-colors" asChild>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={15} />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="w-9 h-9 border-2 border-neutral-900 rounded-none hover:bg-[var(--mint)] transition-colors" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <MessageCircle size={15} />
            </a>
          </Button>
          <a
            href="/#products"
            className="h-9 px-4 inline-flex items-center text-white font-bold border-2 border-neutral-900 transition-all hover:brightness-110 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px]"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.55rem", background: "var(--coral)" }}
          >
            ▶ ORDER
          </a>
        </div>

        {/* Mobile hamburger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden w-9 h-9 hover:bg-[var(--yellow)] transition-colors" aria-label="Toggle menu">
              <Menu size={18} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 rounded-none border-l-4 border-neutral-900 p-0" style={{ background: "#FDFDF8" }}>
            <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
            <div className="p-6 flex flex-col gap-6 pt-10">
              <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.7rem", color: "var(--fg)" }}>
                DOTZY
              </span>

              {/* Nav links */}
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((l) => (
                  <SheetClose key={l.href} asChild>
                    <a
                      href={l.href}
                      className="flex items-center gap-2 px-3 py-3 border-2 border-transparent hover:border-neutral-900 hover:bg-[var(--yellow)] transition-all duration-150 cursor-pointer"
                    >
                      <PixelCoin color="var(--coral)" size={5} />
                      <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.55rem", color: "var(--fg)" }}>
                        {l.label}
                      </span>
                    </a>
                  </SheetClose>
                ))}
              </nav>

              {/* Socials + ORDER sejajar */}
              <div className="flex gap-2">
                <SheetClose asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-10 h-10 border-2 border-neutral-900 rounded-none hover:bg-[var(--yellow)] transition-colors duration-150"
                    asChild
                  >
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                      <Instagram size={16} />
                    </a>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-10 h-10 border-2 border-neutral-900 rounded-none hover:bg-[var(--mint)] transition-colors duration-150"
                    asChild
                  >
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle size={16} />
                    </a>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href="/#products"
                    className="flex-1 h-10 inline-flex items-center justify-center text-white font-bold border-2 border-neutral-900 transition-all duration-150 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0.5"
                    style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.5rem", background: "var(--coral)" }}
                  >
                    ▶ ORDER
                  </a>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}