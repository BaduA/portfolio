import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import PageHero from "@/components/PageHero";
import WorkList from "@/components/WorkList";
import { jobs } from "@/data/profile";

export const metadata: Metadata = { title: "Çalıştığım İşler" };

export default function WorkPage() {
  return (
    <PageTransition>
      <PageHero
        index="02"
        eyebrow="Deneyim"
        title="Çalıştığım"
        accent="işler"
        description="Farklı ekiplerde, farklı ölçeklerde ürünler geliştirdim. Detaylar için satırlara tıkla."
      />
      <WorkList jobs={jobs} />
    </PageTransition>
  );
}
