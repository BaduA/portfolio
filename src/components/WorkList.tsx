"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { useState } from "react";
import type { Job } from "@/data/profile";

/**
 * İş listesi: satırın üzerine gelince imleci takip eden, hızına göre eğilen
 * önizleme görseli belirir. Tıklayınca satır akordeon gibi açılır.
 */
export default function WorkList({ jobs }: { jobs: Job[] }) {
  const [active, setActive] = useState<number | null>(null);
  const [open, setOpen] = useState<number | null>(0);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 150, damping: 20, mass: 0.5 });
  const y = useSpring(my, { stiffness: 150, damping: 20, mass: 0.5 });
  const vx = useVelocity(x);
  const rotate = useTransform(vx, [-2000, 2000], [-18, 18], { clamp: true });

  return (
    <section
      className="relative mx-auto max-w-[1600px] px-5 pb-32 md:px-10"
      onPointerMove={(e) => {
        mx.set(e.clientX);
        my.set(e.clientY);
      }}
    >
      <div className="hidden grid-cols-12 gap-4 border-b border-line pb-4 font-mono text-[11px] uppercase tracking-widest text-mute md:grid">
        <span className="col-span-1">No</span>
        <span className="col-span-5">Şirket</span>
        <span className="col-span-3">Rol</span>
        <span className="col-span-3 text-right">Dönem</span>
      </div>

      <ul onPointerLeave={() => setActive(null)}>
        {jobs.map((job, i) => {
          const isOpen = open === i;
          return (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.19, 1, 0.22, 1] }}
              className="border-b border-line"
              onPointerEnter={() => setActive(i)}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                data-cursor={isOpen ? "Kapat" : "Aç"}
                className="group grid w-full grid-cols-12 items-baseline gap-4 py-8 text-left md:py-10"
              >
                <span className="col-span-2 font-mono text-xs text-mute md:col-span-1">0{i + 1}</span>
                <span
                  className={`col-span-10 text-3xl font-medium tracking-tight transition-all duration-700 ease-expo md:col-span-5 md:text-5xl ${
                    active !== null && active !== i ? "opacity-30 blur-[1px]" : ""
                  } group-hover:translate-x-3`}
                >
                  {job.company}
                </span>
                <span className="col-span-7 col-start-3 text-mute md:col-span-3 md:col-start-auto">
                  {job.role}
                </span>
                <span className="col-span-3 text-right font-mono text-xs text-mute md:text-sm">{job.period}</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-12 gap-4 pb-10">
                      <div className="col-span-12 md:col-span-6 md:col-start-2">
                        <p className="text-lg leading-relaxed text-bone/80">{job.description}</p>
                      </div>
                      <div className="col-span-12 flex flex-wrap content-start gap-2 md:col-span-4 md:col-start-9 md:justify-end">
                        <span className="rounded-full bg-accent px-3 py-1 text-xs text-ink">{job.type}</span>
                        {job.tags.map((t) => (
                          <span key={t} className="rounded-full border border-line px-3 py-1 text-xs">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          );
        })}
      </ul>

      {/* İmleci takip eden önizleme */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-30 hidden aspect-[4/3] w-[320px] md:block"
        style={{ x, y, rotate, translateX: "-50%", translateY: "-50%" }}
      >
        <AnimatePresence>
          {active !== null && (
            <motion.div
              key="preview"
              className="relative size-full overflow-hidden rounded-2xl"
              initial={{ clipPath: "inset(50% 50% 50% 50% round 16px)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0% round 16px)" }}
              exit={{ clipPath: "inset(50% 50% 50% 50% round 16px)" }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
              {jobs.map((job, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  animate={{ y: `${(i - active) * 100}%` }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                >
                  <Image src={job.image} alt="" fill sizes="320px" className="object-cover" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
