import { colors, fontSizes, fonts, space, radii } from '@tuiuiu-ui/tokens'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      fontSizes,
    },
    fontFamily: {
      display: fonts.default,
      body: fonts.default,
      mono: fonts.code,
    },
    borderRadius: radii,
    extend: {
      colors,
      spacing: {
        ...space,
      },
    },
  },
  plugins: [],
}
