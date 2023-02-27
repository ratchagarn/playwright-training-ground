import { forwardRef, type HTMLProps } from 'react'
import { clsx } from 'clsx'

type InputProps = HTMLProps<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ disabled = false, readOnly = false, ...props }: InputProps, ref) => {
    const className = clsx('block w-full rounded border p-2 outline-none', {
      'bg-gray-200 text-gray-400': disabled,
      'bg-gray-100': readOnly,
      'cursor-not-allowed': disabled || readOnly,
    })

    return (
      <input
        {...props}
        ref={ref}
        className={className}
        disabled={disabled}
        readOnly={readOnly}
      />
    )
  }
)
