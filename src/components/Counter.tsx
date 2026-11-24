"use client";

import { animate, useInView, useMotionValue, useTransform, motion } from "motion/react";
import { useEffect, useRef } from "react";

/** Görünür olunca 0'dan hedefe sayan sayı. */
export default function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const v = useMotionValue(0);
  const text = useTransform(v, (n) => `${prefix}${Math.round(n)}${suffix}`);
  useEffect(() => {
    if (!inView) return;
    const c = animate(v, to, { duration: 2.2, ease: [0.19, 1, 0.22, 1] });
    return () => c.stop();
  }, [inView, to, v]);
  return <motion.span ref={ref}>{text}</motion.span>;
}
