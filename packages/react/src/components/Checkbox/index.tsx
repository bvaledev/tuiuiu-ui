import * as React from 'react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { VariantProps, tv } from 'tailwind-variants'
import { cn } from '../../utils'
import { Check } from 'lucide-react'

const textInputVariants = tv({
  slots: {
    container: [
      'w-6 h-6 rounded-xs leading-none cursor-pointer overflow-hidden box-border',
      'flex justify-center items-center',
      'border-2 data-[state=checked]:border-transparent data-[state=unchecked]:border-gray-300',
      ' bg-gray-100 hover:bg-gray-50 data-[state=checked]:bg-tui-300 focus:border-tui-300',
    ],
    indicator: [
      'text-white w-6 h-6',
      'transition-all delay-200 ease-out',
      'data-[state=checked]:animate-slide-in data-[state=unchecked]:animate-slide-out',
    ],
  },
})

export type CheckboxProps = {
  prefix?: string
} & React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> &
  VariantProps<typeof textInputVariants>

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => {
  const { container, indicator } = textInputVariants()
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(container(), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator className={indicator()}>
        <Check size={24} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})
Checkbox.displayName = 'Checkbox'

export { Checkbox }
