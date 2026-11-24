import { profile } from "@/data/profile";
import Portrait from "./Portrait";
import Roles from "./Roles";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

function Letters({ text, offset = 0 }: { text: string; offset?: number }) {
  return (
    <span aria-label={text} className="flex">
      {text.split("").map((c, i) => (
        <span key={i} aria-hidden className="mask">
          <span className="rise" style={d(60 + (i + offset) * 35)}>
            {c === " " ? " " : c}
          </span>
        </span>
      ))}
    </span>
  );
}

/** Sunucuda render edilir; tüm giriş animasyonları CSS ile JS beklemeden başlar. */
export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-5 pb-10 pt-32 md:px-10">
      <div
        className="clip-in relative mb-8 ml-auto aspect-[4/5] w-[48vw] overflow-hidden rounded-[2rem] [container-type:inline-size] md:absolute md:right-[12vw] md:top-[14vh] md:mb-0 md:w-[22vw]"
        style={d(250)}
        data-cursor="Merhaba"
      >
        <div className="sd-parallax absolute -inset-y-[12%] inset-x-0" style={{ "--p": "8%" } as React.CSSProperties}>
          <Portrait sizes="(min-width: 768px) 22vw, 48vw" priority />
        </div>
      </div>

      <div className="sd-hero-fade relative z-10 mb-8 flex items-end justify-between gap-6 md:mb-12">
        <p className="fade-in max-w-md text-lg leading-snug text-mute md:text-xl" style={d(450)}>
          <span className="text-bone">Merhaba, ben {profile.firstName}.</span>
          <br />
          <Roles roles={profile.roles} />
          <br />
          {profile.tagline}
        </p>
        <a
          href="#index"
          data-cursor="Keşfet"
          data-magnetic="0.4"
          className="fade-in relative grid size-24 shrink-0 place-items-center rounded-full border border-line transition-transform duration-300 ease-out md:size-32"
          style={d(600)}
        >
          <svg viewBox="0 0 100 100" className="absolute inset-0 size-full animate-[spin_14s_linear_infinite]" aria-hidden>
            <defs>
              <path id="circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
            </defs>
            <text className="fill-bone font-mono text-[8px] uppercase">
              <textPath href="#circle" textLength="236" lengthAdjust="spacing">
                kaydır · keşfet · kaydır · keşfet ·
              </textPath>
            </text>
          </svg>
          <span className="text-2xl">↓</span>
          <span className="sr-only">Aşağı kaydır</span>
        </a>
      </div>

      <h1 className="relative z-10 select-none text-[19vw] font-semibold leading-[0.82] tracking-[-0.07em] md:text-[15vw]">
        <span className="sd-hero-left block">
          <Letters text={profile.firstName} />
        </span>
        <span className="sd-hero-right block font-serif font-normal italic md:pl-[14vw]">
          <Letters text={profile.lastName} offset={profile.firstName.length} />
        </span>
      </h1>

      <div className="relative z-10 mt-8 flex items-center justify-between border-t border-line pt-4 font-mono text-[11px] uppercase tracking-widest text-mute">
        <span className="fade-in flex items-center gap-2" style={d(700)}>
          <span className="size-2 animate-pulse rounded-full bg-emerald-400" /> {profile.availability}
        </span>
        <span className="fade-in hidden sm:block" style={d(750)}>{profile.location}</span>
        <span className="fade-in" style={d(800)}>Portfolyo ©2026</span>
      </div>
    </section>
  );
}
