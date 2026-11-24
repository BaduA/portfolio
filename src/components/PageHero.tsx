import RevealText from "./RevealText";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

/** Alt sayfaların büyük başlığı; CSS ile anında oynar. */
export default function PageHero({
  index,
  eyebrow,
  title,
  accent,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
}) {
  return (
    <section className="mx-auto max-w-[1600px] px-5 pb-16 pt-36 md:px-10 md:pb-24 md:pt-48">
      <div className="fade-in mb-8 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em] text-mute" style={d(50)}>
        <span className="text-accent">({index})</span>
        <span className="grow-x h-px w-16 bg-mute" style={d(150)} />
        {eyebrow}
      </div>
      <h1 className="text-[14vw] font-medium leading-[0.88] tracking-[-0.06em] md:text-[9.5vw]">
        <RevealText text={title} by="char" immediate delay={60} />
        <br />
        <RevealText
          text={accent}
          by="char"
          immediate
          delay={60 + title.length * 28}
          className="font-serif font-normal italic text-accent"
        />
      </h1>
      <p className="fade-in mt-10 max-w-xl text-lg text-mute md:ml-auto md:text-xl" style={d(450)}>
        {description}
      </p>
    </section>
  );
}
