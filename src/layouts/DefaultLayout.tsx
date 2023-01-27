import { Link, Outlet } from 'react-router-dom'

import { pagePath } from 'AppRoutes'

const DefaultLayout = () => {
  return (
    <>
      <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
        <Link to={pagePath.index}>Home</Link>
      </div>

      <Outlet />
    </>
  )
}

export default DefaultLayout
