import {
  createBrowserRouter,
  RouterProvider,
  Link,
  RouteObject,
} from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'

import DefaultLayout from 'layouts/DefaultLayout'

import IndexPage from 'routes'

export const pagePath = {
  index: '/',
}

type PagePathName = keyof typeof pagePath

const allPageRoutes: Record<PagePathName, RouteObject> = {
  index: {
    index: true,
    element: <IndexPage />,
  },
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootElement />,
    errorElement: (
      <>
        <h1>Page Not Found</h1>
        <Link to={pagePath.index}>Back</Link>
      </>
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
