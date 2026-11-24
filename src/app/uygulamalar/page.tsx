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
        description="Yapay zekâdan mobile, web'den backend'e kadar geliştirdiğim projeler. Kartın üzerinde gezin, tıkla ve kodu incele."
      />
      <AppsGallery apps={apps} />
    </PageTransition>
  );
}
