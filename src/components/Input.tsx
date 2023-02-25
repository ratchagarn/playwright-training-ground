import type { HTMLProps } from 'react'

export const Input = ({ type, ...props }: HTMLProps<HTMLInputElement>) => (
  <input {...props} />
)
