import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import PageHero from "@/components/PageHero";
import ScrollFillText from "@/components/ScrollFillText";
import Marquee from "@/components/Marquee";
import RevealText from "@/components/RevealText";
import Portrait from "@/components/Portrait";
import { about, profile } from "@/data/profile";

export const metadata: Metadata = { title: "Ben Kimim?" };

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHero index="01" eyebrow="Hakkımda" title="Ben" accent="kimim?" description={profile.tagline} />

      <section className="mx-auto grid max-w-[1600px] items-start gap-12 px-5 pb-24 md:grid-cols-12 md:px-10 md:pb-40">
        <div
          data-reveal="clip"
          className="relative aspect-[4/5] overflow-hidden rounded-[2rem] [container-type:inline-size] md:sticky md:top-28 md:col-span-4"
        >
          <div className="sd-parallax absolute -inset-y-[12%] inset-x-0" style={{ "--p": "10%" } as React.CSSProperties}>
            <Portrait sizes="(min-width: 768px) 33vw, 100vw" />
          </div>
        </div>
        <ScrollFillText
          text={about.intro}
          className="text-3xl font-medium leading-[1.15] tracking-tight md:col-span-7 md:col-start-6 md:text-5xl"
        />
      </section>

      <section className="grid gap-px border-y border-line bg-line md:grid-cols-3">
        {about.stats.map((s) => (
          <div key={s.label} className="bg-ink px-5 py-14 md:px-10">
            <p className="text-7xl font-medium tracking-tighter tabular-nums md:text-9xl">
              <span data-count={s.value} data-suffix={s.suffix}>
                {s.value}
                {s.suffix}
              </span>
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-mute">{s.label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
        <h2 className="mb-16 text-5xl font-medium tracking-tight md:text-7xl">
          <RevealText text="Nasıl" />{" "}
          <RevealText text="çalışırım" delay={80} className="font-serif font-normal italic text-accent" />
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {about.principles.map((p, i) => (
            <div
              key={p.title}
              data-reveal="up"
              style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
              className="spotlight group rounded-3xl border border-line p-6"
            >
              <p className="font-mono text-xs text-accent">0{i + 1}</p>
              <h3 className="mt-4 text-2xl font-medium transition-transform duration-500 ease-expo group-hover:translate-x-2">
                {p.title}
              </h3>
              <p className="mt-3 text-mute">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="space-y-2 border-y border-line py-8 text-4xl font-medium tracking-tight md:text-7xl">
        <Marquee items={about.skills} speed={35} />
        <Marquee items={[...about.skills].reverse()} reverse speed={35} className="text-outline" />
      </div>
      <div className="h-24 md:h-40" />
    </PageTransition>
  );
}
