import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://tutorial-blog-tsec85.netlify.app/",
  integrations: [preact()]
});