import type { App } from "@/data/profile";
import Cover from "./Cover";

/** 3B eğilen, fareyi takip eden ışık yansımalı kart (React Bits "TiltedCard"+"SpotlightCard" tarzı). */
export default function AppCard({ app, index }: { app: App; index: number }) {
  return (
    <a
      href={app.href}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="İncele"
      className="tilt spotlight group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-ink-2 p-3"
    >
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden rounded-[1.25rem] [container-type:inline-size]">
        <div className="absolute inset-0 transition-transform duration-1000 ease-expo group-hover:scale-110">
          <Cover image={app.image} color={app.color} label={app.title} sizes="(min-width: 768px) 40vw, 90vw" />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 font-mono text-[11px] uppercase tracking-widest backdrop-blur">
          {app.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-6 p-4 pt-6">
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
            style={{ backgroundColor: app.color }}
          >
            ↗
          </span>
        </div>
      </div>
    </a>
  );
}
