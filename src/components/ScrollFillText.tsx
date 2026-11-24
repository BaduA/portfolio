"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const blur = useTransform(progress, range, ["blur(4px)", "blur(0px)"]);
  return (
    <motion.span style={{ opacity, filter: blur }} className="inline-block mr-[0.25em]">
      {children}
    </motion.span>
  );
}

/** Kaydırdıkça kelime kelime "dolan" paragraf. */
export default function ScrollFillText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => {
        const start = i / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, start + 1 / words.length]}>
            {w}
          </Word>
        );
      })}
    </p>
  );
}
