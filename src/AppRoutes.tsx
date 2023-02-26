import { useMemo } from 'react'
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
import UsersUpdatePage from 'routes/UsersUpdatePage'

import { keyMirror } from 'helpers/keyMirror'

const pagePathList = ['/', '/users', '/users/:id', '/users/create'] as const

export const pagePath = keyMirror(pagePathList)

type PagePathName = keyof typeof pagePath

const AppRoutes = () => {
  const pages: RouteObject[] = useMemo(
    () => [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: pagePath['/users'],
        element: <UsersPage />,
      },
      {
        path: pagePath['/users/create'],
        element: <UserCreatePage />,
      },
      {
        path: pagePath['/users/:id'],
        element: <UsersUpdatePage />,
      },
    ],
    []
  )

  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: '/',
          element: (
            <QueryParamProvider adapter={ReactRouter6Adapter}>
              <DefaultLayout />
            </QueryParamProvider>
          ),
          errorElement: (
            <div className="flex h-screen flex-col items-center justify-center gap-4">
              <h1 className="text-xl font-bold">Page Not Found</h1>
              <Link to={pagePath['/']} className="text-blue-600 underline">
                Back
              </Link>
            </div>
          ),
          children: pages,
        },
      ]),
    [pages]
  )

  return <RouterProvider router={router} />
}

export default AppRoutes

interface GetRoutePathOptions {
  params?: { id: string | null }
  query?: Record<string, string | number | string[] | number[]>
}

export const getRoutePath = (
  key: PagePathName,
  options?: GetRoutePathOptions
) => {
  const { params, query } = options ?? {}
  const qs = query ? queryString.stringify(query) : null

  const destination = generatePath(pagePath[key], params)

  return qs ? `${destination}?${qs}` : destination
}
