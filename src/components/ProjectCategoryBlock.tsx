import type { ProjectCategory } from "../data/content";
import { Reveal } from "./ui/Reveal";
import { ProjectCard } from "./ProjectCard";

/** A category label + divider + its grid of project cards. */
export function ProjectCategoryBlock({ category }: { category: ProjectCategory }) {
  return (
    <>
      <Reveal as="span" className={category.dim ? "cat-title dim" : "cat-title"} y={14}>
        {category.title}
        {category.note && (
          <>
            {" "}
            <span style={{ fontWeight: 500, fontSize: "1rem" }}>{category.note}</span>
          </>
        )}
      </Reveal>
      <hr className={category.faintRule ? "cat-rule faint" : "cat-rule"} />
      <div className="proj-grid">
        {category.projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </>
  );
}
