"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/shared/components/ui/sheet";
import { INSTAGRAM_URL, NAV_LINKS, WHATSAPP_URL } from "../contants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-2xl tracking-wide"
          style={{ color: "var(--coral)" }}
        >
          Dotzy ✿
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body font-semibold text-sm hover:text-[var(--coral)] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop socials + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-2 border-neutral-900 hover:bg-[var(--yellow)]"
            asChild
          >
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-2 border-neutral-900 hover:bg-[var(--mint)]"
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
          </Button>
          <Button asChild className="btn-primary text-sm py-2 px-5">
            <a href="#products">Pesan Sekarang</a>
          </Button>
        </div>

        {/* Mobile hamburger — shadcn Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle menu">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 pt-12 flex flex-col gap-6">
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-display text-lg hover:text-[var(--coral)] transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-2 border-neutral-900 hover:bg-[var(--yellow)]"
                asChild
              >
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-2 border-neutral-900 hover:bg-[var(--mint)]"
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={20} />
                </a>
              </Button>
            </div>
            <Button asChild className="btn-primary text-sm w-full">
              <a href="#products">Pesan Sekarang</a>
            </Button>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}