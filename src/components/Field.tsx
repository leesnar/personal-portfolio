import type { ReactNode } from "react";

/** Italic label + body copy block (Background case / Project Goals / etc.). */
export function Field({
  label,
  children,
  justify = true,
  labelSize,
}: {
  label: string;
  children: ReactNode;
  justify?: boolean;
  labelSize?: string;
}) {
  return (
    <div className="field">
      <span className="field__label" style={labelSize ? { fontSize: labelSize } : undefined}>
        {label}
      </span>
      <p className={justify ? "body body--justify" : "body"}>{children}</p>
    </div>
  );
}
