import {
  createBrowserRouter,
  RouterProvider,
  Link,
  generatePath,
  type RouteObject,
} from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'
import queryString from 'query-string'

import DefaultLayout from 'layouts/DefaultLayout'

import IndexPage from 'routes'
import UsersPage from 'routes/UsersPage'
import UserCreatePage from 'routes/UsersCreatePage'
import UsersByIDPage from 'routes/UsersByIDPage'

export const pagePath = {
  index: '/',
  users: '/users',
  usersCreatePage: '/users/create',
  usersByID: '/users/:id',
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
  },
  usersCreatePage: {
    path: pagePath.usersCreatePage,
    element: <UserCreatePage />,
  },
  usersByID: {
    path: pagePath.usersByID,
    element: <UsersByIDPage />,
  },
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootElement />,
    errorElement: (
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <h1 className="text-xl font-bold">Page Not Found</h1>
        <Link to={pagePath.index} className="text-blue-600 underline">
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

interface GetRoutePathOptions {
  params?: Record<string, string | number>
  query?: Record<string, string | number | string[] | number[]>
}

export const getRoutePath = (
  key: PagePathName,
  options?: GetRoutePathOptions
) => {
  const { params, query } = options ?? {}
  const qs = query ? queryString.stringify(query) : null

  const destination = generatePath(pagePath[key], { params })

  return qs ? `${destination}?${qs}` : destination
}
