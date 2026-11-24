"use client";

import { useEffect, useState } from "react";

export default function Clock({ timezone }: { timezone: string }) {
  const [time, setTime] = useState<string>("--:--:--");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: timezone,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timezone]);
  return <span className="tabular-nums">{time}</span>;
}
