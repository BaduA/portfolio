"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "motion/react";
import type { App } from "@/data/profile";

/** 3B eğilen, fareyi takip eden ışık yansımalı proje kartı. */
export default function AppCard({ app, index }: { app: App; index: number }) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 200, damping: 20 });
  const sy = useSpring(py, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(sy, [0, 1], [10, -10]);
  const rotateY = useTransform(sx, [0, 1], [-10, 10]);
  const gx = useTransform(sx, (v) => v * 100);
  const gy = useTransform(sy, (v) => v * 100);
  const glare = useMotionTemplate`radial-gradient(500px circle at ${gx}% ${gy}%, rgb(255 255 255 / 0.18), transparent 45%)`;
  const imgX = useTransform(sx, [0, 1], ["-3%", "3%"]);
  const imgY = useTransform(sy, [0, 1], ["-3%", "3%"]);

  return (
    <motion.a
      href={app.href}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="GitHub"
      className="group relative block h-full [perspective:1200px]"
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width);
        py.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-ink-2 p-3"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]" style={{ backgroundColor: app.accent }}>
          <motion.div className="absolute -inset-[4%]" style={{ x: imgX, y: imgY }}>
            <Image
              src={app.image}
              alt={app.title}
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover transition-transform duration-1000 ease-expo group-hover:scale-110"
            />
          </motion.div>
          <div
            className="absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-40"
            style={{ backgroundColor: app.accent }}
          />
          <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 font-mono text-[11px] uppercase tracking-widest backdrop-blur">
            {app.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-between gap-6 p-4 pt-6" style={{ transform: "translateZ(40px)" }}>
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-2xl font-medium tracking-tight md:text-3xl">{app.title}</h3>
              <span className="font-mono text-xs text-mute">
                {String(index + 1).padStart(2, "0")} / {app.year}
              </span>
            </div>
            <p className="mt-3 text-mute">{app.description}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {app.tags.map((t) => (
                <span key={t} className="rounded-full border border-line px-3 py-1 text-xs">
                  {t}
                </span>
              ))}
            </div>
            <span
              className="grid size-10 shrink-0 place-items-center rounded-full text-ink transition-transform duration-500 ease-expo group-hover:rotate-45"
              style={{ backgroundColor: app.accent }}
            >
              ↗
            </span>
          </div>
        </div>
        <motion.div className="pointer-events-none absolute inset-0 rounded-[1.75rem]" style={{ background: glare }} />
      </motion.div>
    </motion.a>
  );
}
