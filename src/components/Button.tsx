import type { ReactNode, HTMLProps } from 'react'
import classNames from 'classnames'

type ButtonType = 'default' | 'primary' | 'danger'

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: ButtonType
  htmlType?: HTMLButtonElement['type']
  children?: ReactNode
}

export const Button = ({
  type = 'default',
  className,
  children,
  ...props
}: ButtonProps) => {
  const acturalClassName = classNames(className, {
    'bg-blue-500 text-white': type === 'primary',
    'bg-red-500 text-white': type === 'danger',
  })

  return (
    <button
      {...props}
      className={`rounded bg-gray-200 py-2 px-4 transition hover:opacity-75 ${acturalClassName}`}
    >
      {children}
    </button>
  )
}
