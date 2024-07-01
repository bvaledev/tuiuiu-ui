import type { StoryObj, Meta } from '@storybook/react'
import { Button } from '@tuiuiu-ui/react'

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md'],
    },
  },
  args: {
    isLoading: false,
    variant: 'primary',
    size: 'md',
    children: 'Clique aqui',
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const PrimaryStory: StoryObj<typeof meta> = {
  args: {
    variant: 'primary',
  },
}

export const SecondaryStory: Story = {
  args: {
    variant: 'secondary',
  },
}
