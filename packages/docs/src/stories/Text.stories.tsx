import type { StoryObj, Meta } from '@storybook/react'
import { Text } from '@tuiuiu-ui/react'

const meta = {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    as: {
      control: 'inline-radio',
      options: ['strong', 'span', 'p'],
    },
    size: {
      control: 'inline-radio',
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
    },
  },
  args: {
    size: 'md',
    as: 'p',
    children: 'Olá mundo!',
  },
} satisfies Meta<typeof Text>

export default meta

export const Default: StoryObj<typeof Text> = {
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o elemento de texto é um `p` isso pode ser alterado utilizando a propriedade `as`',
      },
    },
  },
}
