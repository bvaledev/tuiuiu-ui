import * as React from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'

import { VariantProps, tv } from 'tailwind-variants'
import { cn } from '../../utils'
import { LoadingIcon } from '../../assets'

const buttonVariants = tv({
  slots: {
    base: [
      'transition-all ease-in-out duration-200 rounded-sm text-sm font-medium font-body text-center',
      'box-border flex items-center justify-center gap-2 ',
      'min-w-32 px-4 bg-transparent cursor-pointer',
      'disabled:bg-gray-200 disabled:text-white disabled:cursor-not-allowed disabled:border-none',
    ],
    loadingIcon: 'animate-spin w-6 h-6',
  },
  variants: {
    variant: {
      primary: {
        base: 'bg-tui-500 hover:bg-tui-300 text-white',
      },
      secondary: {
        base: 'border-2 border-gray-700 hover:bg-gray-100 text-gray-800',
      },
    },
    size: {
      sm: {
        base: 'h-9',
        loadingIcon: 'w-5 h-5',
      },
      md: {
        base: 'h-11',
        loadingIcon: 'w-6 h-6',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
})

export type ButtonProps = {
  asChild?: boolean
  isLoading?: boolean
  loadingText?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading,
      children,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    const { base, loadingIcon } = buttonVariants({ size, variant, className })
    return (
      <Comp
        className={cn(base(), className)}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {!!isLoading && <LoadingIcon className={loadingIcon()} />}
        <Slottable>{children}</Slottable>
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
