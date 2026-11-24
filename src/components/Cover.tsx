import Image from "next/image";

/**
 * Görsel varsa onu, yoksa renkli, yavaşça dönen geometrik bir kapak gösterir.
 * Kapak tamamen CSS: indirilecek görsel yok, anında görünür.
 */
export default function Cover({
  image,
  color,
  label,
  sizes,
  priority,
  className,
}: {
  image?: string;
  color: string;
  label: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  if (image)
    return (
      <Image src={image} alt={label} fill sizes={sizes} priority={priority} className={`object-cover ${className ?? ""}`} />
    );
  return (
    <div
      role="img"
      aria-label={label}
      className={`cover absolute inset-0 grid place-items-center overflow-hidden ${className ?? ""}`}
      style={{ "--c": color } as React.CSSProperties}
    >
      <div className="cover-orbit absolute aspect-square w-[140%] rounded-full border border-white/15">
        <span className="absolute left-1/2 top-0 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70" />
      </div>
      <div className="absolute aspect-square w-[80%] rounded-full border border-white/10" />
      <span className="relative font-serif text-[clamp(3rem,12cqw,9rem)] italic leading-none text-white/90 mix-blend-overlay">
        {label
          .split(" ")
          .map((w) => w[0])
          .join("")
          .slice(0, 2)}
      </span>
    </div>
  );
}
