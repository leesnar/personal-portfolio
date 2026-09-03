import { motion } from "motion/react";
import type { ProjectItem } from "../data/content";
import { TagRow } from "./TagRow";
import { PlaceholderAsset } from "./PlaceholderAsset";
import { EASE } from "../lib/motion";
import { useReducedMotionSafe } from "../hooks/useReducedMotionSafe";

/** A single project card. Staggered entrance + lift-on-hover. */
export function ProjectCard({ project, index = 0 }: { project: ProjectItem; index?: number }) {
  const reduce = useReducedMotionSafe();
  const cls = project.dim ? "proj proj--dim" : "proj";

  const head = project.bonus ? (
    <div className="proj__head">
      <h4>{project.title}</h4>
      <span className="badge-bonus">Bonus</span>
    </div>
  ) : (
    <h4>{project.title}</h4>
  );

  const inner = (
    <>
      {head}
      {project.meta && <span className="meta">{project.meta}</span>}
      <p>{project.body}</p>
      <TagRow items={project.tags} />
      {(project.demo || project.repo || project.phLink) && (
        <div className="proj__footer">
          {project.demo ? (
            <a
              className="ph ph--chip ph-link"
              href={project.demo.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
            >
              <span>{project.demo.label}</span>
            </a>
          ) : (
            project.phLink && <PlaceholderAsset label={project.phLink} className="ph--chip" />
          )}
          {project.repo && (
            <a className="repo" href={project.repo.href} target="_blank" rel="noopener noreferrer" data-cursor="hover">
              {project.repo.label}
            </a>
          )}
        </div>
      )}
    </>
  );

  if (reduce) {
    return <article className={cls}>{inner}</article>;
  }

  return (
    <motion.article
      className={cls}
      data-cursor="hover"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: EASE } }}
    >
      {inner}
    </motion.article>
  );
}
