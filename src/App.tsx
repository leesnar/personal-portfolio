import { Container } from "./components/Container";
import { FeaturedWork, MoreProjects } from "./components/HomeProjects";
import { PageFooter, PageHeader } from "./components/PageChrome";
import { DoodleArrow, DoodleSwirl } from "./components/icons/Icons";
import { CAPABILITIES, CAREER, CREDENTIALS, HERO, INTRO, cvDownloadUrl } from "./data/content";
import { asset } from "./lib/asset";

function Hero() {
  return (
    <section className="home-hero" id="top" aria-labelledby="hero-title">
      <Container className="home-hero__grid">
        <div className="home-hero__copy">
          <span className="hero-greeting">Hello! <DoodleArrow /></span>
          <h1 id="hero-title">{HERO.name}</h1>
          <p className="hero-disciplines">{HERO.role}</p>
          <p className="hero-summary">{HERO.quote}</p>
          <div className="action-row">
            <a className="button-primary" href="#projects">Explore projects</a>
            <a className="button-secondary" href={cvDownloadUrl} download>Download CV</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="home-hero__art">
          <div className="hero-portrait">
            <img src={asset("assets/lesnar-portrait.webp")} width="768" height="584" alt="Portrait of Lesnar Tambun" />
          </div>
          <DoodleSwirl className="hero-swirl" />
        </div>
      </Container>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="home-section experience-section" aria-labelledby="experience-title">
      <Container>
        <div className="section-heading"><h2 id="experience-title">Experience &amp; education</h2></div>
        <div className="career-grid">
          {CAREER.map(item => (
            <article className="career-item" key={item.title}>
              <h3>{item.title}</h3>
              <p className="career-org">{item.organization}</p>
              {item.dates && <p className="career-dates">{item.dates}</p>}
              <ul>{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
              {item.work && <a href={item.work.href}>{item.work.label}</a>}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="home-section capabilities-section" aria-labelledby="capabilities-title">
      <Container>
        <div className="section-heading"><h2 id="capabilities-title">Capabilities</h2></div>
        <div className="capability-grid">
          {CAPABILITIES.map(item => (
            <article className="capability" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <div className="project-links">{item.links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Credentials() {
  return (
    <section className="home-section credentials-section" aria-labelledby="credentials-title">
      <Container>
        <div className="section-heading"><h2 id="credentials-title">Credentials</h2></div>
        <ul className="credentials-list">
          {CREDENTIALS.map(item => (
            <li key={item.href}>
              <div><h3>{item.title}</h3><time dateTime={item.isoDate}>{item.date}</time></div>
              <a href={item.href} aria-label={"Verify " + item.title + " credential"}>Verify credential</a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function App() {
  return (
    <>
      <PageHeader />
      <main id="main" className="portfolio-home" tabIndex={-1}>
        <Hero />
        <FeaturedWork />
        <Experience />
        <Capabilities />
        <MoreProjects />
        <Credentials />
        <section id="intro" className="home-section about-section" aria-labelledby="about-title">
          <Container>
            <div className="section-heading"><h2 id="about-title">About me</h2></div>
            <p>{INTRO}</p>
          </Container>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
