"use client";

import { useSyncExternalStore } from "react";

const subscribe = (cb: () => void) => {
  const id = setInterval(cb, 1000);
  return () => clearInterval(id);
};

export default function Clock({ timezone }: { timezone: string }) {
  const time = useSyncExternalStore(
    subscribe,
    () =>
      new Intl.DateTimeFormat("tr-TR", { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: timezone }).format(
        Math.floor(Date.now() / 1000) * 1000
      ),
    () => "--:--:--"
  );
  return <span className="tabular-nums">{time}</span>;
}
