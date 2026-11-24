import type { Education } from "@/data/profile";
import RevealText from "./RevealText";

/** Kaydırdıkça çizilen çizgi ve parallax yıllarla eğitim zaman çizelgesi (CSS scroll-driven). */
export default function Timeline({ items }: { items: Education[] }) {
  return (
    <section className="sd-line-wrap relative mx-auto max-w-[1600px] overflow-hidden px-5 pb-32 md:px-10">
      <div className="absolute bottom-0 left-[27px] top-0 w-px bg-line md:left-[47px]">
        <div className="sd-line h-full w-full bg-accent" />
      </div>

      {items.map((item, i) => {
        const year = item.period.match(/\d{2}[\dX]{2}/)?.[0] ?? "";
        return (
          <div key={item.school + i} className="relative grid grid-cols-[16px_1fr] gap-6 py-16 md:grid-cols-[16px_1fr] md:gap-16 md:py-28">
            <span data-reveal="up" className="relative z-10 mt-3 block size-4 rounded-full border-2 border-accent bg-accent" />

            <div className="relative md:grid md:grid-cols-12 md:gap-10">
              <span
                aria-hidden
                className="sd-parallax text-outline pointer-events-none absolute -right-4 top-0 -z-10 select-none text-[26vw] font-semibold leading-none tracking-[-0.06em] md:text-[16vw]"
                style={{ "--p": "30%" } as React.CSSProperties}
              >
                {year}
              </span>

              <div className="md:col-span-7">
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
                  {String(i + 1).padStart(2, "0")} — {item.period}
                </p>
                <RevealText as="h2" text={item.school} className="text-4xl font-medium leading-[0.95] tracking-tight md:text-7xl" />
                <p className="mt-4 font-serif text-2xl italic text-mute md:text-3xl">{item.degree}</p>
              </div>

              <div data-reveal="up" className="mt-8 md:col-span-4 md:col-start-9 md:mt-0" style={{ "--d": "150ms" } as React.CSSProperties}>
                <p className="font-mono text-[11px] uppercase tracking-widest text-mute">{item.location}</p>
                <p className="mt-3 text-lg leading-relaxed text-bone/80">{item.description}</p>
                <ul className="mt-6 space-y-3">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex gap-3 border-t border-line pt-3 text-sm">
                      <span className="text-accent">✦</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
