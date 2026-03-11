import { MARQUEE_ITEMS } from "../contants/marquee";

export function MarqueeSection() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

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