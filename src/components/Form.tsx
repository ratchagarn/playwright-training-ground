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
  hasError = true,
  children,
}: FormItemProps) => {
  const childClassName = classNames('mt-1', {
    'text-red-400 [&>*]:border-red-400': hasError,
  })
  const helpClassName = classNames('text-sm', {
    'text-gray-400': !hasError,
    'text-red-400': hasError,
  })

  return (
    <div className="mb-4">
      {label ? (
        <label className="block font-medium text-gray-600">{label}</label>
      ) : null}
      <div className={childClassName}>{children}</div>
      {help ? <div className={helpClassName}>{help}</div> : null}
    </div>
  )
}
