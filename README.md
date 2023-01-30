# Docs

This a knowledge base built with Astro, Sass, Preact, and MDX. It is intended to be as lightweight and accessible as possible, so that users can quickly find the information they need.

- [Docs](#docs)
  - [Project Structure](#project-structure)
  - [Commands](#commands)
  - [Features](#features)

## Project Structure

```
/
├── public/
│   └── example.svg
├── src/
│   └── components/
│       └── example.astro
│       └── example.jsx
│   └── data/
│       └── example.yaml
│   └── layouts/
│       └── example.astro
│   └── pages/
│       └── docs/
│           └── example/
│               └── index.mdx
│       └── index.astro
│   └── scripts/
│       └── example.js
│   └── styles/
│       └── example.scss
│   └── utils/
│       └── example.js
└── package.json
```

- `public` Global assets such as fonts or SVG's go here.
- `src`
  - `components` Astro/React/Vue/Svelte/Preact components go here. This project uses Astro and Preact components.
  - `data` Metadata and navigation files. Whenever a new page or doc is added to the project, these files should be updated for site navigation.
  - `layouts` Template or layout files go here. This project has three:
    - `ArticleLayout.astro` Used with help articles.
    - `BaseLayout.astro` This is the global site layout file. The other two layouts chain off of this file.
    - `PageLayout.astro` Used with top level pages that are not help articles.
  - `pages` Top level pages go here. To include top level pages in navigation components, update `pages.yaml` in the `data` folder.
    - `docs` Help articles go here. The folder structure is set up to allow translations of docs in the future. The folder name for a doc is used for its slug. The folder should include an `index.mdx` file and any images for that doc.
  - `scripts` Vanilla JavaScript files are kept here. These are used for DOM interactivity. These files are linked in a `script` tag in the `BaseLayout.astro` layout file, but injected into the `head` in production.
  - `styles` This project uses Sass for organization, validation, and limited syntax sugar like nested selectors. Vanilla CSS variables are used throughout for clarity. Sass is automatically compiled to CSS via an Astro plugin.
  - `utils` Any JavaScript functions that can be abstracted away and called in multiple instances of the project are kept here.
  - `add-classes.mjs` This file contains some helper functions that add a class to headings, which are necessary for styling headings with anchor links in help articles.
  - `astro.config.mjs` This is the main config file for Astro. It contains config settings for `preact`, `mdx`, `rehype`, `yaml`, `image` processing, and `shiki` code block styles.
  - `package.json` This contains the usual scripts and dependencies for a project like this.
  - `tsconfig.json` Relaxed TypeScript settings are applied here.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## Features

- [Astro](https://docs.astro.build)
- [Sass](https://sass-lang.com/)
- [CUBE CSS](https://cube.fyi/)
- [MDX](https://mdxjs.com/)
- [Preact](https://preactjs.com/)
- [Yaml](https://quickref.me/yaml)
