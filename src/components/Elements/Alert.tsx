import type { ReactNode } from 'react'
import { clsx } from 'clsx'

type AlertType = 'error' | 'info' | 'warning' | 'success'

interface AlertProps {
  type?: AlertType
  className?: string
  message: ReactNode
}

export const Alert = ({ type = 'error', className, message }: AlertProps) => {
  const classNameByType = clsx(className, {
    'border-red-500 bg-red-50 text-red-700': type === 'error',
    'border-blue-500 bg-blue-50 text-blue-700': type === 'info',
    'border-yellow-500 bg-yellow-50 text-yellow-700': type === 'warning',
    'border-green-500 bg-green-50 text-green-700': type === 'success',
  })

  return (
    <div
      className={`my-4 flex justify-center gap-2 rounded-md border p-2 ${classNameByType}`}
    >
      {message}
    </div>
  )
}
