import { useMemo } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  type RouteObject,
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'
import 'tailwind.css'

import CustomToast from 'components/CustomToast'

import DefaultLayout from 'layouts/DefaultLayout'

import IndexPage from 'routes'
import UsersPage from 'routes/UsersPage'
import UserCreatePage from 'routes/UsersCreatePage'
import UsersUpdatePage from 'routes/UsersUpdatePage'

import { keyMirror } from 'helpers'

import { worker } from './_mocks/browser'

worker.start()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
})

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>

      <CustomToast />
    </>
  )
}

export default App

/**
 * Create application routes
 */
const pagePathList = ['/', '/users', '/users/:id', '/users/create'] as const

export const pagePath = keyMirror(pagePathList)

export type PagePathName = keyof typeof pagePath

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
