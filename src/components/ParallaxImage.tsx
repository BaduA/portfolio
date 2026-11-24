"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

/** Görünür olunca perde gibi açılan, kaydırınca içinde kayan görsel. */
export default function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  return (
    <motion.div
      ref={ref}
      className="relative aspect-[4/5] overflow-hidden rounded-[2rem] md:sticky md:top-28"
      initial={{ clipPath: "inset(0 0 100% 0 round 2rem)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0 round 2rem)" }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div className="absolute -inset-y-[14%] inset-x-0" style={{ y }}>
        <Image src={src} alt={alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
      </motion.div>
    </motion.div>
  );
}
