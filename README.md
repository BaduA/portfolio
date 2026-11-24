# Portfolyo

Next.js 16 (App Router) · React 19.3 · Tailwind CSS v4 · Lenis

## Çalıştırma

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## İçeriği düzenleme

Tüm içerik **`src/data/profile.ts`** dosyasında. Şu an her şey yer tutucu; `TODO` yazan yerleri doldur.
Fotoğraf eklemek için görseli `public/images/` içine koy ve `portrait` / `image` alanına yolunu yaz.
Görsel yoksa renkli, CSS ile çizilen bir kapak gösterilir.

## Sayfalar

| Yol            | Sayfa             | Animasyon                                                   |
| -------------- | ----------------- | ----------------------------------------------------------- |
| `/`            | Ana sayfa         | Harf harf açılan dev isim, kaydırınca zıt yönlere kayan satırlar |
| `/hakkimda`    | Ben Kimim?        | Kaydırdıkça kelime kelime dolan metin, sayaçlar, ışıklı kartlar |
| `/isler`       | Çalıştığım İşler  | İmleci takip edip hızına göre eğilen önizleme, akordeon       |
| `/uygulamalar` | Uygulamalarım     | Dikey kaydırma → yatay galeri, 3B eğilen ışıklı kartlar        |
| `/egitim`      | Eğitimim          | Kaydırdıkça çizilen çizgi, parallax yıllar                     |

## Performans

- Animasyon kütüphanesi yok. Efektler React Bits tarzında (SplitText, ShinyText, SpotlightCard,
  TiltedCard, ClickSpark, CountUp) ama saf CSS + birkaç satır JS ile yazıldı.
- Ekranın üstündeki giriş animasyonları CSS; JavaScript'in yüklenmesini beklemez.
- Kaydırma efektleri tarayıcının yerel `animation-timeline` özelliğiyle çalışır (JS yok).
  Desteklemeyen tarayıcıda içerik sabit ve eksiksiz görünür.
- Tek IntersectionObserver ve tek `requestAnimationFrame` döngüsü (`src/components/Effects.tsx`).
- Özel imleç ve Lenis akıcı kaydırma, tarayıcı boşta kalınca yüklenir; dokunmatik cihazda hiç yüklenmez.
- Sadece `transform`, `opacity` ve `clip-path` animasyonu kullanılır.
- `prefers-reduced-motion` açıksa tüm hareketler kapanır.
