import type { StoryObj, Meta } from '@storybook/react'
import { Avatar } from '@tuiuiu-ui/react'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    fallbackNode: {
      control: 'object',
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    fallbackNode: <>BV</>,
    size: 'md',
    src: 'https://github.com/bvaledev.png',
    alt: 'BV',
  },
} satisfies Meta<typeof Avatar>

export default meta

export const Default: StoryObj<typeof Avatar> = {}
export const WithFallback: StoryObj<typeof Avatar> = {
  args: {
    src: undefined,
  },
}
