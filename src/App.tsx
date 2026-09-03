import { SmoothScroll } from "./components/ui/SmoothScroll";
import { CustomCursor } from "./components/ui/CustomCursor";
import { Nav } from "./components/Nav";
import { Hero } from "./components/sections/Hero";
import { Intro } from "./components/sections/Intro";
import { TopProjects } from "./components/sections/TopProjects";
import { CaseStudyOne } from "./components/sections/CaseStudyOne";
import { CaseStudyTwo } from "./components/sections/CaseStudyTwo";
import { SelectedProjects } from "./components/sections/SelectedProjects";
import { Closing } from "./components/sections/Closing";

export function App() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Intro />
        <TopProjects />
        <CaseStudyOne />
        <CaseStudyTwo />
        <SelectedProjects />
        <Closing />
      </main>
    </SmoothScroll>
  );
}
