import { profile } from "@/data/profile";
import Cover from "./Cover";

/** Profil fotoğrafı; yoksa baş harfli renkli kapak. */
export default function Portrait({ sizes, priority }: { sizes: string; priority?: boolean }) {
  return (
    <Cover
      image={profile.portrait || undefined}
      color="#ff5a1f"
      label={`${profile.firstName} ${profile.lastName}`}
      sizes={sizes}
      priority={priority}
      className="transition-[filter] duration-700"
    />
  );
}
