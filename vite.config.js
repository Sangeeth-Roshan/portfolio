import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * Vite config
 * - base: "/portfolio/" sets the public path for GitHub Pages deployment
 *   at sangeeth-roshan.github.io/portfolio
 * - Tailwind v4 is injected via the official Vite plugin (not postcss)
 */
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
  ],
});
