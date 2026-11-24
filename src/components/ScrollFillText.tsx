/** Kaydırdıkça kelime kelime dolan paragraf. Tamamen CSS scroll-driven animasyon. */
export default function ScrollFillText({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  const n = words.length;
  return (
    <p className={`sd-fill ${className ?? ""}`} aria-label={text}>
      {words.map((w, i) => {
        const a = 15 + (i / n) * 40;
        return (
          <span
            key={i}
            aria-hidden
            className="mr-[0.25em] inline-block"
            style={{ animationRange: `cover ${a.toFixed(1)}% cover ${(a + 40 / n + 2).toFixed(1)}%` }}
          >
            {w}
          </span>
        );
      })}
    </p>
  );
}
