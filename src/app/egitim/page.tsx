import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import PageHero from "@/components/PageHero";
import Timeline from "@/components/Timeline";
import { education } from "@/data/profile";

export const metadata: Metadata = { title: "Eğitimim" };

export default function EducationPage() {
  return (
    <PageTransition>
      <PageHero
        index="04"
        eyebrow="Akademik"
        title="Eğitim"
        accent="yolculuğum"
        description="Fen lisesinden Bilkent'e: merakın disipline dönüştüğü yıllar."
      />
      <Timeline items={education} />
    </PageTransition>
  );
}
