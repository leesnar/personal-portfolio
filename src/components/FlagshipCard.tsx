import { FLAGSHIP } from "../data/content";
import { StatGrid } from "./StatGrid";
import { TagRow } from "./TagRow";
import { Magnetic } from "./ui/Magnetic";
import { Reveal } from "./ui/Reveal";

/** The GroundedRAG flagship card — live badge, metric row, tags, action links. */
export function FlagshipCard() {
  return (
    <Reveal as="article" className="flagship" y={30}>
      <div className="flagship__head">
        <h3>{FLAGSHIP.title}</h3>
        <span className="live-badge">
          <i />
          Live
        </span>
      </div>
      <span className="flagship__meta">{FLAGSHIP.meta}</span>
      <p className="lead">{FLAGSHIP.lead}</p>
      <StatGrid items={FLAGSHIP.metrics} className="metrics" itemClassName="metric" />
      <span className="flagship__meta">{FLAGSHIP.metricsNote}</span>
      <TagRow items={FLAGSHIP.tags} />
      <div className="btns">
        {FLAGSHIP.links.map((link, i) => (
          <Magnetic key={i}>
            <a className="btn" href={link.href} target="_blank" rel="noopener noreferrer" data-cursor="hover">
              {link.label}
            </a>
          </Magnetic>
        ))}
      </div>
    </Reveal>
  );
}
