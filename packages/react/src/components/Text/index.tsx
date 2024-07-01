import React, { ElementType, HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils'
import { VariantProps, tv } from 'tailwind-variants'

const textVariants = tv({
  base: 'font-display leading-base m-0 text-gray-700',
  variants: {
    size: {
      xxs: 'text-xs',
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type TextProps = {
  children: ReactNode
  as?: ElementType
  htmlFor?: string
} & HTMLAttributes<
  HTMLSpanElement | HTMLParagraphElement | HTMLLabelElement | HTMLElement
> &
  VariantProps<typeof textVariants>

const Text = React.forwardRef<
  HTMLSpanElement | HTMLParagraphElement | HTMLElement,
  TextProps
>(({ children, className, size, as, ...props }, ref) => {
  const Comp = as || 'p'
  return (
    <Comp
      ref={ref}
      className={cn(textVariants({ size }), className)}
      {...props}
    >
      {children}
    </Comp>
  )
})
Text.displayName = 'Text'

export { Text }
