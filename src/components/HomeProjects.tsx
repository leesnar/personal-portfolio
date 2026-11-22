import { Container } from "./Container";
import { archivedProjects, featuredProjects, supportingProjects } from "../data/portfolio";
import type { FeaturedProject, ProjectLink } from "../data/portfolio";
import { asset } from "../lib/asset";

function Tools({ tools }: { tools: string[] }) {
  return (
    <ul className="tool-list" aria-label="Tools">
      {tools.map(tool => <li key={tool}>{tool}</li>)}
    </ul>
  );
}

function Sources({ links, title }: { links: ProjectLink[]; title: string }) {
  return links.map(link => (
    <a href={link.href} key={link.href} aria-label={link.label + " for " + title}>{link.label}</a>
  ));
}

function FeaturedCard({ project }: { project: FeaturedProject }) {
  const detail = asset("projects/" + project.slug + "/");
  return (
    <article className="feature-card" id={project.cardId} aria-labelledby={project.slug + "-title"}>
      {project.figure && <a className={"feature-image " + project.cardId} href={detail} aria-label={"Study figure for " + project.title}>
        <img src={asset("assets/" + project.figure.file)} width={project.figure.width} height={project.figure.height} alt={project.figure.alt} loading="lazy" decoding="async" />
      </a>}
      <div className={"feature-evidence" + (project.figure ? "" : " feature-text-preview")}>
        <strong className="evidence-value">{project.evidenceValue}</strong>
        <span className="evidence-label">{project.evidenceLabel}</span>
        <a className="evidence-source" href={project.evidenceSource.href} aria-label={project.evidenceSource.label + " for " + project.title}>
          {project.evidenceSource.label}
        </a>
      </div>
      <div className="feature-body">
        <p className="discipline-list">{project.disciplines.join(" · ")}</p>
        <h3 id={project.slug + "-title"}><a href={detail}>{project.title}</a></h3>
        <p className="project-role">{project.role}</p>
        <p className="project-summary">{project.problem}</p>
        <p className="project-contribution">{project.contribution}</p>
        <Tools tools={project.tools} />
        <div className="project-links">
          <a href={detail} aria-label={"Read case study for " + project.title}>Read case study</a>
          <Sources links={project.links.filter(link => link.href !== project.evidenceSource.href)} title={project.title} />
        </div>
      </div>
    </article>
  );
}

export function FeaturedWork() {
  return (
    <section className="home-section featured-section" id="projects" aria-labelledby="featured-title">
      <Container>
        <div className="section-heading"><h2 id="featured-title">Featured work</h2></div>
        <div className="featured-grid">{featuredProjects.map(project => <FeaturedCard project={project} key={project.slug} />)}</div>
      </Container>
    </section>
  );
}

export function MoreProjects() {
  return (
    <section className="home-section more-section" aria-labelledby="more-title">
      <Container>
        <div className="section-heading"><h2 id="more-title">More projects</h2></div>
        <div className="support-grid">
          {supportingProjects.map(project => (
            <article className="support-card" key={project.slug} id={"support-" + project.slug}>
              <h3>{project.title}</h3>
              <p>{project.body}</p>
              <Tools tools={project.tools} />
              <div className="project-links"><Sources links={project.links} title={project.title} /></div>
            </article>
          ))}
        </div>
        <details className="archive-list">
          <summary>Project archive <span>({archivedProjects.length})</span></summary>
          {archivedProjects.map(project => (
            <article className="archive-row" key={project.slug}>
              <div><h3>{project.title}</h3><p>{project.body}</p></div>
              <div className="project-links"><Sources links={project.links} title={project.title} /></div>
            </article>
          ))}
        </details>
      </Container>
    </section>
  );
}
