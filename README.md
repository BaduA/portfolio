# Portfolyo

Next.js 16 (App Router) · React 19.3 · Tailwind CSS v4 · Motion · Lenis

## Çalıştırma

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## İçeriği düzenleme

Tüm kişisel içerik **`src/data/profile.ts`** dosyasında: isim, roller, hakkımda metni,
istatistikler, işler, uygulamalar, eğitim ve sosyal linkler. `TODO` yazan yerler doldurulmalı.
Görseller `public/images/` altında.

## Sayfalar

| Yol            | Sayfa             | Öne çıkan animasyon                                          |
| -------------- | ----------------- | ------------------------------------------------------------ |
| `/`            | Ana sayfa         | Harf harf açılan dev isim, parallax portre, hız duyarlı şerit |
| `/hakkimda`    | Ben Kimim?        | Kaydırdıkça kelime kelime dolan metin, sayaçlar              |
| `/isler`       | Çalıştığım İşler  | İmleci takip eden, hıza göre eğilen önizleme görseli          |
| `/uygulamalar` | Uygulamalarım     | Dikey kaydırma → yatay galeri, 3B eğilen ışıklı kartlar       |
| `/egitim`      | Eğitimim          | Kaydırdıkça çizilen zaman çizgisi, parallax yıllar           |

Genel: açılış (preloader) animasyonu, React `<ViewTransition>` ile sayfa geçiş perdesi,
özel manyetik imleç, Lenis akıcı kaydırma, film greni, `prefers-reduced-motion` desteği.
