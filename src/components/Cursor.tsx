"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { useEffect, useState, useSyncExternalStore } from "react";

const query = "(pointer: fine)";
const subscribe = (cb: () => void) => {
  const mq = window.matchMedia(query);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

/**
 * Özel imleç: küçük nokta + yay fiziğiyle takip eden halka.
 * `data-cursor="Metin"` olan elemanların üzerinde büyüyüp etiket gösterir,
 * `data-cursor="hover"` olanlarda sadece büyür.
 */
export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 });
  const enabled = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false
  );
  const [label, setLabel] = useState<string | null>(null);
  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-cursor");

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-cursor], a, button"
      );
      const value = target?.dataset.cursor;
      setHover(!!target);
      setLabel(value && value !== "hover" ? value : null);
    };
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const size = label ? 96 : hover ? 56 : 14;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[90]"
      style={{ viewTransitionName: "site-cursor" }}
    >
      <motion.div
        className="absolute left-0 top-0 flex items-center justify-center rounded-full"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: label ? "normal" : "difference",
        }}
        animate={{
          width: size,
          height: size,
          scale: down ? 0.8 : 1,
          backgroundColor: label ? "#ff5a1f" : "#ecebe6",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <AnimatePresence>
          {label && (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[11px] font-medium uppercase tracking-widest text-ink"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
