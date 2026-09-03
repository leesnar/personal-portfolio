import { Container } from "../Container";
import { Avatar } from "../Avatar";
import { ContactList } from "../ContactList";
import { Reveal } from "../ui/Reveal";
import { HERO } from "../../data/content";
import { asset } from "../../lib/asset";

export function Closing() {
  return (
    <section className="closing" id="contact">
      <Container className="closing__inner">
        <div className="closing__text">
          <Reveal as="h2">
            Thanks...
            <br />
            Portfolio
          </Reveal>
          <Reveal as="span" className="role" delay={0.08}>
            {HERO.role}
          </Reveal>
          <Reveal as="h3" delay={0.12}>
            My Contact
          </Reveal>
          <Reveal delay={0.16}>
            <ContactList />
          </Reveal>
        </div>
        <div className="closing__aside">
          <Reveal delay={0.1}>
            <Avatar monogram="LT" src={asset("/assets/lesnar-portrait.png")} label="Portrait of Lesnar Tambun" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
