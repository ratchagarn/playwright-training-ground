import { useRef, type HTMLProps, type ReactNode } from 'react'
import { useButton, type AriaButtonProps } from 'react-aria'
import { clsx } from 'clsx'

import { IconLoading } from '../Elements/IconLoading'

type HTMLButtonProps = HTMLProps<HTMLButtonElement>
type ButtonColor = 'default' | 'primary' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends AriaButtonProps {
  color?: ButtonColor
  size?: ButtonSize
  icon?: ReactNode
  onClick?: AriaButtonProps['onPress']
  disabled?: AriaButtonProps['isDisabled']
  className?: HTMLButtonProps['className']
  loading?: boolean
}

export const Button = ({
  color = 'primary',
  size = 'md',
  icon,
  className,
  disabled = false,
  loading = false,
  ...props
}: ButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, ref)
  const { children } = props

  const modifyClassName = clsx(className, {
    'bg-gray-200': !disabled && color === 'default',
    'bg-blue-500 text-white': !disabled && color === 'primary',
    'bg-red-500 text-white': !disabled && color === 'danger',
    'bg-gray-300 text-gray-400': disabled,
    'opacity-75 pointer-events-none': loading,
    'px-2 py-1  text-xs': size === 'sm',
    'px-3 py-1 text-md': size === 'md',
    'px-4 py-2 text-md': size === 'lg',
  })

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={`select-none rounded transition hover:opacity-75 ${modifyClassName}`}
    >
      <span className="inline-flex items-center justify-center gap-1">
        {loading ? (
          <IconLoading />
        ) : (
          <>
            {icon} {children}
          </>
        )}
      </span>
    </button>
  )
}
