import type { ReactNode } from 'react'
import classNames from 'classnames'

import { IconLoading } from './IconLoading'

interface SpinProps {
  spinning?: boolean
  tip?: ReactNode
  children?: ReactNode
}

export const Spin = ({
  spinning = true,
  tip = 'Loading...',
  children,
}: SpinProps) => {
  const className = classNames({
    relative: spinning,
  })

  return (
    <div className={className}>
      {children}

      {spinning ? (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white/50 transition">
          <div className="flex gap-2">
            <IconLoading /> {tip}
          </div>
        </div>
      ) : null}
    </div>
  )
}
