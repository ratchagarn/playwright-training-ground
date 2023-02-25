import type { ReactNode, HTMLProps } from 'react'

interface FormProps extends HTMLProps<HTMLFormElement> {
  children?: ReactNode
}

export const Form = ({ children, ...props }: FormProps) => (
  <form {...props}>{children}</form>
)

interface FormItemProps {
  label?: ReactNode
  children?: ReactNode
}

Form.Item = ({ label, children }: FormItemProps) => (
  <div>
    {label ? <label>{label}</label> : null}
    {children}
  </div>
)
