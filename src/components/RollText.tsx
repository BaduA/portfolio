/** Üzerine gelince harfleri dalga gibi yuvarlanan metin. Ebeveyninde `group/roll` olmalı. */
export default function RollText({ text, className }: { text: string; className?: string }) {
  const chars = text.split("");
  const row = (extra: string) =>
    chars.map((c, i) => (
      <span
        key={i}
        className={`inline-block transition-transform duration-500 ease-expo ${extra}`}
        style={{ transitionDelay: `${i * 15}ms` }}
      >
        {c === " " ? " " : c}
      </span>
    ));
  return (
    <span className={`relative inline-flex overflow-hidden ${className ?? ""}`} aria-label={text}>
      <span aria-hidden className="flex">{row("group-hover/roll:-translate-y-full")}</span>
      <span aria-hidden className="absolute inset-0 flex text-accent">
        {row("translate-y-full group-hover/roll:translate-y-0")}
      </span>
    </span>
  );
}
