import { Reveal } from "./ui/Reveal";

/** Numbered section heading: eyebrow number + title (01 / Project Overview). */
export function SectionHead({ num, title, level = 2 }: { num: string; title: string; level?: 2 | 3 }) {
  return (
    <Reveal className="section-head">
      <span className="num">{num}</span>
      {level === 3 ? <h3>{title}</h3> : <h2>{title}</h2>}
    </Reveal>
  );
}
