import React, { ElementType, HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils'
import { VariantProps, tv } from 'tailwind-variants'

const headingVariants = tv({
  base: 'font-display leading-shorter m-0 text-gray-800',
  variants: {
    size: {
      sm: 'text-xl',
      md: 'text-2xl',
      lg: 'text-4xl',
      xl: 'text-5xl',
      '2xl': 'text-6xl',
      '4xl': 'text-7xl',
      '5xl': 'text-8xl',
      '6xl': 'text-9xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type HeadingProps = {
  children: ReactNode
  as?: ElementType
} & HTMLAttributes<HTMLSpanElement | HTMLParagraphElement | HTMLElement> &
  VariantProps<typeof headingVariants>

const Heading = React.forwardRef<
  HTMLSpanElement | HTMLParagraphElement | HTMLElement,
  HeadingProps
>(({ children, className, size, as: Comp = 'h2', ...props }, ref) => (
  <Comp
    {...props}
    ref={ref}
    className={cn(headingVariants({ size }), className)}
  >
    {children}
  </Comp>
))
Heading.displayName = 'Heading'

export { Heading }
