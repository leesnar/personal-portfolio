import { Container } from "../Container";
import { Reveal } from "../ui/Reveal";
import { INTRO } from "../../data/content";

export function Intro() {
  return (
    <section className="section intro" id="intro">
      <Container>
        <Reveal as="p">{INTRO}</Reveal>
      </Container>
    </section>
  );
}
