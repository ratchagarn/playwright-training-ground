import type { ReactNode, HTMLProps } from 'react'
import classNames from 'classnames'

import { Spin } from 'components/Elements'

interface FormProps extends HTMLProps<HTMLFormElement> {
  loading?: boolean
  children?: ReactNode
}

export const Form = ({ loading = false, children, ...props }: FormProps) => (
  <Spin spinning={loading}>
    <form {...props} className="flex flex-col">
      {children}
    </form>
  </Spin>
)

interface FormItemProps {
  label?: ReactNode
  help?: ReactNode
  hasError?: boolean
  hidden?: boolean
  children?: ReactNode
}

export const FormItem = ({
  label,
  help,
  hasError = false,
  hidden = false,
  children,
}: FormItemProps) => {
  const containerClassName = classNames('mb-4', {
    hidden,
  })

  const childClassName = classNames('mt-1', {
    'text-red-400 [&>*]:border-red-400': hasError,
  })
  const helpClassName = classNames('text-sm', {
    'text-gray-400': !hasError,
    'text-red-400': hasError,
  })

  return (
    <div className={containerClassName}>
      {label ? (
        <label className="block font-medium text-gray-600">{label}</label>
      ) : null}
      <div className={childClassName}>{children}</div>
      {help ? <div className={helpClassName}>{help}</div> : null}
    </div>
  )
}
