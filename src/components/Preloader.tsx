"use client";

import { AnimatePresence, animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

/** Oturumda bir kez oynayan açılış: sayaç + isim, ardından perde yukarı kalkar. */
export default function Preloader() {
  const [show, setShow] = useState(true);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => String(Math.round(v)).padStart(3, "0"));
  const bar = useTransform(count, [0, 100], [0, 1]);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("intro-seen") === "1";
      sessionStorage.setItem("intro-seen", "1");
    } catch {}
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const raf = requestAnimationFrame(() => setShow(false));
      return () => cancelAnimationFrame(raf);
    }
    const controls = animate(count, 100, {
      duration: 2,
      ease: [0.65, 0, 0.35, 1],
      onComplete: () => setTimeout(() => setShow(false), 250),
    });
    return () => controls.stop();
  }, [count]);

  const name = `${profile.firstName} ${profile.lastName}`;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="preloader fixed inset-0 z-[100] flex flex-col justify-between bg-bone p-5 text-ink md:p-10"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex justify-between font-mono text-xs uppercase tracking-widest">
            <span>Portfolyo</span>
            <span>©{"2026"}</span>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="text-[13vw] font-medium leading-[0.9] tracking-[-0.06em] md:text-[9vw]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
            >
              {name.split("").map((c, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, filter: "blur(12px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ delay: 0.2 + i * 0.04, duration: 0.6 }}
                >
                  {c === " " ? " " : c}
                </motion.span>
              ))}
            </motion.h1>
          </div>
          <div className="flex items-end justify-between">
            <div className="h-px w-1/2 overflow-hidden bg-ink/15">
              <motion.div
                className="h-full bg-ink"
                style={{ scaleX: bar, transformOrigin: "left" }}
              />
            </div>
            <motion.span className="font-mono text-6xl font-medium tabular-nums md:text-8xl">{rounded}</motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
