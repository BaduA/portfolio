import { createElement } from "react";

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  by?: "word" | "char";
  /** ms cinsinden başlangıç gecikmesi */
  delay?: number;
  stagger?: number;
  /**
   * true: sayfa açılır açılmaz saf CSS ile oynar (ekranın üstündeki başlıklar için; JS beklemez).
   * false: görünür alana girince oynar.
   */
  immediate?: boolean;
};

/** Maskeli satırdan yukarı kayan metin (React Bits "SplitText" tarzı), sıfır JS. */
export default function RevealText({ text, as = "span", className, by = "word", delay = 0, stagger, immediate = false }: Props) {
  const step = stagger ?? (by === "char" ? 28 : 55);
  const inner = immediate ? "rise" : "rv";
  let n = 0;
  const words = text.split(" ");
  return createElement(
    as,
    { className, "aria-label": text, ...(immediate ? {} : { "data-reveal": "mask" }) },
    words.map((word, wi) => (
      <span key={wi} aria-hidden className="inline-block whitespace-nowrap">
        {(by === "word" ? [word] : word.split("")).map((part, pi) => (
          <span key={pi} className="mask">
            <span className={inner} style={{ "--d": `${delay + n++ * step}ms` } as React.CSSProperties}>
              {part}
            </span>
          </span>
        ))}
        {wi < words.length - 1 && " "}
      </span>
    ))
  );
}
