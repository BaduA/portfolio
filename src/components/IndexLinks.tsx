"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { nav } from "@/data/profile";

const blurbs: Record<string, string> = {
  "/hakkimda": "Hikâyem, değerlerim ve yeteneklerim",
  "/isler": "Çalıştığım şirketler ve roller",
  "/uygulamalar": "Geliştirdiğim projeler ve ürünler",
  "/egitim": "Okullarım ve akademik yolculuğum",
};

/** Ana sayfadaki büyük, üzerine gelince arka planı "dolan" bölüm listesi. */
export default function IndexLinks() {
  return (
    <section id="index" className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
      <p className="mb-10 font-mono text-xs uppercase tracking-[0.3em] text-mute">— İçindekiler</p>
      <ul className="border-t border-line">
        {nav.map((item, i) => (
          <motion.li
            key={item.href}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: i * 0.08, ease: [0.19, 1, 0.22, 1] }}
            className="border-b border-line"
          >
            <Link
              href={item.href}
              data-cursor="Git"
              className="group relative flex items-center justify-between gap-6 overflow-hidden px-2 py-8 md:px-6 md:py-12"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-bone transition-transform duration-700 ease-expo group-hover:scale-y-100" />
              <span className="relative flex items-baseline gap-4 md:gap-10">
                <span className="font-mono text-xs text-mute transition-colors duration-500 group-hover:text-ink">0{i + 1}</span>
                <span className="text-4xl font-medium tracking-tight transition-all duration-700 ease-expo group-hover:translate-x-4 group-hover:text-ink md:text-7xl">
                  {item.label}
                </span>
              </span>
              <span className="relative hidden text-sm text-mute transition-colors duration-500 group-hover:text-ink md:block">
                {blurbs[item.href]}
              </span>
              <span className="relative grid size-12 shrink-0 place-items-center rounded-full border border-line text-xl transition-all duration-700 ease-expo group-hover:-rotate-45 group-hover:border-ink group-hover:bg-ink group-hover:text-bone md:size-16">
                →
              </span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
