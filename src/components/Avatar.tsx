/** Signature branded monogram avatar (preserved exactly from the original). */
export function Avatar({
  monogram,
  src,
  className,
  label,
}: {
  monogram: string;
  src?: string;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={className ? `avatar ${className}` : "avatar"}
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
    >
      {src ? (
        <img className="avatar__photo" src={src} alt="" />
      ) : (
        <span className="avatar__monogram">{monogram}</span>
      )}
    </div>
  );
}
