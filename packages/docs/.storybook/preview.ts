import type { Preview } from "@storybook/react";
import { colors } from '@tuiuiu-ui/tokens';
import theme from "./theme";

import '@tuiuiu-ui/react/dist/index.css'

const preview: Preview = {
  parameters: {
    docs:{
      theme,
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'dark',
          value: colors.gray[900],
        },
        {
          name: 'light',
          value: colors.gray[50],
        },
      ]
    },
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
