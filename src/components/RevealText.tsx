"use client";

import { motion, type Variants } from "motion/react";
import { createElement } from "react";

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  /** "word" kelime kelime, "char" harf harf maskeli giriş */
  by?: "word" | "char";
  delay?: number;
  stagger?: number;
  /** true ise görünür olduğunda değil, mount anında oynar */
  immediate?: boolean;
};

const item: Variants = {
  hidden: { y: "110%", rotate: 6 },
  show: { y: "0%", rotate: 0, transition: { duration: 1, ease: [0.19, 1, 0.22, 1] } },
};

/** Maskeli (overflow: hidden) satırdan yukarı kayan metin girişi. */
export default function RevealText({
  text,
  as = "span",
  className,
  by = "word",
  delay = 0,
  stagger,
  immediate = false,
}: Props) {
  const words = text.split(" ");
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger ?? (by === "char" ? 0.03 : 0.06), delayChildren: delay } },
  };
  const trigger = immediate
    ? { initial: "hidden", animate: "show" }
    : { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "-10% 0px" } };

  return createElement(
    as,
    { className, "aria-label": text },
    <motion.span aria-hidden className="inline" variants={container} {...trigger}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {by === "word" ? (
            <span className="inline-block overflow-hidden pt-[0.12em] -mt-[0.12em] pb-[0.14em] -mb-[0.14em] align-bottom">
              <motion.span className="inline-block origin-top-left" variants={item}>
                {word}
              </motion.span>
            </span>
          ) : (
            word.split("").map((ch, ci) => (
              <span key={ci} className="inline-block overflow-hidden pt-[0.12em] -mt-[0.12em] pb-[0.14em] -mb-[0.14em] align-bottom">
                <motion.span className="inline-block origin-top-left" variants={item}>
                  {ch}
                </motion.span>
              </span>
            ))
          )}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  );
}
