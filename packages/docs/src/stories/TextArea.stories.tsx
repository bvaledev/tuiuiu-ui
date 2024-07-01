import type { StoryObj, Meta } from '@storybook/react'
import { TextArea } from '@tuiuiu-ui/react'

const meta = {
  title: 'Form/Text Area',
  component: TextArea,
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['sm', 'md'],
    },
  },
  args: {
    disabled: false,
    placeholder: 'Placeholder',
  },
} satisfies Meta<typeof TextArea>

export default meta

type Story = StoryObj<typeof meta>

export const PrimaryStory: Story = {
  args: {},
}
