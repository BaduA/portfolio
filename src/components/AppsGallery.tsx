import type { App } from "@/data/profile";
import AppCard from "./AppCard";

/**
 * Masaüstü: dikey kaydırma yatay galeriye dönüşür — tamamen CSS scroll-driven animasyon.
 * Desteklemeyen tarayıcıda yatay kaydırılabilir şerit olur. Mobil: alt alta kartlar.
 */
export default function AppsGallery({ apps }: { apps: App[] }) {
  return (
    <>
      <div className="sd-gallery relative hidden md:block" style={{ height: `${apps.length * 65}vh` }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="sd-gallery-viewport">
            <div className="sd-gallery-track flex w-max gap-8 px-10">
              {apps.map((app, i) => (
                <div key={app.title} className="h-[70vh] w-[38vw] max-w-[600px]">
                  <AppCard app={app} index={i} />
                </div>
              ))}
            </div>
          </div>
          <div className="mx-10 mt-10 flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest text-mute">
            <span>Kaydır</span>
            <div className="h-px flex-1 bg-line">
              <div className="sd-gallery-bar h-full bg-accent" />
            </div>
            <span>{apps.length} proje</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 px-5 pb-24 md:hidden">
        {apps.map((app, i) => (
          <div key={app.title} data-reveal="up">
            <AppCard app={app} index={i} />
          </div>
        ))}
      </div>
    </>
  );
}
