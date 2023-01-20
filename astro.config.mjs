import { defineConfig } from 'astro/config';
import addClasses from './add-classes.mjs';

// https://astro.build/config
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  markdown: {
    rehypePlugins: [
      'rehype-slug',
      [
        'rehype-autolink-headings',
        {
          behavior: 'wrap',
        },
      ],
      [
        addClasses,
        {
          'h2,h3': 'heading-anchor',
        },
      ],
    ],
    extendDefaultPlugins: true,
  },
});
