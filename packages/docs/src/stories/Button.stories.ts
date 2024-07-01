import type { StoryObj, Meta } from '@storybook/react'
import { Button } from '@tuiuiu-ui/react'

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Clique aqui',
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const PrimaryStory: Story = {}

export const SecondaryStory: Story = {}
