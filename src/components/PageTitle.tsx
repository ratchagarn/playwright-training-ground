import type { ReactNode } from 'react'

interface PageTitleProps {
  children?: ReactNode
}

const PageTitle = ({ children }: PageTitleProps) => (
  <h1 className="border-so mb-8 border-b-4 border-dashed pb-2 text-3xl font-bold">
    {children}
  </h1>
)

export default PageTitle
