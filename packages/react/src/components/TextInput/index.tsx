import * as React from 'react'

import { VariantProps, tv } from 'tailwind-variants'
import { cn } from '../../utils'

const textInputVariants = tv({
  slots: {
    root: [
      'flex items-baseline',
      'px-4 py-3 rounded-sm box-border border',
      'bg-gray-50 border-2 border-gray-100 text-gray-700',
      'has-[input:disabled]:opacity-40 has-[input:disabled]:cursor-not-allowed',
      'has-[input:focus]:border-tui-300',
    ],
    prefixSpan: ['font-body text-sm text-gray-400 font-normal mx-1'],
    textInput: [
      ' inline-flex font-body text-sm placeholder:text-sm w-full border-none focus:outline-none',
      'bg-transparent placeholder:text-gray-400 text-gray-700',
      'disabled:cursor-not-allowed',
    ],
  },
  variants: {
    size: {
      sm: 'h-9',
      md: 'h-11',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type TextInputProps = {
  prefix?: string
} & React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof textInputVariants>

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, prefix, type, size, ...props }, ref) => {
    const { root, prefixSpan, textInput } = textInputVariants({ size })
    return (
      <div className={cn(root(), className)}>
        {!!prefix && <span className={prefixSpan()}>{prefix}</span>}
        <input type={type} className={textInput()} ref={ref} {...props} />
      </div>
    )
  },
)
TextInput.displayName = 'TextInput'

export { TextInput }
