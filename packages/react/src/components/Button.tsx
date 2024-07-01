import { ButtonHTMLAttributes, ReactNode } from 'react'
type ButtonProps = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-tui-700 hover:bg-tui-900 active:brightness-75 text-white font-semibold py-2 px-4 rounded-sm"
    >
      {children}
    </button>
  )
}
