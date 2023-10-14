import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  // ... other config properties
  addons: [
    // ... other addons
    '@storybook/addon-styling',
    'storybook-dark-mode',
  ],
};

export default config;
