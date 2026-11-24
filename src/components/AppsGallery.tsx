"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import type { App } from "@/data/profile";
import AppCard from "./AppCard";

/**
 * Masaüstünde: dikey kaydırma yatay galeriye dönüşür (sabitlenmiş bölüm).
 * Mobilde: kartlar alt alta, görünür oldukça yukarı süzülür.
 */
export default function AppsGallery({ apps }: { apps: App[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const x = useTransform(smooth, [0, 1], ["0%", `-${((apps.length - 1) / (apps.length + 0.6)) * 100}%`]);
  const bar = useTransform(smooth, [0, 1], [0, 1]);

  return (
    <>
      {/* Masaüstü: yatay */}
      <div ref={ref} className="relative hidden md:block" style={{ height: `${apps.length * 70}vh` }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <motion.div style={{ x }} className="flex w-max gap-8 pl-10 pr-[30vw]">
            {apps.map((app, i) => (
              <div key={app.title} className="h-[72vh] w-[38vw] max-w-[620px]">
                <AppCard app={app} index={i} />
              </div>
            ))}
          </motion.div>
          <div className="mx-10 mt-10 flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest text-mute">
            <span>Kaydır</span>
            <div className="h-px flex-1 bg-line">
              <motion.div className="h-full origin-left bg-accent" style={{ scaleX: bar }} />
            </div>
            <span>{apps.length} proje</span>
          </div>
        </div>
      </div>

      {/* Mobil: dikey */}
      <div className="grid gap-6 px-5 pb-24 md:hidden">
        {apps.map((app, i) => (
          <motion.div
            key={app.title}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          >
            <AppCard app={app} index={i} />
          </motion.div>
        ))}
      </div>
    </>
  );
}
