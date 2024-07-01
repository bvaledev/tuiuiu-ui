import * as React from 'react'

import { VariantProps, tv } from 'tailwind-variants'
import { cn } from '../../utils'

const textAreaVariants = tv({
  base: [
    'px-4 py-3 rounded-sm box-border font-body text-sm placeholder:text-sm w-full resize-y min-h-20 border-2',
    'bg-gray-50 border-gray-100 text-gray-700 focus:border-tui-300 focus:outline-none',
    'placeholder:text-gray-400 text-gray-700',
    'disabled:opacity-40 disabled:cursor-not-allowed',
  ],
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

export type TextAreaProps = React.InputHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof textAreaVariants>

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <textarea
        className={cn(textAreaVariants({ size }), className)}
        ref={ref}
        {...props}
      />
    )
  },
)
TextArea.displayName = 'TextArea'

export { TextArea }
