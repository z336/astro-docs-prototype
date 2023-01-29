import { defineConfig } from 'astro/config';
import addClasses from './add-classes.mjs';
import image from '@astrojs/image';
import preact from '@astrojs/preact';
import mdx from '@astrojs/mdx';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact({ compat: true }),
    mdx(),
    image({ serviceEntryPoint: '@astrojs/image/sharp' }),
  ],
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
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
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'github-dark',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
  vite: {
    plugins: [yaml()],
  },
});
