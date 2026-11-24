"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { useLenis } from "lenis/react";
import { nav, profile } from "@/data/profile";
import { RollText } from "./RollLink";
import Magnetic from "./Magnetic";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lenis = useLenis();

  // Aşağı kaydırınca gizlen, yukarı kaydırınca geri gel
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 160);
  });

  const toggle = (v: boolean) => {
    setOpen(v);
    if (v) lenis?.stop();
    else lenis?.start();
  };

  return (
    <>
      <motion.header
        style={{ viewTransitionName: "site-header" }}
        animate={{ y: hidden && !open ? "-120%" : "0%" }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 md:px-10"
      >
        <Link href="/" className="group flex items-center gap-3 mix-blend-difference" onClick={() => toggle(false)}>
          <span className="grid size-10 place-items-center rounded-full bg-bone font-mono text-[11px] font-bold tracking-tight text-ink transition-transform duration-700 ease-expo group-hover:rotate-[360deg]">
            {profile.initials}
          </span>
          <span className="hidden text-sm sm:block">
            <RollText text={`${profile.firstName} ${profile.lastName}`} />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-line bg-ink/60 p-1 backdrop-blur-xl md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className="relative rounded-full px-4 py-2 text-sm">
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-bone"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className={`relative z-10 ${active ? "text-ink" : "text-bone"}`}>
                  <RollText text={item.short} />
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Magnetic className="hidden md:inline-block">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-ink opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-ink" />
              </span>
              <RollText text="İletişim" />
            </a>
          </Magnetic>
          <button
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            onClick={() => toggle(!open)}
            className="relative z-50 grid size-12 place-items-center rounded-full bg-bone text-ink md:hidden"
          >
            <span className="relative block h-3 w-5">
              <motion.span
                className="absolute left-0 top-0 h-[1.5px] w-full bg-ink"
                animate={open ? { rotate: 45, top: 5 } : { rotate: 0, top: 0 }}
              />
              <motion.span
                className="absolute bottom-0 left-0 h-[1.5px] w-full bg-ink"
                animate={open ? { rotate: -45, bottom: 5 } : { rotate: 0, bottom: 0 }}
              />
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-between bg-accent px-5 pb-10 pt-28 text-ink md:hidden"
            initial={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 44px) 44px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul className="space-y-2">
              {[{ href: "/", label: "Ana Sayfa" }, ...nav].map((item, i) => (
                <li key={item.href} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "110%" }}
                    transition={{ duration: 0.7, delay: 0.15 + i * 0.06, ease: [0.19, 1, 0.22, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => toggle(false)}
                      className="flex items-baseline gap-3 text-5xl font-medium tracking-tight"
                    >
                      <span className="font-mono text-xs">0{i}</span>
                      {item.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
              exit={{ opacity: 0 }}
              className="flex flex-wrap gap-x-6 gap-y-2 text-sm"
            >
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              {profile.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label} ↗
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
