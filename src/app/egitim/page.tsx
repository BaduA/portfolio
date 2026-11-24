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
        description="Okullarım, bölümlerim ve bu yolculukta öğrendiklerim."
      />
      <Timeline items={education} />
    </PageTransition>
  );
}
