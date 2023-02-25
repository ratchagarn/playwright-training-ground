import { Link } from 'react-router-dom'
import { useQuery, useMutation } from '@tanstack/react-query'

import PageTitle from 'components/PageTitle'
import ActionBar from 'components/ActionBar'
import Loading from 'components/Loading'
import TableDataList, {
  type TableDataListProps,
} from 'components/TableDataList'
import { Button } from 'components/Elements'

import useCustomToast from 'hooks/useCustomToast'

import { getRoutePath } from 'AppRoutes'

import { usersAPI, type User } from 'api/usersAPI'

const UsersPage = () => {
  const { toast, toastConfirm } = useCustomToast()

  const query = useQuery({
    queryKey: ['getUserList'],
    queryFn: usersAPI.getAll,
  })

  const deleteUser = useMutation(usersAPI.deleteByID, {
    onError() {
      toast.error('Cannot delete user')
    },
    onSuccess() {
      toast.success('Delete user succeed')
      query.refetch()
    },
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
    {
      key: 'delete',
      title: 'Delete',
      align: 'center',
      width: 60,
      render: (record) => (
        <Button
          type="danger"
          loading={deleteUser.isLoading}
          onClick={() => {
            toastConfirm({
              title: 'Do you want to delete?',
              onOK: () => {
                deleteUser.mutate(record.id)
              },
            })
          }}
        >
          ✕
        </Button>
      ),
    },
  ]

  return (
    <>
      <PageTitle>Users Page</PageTitle>

      <ActionBar
        extra={
          <Link to={getRoutePath('usersCreatePage')}>
            <Button type="primary">Create New User</Button>
          </Link>
        }
      />

      {query.isLoading ? (
        <Loading />
      ) : (
        <TableDataList dataSource={query.data} columns={columns} />
      )}
    </>
  )
}

export default UsersPage
