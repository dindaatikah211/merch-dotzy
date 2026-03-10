import { Instagram, MessageCircle, Heart } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/REPLACE_YOUR_IG";
const WHATSAPP_URL  = "https://wa.me/628XXXXXXXXXX";

export function Footer() {
  return (
    <footer
      className="border-t-4 border-neutral-900 mt-0"
      style={{ background: "var(--fg)", color: "#fff" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div>
          <p className="font-display text-3xl" style={{ color: "var(--yellow)" }}>
            Meraki ✿
          </p>
          <p className="text-sm mt-1 opacity-70">
            Merch penuh hati, desain penuh makna.
          </p>
        </div>

        {/* Links */}
        <nav className="flex gap-6 text-sm font-semibold opacity-80">
          <a href="#products" className="hover:opacity-100 hover:text-[var(--yellow)] transition-colors">Produk</a>
          <a href="#about"    className="hover:opacity-100 hover:text-[var(--yellow)] transition-colors">Tentang</a>
          <a href="#faq"      className="hover:opacity-100 hover:text-[var(--yellow)] transition-colors">FAQ</a>
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border-2 border-white/30 hover:border-[var(--yellow)] hover:text-[var(--yellow)] transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border-2 border-white/30 hover:border-[var(--mint)] hover:text-[var(--mint)] transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs opacity-50">
        <p className="flex items-center justify-center gap-1">
          Made with <Heart size={12} fill="currentColor" /> by Meraki &mdash; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
