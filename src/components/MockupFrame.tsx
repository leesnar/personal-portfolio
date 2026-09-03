import type { CSSProperties, ReactNode } from "react";

/**
 * Browser / code-editor device frame. `dots` shows the traffic-light dots,
 * `url` shows the address pill, `label` shows a tab/file label, `dark` swaps to
 * the code-editor treatment. `bar={false}` renders a plain headed "sheet" card
 * (same `.mockup` surface, no chrome) for the diagram/chart slots.
 */
export function MockupFrame({
  children,
  dark = false,
  dots = true,
  url = false,
  label,
  className,
  bar = true,
  style,
}: {
  children: ReactNode;
  dark?: boolean;
  dots?: boolean;
  url?: boolean;
  label?: string;
  className?: string;
  bar?: boolean;
  style?: CSSProperties;
}) {
  const cls = ["mockup", dark ? "mockup--dark" : "", className ?? ""].filter(Boolean).join(" ");
  return (
    <div className={cls} style={style}>
      {bar && (
        <div className="mockup__bar">
          {dots && (
            <>
              <i />
              <i />
              <i />
            </>
          )}
          {url && <span className="url" />}
          {label && <span className="label">{label}</span>}
        </div>
      )}
      <div className="mockup__body">{children}</div>
    </div>
  );
}
