import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { studyRoutes } from "./src/data/studyRoutes";

export default defineConfig({
  base: "/personal-portfolio/",
  publicDir: "site-public",
  appType: "mpa",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: ["index.html", ...studyRoutes.map(({ slug }) => `projects/${slug}/index.html`)],
    },
  },
});
