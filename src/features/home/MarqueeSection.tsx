export function MarqueeSection() {
  const items = [
    "✨ Stiker Vinyl Premium",
    "🔑 Gantungan Kunci Acrylic",
    "📌 Pin Button & Enamel",
    "👜 Totebag Canvas",
    "🎨 Desain Original",
    "🌈 Warna Cerah & Ceria",
    "⭐ Limited Edition",
    "💖 Made with Love",
  ];

  // Double the items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      className="py-4 border-y-4 border-neutral-900 overflow-hidden"
      style={{ background: "var(--yellow)" }}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display text-lg md:text-xl mx-6 shrink-0"
            style={{ color: "var(--fg)" }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
