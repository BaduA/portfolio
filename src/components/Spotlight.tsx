"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

/** Fareyi yavaşça takip eden yumuşak renkli ışık + arka plan ızgarası. */
export default function Spotlight() {
  const mx = useMotionValue(50);
  const my = useMotionValue(30);
  const x = useSpring(mx, { stiffness: 40, damping: 20 });
  const y = useSpring(my, { stiffness: 40, damping: 20 });
  const bg = useMotionTemplate`radial-gradient(600px circle at ${x}% ${y}%, rgb(255 90 31 / 0.16), transparent 60%)`;

  useEffect(() => {
    const move = (e: PointerEvent) => {
      mx.set((e.clientX / window.innerWidth) * 100);
      my.set((e.clientY / window.innerHeight) * 100);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [mx, my]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(236 235 230) 1px, transparent 1px), linear-gradient(90deg, rgb(236 235 230) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
      />
      <motion.div className="absolute inset-0" style={{ background: bg }} />
    </div>
  );
}
