/** Saf CSS sonsuz şerit. Üzerine gelince durur. */
export default function Marquee({
  items,
  reverse,
  speed = 40,
  className,
}: {
  items: readonly string[];
  reverse?: boolean;
  speed?: number;
  className?: string;
}) {
  const row = (key: string) => (
    <span key={key} className="flex shrink-0 items-center" aria-hidden={key === "b"}>
      {items.map((t, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6">{t}</span>
          <span className="text-accent">✦</span>
        </span>
      ))}
    </span>
  );
  return (
    <div className={`marquee-wrap overflow-hidden whitespace-nowrap ${className ?? ""}`}>
      <div className="marquee" data-reverse={reverse || undefined} style={{ "--speed": `${speed}s` } as React.CSSProperties}>
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}
