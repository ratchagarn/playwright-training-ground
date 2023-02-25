import type { ReactNode } from 'react'

interface ActionBarProps {
  children?: ReactNode
  extra?: ReactNode
}

const ActionBar = ({ children, extra }: ActionBarProps) => (
  <div className="mb-4 flex gap-4">
    <div className="flex flex-1 gap-2">{children}</div>
    {extra ? <div className="flex gap-2">{extra}</div> : null}
  </div>
)

export default ActionBar
