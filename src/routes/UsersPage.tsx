import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery, useMutation } from '@tanstack/react-query'

import PageTitle from 'components/PageTitle'
import ActionBar from 'components/ActionBar'
import RenderByRequestStatus from 'components/RenderByRequestStatus'
import TableListUser from 'components/TableListUser'
import { Button } from 'components/Elements'

import useCustomToast from 'hooks/useCustomToast'

import { getRoutePath } from 'helpers'

import { usersAPI } from 'api/usersAPI'

const UsersPage = () => {
  const [deletingID, setDeletingID] = useState<number>()
  const { toast, toastConfirm } = useCustomToast()

  const query = useQuery({
    queryKey: ['getUserList'],
    queryFn: usersAPI.readAll,
  })

  const deleteUser = useMutation(usersAPI.deleteByID, {
    onError() {
      toast.error('Cannot delete user')
    },
    onSuccess() {
      query.refetch().then(() => {
        toast.success('Delete user succeed')
      })
    },
  })

  return (
    <>
      <PageTitle>Users Page</PageTitle>

      <ActionBar
        extra={
          <Link to={getRoutePath('/users/create')}>
            <Button type="primary">Create New User</Button>
          </Link>
        }
      />

      <RenderByRequestStatus
        status={query.status}
        onSuccess={
          <TableListUser
            data={query.data}
            onDelete={(id) => {
              toastConfirm({
                title: 'Do you want to delete?',
                onOK: () => {
                  deleteUser.mutate(id)
                  setDeletingID(id)
                },
              })
            }}
            deletingID={deletingID}
          />
        }
      />
    </>
  )
}

export default UsersPage
