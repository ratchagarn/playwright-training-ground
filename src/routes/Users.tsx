import { useLoaderData } from 'react-router-dom'

import type { Users } from 'services/api/users'

const UsersPage = () => {
  const users = useLoaderData() as Users

  return (
    <>
      <h1 className="mb-4 text-xl font-bold">Users Page</h1>

      <pre className="rounded-lg bg-gray-800 p-2 text-orange-300">
        <code className="text-xs">{JSON.stringify(users, null, 2)}</code>
      </pre>
    </>
  )
}

export default UsersPage
