import { forwardRef, type HTMLProps } from 'react'

export const Input = forwardRef<HTMLInputElement>(
  ({ type, ...props }: HTMLProps<HTMLInputElement>, ref) => (
    <input
      ref={ref}
      className="block w-full rounded border py-1 px-2 outline-none"
      {...props}
    />
  )
)
