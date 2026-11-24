"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { profile } from "@/data/profile";
import Magnetic from "./Magnetic";
import RollLink from "./RollLink";
import Clock from "./Clock";

/** Kaydırdıkça yukarı doğru "açılan" büyük iletişim bölümü. */
export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-90, 0]);

  return (
    <footer ref={ref} className="relative overflow-hidden border-t border-line bg-ink-2">
      <motion.div style={{ y, scale }} className="mx-auto flex min-h-[90svh] max-w-[1600px] flex-col justify-between px-5 pb-8 pt-24 md:px-10">
        <div>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-mute">— Birlikte çalışalım</p>
          <h2 className="text-[15vw] font-medium leading-[0.85] tracking-[-0.06em] md:text-[11vw]">
            Bir fikrin
            <br />
            <span className="font-serif italic font-normal text-accent">mi var?</span>
          </h2>
        </div>

        <div className="mt-16 flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <Magnetic strength={0.5}>
            <a
              href={`mailto:${profile.email}`}
              data-cursor="Yaz"
              className="group relative grid size-44 place-items-center overflow-hidden rounded-full bg-accent text-ink md:size-56"
            >
              <span className="absolute inset-0 translate-y-full rounded-full bg-bone transition-transform duration-700 ease-expo group-hover:translate-y-0" />
              <motion.span style={{ rotate }} className="relative text-5xl">↗</motion.span>
            </a>
          </Magnetic>

          <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-sm md:grid-cols-3">
            <div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-mute">E-posta</p>
              <RollLink href={`mailto:${profile.email}`} text={profile.email} external className="break-all" />
            </div>
            <div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-mute">Sosyal</p>
              <ul className="space-y-1">
                {profile.socials.map((s) => (
                  <li key={s.label}>
                    <RollLink href={s.href} text={`${s.label} ↗`} external />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-mute">Yerel saat</p>
              <p>
                <Clock timezone={profile.timezone} /> · {profile.location}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-between border-t border-line pt-6 font-mono text-[11px] uppercase tracking-widest text-mute">
          <span>© 2026 {profile.firstName} {profile.lastName}</span>
          <span>Next.js · Motion · Lenis</span>
        </div>
      </motion.div>
    </footer>
  );
}
