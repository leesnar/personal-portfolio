import { StrictMode, useLayoutEffect } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { studyRoutes } from "./data/studyRoutes";
import { asset } from "./lib/asset";
import "./styles/global.css";

function redirectLegacyStudy() {
  const route = studyRoutes.find(({ legacy }) => legacy === location.hash);
  if (route) location.replace(asset(`projects/${route.slug}/`));
  return Boolean(route);
}

function HomeDocument() {
  useLayoutEffect(() => {
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    if (!location.hash || navigation?.type === "back_forward") return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(location.hash.slice(1))?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, []);
  return <App />;
}

if (!redirectLegacyStudy()) {
  window.addEventListener("hashchange", redirectLegacyStudy);
  createRoot(document.getElementById("root")!).render(<StrictMode><HomeDocument /></StrictMode>);
}
