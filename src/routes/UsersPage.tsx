import { useQuery } from '@tanstack/react-query'

import PageTitle from 'components/PageTitle'
import Loading from 'components/Loading'
import TableDataList, {
  type TableDataListProps,
} from 'components/TableDataList'

import users, { type User } from 'api/users'

const UsersPage = () => {
  const query = useQuery({
    queryKey: ['getUserList'],
    queryFn: users.getUserList,
  })

  const columns: TableDataListProps<User>['columns'] = [
    {
      key: 'name',
      title: 'Name',
      render: (record) => record.name,
    },
    {
      key: 'postition',
      title: 'Position',
      render: (record) => record.position,
    },
    {
      key: 'email',
      title: 'Email',
      render: (record) => record.email,
    },
    {
      key: 'phone',
      title: 'Phone',
      render: (record) => record.phone,
    },
  ]

  return (
    <>
      <PageTitle>Users Page</PageTitle>

      {query.isLoading ? (
        <Loading />
      ) : (
        <TableDataList dataSource={query.data} columns={columns} />
      )}
    </>
  )
}

export default UsersPage
