"use client";

import Link from "next/link";

/** Üzerine gelince harfleri dalga gibi yukarı yuvarlanan link metni. */
export function RollText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={`group/roll relative inline-flex overflow-hidden ${className ?? ""}`} aria-label={text}>
      <span aria-hidden className="flex">
        {text.split("").map((c, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-500 ease-expo group-hover/roll:-translate-y-full"
            style={{ transitionDelay: `${i * 18}ms` }}
          >
            {c === " " ? " " : c}
          </span>
        ))}
      </span>
      <span aria-hidden className="absolute inset-0 flex">
        {text.split("").map((c, i) => (
          <span
            key={i}
            className="inline-block translate-y-full text-accent transition-transform duration-500 ease-expo group-hover/roll:translate-y-0"
            style={{ transitionDelay: `${i * 18}ms` }}
          >
            {c === " " ? " " : c}
          </span>
        ))}
      </span>
    </span>
  );
}

export default function RollLink({
  href,
  text,
  className,
  external,
}: {
  href: string;
  text: string;
  className?: string;
  external?: boolean;
}) {
  if (external)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        <RollText text={text} />
      </a>
    );
  return (
    <Link href={href} className={className}>
      <RollText text={text} />
    </Link>
  );
}
