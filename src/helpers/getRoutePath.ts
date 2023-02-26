import { generatePath } from 'react-router-dom'
import queryString from 'query-string'

import { pagePath, type PagePathName } from 'AppRoutes'

interface GetRoutePathOptions {
  params?: { id: string | null }
  query?: Record<string, string | number | string[] | number[]>
}

/**
 * Get the route path by its key.
 * @param key - The key of the path in the route.
 * @param [options] - The options for the route.
 * @param [options.params] - The parameters to include in the route path.
 * @param [options.query] - The query parameters to include in the route.
 * @param [options.params.id] - The id of the parameter (optional).
 * @returns The route path with the parameters and query parameters included.
 */
export const getRoutePath = (
  key: PagePathName,
  options?: GetRoutePathOptions
) => {
  const { params, query } = options ?? {}
  const qs = query ? queryString.stringify(query) : null

  const destination = generatePath(pagePath[key], params)

  return qs ? `${destination}?${qs}` : destination
}
