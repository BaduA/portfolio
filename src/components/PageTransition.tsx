import { ViewTransition } from "react";

/**
 * Her sayfayı saran görünüm geçişi. Navigasyonda eski sayfa küçülüp bulanıklaşır,
 * yenisi alttan yuvarlak köşeli bir perde gibi açılır (CSS: globals.css > .page).
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page" exit="page" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
