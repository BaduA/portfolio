import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import PageHero from "@/components/PageHero";
import ScrollFillText from "@/components/ScrollFillText";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";
import RevealText from "@/components/RevealText";
import ParallaxImage from "@/components/ParallaxImage";
import { about, profile } from "@/data/profile";

export const metadata: Metadata = { title: "Ben Kimim?" };

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHero
        index="01"
        eyebrow="Hakkımda"
        title="Ben"
        accent="kimim?"
        description={profile.tagline}
      />

      <section className="mx-auto grid max-w-[1600px] gap-12 px-5 pb-24 md:grid-cols-12 md:px-10 md:pb-40">
        <div className="md:col-span-4">
          <ParallaxImage src={profile.portrait} alt={`${profile.firstName} ${profile.lastName}`} />
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <ScrollFillText
            text={about.intro}
            className="text-3xl font-medium leading-[1.15] tracking-tight md:text-5xl"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-px overflow-hidden border-y border-line bg-line md:grid-cols-3">
        {about.stats.map((s) => (
          <div key={s.label} className="bg-ink px-5 py-14 md:px-10">
            <p className="text-7xl font-medium tracking-tighter md:text-9xl">
              <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-mute">{s.label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
        <h2 className="mb-16 text-5xl font-medium tracking-tight md:text-7xl">
          <RevealText text="Nasıl" /> <RevealText text="çalışırım" className="font-serif font-normal italic text-accent" />
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {about.principles.map((p, i) => (
            <div key={p.title} className="group border-t border-line pt-6">
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
        <Marquee items={about.skills} baseVelocity={-1.5} />
        <Marquee items={[...about.skills].reverse()} baseVelocity={1.5} className="text-outline" />
      </div>
      <div className="h-24 md:h-40" />
    </PageTransition>
  );
}
