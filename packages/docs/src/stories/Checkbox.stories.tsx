import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Checkbox } from '@tuiuiu-ui/react'

const meta = {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    'aria-label': 'accept-checkbox',
    id: 'accept-checkbox',
  },
  decorators: [
    (Story) => {
      return (
        <Box className="flex flex-row gap-2">
          {Story()}
          <Text as="label" htmlFor="accept-checkbox" size="sm">
            Accept terms of use
          </Text>
        </Box>
      )
    },
  ],
} satisfies Meta<typeof Checkbox>

export default meta

export const Primary: StoryObj<typeof meta> = {}
