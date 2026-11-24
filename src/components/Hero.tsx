"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import Magnetic from "./Magnetic";

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2400);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-grid h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={i}
          className="whitespace-nowrap text-accent"
          initial={{ y: "100%", filter: "blur(6px)" }}
          animate={{ y: "0%", filter: "blur(0px)" }}
          exit={{ y: "-100%", filter: "blur(6px)" }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const letter = {
  hidden: { y: "105%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 1.2, delay: 0.1 + i * 0.045, ease: [0.19, 1, 0.22, 1] as const },
  }),
};

function BigName({ text, offset = 0, className }: { text: string; offset?: number; className?: string }) {
  return (
    <span className={`-my-[0.12em] flex overflow-hidden py-[0.12em] ${className ?? ""}`} aria-label={text}>
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          aria-hidden
          custom={i + offset}
          variants={letter}
          initial="hidden"
          animate="show"
          className="inline-block"
        >
          {c === " " ? " " : c}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const nameX1 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const nameX2 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-5 pb-10 pt-32 md:px-10">
      {/* Portre: clip-path ile açılır, kaydırınca parallax */}
      <motion.div
        className="relative mb-8 ml-auto aspect-[4/5] w-[48vw] overflow-hidden rounded-[2rem] md:absolute md:right-[12vw] md:top-[14vh] md:mb-0 md:w-[22vw]"
        initial={{ clipPath: "inset(100% 0 0 0 round 2rem)" }}
        animate={{ clipPath: "inset(0% 0 0 0 round 2rem)" }}
        transition={{ duration: 1.6, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
        data-cursor="Merhaba"
      >
        <motion.div className="relative size-full" style={{ y: imgY, scale: imgScale }}>
          <Image
            src={profile.portrait}
            alt={`${profile.firstName} ${profile.lastName}`}
            fill
            priority
            sizes="(min-width: 768px) 22vw, 46vw"
            className="object-cover grayscale transition-[filter] duration-700 hover:grayscale-0"
          />
        </motion.div>
      </motion.div>

      <motion.div style={{ opacity: fade }} className="relative z-10 mb-8 flex flex-row items-end justify-between gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="max-w-md text-lg leading-snug text-mute md:text-xl"
        >
          <span className="text-bone">Merhaba, ben {profile.firstName}.</span>
          <br />
          <RotatingRole />
          <br />
          {profile.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, type: "spring" }}
        >
          <Magnetic strength={0.4}>
            <a
              href="#index"
              data-cursor="Keşfet"
              className="relative grid size-24 shrink-0 place-items-center rounded-full border border-line md:size-32"
            >
              <svg viewBox="0 0 100 100" className="absolute inset-0 size-full animate-[spin_14s_linear_infinite]">
                <defs>
                  <path id="circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                </defs>
                <text className="fill-bone font-mono text-[8px] uppercase">
                  <textPath href="#circle" textLength="236" lengthAdjust="spacing">kaydır · keşfet · kaydır · keşfet ·</textPath>
                </text>
              </svg>
              <span className="text-2xl">↓</span>
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <h1 className="relative z-10 select-none text-[19vw] font-semibold leading-[0.82] tracking-[-0.07em] md:text-[15vw]">
        <motion.span style={{ x: nameX1 }} className="block">
          <BigName text={profile.firstName} />
        </motion.span>
        <motion.span style={{ x: nameX2 }} className="block md:pl-[14vw]">
          <BigName text={profile.lastName} offset={profile.firstName.length} className="font-serif font-normal italic" />
        </motion.span>
      </h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="relative z-10 mt-8 flex items-center justify-between border-t border-line pt-4 font-mono text-[11px] uppercase tracking-widest text-mute"
      >
        <span className="flex items-center gap-2">
          <span className="size-2 animate-pulse rounded-full bg-emerald-400" /> {profile.availability}
        </span>
        <span className="hidden sm:block">{profile.location}</span>
        <span>Portfolyo ©2026</span>
      </motion.div>
    </section>
  );
}
