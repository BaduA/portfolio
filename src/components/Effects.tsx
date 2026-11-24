"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import type Lenis from "lenis";

/**
 * Sitedeki tüm etkileşimleri tek yerde, kütüphanesiz ve olay delegasyonuyla yönetir:
 *  - [data-reveal]  → görünür olunca .is-in (tek IntersectionObserver)
 *  - [data-count]   → görünür olunca 0'dan sayar
 *  - [data-magnetic]→ imlece doğru çekilir
 *  - .tilt / .spotlight → fareye göre 3B eğim ve ışık
 *  - [data-follow]  → satır üzerinde imleci takip eden önizleme
 *  - özel imleç, tıklama kıvılcımı, kaydırma yönü, Lenis akıcı kaydırma
 * Ağır olan kısımlar (imleç, Lenis) tarayıcı boşta kalınca yüklenir; ilk açılışı yavaşlatmaz.
 */

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = () => window.matchMedia("(pointer: fine)").matches;
const idle = (cb: () => void) =>
  "requestIdleCallback" in window ? window.requestIdleCallback(cb, { timeout: 1200 }) : setTimeout(cb, 200);

let lenis: Lenis | null = null;

function countUp(el: HTMLElement) {
  const to = Number(el.dataset.count ?? 0);
  const suffix = el.dataset.suffix ?? "";
  if (reduced()) {
    el.textContent = `${to}${suffix}`;
    return;
  }
  const start = performance.now();
  const dur = 1600;
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / dur);
    const e = 1 - Math.pow(1 - t, 4);
    el.textContent = `${Math.round(to * e)}${suffix}`;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export default function Effects() {
  const pathname = usePathname();

  // Sayfa değişince: yukarı kaydır + yeni öğeleri gözle
  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true, force: true });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          el.classList.add("is-in");
          if (el.dataset.count !== undefined) countUp(el);
          io.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in), [data-count]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  // Genel etkileşimler (bir kez kurulur)
  useEffect(() => {
    const root = document.documentElement;
    const cleanups: (() => void)[] = [];

    // Kaydırma yönü → menü gizle/göster
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        root.dataset.scroll = y > lastY && y > 160 ? "down" : "up";
        lastY = y;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    // Tıklama kıvılcımı
    const onClick = (e: PointerEvent) => {
      if (reduced() || e.pointerType !== "mouse") return;
      for (let i = 0; i < 8; i++) {
        const s = document.createElement("i");
        s.className = "spark";
        s.style.left = `${e.clientX}px`;
        s.style.top = `${e.clientY}px`;
        s.style.setProperty("--a", `${i * 45}deg`);
        document.body.appendChild(s);
        s.addEventListener("animationend", () => s.remove(), { once: true });
      }
    };
    window.addEventListener("pointerdown", onClick);
    cleanups.push(() => window.removeEventListener("pointerdown", onClick));

    if (!fine() || reduced()) {
      return () => cleanups.forEach((c) => c());
    }

    // --- Sadece mouse olan cihazlarda: imleç, manyetik, tilt, takip eden önizleme ---
    let mx = -100,
      my = -100;
    let cx = mx,
      cy = my;
    let cursor: HTMLDivElement | null = null;
    let raf = 0;

    // Takip eden önizleme durumu
    let follow: HTMLElement | null = null;
    let fx = 0,
      fy = 0,
      fvx = 0;

    const loop = () => {
      cx += (mx - cx) * 0.22;
      cy += (my - cy) * 0.22;
      if (cursor) cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      if (follow) {
        const nx = fx + (mx - fx) * 0.12;
        fvx = nx - fx;
        fx = nx;
        fy += (my - fy) * 0.12;
        const rot = Math.max(-15, Math.min(15, fvx * 0.8));
        follow.style.transform = `translate3d(${fx}px, ${fy}px, 0) translate(-50%, -50%) rotate(${rot}deg)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      mx = e.clientX;
      my = e.clientY;
      const t = e.target as HTMLElement;

      // İmleç durumu
      if (cursor) {
        const target = t.closest<HTMLElement>("[data-cursor], a, button, summary");
        const label = target?.dataset.cursor;
        cursor.toggleAttribute("data-hover", !!target);
        if (label) cursor.dataset.label = label;
        else delete cursor.dataset.label;
      }

      // Manyetik
      const mag = t.closest<HTMLElement>("[data-magnetic]");
      if (mag) {
        const r = mag.getBoundingClientRect();
        const k = Number(mag.dataset.magnetic) || 0.35;
        mag.style.transform = `translate(${(mx - r.left - r.width / 2) * k}px, ${(my - r.top - r.height / 2) * k}px)`;
      }

      // Tilt + spotlight
      const card = t.closest<HTMLElement>(".tilt, .spotlight");
      if (card) {
        const r = card.getBoundingClientRect();
        const px = (mx - r.left) / r.width;
        const py = (my - r.top) / r.height;
        card.style.setProperty("--mx", `${px * 100}%`);
        card.style.setProperty("--my", `${py * 100}%`);
        if (card.classList.contains("tilt")) {
          card.toggleAttribute("data-active", true);
          card.style.setProperty("--rx", `${(0.5 - py) * 12}deg`);
          card.style.setProperty("--ry", `${(px - 0.5) * 12}deg`);
        }
      }

      // Takip eden önizleme
      const followRoot = t.closest<HTMLElement>("[data-follow]");
      const item = t.closest<HTMLElement>("[data-follow-index]");
      const next = followRoot?.querySelector<HTMLElement>(".follow-card") ?? null;
      if (next !== follow) {
        follow?.removeAttribute("data-show");
        follow = next;
        if (follow) {
          fx = mx;
          fy = my;
        }
      }
      if (follow) {
        follow.toggleAttribute("data-show", !!item);
        if (item) follow.style.setProperty("--i", item.dataset.followIndex ?? "0");
      }
    };

    const onOut = (e: PointerEvent) => {
      const from = e.target as HTMLElement;
      const to = e.relatedTarget as HTMLElement | null;
      const mag = from.closest<HTMLElement>("[data-magnetic]");
      if (mag && !mag.contains(to)) mag.style.transform = "";
      const card = from.closest<HTMLElement>(".tilt");
      if (card && !card.contains(to)) {
        card.removeAttribute("data-active");
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onOut, { passive: true });
    raf = requestAnimationFrame(loop);
    cleanups.push(() => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onOut);
      cancelAnimationFrame(raf);
    });

    // İmleç ve Lenis: tarayıcı boştayken
    idle(() => {
      cursor = document.createElement("div");
      cursor.className = "cursor";
      cursor.setAttribute("aria-hidden", "true");
      document.body.appendChild(cursor);
      root.classList.add("has-cursor");
      cleanups.push(() => {
        cursor?.remove();
        root.classList.remove("has-cursor");
      });

      import("lenis").then(({ default: L }) => {
        lenis = new L({ lerp: 0.1, autoRaf: true });
        cleanups.push(() => {
          lenis?.destroy();
          lenis = null;
        });
      });
    });

    return () => cleanups.forEach((c) => c());
  }, []);

  return null;
}
