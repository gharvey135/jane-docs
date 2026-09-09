import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Jane Technologies',
  tagline: 'Documentation & API Reference',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages deployment: https://gharvey135.github.io/jane-docs/
  url: 'https://gharvey135.github.io',
  baseUrl: '/jane-docs/',
  organizationName: 'gharvey135',
  projectName: 'jane-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Jane Technologies',
      logo: {
        alt: 'Jane Technologies Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/docs/getting-started', label: 'Docs', position: 'left'},
        {to: '/docs/api-reference', label: 'API Reference', position: 'left'},
        {to: '/docs/examples', label: 'Examples', position: 'left'},
        {
          href: 'https://github.com/gharvey135/jane-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Docs', to: '/docs/getting-started'},
            {label: 'API Reference', to: '/docs/api-reference'},
            {label: 'Examples', to: '/docs/examples'},
          ],
        },
        {
          title: 'Source',
          items: [
            {
              label: 'GitHub repo',
              href: 'https://github.com/gharvey135/jane-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Georgia Harvey. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
