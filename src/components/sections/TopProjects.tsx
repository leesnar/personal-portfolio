import { Container } from "../Container";
import { Reveal } from "../ui/Reveal";
import { PlaceholderAsset } from "../PlaceholderAsset";
import { TEASERS } from "../../data/content";

export function TopProjects() {
  return (
    <section className="section section--soft">
      <Container>
        <Reveal className="count-head">
          <span className="count-badge">2</span>
          <h2>top listed chosen project</h2>
        </Reveal>
        <div className="teasers">
          {TEASERS.map((teaser, i) => (
            <Reveal as="article" className="teaser" key={i} index={i} lift>
              <h3>{teaser.title}</h3>
              <p>{teaser.blurb}</p>
              <PlaceholderAsset label={teaser.ph} src={teaser.src} alt={teaser.alt} style={{ minHeight: 180 }} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
