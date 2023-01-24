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
    preact(),
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
    syntaxHighlight: false,
    extendDefaultPlugins: true,
  },
  vite: {
    plugins: [yaml()],
  },
});
