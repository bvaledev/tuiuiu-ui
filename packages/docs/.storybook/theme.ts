import { create } from '@storybook/theming/create';
import { colors } from "@tuiuiu-ui/tokens"

export default create({
  base: 'dark',
  brandTitle: 'Tuiuiú UI',
  brandUrl: 'https://github.com/bvaledev/tuiuiu-ui',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_blank',

  colorPrimary: colors.tui[700],
  colorSecondary: colors.tui[500],
});
