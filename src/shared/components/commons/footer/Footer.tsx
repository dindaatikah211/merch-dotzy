import { Instagram, MessageCircle, Heart } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Separator } from "@/shared/components/ui/separator";
import { INSTAGRAM_URL, WHATSAPP_URL } from "../navbar/contants";

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
            Dotzy ✿
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
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-2 border-white/30 bg-transparent hover:border-[var(--yellow)] hover:text-[var(--yellow)] hover:bg-transparent"
            asChild
          >
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-2 border-white/30 bg-transparent hover:border-[var(--mint)] hover:text-[var(--mint)] hover:bg-transparent"
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <MessageCircle size={20} />
            </a>
          </Button>
        </div>
      </div>

      <Separator className="bg-white/10" />

      <div className="py-4 text-center text-xs opacity-50">
        <p className="flex items-center justify-center gap-1">
          Made with <Heart size={12} fill="currentColor" /> by Dotzy &mdash; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}