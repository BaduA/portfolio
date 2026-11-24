import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-8 px-5 text-center">
      <p className="text-outline text-[30vw] font-semibold leading-none tracking-[-0.06em]">404</p>
      <p className="text-mute">Aradığın sayfa burada değil.</p>
      <Link href="/" className="rounded-full bg-accent px-6 py-3 text-ink">
        Ana sayfaya dön
      </Link>
    </section>
  );
}
