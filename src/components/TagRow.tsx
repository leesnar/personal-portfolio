export type TagItem = string | { label: string; cls?: string };

/** Row of pill chips. Items may carry an extra class (e.g. tag--solid, tag--fill). */
export function TagRow({ items, className }: { items: TagItem[]; className?: string }) {
  return (
    <div className={className ? `tag-row ${className}` : "tag-row"}>
      {items.map((item, i) => {
        const label = typeof item === "string" ? item : item.label;
        const cls = typeof item === "string" ? "tag" : `tag ${item.cls ?? ""}`.trim();
        return (
          <span key={i} className={cls}>
            {label}
          </span>
        );
      })}
    </div>
  );
}
