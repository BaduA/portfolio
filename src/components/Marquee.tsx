"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useReducedMotion,
} from "motion/react";
import { useRef } from "react";

const wrap = (min: number, max: number, v: number) => {
  const r = max - min;
  return ((((v - min) % r) + r) % r) + min;
};

/** Kaydırma hızına tepki veren (hızlanan, yön değiştiren, eğilen) sonsuz şerit. */
export default function Marquee({
  items,
  baseVelocity = -2,
  className,
}: {
  items: string[];
  baseVelocity?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [0, 1000], [0, 5], { clamp: false });
  const skew = useTransform(smooth, [-2000, 2000], [8, -8]);
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);
  const dir = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let move = dir.current * baseVelocity * (delta / 1000);
    const f = factor.get();
    if (f < 0) dir.current = -1;
    else if (f > 0) dir.current = 1;
    move += dir.current * move * f;
    baseX.set(baseX.get() + move);
  });

  const row = (
    <span className="flex shrink-0 items-center">
      {items.map((t, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6">{t}</span>
          <span className="text-accent">✦</span>
        </span>
      ))}
    </span>
  );

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className ?? ""}`}>
      <motion.div className="flex w-max" style={{ x, skewX: skew }}>
        {row}
        {row}
        {row}
        {row}
      </motion.div>
    </div>
  );
}
