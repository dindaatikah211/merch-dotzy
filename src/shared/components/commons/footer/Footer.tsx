import { Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Separator } from "@/shared/components/ui/separator";
import { INSTAGRAM_URL, NAV_LINKS, WHATSAPP_URL } from "../navbar/contants";

function PixelStar({ color, size = 8 }: { color: string; size?: number }) {
  return (
    <svg width={size * 3} height={size * 3} viewBox="0 0 3 3" style={{ imageRendering: "pixelated" }} aria-hidden>
      <rect x="1" y="0" width="1" height="1" fill={color} />
      <rect x="0" y="1" width="3" height="1" fill={color} />
      <rect x="1" y="2" width="1" height="1" fill={color} />
    </svg>
  );
}

function PixelDiamond({ color, size = 8 }: { color: string; size?: number }) {
  return (
    <svg width={size * 3} height={size * 3} viewBox="0 0 3 3" style={{ imageRendering: "pixelated" }} aria-hidden>
      <rect x="1" y="0" width="1" height="1" fill={color} />
      <rect x="0" y="1" width="3" height="1" fill={color} />
      <rect x="1" y="2" width="1" height="1" fill={color} />
    </svg>
  );
}

export function Footer() {
  return (
    <footer style={{ background: "var(--fg)", color: "#fff" }}>
      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Mobile: compact 2-col, Desktop: 3-col */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand — full width on mobile */}
          <div className="flex flex-col gap-3 md:col-span-1">
            <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.85rem", color: "var(--yellow)" }}>
              DOTZY
            </span>
            <p className="text-white/60 text-sm leading-relaxed">
              Merch penuh hati, desain penuh makna.
            </p>
            <div className="flex items-center gap-2">
              <PixelStar color="var(--yellow)" size={4} />
              <PixelDiamond color="var(--mint)" size={4} />
              <PixelStar color="var(--coral)" size={3} />
              <PixelDiamond color="var(--sky)" size={4} />
              <PixelStar color="var(--yellow)" size={3} />
            </div>
          </div>

          {/* Mobile: MENU + IKUTI KAMI sejajar dalam 2 kolom */}
          <div className="grid grid-cols-2 gap-6 md:contents">
            {/* Nav */}
            <div className="flex flex-col gap-3">
              <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.55rem", color: "var(--yellow)", letterSpacing: "1px" }}>
                ▸ MENU
              </p>
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span
                      className="w-1.5 h-1.5 inline-block opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: "var(--coral)" }}
                    />
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-3">
              <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.55rem", color: "var(--yellow)", letterSpacing: "1px" }}>
                ▸ SOSIAL
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-9 h-9 border-2 rounded-none hover:bg-[var(--yellow)] hover:text-[var(--fg)] hover:border-[var(--yellow)] transition-colors"
                  style={{ borderColor: "rgba(255,255,255,0.2)", background: "transparent", color: "white" }}
                  asChild
                >
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram size={16} />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-9 h-9 border-2 rounded-none hover:bg-[var(--mint)] hover:text-[var(--fg)] hover:border-[var(--mint)] transition-colors"
                  style={{ borderColor: "rgba(255,255,255,0.2)", background: "transparent", color: "white" }}
                  asChild
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <MessageCircle size={16} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-6" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.45rem", color: "rgba(255,255,255,0.4)" }}>
            MADE WITH LOVE BY DOTZY
          </span>
          <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.45rem", color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} DOTZY. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </footer>
  );
}