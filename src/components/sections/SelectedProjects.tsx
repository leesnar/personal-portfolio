import { Container } from "../Container";
import { Reveal } from "../ui/Reveal";
import { FlagshipCard } from "../FlagshipCard";
import { ProjectCategoryBlock } from "../ProjectCategoryBlock";
import { PROJECT_CATEGORIES } from "../../data/content";

export function SelectedProjects() {
  return (
    <section className="section section--soft" id="projects">
      <Container>
        <Reveal className="count-head">
          <span className="count-badge">9</span>
          <h2>Selected Projects</h2>
        </Reveal>

        <FlagshipCard />

        {PROJECT_CATEGORIES.map((category, i) => (
          <ProjectCategoryBlock key={i} category={category} />
        ))}
      </Container>
    </section>
  );
}
