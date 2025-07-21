import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'getting-started', // docs/getting-started.md
    },
    {
      type: 'doc',
      id: 'api-reference', // docs/api-reference.md
    },
  ],
};

export default sidebars;

