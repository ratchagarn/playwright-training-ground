import { useQuery } from '@tanstack/react-query'

import PageTitle from 'components/PageTitle'
import ActionBar from 'components/ActionBar'
import Loading from 'components/Loading'
import TableDataList, {
  type TableDataListProps,
} from 'components/TableDataList'

import { Button } from 'components/Elements'

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
      width: '25%',
      render: (record) => record.name,
    },
    {
      key: 'postition',
      title: 'Position',
      width: '25%',
      render: (record) => record.position,
    },
    {
      key: 'email',
      title: 'Email',
      width: '25%',
      render: (record) => record.email,
    },
    {
      key: 'phone',
      title: 'Phone',
      width: '25%',
      render: (record) => record.phone,
    },
  ]

  return (
    <>
      <PageTitle>Users Page</PageTitle>

      <ActionBar extra={<Button type="primary">Create New User</Button>} />

      {query.isLoading ? (
        <Loading />
      ) : (
        <TableDataList dataSource={query.data} columns={columns} />
      )}
    </>
  )
}

export default UsersPage
