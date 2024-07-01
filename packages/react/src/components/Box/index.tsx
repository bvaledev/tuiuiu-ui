import { ElementType, HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils'

type BoxProps = {
  children: ReactNode
  as?: ElementType
} & HTMLAttributes<HTMLElement>

const Box = ({
  children,
  className,
  as: Element = 'div',
  ...props
}: BoxProps) => (
  <Element
    className={cn('p-4 rounded-md bg-white border border-gray-50', className)}
    {...props}
  >
    {children}
  </Element>
)
Box.displayName = 'Box'

export { Box }
