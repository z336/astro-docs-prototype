import { defineConfig } from 'astro/config';
import addClasses from './add-classes.mjs';
import image from '@astrojs/image';
import preact from '@astrojs/preact';
import mdx from '@astrojs/mdx';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
// https://docs.astro.build/en/guides/markdown-content/
// https://docs.astro.build/en/guides/images/

// Shiki themes & languages
// https://github.com/shikijs/shiki/blob/main/docs/themes.md
// https://github.com/shikijs/shiki/blob/main/docs/languages.md
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
      theme: 'github-dark',
      langs: [],
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
  vite: {
    plugins: [yaml()],
  },
});
