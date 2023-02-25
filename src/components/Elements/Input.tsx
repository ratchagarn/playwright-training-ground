import { forwardRef, type HTMLProps } from 'react'
import classNames from 'classnames'

type InputProps = HTMLProps<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ disabled = false, readOnly = false, ...props }: InputProps, ref) => {
    const className = classNames(
      'block w-full rounded border py-1 px-2 outline-none',
      {
        'bg-gray-200 text-gray-400': disabled,
        'bg-gray-100': readOnly,
        'cursor-not-allowed': disabled || readOnly,
      }
    )

    return (
      <input
        ref={ref}
        className={className}
        disabled={disabled}
        readOnly={readOnly}
        {...props}
      />
    )
  }
)