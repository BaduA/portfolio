import { ViewTransition } from "react";

/** Tarayıcının yerel View Transitions API'si ile sayfa geçişi (CSS: .page). Ek JS yok. */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page" exit="page" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
