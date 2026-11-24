import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { profile } from "@/data/profile";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import Spotlight from "@/components/Spotlight";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin", "latin-ext"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin", "latin-ext"] });
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
});

const fullName = `${profile.firstName} ${profile.lastName}`;

export const metadata: Metadata = {
  title: { default: `${fullName} — Portfolyo`, template: `%s — ${fullName}` },
  description: profile.tagline,
  openGraph: { title: `${fullName} — Portfolyo`, description: profile.tagline, type: "website" },
};

export const viewport: Viewport = { themeColor: "#0b0b0c" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`} suppressHydrationWarning>
      <head>
        {/* Açılış animasyonu bu oturumda gösterildiyse, hidrasyondan önce gizle (titreme olmasın) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem("intro-seen")==="1"||matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("intro-seen")}catch(e){}`,
          }}
        />
      </head>
      <body>
        <SmoothScroll>
          <Preloader />
          <Spotlight />
          <Nav />
          <main className="relative min-h-screen">{children}</main>
          <Footer />
          <Cursor />
          <div className="grain" aria-hidden />
        </SmoothScroll>
      </body>
    </html>
  );
}
