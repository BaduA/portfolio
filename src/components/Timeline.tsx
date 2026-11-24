"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { Education } from "@/data/profile";
import RevealText from "./RevealText";

function Item({ item, i }: { item: Education; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yearY = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);
  const year = item.period.match(/\d{4}/)?.[0] ?? "";

  return (
    <div ref={ref} className="relative grid grid-cols-[auto_1fr] gap-6 py-16 md:grid-cols-12 md:gap-10 md:py-28">
      {/* Zaman çizelgesi düğümü */}
      <div className="relative md:col-span-1 md:flex md:justify-center">
        <motion.span
          className="relative z-10 mt-3 block size-4 rounded-full border-2 border-accent bg-ink"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1, backgroundColor: "#ff5a1f" }}
          viewport={{ margin: "-45% 0px -45% 0px" }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        />
      </div>

      <div className="md:col-span-11 md:grid md:grid-cols-11 md:gap-10">
        <motion.span
          style={{ y: yearY }}
          className="text-outline pointer-events-none absolute right-0 top-1/2 -z-10 -translate-y-1/2 select-none text-[28vw] font-semibold leading-none tracking-[-0.06em] md:text-[18vw]"
          aria-hidden
        >
          {year}
        </motion.span>

        <div className="md:col-span-6">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            {String(i + 1).padStart(2, "0")} — {item.period}
          </p>
          <h2 className="text-4xl font-medium leading-[0.95] tracking-tight md:text-7xl">
            <RevealText text={item.school} />
          </h2>
          <p className="mt-4 font-serif text-2xl italic text-mute md:text-3xl">{item.degree}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 md:col-span-4 md:col-start-8 md:mt-0"
        >
          <p className="font-mono text-[11px] uppercase tracking-widest text-mute">{item.location}</p>
          <p className="mt-3 text-lg leading-relaxed text-bone/80">{item.description}</p>
          <ul className="mt-6 space-y-3">
            {item.highlights.map((h) => (
              <li key={h} className="flex gap-3 border-t border-line pt-3 text-sm">
                <span className="text-accent">✦</span>
                {h}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

/** Kaydırdıkça çizilen dikey çizgi + parallax yıllarla eğitim zaman çizelgesi. */
export default function Timeline({ items }: { items: Education[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 60%", "end 60%"] });

  return (
    <section ref={ref} className="relative mx-auto max-w-[1600px] overflow-hidden px-5 pb-32 md:px-10">
      <div className="absolute bottom-0 left-[27px] top-0 w-px bg-line md:left-[calc(40px_+_((100%_-_80px)/12_-_440px/12)/2)]">
        <motion.div className="h-full w-full origin-top bg-accent" style={{ scaleY: scrollYProgress }} />
      </div>
      {items.map((item, i) => (
        <Item key={item.school} item={item} i={i} />
      ))}
    </section>
  );
}
