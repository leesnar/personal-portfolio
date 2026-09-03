import { Container } from "../Container";
import { ContactList } from "../ContactList";
import { Reveal } from "../ui/Reveal";
import { Doodle } from "../ui/Doodle";
import { DoodleArrow, DoodleSwirl } from "../icons/Icons";
import { HERO } from "../../data/content";

export function Hero() {
  return (
    <section className="hero" id="top">
      <Container className="hero__inner">
        <div className="hero__center">
          <Reveal delay={0}>
            <span className="badge-hello">
              Hello!
              <Doodle className="doodle-arrow" parallax={8}>
                <DoodleArrow />
              </Doodle>
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1>{HERO.name}</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <span className="hero__role">{HERO.role}</span>
          </Reveal>
        </div>

        <div className="hero__portrait" aria-hidden>
          <div className="hero__portrait-circle" />
          <img src="/assets/lesnar-portrait.png" alt="" className="hero__portrait-photo" />
        </div>

        <Reveal className="hero__quote" delay={0.24}>
          <p>{HERO.quote}</p>
        </Reveal>

        <Reveal className="hero__contacts" delay={0.3}>
          <ContactList />
        </Reveal>

        <Doodle className="hero__doodle-swirl" baseRotate={192} parallax={44}>
          <DoodleSwirl />
        </Doodle>
      </Container>
    </section>
  );
}
