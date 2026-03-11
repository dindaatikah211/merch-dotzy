"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Instagram, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "#products", label: "Produk" },
  { href: "#about", label: "Tentang" },
  { href: "#faq", label: "FAQ" },
];

const INSTAGRAM_URL = "https://www.instagram.com/REPLACE_YOUR_IG";
const WHATSAPP_URL  = "https://wa.me/628XXXXXXXXXX";

export function Navbar() {
  const [open, setOpen] = useState(false);
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
          Meraki ✿
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body font-700 text-sm hover:text-[var(--coral)] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop socials + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border-2 border-neutral-900 hover:bg-[var(--yellow)] transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border-2 border-neutral-900 hover:bg-[var(--mint)] transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />
          </a>
          <a href="#products" className="btn-primary text-sm py-2 px-5">
            Pesan Sekarang
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t-2 border-neutral-900 px-4 py-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-lg"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-3 mt-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border-2 border-neutral-900 hover:bg-[var(--yellow)] transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border-2 border-neutral-900 hover:bg-[var(--mint)] transition-colors"
            >
              <MessageCircle size={20} />
            </a>
          </div>
          <a href="#products" className="btn-primary text-sm" onClick={() => setOpen(false)}>
            Pesan Sekarang
          </a>
        </div>
      )}
    </header>
  );
}