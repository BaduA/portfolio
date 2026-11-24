"use client";

import { motion } from "motion/react";
import RevealText from "./RevealText";

/** Alt sayfaların büyük başlık alanı. */
export default function PageHero({
  index,
  eyebrow,
  title,
  accent,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
}) {
  return (
    <section className="mx-auto max-w-[1600px] px-5 pb-16 pt-36 md:px-10 md:pb-24 md:pt-48">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-8 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em] text-mute"
      >
        <span className="text-accent">({index})</span>
        <motion.span
          className="h-px w-16 origin-left bg-mute"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
        />
        {eyebrow}
      </motion.div>
      <h1 className="text-[14vw] font-medium leading-[0.88] tracking-[-0.06em] md:text-[9.5vw]">
        <RevealText text={title} by="char" immediate delay={0.15} />
        <br />
        <RevealText text={accent} by="char" immediate delay={0.4} className="font-serif font-normal italic text-accent" />
      </h1>
      <motion.p
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.7 }}
        className="mt-10 max-w-xl text-lg text-mute md:ml-auto md:text-xl"
      >
        {description}
      </motion.p>
    </section>
  );
}
