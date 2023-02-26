import { useParams, useNavigate } from 'react-router-dom'
import { useQuery, useMutation } from '@tanstack/react-query'

import PageTitle from 'components/PageTitle'
import RenderByRequestStatus from 'components/RenderByRequestStatus'
import UserForm from 'components/UserForm'

import useCustomToast from 'hooks/useCustomToast'

import { getRoutePath } from 'AppRoutes'

import { usersAPI } from 'api/usersAPI'

const UsersUpdatePage = () => {
  const params = useParams() as { id: string }
  const navigate = useNavigate()

  const { toast } = useCustomToast()

  const query = useQuery({
    queryKey: ['getUserByID', params.id],
    queryFn: () => usersAPI.readByID(+params.id),
  })

  const updateUserByID = useMutation(usersAPI.updateByID, {
    onError() {
      toast.error('Cannot update user')
    },
    onSuccess() {
      toast.success('Update user succeed')
      navigate(getRoutePath('/users'))
    },
  })

  return (
    <>
      <PageTitle>Update User</PageTitle>

      <RenderByRequestStatus
        status={query.status}
        onLoading={null}
        errorMessage="Cannot get user data"
      />

      <UserForm
        loading={query.isLoading || updateUserByID.isLoading}
        initialValue={query.data}
        disabled={query.status !== 'success'}
        onSubmit={(data) => {
          updateUserByID.mutate(data)
        }}
      />
    </>
  )
}

export default UsersUpdatePage
