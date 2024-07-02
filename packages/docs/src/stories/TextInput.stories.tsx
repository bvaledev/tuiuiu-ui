import type { StoryObj, Meta } from '@storybook/react'
import { TextInput } from '@tuiuiu-ui/react'

const meta = {
  title: 'Form/Text Input',
  component: TextInput,
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['sm', 'md'],
    },
  },
  args: {
    disabled: false,
    size: 'md',
    type: 'text',
    prefix: '',
    placeholder: 'Placeholder',
  },
} satisfies Meta<typeof TextInput>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}

export const Secondary: Story = {
  args: {
    prefix: 'call.com/',
  },
}
