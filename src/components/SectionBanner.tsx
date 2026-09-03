import { Reveal } from "./ui/Reveal";

/** Full-bleed diagonal gradient header band with a centered white title. */
export function SectionBanner({ title, id }: { title: string; id?: string }) {
  return (
    <div className="banner" id={id}>
      <div className="container">
        <Reveal as="h2" y={16}>
          {title}
        </Reveal>
      </div>
    </div>
  );
}
