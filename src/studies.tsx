import { StrictMode, type ComponentType } from "react";
import { createRoot } from "react-dom/client";
import { PageFooter, PageHeader } from "./components/PageChrome";
import { featuredProjects, type FeaturedProject } from "./data/portfolio";
import { asset } from "./lib/asset";
import "./styles/global.css";

const studyBodies = new Map<string, () => Promise<{ default: ComponentType }>>([
  ["network-intrusion-risk-scoring", () => import("./studies/VinixStudy")],
  ["air-quality-analysis", () => import("./studies/AirQualityStudy")],
  ["xai-validation-framework", () => import("./studies/XaiStudy")],
]);

function StudyPage({ project, Body }: { project: FeaturedProject; Body: ComponentType }) {
  const returnHref = asset("#" + project.cardId);
  return <>
    <PageHeader study />
    <main id="main" tabIndex={-1} className="study-main">
      <header className="study-hero">
        <div className="container">
          <a className="back-link" href={returnHref}>← Back to featured projects</a>
          <p className="study-disciplines">{project.disciplines.join(" · ")}</p>
          <h1 className="study-title">{project.title}</h1>
          <p className="study-lead">{project.problem}</p>
          <dl className="study-meta">
            <div><dt>Role</dt><dd>{project.role}</dd></div>
            <div><dt>Tools</dt><dd>{project.tools.join(", ")}</dd></div>
          </dl>
          <div className="study-links">{project.links.map(link =>
            <a key={link.href} href={link.href}>{link.label}</a>
          )}</div>
        </div>
      </header>
      <div className="study-body container">
        <section className="study-section">
          <h2>My contribution</h2>
          <p>{project.contribution}</p>
          <p className="study-note">{project.finding}</p>
        </section>
        <Body />
        <div className="study-bottom"><a className="back-link" href={returnHref}>← Back to featured projects</a></div>
      </div>
    </main>
    <PageFooter />
  </>;
}

const root = document.getElementById("root");
const project = featuredProjects.find(item => item.slug === root?.dataset.study);
const loadBody = project && studyBodies.get(project.slug);

// Keep the static summary and its working links if a route is unknown or its chunk fails.
if (root && project && loadBody) {
  loadBody().then(({ default: Body }) => {
    createRoot(root).render(<StrictMode><StudyPage project={project} Body={Body} /></StrictMode>);
  }).catch(error => {
    console.error("Unable to load the case study.", error);
  });
}