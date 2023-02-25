import type { ReactNode, HTMLProps, ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

type ButtonType = 'default' | 'primary' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'size'> {
  type?: ButtonType
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  size?: ButtonSize
  loading?: boolean
  children?: ReactNode
}

export const Button = ({
  type = 'default',
  htmlType,
  size = 'md',
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
    'px-2 py-1  text-xs': size === 'sm',
    'px-3 py-1 text-md': size === 'md',
    'px-4 py-2 text-md': size === 'lg',
  })

  return (
    <button
      {...props}
      type={htmlType}
      className={`rounded transition hover:opacity-75 ${modifyClassName}`}
      disabled={disabled || loading}
    >
      {loading ? (
        <div className="animate__animated animate__faster animate__rotateOut animate__infinite">
          ↻
        </div>
      ) : (
        children
      )}
    </button>
  )
}
