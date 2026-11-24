import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import PageHero from "@/components/PageHero";
import AppsGallery from "@/components/AppsGallery";
import { apps } from "@/data/profile";

export const metadata: Metadata = { title: "Uygulamalarım" };

export default function AppsPage() {
  return (
    <PageTransition>
      <PageHero
        index="03"
        eyebrow="Projeler"
        title="Uygulama"
        accent="larım"
        description="Geliştirdiğim projeler. Kartların üzerinde gezin, tıkla ve detayları incele."
      />
      <AppsGallery apps={apps} />
    </PageTransition>
  );
}
