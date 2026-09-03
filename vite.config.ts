import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // served from https://leesnar.github.io/personal-portfolio/ — runtime paths
  // into public/ go through src/lib/asset.ts to pick this up
  base: "/personal-portfolio/",
  plugins: [react()],
});
