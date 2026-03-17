import { MARQUEE_ITEMS } from "../contants/marquee";

export function MarqueeSection() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="overflow-hidden" style={{ borderTop: "4px solid #1A1A1A", borderBottom: "4px solid #1A1A1A" }}>
      <div className="py-3" style={{ background: "var(--yellow)" }}>
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="mx-4 shrink-0 inline-flex items-center gap-2"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.6rem", color: "var(--fg)" }}
            >
              <span
                className="inline-block w-2 h-2"
                style={{ background: i % 4 === 0 ? "var(--coral)" : i % 4 === 1 ? "var(--mint)" : i % 4 === 2 ? "var(--sky)" : "var(--fg)" }}
              />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}