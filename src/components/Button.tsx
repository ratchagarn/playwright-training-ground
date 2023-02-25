import type { ReactNode, HTMLProps, ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

type ButtonType = 'default' | 'primary' | 'danger'

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: ButtonType
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  loading?: boolean
  children?: ReactNode
}

export const Button = ({
  type = 'default',
  htmlType,
  className,
  disabled = false,
  loading = false,
  children,
  ...props
}: ButtonProps) => {
  const modifyClassName = classNames(className, {
    'bg-gray-200': !disabled && type === 'default',
    'bg-blue-500 text-white': !disabled && type === 'primary',
    'bg-red-500 text-white': !disabled && type === 'danger',
    'bg-gray-400 text-gray-300 opacity-50': disabled,
    'opacity-75 pointer-events-none': loading,
  })

  return (
    <button
      {...props}
      type={htmlType}
      className={`rounded py-2 px-4 transition hover:opacity-75 ${modifyClassName}`}
      disabled={disabled || loading}
    >
      {loading ? 'Loading...' : children}
    </button>
  )
}
