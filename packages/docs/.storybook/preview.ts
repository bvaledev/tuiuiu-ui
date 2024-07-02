import type { Preview } from "@storybook/react";

import '@tuiuiu-ui/react/dist/index.css'

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      actions: { argTypesRegex: "^on[A-Z].*" },
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
