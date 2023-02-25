import type { ReactNode } from 'react'

interface SectionTitleProps {
  children?: ReactNode
}

const SectionTitle = ({ children }: SectionTitleProps) => (
  <h3 className="mb-4 border-b-2 pb-2 text-xl font-bold italic">{children}</h3>
)

export default SectionTitle
