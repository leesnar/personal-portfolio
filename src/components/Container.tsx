import type { ReactNode } from "react";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className ? `container ${className}` : "container"}>{children}</div>;
}
