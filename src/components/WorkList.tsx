import type { Job } from "@/data/profile";
import Cover from "./Cover";

/**
 * İş listesi. Her satır yerel <details> akordeonu (JS yok).
 * Masaüstünde satırın üzerine gelince imleci takip eden, hızına göre eğilen
 * bir önizleme belirir (konum Effects.tsx'teki tek rAF döngüsünden).
 */
export default function WorkList({ jobs }: { jobs: Job[] }) {
  return (
    <section data-follow className="group/list relative mx-auto max-w-[1600px] px-5 pb-32 md:px-10">
      <div className="hidden grid-cols-12 gap-4 border-b border-line pb-4 font-mono text-[11px] uppercase tracking-widest text-mute md:grid">
        <span className="col-span-1">No</span>
        <span className="col-span-5">Şirket</span>
        <span className="col-span-3">Rol</span>
        <span className="col-span-3 text-right">Dönem</span>
      </div>

      <div>
        {jobs.map((job, i) => (
          <details
            key={i}
            name="jobs"
            open={i === 0}
            data-reveal="up"
            data-follow-index={i}
            style={{ "--d": `${i * 70}ms` } as React.CSSProperties}
            className="job group/job border-b border-line"
          >
            <summary data-cursor="Aç" className="grid cursor-pointer grid-cols-12 items-baseline gap-4 py-8 md:py-10">
              <span className="col-span-2 font-mono text-xs text-mute md:col-span-1">0{i + 1}</span>
              <span className="col-span-10 text-3xl font-medium tracking-tight transition-[translate,opacity,filter] duration-700 ease-expo group-hover/job:translate-x-3 md:col-span-5 md:text-5xl md:group-hover/list:opacity-30 md:group-hover/list:blur-[1px] md:group-hover/job:!opacity-100 md:group-hover/job:!blur-none">
                {job.company}
              </span>
              <span className="col-span-7 col-start-3 text-mute md:col-span-3 md:col-start-auto">{job.role}</span>
              <span className="col-span-3 flex items-center justify-end gap-3 text-right font-mono text-xs text-mute md:text-sm">
                {job.period}
                <span className="hidden size-6 place-items-center rounded-full border border-line transition-transform duration-500 ease-expo group-open/job:rotate-45 md:grid">
                  +
                </span>
              </span>
            </summary>
            <div className="grid grid-cols-12 gap-4 pb-10">
              <p className="col-span-12 text-lg leading-relaxed text-bone/80 md:col-span-6 md:col-start-2">{job.description}</p>
              <div className="col-span-12 flex flex-wrap content-start gap-2 md:col-span-4 md:col-start-9 md:justify-end">
                <span className="rounded-full px-3 py-1 text-xs text-ink" style={{ backgroundColor: job.color }}>
                  {job.type}
                </span>
                {job.tags.map((t) => (
                  <span key={t} className="rounded-full border border-line px-3 py-1 text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>

      {/* İmleci takip eden önizleme */}
      <div
        aria-hidden
        className="follow-card pointer-events-none fixed left-0 top-0 z-30 hidden aspect-[4/3] w-[300px] md:block"
      >
        <div className="size-full scale-50 overflow-hidden rounded-2xl opacity-0 transition-[scale,opacity] duration-500 ease-expo [[data-show]>&]:scale-100 [[data-show]>&]:opacity-100">
          <div
            className="relative h-full transition-transform duration-700 ease-io [container-type:inline-size]"
            style={{ transform: "translateY(calc(var(--i, 0) * -100%))" }}
          >
            {jobs.map((job, i) => (
              <div key={i} className="relative h-full overflow-hidden">
                <Cover color={job.color} label={job.company} sizes="300px" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
