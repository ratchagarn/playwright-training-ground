import type { ReactNode, HTMLProps } from 'react'
import classNames from 'classnames'

interface FormProps extends HTMLProps<HTMLFormElement> {
  children?: ReactNode
}

export const Form = ({ children, ...props }: FormProps) => (
  <form {...props} className="flex flex-col">
    {children}
  </form>
)

interface FormItemProps {
  label?: ReactNode
  help?: ReactNode
  hasError?: boolean
  children?: ReactNode
}

export const FormItem = ({
  label,
  help,
  hasError = false,
  children,
}: FormItemProps) => (
  <div className="mb-6">
    {label ? <label className="block font-medium">{label}</label> : null}
    {children}
    {help ? (
      <div
        className={classNames('mt-1 text-sm text-gray-400', {
          'text-red-400': hasError,
        })}
      >
        {help}
      </div>
    ) : null}
  </div>
)
