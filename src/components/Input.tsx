import type { HTMLProps } from 'react'

export const Input = ({ type, ...props }: HTMLProps<HTMLInputElement>) => (
  <input
    className="block w-full rounded border py-1 px-2 outline-none"
    {...props}
  />
)
