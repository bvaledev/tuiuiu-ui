import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
import { colors } from '@tuiuiu-ui/tokens';
import theme from "./theme";

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
          value: colors.gray900,
        },
        {
          name: 'light',
          value: colors.gray50,
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
