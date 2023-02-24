import { useQuery } from '@tanstack/react-query'

import users from 'api/users'

const UsersPage = () => {
  const query = useQuery({
    queryKey: ['getUserList'],
    queryFn: users.getUserList,
  })

  return (
    <>
      <h1 className="mb-4 text-xl font-bold">Users Page</h1>

      {query.isLoading ? (
        <div>Loading...</div>
      ) : (
        <pre className="rounded-lg bg-gray-800 p-2 text-orange-300">
          {query.data?.data.map((item) => (
            <code key={item.id} className="text-xs">
              {JSON.stringify(item, null, 2)}
            </code>
          ))}
        </pre>
      )}
    </>
  )
}

export default UsersPage
