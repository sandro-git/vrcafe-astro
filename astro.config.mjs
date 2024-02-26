import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { sanityIntegration } from "@sanity/astro";
// import sanity from "@sanity/astro";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [tailwind(), sanityIntegration({
    projectId: "7hknafzd",
    dataset: "production",
    // Set useCdn to false if you're building statically.
    useCdn: false,
    studioBasePath: "/admin"
  }), react()],
  adapter: netlify()
});