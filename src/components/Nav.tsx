"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, profile } from "@/data/profile";
import RollText from "./RollText";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = (v: boolean) => {
    setOpen(v);
    document.documentElement.style.overflow = v ? "hidden" : "";
  };

  return (
    <>
      <header
        data-open={open || undefined}
        className="site-header fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 md:px-10"
      >
        <Link href="/" className="group/roll flex items-center gap-3" onClick={() => toggle(false)}>
          <span className="grid size-10 place-items-center rounded-full bg-bone font-mono text-[11px] font-bold text-ink transition-transform duration-700 ease-expo group-hover/roll:rotate-[360deg]">
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
              <Link
                key={item.href}
                href={item.href}
                className={`group/roll rounded-full px-4 py-2 text-sm transition-colors duration-500 ${
                  active ? "bg-bone text-ink" : "hover:bg-white/5"
                }`}
              >
                <RollText text={item.short} />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            data-magnetic="0.3"
            className="group/roll hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-transform duration-300 ease-out md:flex"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-ink opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-ink" />
            </span>
            <RollText text="İletişim" />
          </a>
          <button
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            onClick={() => toggle(!open)}
            className="relative z-50 grid size-12 place-items-center rounded-full bg-bone text-ink md:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-ink transition-all duration-500 ease-expo ${open ? "top-[5px] rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-ink transition-all duration-500 ease-expo ${open ? "top-[5px] -rotate-45" : "top-[10px]"}`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        data-open={open || undefined}
        aria-hidden={!open}
        className="mobile-menu fixed inset-0 z-40 flex flex-col justify-between bg-accent px-5 pb-10 pt-28 text-ink md:hidden"
      >
        <ul className="space-y-2">
          {[{ href: "/", label: "Ana Sayfa" }, ...nav].map((item, i) => (
            <li key={item.href} className="overflow-hidden" style={{ "--i": i } as React.CSSProperties}>
              <Link
                href={item.href}
                tabIndex={open ? 0 : -1}
                onClick={() => toggle(false)}
                className="flex items-baseline gap-3 text-5xl font-medium tracking-tight"
              >
                <span className="font-mono text-xs">0{i}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href={`mailto:${profile.email}`} tabIndex={open ? 0 : -1}>
            {profile.email}
          </a>
          {profile.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
