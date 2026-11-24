/**
 * Sitedeki TÜM kişisel içerik bu dosyada.
 * Metinleri, işleri, uygulamaları ve eğitimi buradan değiştirmen yeterli.
 * "TODO" ile işaretli alanlar senden bilgi bekliyor.
 */

export const profile = {
  firstName: "Batu Alp",
  lastName: "Ustagül",
  initials: "BAU",
  location: "Ankara, Türkiye",
  timezone: "Europe/Istanbul",
  roles: ["Full-Stack Developer", "AI Engineer", "Mobile Developer", "Bilgisayar Mühendisi"],
  tagline:
    "Yapay zekâ, backend ve frontend sistemleri geliştiriyorum. Fikirleri hızlı, sağlam ve göze hoş gelen ürünlere dönüştürüyorum.",
  portrait: "/images/portrait.png",
  availability: "Yeni projelere açığım",
  email: "batualpustaguel@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/BaduA" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/batu-alp-ustag%C3%BCl-409882228/" },
  ],
};

export const about = {
  intro:
    "14 yaşımda kod yazmaya başladım ve o günden beri bırakamadım. Buca Fen Lisesi'nden mezun oldum; üniversite sınavında yaklaşık 3 milyon aday arasında 181. oldum. Türkiye'deki her üniversiteyi seçebilecekken Bilkent Bilgisayar Mühendisliği'ni seçtim. Uyum sağlamayı seven, hızlı öğrenen ve çok çalışan biriyim — kod yazmak benim tutkum.",
  stats: [
    { value: 181, prefix: "", suffix: ".", label: "Türkiye sıralaması (~3M aday)" },
    { value: 14, prefix: "", suffix: "", label: "Kod yazmaya başladığım yaş" },
    { value: 10, prefix: "", suffix: "+", label: "Tamamlanan proje" }, // TODO: gerçek sayı
  ],
  principles: [
    { title: "Önce kullanıcı", text: "Her satır kod, birinin işini kolaylaştırmak için yazılır." },
    { title: "Hız ve sağlamlık", text: "Hızlı teslim ederim ama temeli sağlam atarım." },
    { title: "Sürekli öğrenme", text: "Yeni teknolojileri denemeden duramam." },
  ],
  skills: [
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Angular",
    ".NET Core",
    "FastAPI",
    "Python",
    "TensorFlow",
    "PostgreSQL",
    "Docker",
    "Tailwind CSS",
  ],
};

export type Job = {
  company: string;
  role: string;
  period: string;
  type: string;
  description: string;
  tags: string[];
  image: string;
};

// TODO: Şirket adlarını, tarihleri ve açıklamaları gerçek bilgilerle değiştir.
export const jobs: Job[] = [
  {
    company: "Şirket Adı (TODO)",
    role: "Frontend Developer",
    period: "2023 — Günümüz",
    type: "Yarı zamanlı",
    description:
      "React ve Next.js ile ölçeklenebilir arayüzler geliştirdim, tasarım sistemini kurdum ve performansı iyileştirdim.",
    tags: ["React", "Next.js", "TypeScript"],
    image: "/images/dotnetreact.png",
  },
  {
    company: "Şirket Adı (TODO)",
    role: "AI Consultant",
    period: "2023 — 2024",
    type: "Danışmanlık",
    description:
      "Şirketlerin iş süreçlerine yapay zekâ çözümleri entegre ettim; model seçimi, veri hazırlığı ve prototiplemeyi yürüttüm.",
    tags: ["Python", "TensorFlow", "FastAPI"],
    image: "/images/malaria.jpg",
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2022 — Günümüz",
    type: "Serbest",
    description:
      "Farklı müşteriler için uçtan uca web ve mobil uygulamalar geliştirdim: .NET / FastAPI backend, React / Angular frontend.",
    tags: [".NET", "Angular", "React Native"],
    image: "/images/angulardotnet.jpg",
  },
];

export type App = {
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
  accent: string;
};

export const apps: App[] = [
  {
    title: "Malaria Diagnosis AI",
    category: "Yapay Zekâ",
    year: "2023",
    description: "Mikroskop görüntülerinden sıtma teşhisi koyan derin öğrenme modeli.",
    tags: ["TensorFlow", "CNN", "Python"],
    image: "/images/malaria.jpg",
    href: "https://github.com/BaduA/malaria-diagnosis-ai",
    accent: "#ff5a1f",
  },
  {
    title: "BilkentMap",
    category: "Mobil",
    year: "2023",
    description: "Bilkent kampüsü için etkileşimli harita ve navigasyon uygulaması.",
    tags: ["React Native", "Maps"],
    image: "/images/bilkent.png",
    href: "https://github.com/BaduA/BilkentMap-mobile",
    accent: "#3d7bff",
  },
  {
    title: "BilkentMarket",
    category: "Web",
    year: "2023",
    description: "Öğrenciler arası ikinci el alım-satım platformu.",
    tags: ["FastAPI", "React", "PostgreSQL"],
    image: "/images/market.jpg",
    href: "https://github.com/BaduA/bilkentmarket-python-react",
    accent: "#18c27a",
  },
  {
    title: "Car Price Prediction",
    category: "Yapay Zekâ",
    year: "2022",
    description: "Araç özelliklerinden ikinci el fiyat tahmini yapan regresyon modeli.",
    tags: ["Python", "scikit-learn"],
    image: "/images/carprice.webp",
    href: "https://github.com/BaduA/carpriceprediction",
    accent: "#f2c230",
  },
  {
    title: ".NET × React",
    category: "Web",
    year: "2022",
    description: "Clean architecture ile .NET Web API ve React istemcisi.",
    tags: [".NET Core", "React"],
    image: "/images/dotnetreact.png",
    href: "https://github.com/BaduA/dotnet-react",
    accent: "#a26bff",
  },
  {
    title: "Onion Arch × Angular",
    category: "Web",
    year: "2022",
    description: "Onion mimarisiyle .NET backend ve Angular frontend.",
    tags: [".NET Core", "Angular"],
    image: "/images/angulardotnet.jpg",
    href: "https://github.com/BaduA/OnionArch-dotnet-angular",
    accent: "#ff3d7f",
  },
];

export type Education = {
  school: string;
  degree: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
};

// TODO: Yılları ve not ortalaması gibi detayları kontrol et.
export const education: Education[] = [
  {
    school: "Bilkent Üniversitesi",
    degree: "Bilgisayar Mühendisliği, Lisans",
    period: "2022 — Devam ediyor",
    location: "Ankara",
    description:
      "Algoritmalar, yazılım mühendisliği, yapay zekâ ve dağıtık sistemler üzerine yoğunlaşıyorum.",
    highlights: ["Burslu öğrenci (TODO)", "Kampüs projeleri: BilkentMap, BilkentMarket"],
  },
  {
    school: "Buca Fen Lisesi",
    degree: "Fen Bilimleri",
    period: "2018 — 2022",
    location: "İzmir",
    description:
      "Matematik ve fen ağırlıklı eğitim. Bu dönemde yazılıma ciddi şekilde başladım.",
    highlights: ["YKS: ~3 milyon aday arasında 181.", "İlk mobil ve web projeleri"],
  },
];

export const nav = [
  { href: "/hakkimda", label: "Ben Kimim?", short: "Hakkımda" },
  { href: "/isler", label: "Çalıştığım İşler", short: "İşler" },
  { href: "/uygulamalar", label: "Uygulamalarım", short: "Uygulamalar" },
  { href: "/egitim", label: "Eğitimim", short: "Eğitim" },
] as const;
