import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// Cambiá GH_USERNAME por tu usuario de GitHub o pasá la env var SITE.
// Ej: si tu repo final es https://franc.github.io/infocontrollanding
//     GH_USERNAME = "franc"
const GH_USERNAME = process.env.GH_USERNAME || "TU_USUARIO_GITHUB";
const REPO = "infocontrollanding";

export default defineConfig({
  site: process.env.SITE || `https://${GH_USERNAME}.github.io`,
  base: `/${REPO}`,
  trailingSlash: "ignore",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: true,
});
