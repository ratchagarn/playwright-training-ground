import {
  createBrowserRouter,
  RouterProvider,
  Link,
  RouteObject,
} from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'

import users from 'services/api/users'

import DefaultLayout from 'layouts/DefaultLayout'

import IndexPage from 'routes'
import UsersPage from 'routes/Users'

export const pagePath = {
  index: '/',
  users: '/users',
}

type PagePathName = keyof typeof pagePath

const allPageRoutes: Record<PagePathName, RouteObject> = {
  index: {
    index: true,
    element: <IndexPage />,
  },
  users: {
    path: pagePath.users,
    element: <UsersPage />,
    loader: async () => {
      const resp = await users.getUserList()

      return resp.data
    },
  },
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootElement />,
    errorElement: (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-xl font-bold">Page Not Found</h1>
        <Link to={pagePath.index} className="underline text-blue-600">
          Back
        </Link>
      </div>
    ),
    children: Object.keys(allPageRoutes).map(
      (name) => allPageRoutes[name as PagePathName]
    ),
  },
])

const AppRoutes = () => {
  return <RouterProvider router={router} />
}

export default AppRoutes

function RootElement() {
  return (
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <DefaultLayout />
    </QueryParamProvider>
  )
}
