import type { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./ui/Reveal";
import { Doodle } from "./ui/Doodle";
import { Sparkle } from "./icons/Icons";

/** Dark gradient case-study title block with an eyebrow + floating artwork. */
export function CaseStudyHero({
  id,
  eyebrow,
  title,
  browser = false,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  browser?: boolean;
  children: ReactNode;
}) {
  return (
    <section className={browser ? "cs-hero cs-hero--browser" : "cs-hero"} id={id}>
      <Container className="cs-hero__inner">
        <div>
          <Reveal as="span" className="eyebrow-row">
            <Doodle className="spark" parallax={10}>
              <Sparkle />
            </Doodle>
            {eyebrow}
          </Reveal>
          <Reveal as="h2" delay={0.08}>
            {title}
          </Reveal>
        </div>
        <Reveal className="cs-hero__art" delay={0.12}>
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
