import type { StoryObj, Meta } from '@storybook/react'
import { Heading } from '@tuiuiu-ui/react'

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  argTypes: {
    as: {
      control: 'inline-radio',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl'],
    },
  },
  args: {
    size: 'md',
    as: 'h2',
    children: 'Headline!',
  },
} satisfies Meta<typeof Heading>

export default meta

export const Default: StoryObj<typeof Heading> = {}
