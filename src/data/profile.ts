/**
 * Sitedeki TÜM içerik bu dosyada.
 * Şu an her şey yer tutucu (placeholder). "TODO" yazan her yeri kendi bilgilerinle değiştir.
 *
 * Fotoğraf eklemek için: görseli public/images/ içine koy ve ilgili `image` / `portrait`
 * alanına yolunu yaz (ör. "/images/portre.jpg"). Boş bırakırsan şık bir renkli kapak gösterilir.
 */

export const profile = {
  firstName: "Adın", // TODO
  lastName: "Soyadın", // TODO
  initials: "AS", // TODO
  location: "Şehir, Ülke", // TODO
  timezone: "Europe/Istanbul",
  roles: ["Yazılım Geliştirici", "Ürün Tasarımcısı", "Problem Çözücü"], // TODO
  tagline:
    "Buraya kendini bir-iki cümleyle anlat: ne yaptığını, neyi sevdiğini ve insanlara nasıl değer kattığını.", // TODO
  portrait: "", // TODO: "/images/portre.jpg"
  availability: "Yeni projelere açığım",
  email: "merhaba@ornek.com", // TODO
  socials: [
    { label: "GitHub", href: "#" }, // TODO
    { label: "LinkedIn", href: "#" }, // TODO
  ],
};

export const about = {
  intro:
    "Burası senin hikâyen. Nereden geldiğini, ne zaman ve nasıl başladığını, seni neyin heyecanlandırdığını ve bugün hangi problemleri çözdüğünü anlat. Bu paragraf kaydırdıkça kelime kelime belirecek, o yüzden samimi ve akıcı yazmak en iyisi.", // TODO
  stats: [
    { value: 0, suffix: "+", label: "Yıllık deneyim" }, // TODO
    { value: 0, suffix: "+", label: "Tamamlanan proje" }, // TODO
    { value: 0, suffix: "", label: "Mutlu müşteri / ekip" }, // TODO
  ],
  principles: [
    { title: "İlke bir", text: "Çalışırken önem verdiğin ilk şey." }, // TODO
    { title: "İlke iki", text: "Seni diğerlerinden ayıran yaklaşımın." }, // TODO
    { title: "İlke üç", text: "Sürekli geliştirdiğin bir alışkanlığın." }, // TODO
  ],
  skills: ["Yetenek 1", "Yetenek 2", "Yetenek 3", "Yetenek 4", "Yetenek 5", "Yetenek 6"], // TODO
};

export type Job = {
  company: string;
  role: string;
  period: string;
  type: string;
  description: string;
  tags: string[];
  color: string;
};

// TODO: Çalıştığın işleri ekle
export const jobs: Job[] = [
  {
    company: "Şirket A",
    role: "Pozisyon",
    period: "20XX — Günümüz",
    type: "Tam zamanlı",
    description: "Bu işte neler yaptığını, hangi sorumlulukları aldığını ve ne başardığını anlat.",
    tags: ["Teknoloji", "Araç"],
    color: "#ff5a1f",
  },
  {
    company: "Şirket B",
    role: "Pozisyon",
    period: "20XX — 20XX",
    type: "Yarı zamanlı",
    description: "Bu işte neler yaptığını, hangi sorumlulukları aldığını ve ne başardığını anlat.",
    tags: ["Teknoloji", "Araç"],
    color: "#3d7bff",
  },
  {
    company: "Şirket C",
    role: "Pozisyon",
    period: "20XX — 20XX",
    type: "Staj",
    description: "Bu işte neler yaptığını, hangi sorumlulukları aldığını ve ne başardığını anlat.",
    tags: ["Teknoloji", "Araç"],
    color: "#18c27a",
  },
];

export type App = {
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image?: string;
  href: string;
  color: string;
};

// TODO: Uygulamalarını ekle
export const apps: App[] = [
  { title: "Uygulama Bir", category: "Web", year: "20XX", description: "Uygulamanın ne işe yaradığını tek cümleyle anlat.", tags: ["Etiket"], href: "#", color: "#ff5a1f" },
  { title: "Uygulama İki", category: "Mobil", year: "20XX", description: "Uygulamanın ne işe yaradığını tek cümleyle anlat.", tags: ["Etiket"], href: "#", color: "#3d7bff" },
  { title: "Uygulama Üç", category: "Yapay Zekâ", year: "20XX", description: "Uygulamanın ne işe yaradığını tek cümleyle anlat.", tags: ["Etiket"], href: "#", color: "#18c27a" },
  { title: "Uygulama Dört", category: "Web", year: "20XX", description: "Uygulamanın ne işe yaradığını tek cümleyle anlat.", tags: ["Etiket"], href: "#", color: "#f2c230" },
  { title: "Uygulama Beş", category: "Tasarım", year: "20XX", description: "Uygulamanın ne işe yaradığını tek cümleyle anlat.", tags: ["Etiket"], href: "#", color: "#a26bff" },
];

export type Education = {
  school: string;
  degree: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
};

// TODO: Eğitim bilgilerini ekle
export const education: Education[] = [
  {
    school: "Üniversite Adı",
    degree: "Bölüm, Derece",
    period: "20XX — 20XX",
    location: "Şehir",
    description: "Bu dönemde neler öğrendiğini ve neye odaklandığını anlat.",
    highlights: ["Başarı / ödül", "Önemli proje veya kulüp"],
  },
  {
    school: "Lise Adı",
    degree: "Alan",
    period: "20XX — 20XX",
    location: "Şehir",
    description: "Bu dönemde neler öğrendiğini ve neye odaklandığını anlat.",
    highlights: ["Başarı / ödül"],
  },
];

export const nav = [
  { href: "/hakkimda", label: "Ben Kimim?", short: "Hakkımda" },
  { href: "/isler", label: "Çalıştığım İşler", short: "İşler" },
  { href: "/uygulamalar", label: "Uygulamalarım", short: "Uygulamalar" },
  { href: "/egitim", label: "Eğitimim", short: "Eğitim" },
] as const;
