import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { CONTACT, NAV_LINKS, cvDownloadUrl } from "../data/content";
import { asset } from "../lib/asset";
import { useScrollSpy } from "../hooks/useScrollSpy";

const ids = NAV_LINKS.map(({ id }) => id);

export function PageHeader({ study = false }: { study?: boolean }) {
  const [open, setOpen] = useState(false);
  const [offset, setOffset] = useState(76);
  const bar = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const active = useScrollSpy(study ? [] : ids, offset);

  useLayoutEffect(() => {
    const element = bar.current;
    if (!element) return;
    const measure = () => {
      const height = Math.ceil(element.getBoundingClientRect().height) + 8;
      document.documentElement.style.setProperty("--header-offset", height + "px");
      setOffset(height);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    };
    const outside = (event: PointerEvent) => {
      if (!bar.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", escape);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", escape);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <div ref={bar} className="container site-nav-wrap">
        <a className="site-brand" href={asset("#top")}>Lesnar Tambun</a>
        <button type="button" ref={toggle} className="menu-toggle"
          aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>Menu</button>
        <nav id="primary-navigation" className="site-nav" aria-label="Primary" data-open={open}>
          {NAV_LINKS.map(({ id, label }) => <a key={id}
            href={study ? asset("#" + id) : "#" + id}
            aria-current={!study && active === id ? "location" : undefined}
            onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
        <a className="header-cv" href={cvDownloadUrl} download>Download CV</a>
      </div>
    </header>
  </>;
}

export function PageFooter() {
  return <footer id="contact" tabIndex={-1} className="site-footer">
    <div className="container footer-inner">
      <div><h2>Get in touch</h2><p>Data Analytics · Business Intelligence · Data Science</p></div>
      <div className="footer-links">
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        <a href={CONTACT.linkedin.href}>LinkedIn</a><a href={CONTACT.github.href}>GitHub</a>
        <a href={cvDownloadUrl} download>Download CV</a><a href={CONTACT.instagram.href}>Instagram</a>
      </div>
    </div>
  </footer>;
}
