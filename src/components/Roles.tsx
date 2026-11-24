"use client";

import { useEffect, useState } from "react";

/** Sırayla yukarı kayarak değişen unvanlar (geçiş CSS'te). */
export default function Roles({ roles }: { roles: readonly string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % roles.length), 2400);
    return () => clearInterval(id);
  }, [roles.length]);
  const prev = (i - 1 + roles.length) % roles.length;
  return (
    <span className="roles text-accent">
      {roles.map((r, k) => (
        <span key={r} data-state={k === i ? "in" : k === prev ? "out" : undefined} className="whitespace-nowrap">
          {r}
        </span>
      ))}
    </span>
  );
}
