import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text } from '@tuiuiu-ui/react'

const meta = {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Clique aqui</Text>,
  },
} satisfies Meta<typeof Box>

export default meta

type Story = StoryObj<typeof meta>

export const PrimaryStory: Story = {
  args: {},
}

export const SecondaryStory: Story = {
  args: {},
}
