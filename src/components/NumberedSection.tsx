import type { ReactNode } from "react";
import { Reveal } from "./ui/Reveal";

/**
 * Two-column numbered layout: sticky-feel left label (number + title) and
 * right-hand content. Used for Project Overview / Solution / Conclusion.
 */
export function NumberedSection({
  num,
  title,
  children,
  level = 2,
}: {
  num: string;
  title: string;
  children: ReactNode;
  level?: 2 | 3;
}) {
  return (
    <div className="split">
      <Reveal className="split__aside">
        <span className="num">{num}</span>
        {level === 3 ? <h3>{title}</h3> : <h2>{title}</h2>}
      </Reveal>
      <Reveal delay={0.08}>{children}</Reveal>
    </div>
  );
}
