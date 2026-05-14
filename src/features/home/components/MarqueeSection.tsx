import { MARQUEE_ITEMS } from "../contants/marquee";

export function MarqueeSection() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="overflow-hidden py-3"
      style={{
        background: "var(--navy)",
        borderTop: "3px solid var(--navy)",
        borderBottom: "3px solid var(--navy)",
      }}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-6 shrink-0 inline-flex items-center gap-3 font-body font-bold text-sm"
            style={{ color: "#fff" }}
          >
            <span
              className="inline-block w-2 h-2 rounded-full shrink-0"
              style={{
                background: i % 3 === 0 ? "var(--orange)" : i % 3 === 1 ? "#fff" : "var(--orange)",
                opacity: i % 3 === 1 ? 0.5 : 1,
              }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}