"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/shared/components/ui/sheet";
import { INSTAGRAM_URL, NAV_LINKS, WHATSAPP_URL, TIKTOK_URL } from "../contants";

function TikTokIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_4px_0_0_var(--navy)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo dotzy.png"
            alt="Dotzy Merch"
            width={120}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="px-4 py-2 text-md font-bold transition-all duration-200 group"
                style={{ color: "var(--navy)", fontWeight: 700 }}
              >
                <span className="group-hover:text-[var(--orange)] transition-colors duration-200">
                  {l.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop socials + CTA */}
        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="w-9 h-9 rounded-full border-2 transition-all duration-200"
            style={{ borderColor: "var(--navy)", color: "var(--navy)" }}
            asChild
          >
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              onMouseEnter={e => e.currentTarget.style.color = "var(--orange)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--navy)"}
            >
              <Instagram size={15} />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-9 h-9 rounded-full border-2 transition-all duration-200"
            style={{ borderColor: "var(--navy)", color: "var(--navy)" }}
            asChild
          >
            <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="TikTok"
              onMouseEnter={e => e.currentTarget.style.color = "var(--orange)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--navy)"}
            >
              <TikTokIcon size={15} />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-9 h-9 rounded-full border-2 transition-all duration-200"
            style={{ borderColor: "var(--navy)", color: "var(--navy)" }}
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              onMouseEnter={e => e.currentTarget.style.color = "var(--orange)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--navy)"}
            >
              <MessageCircle size={15} />
            </a>
          </Button>
          <Link
            href="https://forms.gle/UD9PxZszKRNfnG1H6"
            className="px-5 py-2 rounded-full text-white font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            style={{
              background: "var(--orange)",
              border: "2.5px solid var(--navy)",
              boxShadow: "3px 3px 0 var(--navy)",
              fontWeight: 700,
            }}
          >
            Order Sekarang
          </Link>
        </div>

        {/* Mobile hamburger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden w-10 h-10 rounded-full transition-all duration-200 hover:bg-[var(--orange)] hover:text-white"
              style={{ color: "var(--navy)" }}
              aria-label="Toggle menu"
            >
              <Menu size={22} />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 p-0 border-l-0"
            style={{ background: "var(--cream)" }}
          >
            <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>

            {/* Mobile header */}
            <div className="px-6 py-4 border-b-4" style={{ borderColor: "var(--navy)" }}>
              <Image
                src="/images/logo dotzy.png"
                alt="Dotzy Merch"
                width={100}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>

            <div className="p-6 flex flex-col gap-4">
              {/* Nav links */}
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((l) => (
                  <SheetClose key={l.href} asChild>
                    <Link
                      href={l.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-md transition-all duration-150 hover:bg-[var(--navy)] hover:text-white"
                      style={{ color: "var(--navy)", fontWeight: 700 }}
                    >
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "var(--orange)" }} />
                      {l.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <div className="h-px" style={{ background: "var(--navy)", opacity: 0.15 }} />

              {/* Socials */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-full border-2 transition-colors"
                  style={{ borderColor: "var(--navy)", color: "var(--navy)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--orange)", e.currentTarget.style.borderColor = "var(--orange)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--navy)", e.currentTarget.style.borderColor = "var(--navy)")}
                  asChild
                >
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                    <Instagram size={16} />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-full border-2 transition-colors"
                  style={{ borderColor: "var(--navy)", color: "var(--navy)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--orange)", e.currentTarget.style.borderColor = "var(--orange)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--navy)", e.currentTarget.style.borderColor = "var(--navy)")}
                  asChild
                >
                  <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer">
                    <TikTokIcon size={16} />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-full border-2 transition-colors"
                  style={{ borderColor: "var(--navy)", color: "var(--navy)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--orange)", e.currentTarget.style.borderColor = "var(--orange)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--navy)", e.currentTarget.style.borderColor = "var(--navy)")}
                  asChild
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={16} />
                  </a>
                </Button>
              </div>

              {/* ORDER CTA */}
              <SheetClose asChild>
                <Link
                  href="https://forms.gle/UD9PxZszKRNfnG1H6"
                  className="w-full py-3 rounded-full text-white font-bold text-sm text-center transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0"
                  style={{
                    background: "var(--orange)",
                    border: "2.5px solid var(--navy)",
                    boxShadow: "3px 3px 0 var(--navy)",
                    fontWeight: 700,
                  }}
                >
                  Order Sekarang
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}