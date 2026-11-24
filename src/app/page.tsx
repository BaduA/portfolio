import Hero from "@/components/Hero";
import IndexLinks from "@/components/IndexLinks";
import Marquee from "@/components/Marquee";
import PageTransition from "@/components/PageTransition";
import { about } from "@/data/profile";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <div className="border-y border-line py-6 text-5xl font-medium tracking-tight md:text-8xl">
        <Marquee items={about.skills} />
      </div>
      <IndexLinks />
    </PageTransition>
  );
}
