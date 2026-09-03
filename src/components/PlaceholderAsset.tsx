import { Fragment, type CSSProperties } from "react";

/**
 * A slot for a real screenshot/export. When `src` is provided the slot takes the
 * image's own aspect ratio (lazy-loaded, never cropped); otherwise it stays a
 * clearly-labelled "add asset" placeholder tile.
 */
export function PlaceholderAsset({
  label,
  src,
  alt,
  className,
  style,
}: {
  label: string;
  src?: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
}) {
  const lines = label.split("\n");

  if (src) {
    // minHeight only gives the empty tile presence — honouring it once a real
    // image is in would letterbox that image inside a box it never fits.
    const { minHeight, ...boxStyle } = style ?? {};
    return (
      <div className={className ? `ph ph--filled ${className}` : "ph ph--filled"} style={boxStyle}>
        <img
          src={src}
          alt={alt ?? lines.filter((l) => !/^(placeholder|add asset)$/i.test(l.trim())).join(" ")}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div
      className={className ? `ph ${className}` : "ph"}
      style={style}
      role="img"
      aria-label={`Placeholder — ${lines.join(" ")}`}
    >
      <span>
        {lines.map((line, i) => (
          <Fragment key={i}>
            {i > 0 && <br />}
            {line}
          </Fragment>
        ))}
      </span>
    </div>
  );
}
