import * as React from 'react'
import * as RAvatar from '@radix-ui/react-avatar'
import { VariantProps, tv } from 'tailwind-variants'
import { cn } from '../../utils'

const avatar = tv({
  slots: {
    root: 'rounded-full inline-block overflow-hidden',
    image: 'h-full w-full rounded-[inherit] object-cover',
    fallback:
      'text-violet11 leading-1 flex h-full w-full items-center justify-center bg-gray-600 text-gray-100 text-[15px] font-medium',
  },
  variants: {
    size: {
      sm: {
        root: 'w-6 h-6',
      },
      md: {
        root: 'w-12 h-12',
      },
      lg: {
        root: 'w-16 h-16',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type AvatarProps = {
  fallbackNode?: React.ReactNode
} & React.ComponentProps<typeof RAvatar.Image> &
  VariantProps<typeof avatar>

function Avatar({ className, size, fallbackNode, ...props }: AvatarProps) {
  const { root, image, fallback } = avatar({ size })
  return (
    <RAvatar.Root className={cn(root())}>
      <RAvatar.Image {...props} className={cn(image(), className)} />
      {fallbackNode && (
        <RAvatar.Fallback className={cn(fallback())} delayMs={600}>
          {fallbackNode}
        </RAvatar.Fallback>
      )}
    </RAvatar.Root>
  )
}
Avatar.displayName = 'Avatar'

export { Avatar }
