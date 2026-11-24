import { profile } from "@/data/profile";
import RollText from "./RollText";
import Clock from "./Clock";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-2">
      <div className="sd-footer mx-auto flex min-h-[90svh] max-w-[1600px] flex-col justify-between px-5 pb-8 pt-24 md:px-10">
        <div>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-mute">— Birlikte çalışalım</p>
          <h2 className="text-[15vw] font-medium leading-[0.85] tracking-[-0.06em] md:text-[11vw]">
            <span className="shiny block">Bir fikrin</span>
            <span className="font-serif font-normal italic text-accent">mi var?</span>
          </h2>
        </div>

        <div className="mt-16 flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <a
            href={`mailto:${profile.email}`}
            data-cursor="Yaz"
            data-magnetic="0.5"
            className="group relative grid size-44 place-items-center overflow-hidden rounded-full bg-accent text-ink transition-transform duration-300 ease-out md:size-56"
          >
            <span className="absolute inset-0 translate-y-full rounded-full bg-bone transition-transform duration-700 ease-expo group-hover:translate-y-0" />
            <span className="sd-spin relative text-5xl">↗</span>
            <span className="sr-only">E-posta gönder</span>
          </a>

          <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-sm md:grid-cols-3">
            <div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-mute">E-posta</p>
              <a href={`mailto:${profile.email}`} className="group/roll break-all">
                <RollText text={profile.email} />
              </a>
            </div>
            <div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-mute">Sosyal</p>
              <ul className="space-y-1">
                {profile.socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="group/roll">
                      <RollText text={`${s.label} ↗`} />
                    </a>
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
          <span>
            © 2026 {profile.firstName} {profile.lastName}
          </span>
          <span>Next.js · CSS</span>
        </div>
      </div>
    </footer>
  );
}
