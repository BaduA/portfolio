import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { profile } from "@/data/profile";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin", "latin-ext"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin", "latin-ext"], preload: false });
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["italic"],
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
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* JS varsa "görününce aç" animasyonlarını etkinleştir; yoksa içerik hep görünür kalır */}
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add("js")` }} />
      </head>
      <body>
        <div className="backdrop" aria-hidden>
          <span />
          <span />
        </div>
        <Nav />
        <main className="relative min-h-screen">{children}</main>
        <Footer />
        <Effects />
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
