const docsNav = [
  { text: 'Start Here', header: true, type: 'learn', key: 'startHere' },
  { text: 'Getting Started', slug: 'getting-started', key: 'getting-started' },
  { text: 'Installation', slug: 'install/auto', key: 'install' },
  { text: 'Editor Setup', slug: 'editor-setup', key: 'editor-setup' },
  {
    text: 'Migrate to Astro',
    slug: 'guides/migrate-to-astro',
    key: 'guides/migrate-to-astro',
  },

  { text: 'Tutorials', header: true, type: 'learn', key: 'tutorials' },
  {
    text: 'Build a Blog',
    slug: 'tutorial/0-introduction',
    key: 'blog-tutorial',
  },
];

exports.default = docsNav;
