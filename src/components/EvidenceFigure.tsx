import { asset } from "../lib/asset";
import type { ProjectFigure } from "../data/figures";

export function EvidenceFigure({ figure }: { figure: ProjectFigure }) {
  const url = asset("assets/" + figure.file);
  return <figure className="study-figure">
    <img src={url} alt={figure.alt} width={figure.width} height={figure.height} loading="lazy" decoding="async" />
    <figcaption>{figure.caption}
      <span className="figure-links"><a href={url}>View full-size figure</a><a href={figure.source}>{figure.sourceLabel}</a></span>
    </figcaption>
  </figure>;
}
