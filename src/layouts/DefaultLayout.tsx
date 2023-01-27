import { useMemo } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import { pagePath } from 'AppRoutes'

const activeClassName = 'text-yellow-300 underline'

const DefaultLayout = () => {
  const pageList: Array<{ label: string; url: string }> = useMemo(
    () => [
      {
        label: 'Home',
        url: pagePath.index,
      },
      {
        label: 'Users',
        url: pagePath.users,
      },
    ],
    []
  )

  return (
    <>
      <header className="flex gap-4 bg-blue-600 p-4">
        {pageList.map((page) => (
          <NavLink
            key={page.label}
            to={page.url}
            className={({ isActive }) =>
              `hover:underline ${isActive ? activeClassName : 'text-white'}`
            }
          >
            {page.label}
          </NavLink>
        ))}
      </header>

      <main className="p-4">
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout
