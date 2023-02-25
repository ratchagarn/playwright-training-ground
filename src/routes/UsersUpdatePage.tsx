import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import PageTitle from 'components/PageTitle'
import RenderByRequestStatus from 'components/RenderByRequestStatus'
import UserForm from 'components/UserForm'

import useCustomToast from 'hooks/useCustomToast'

import { getRoutePath } from 'AppRoutes'

import { usersAPI } from 'api/usersAPI'

const UsersUpdatePage = () => {
  const params = useParams<{ id: string }>()

  const query = useQuery({
    queryKey: ['getUserByID', params.id],
    queryFn: () => usersAPI.getByID(params.id as string),
  })

  return (
    <>
      <PageTitle>Update User</PageTitle>

      <RenderByRequestStatus
        status={query.status}
        errorMessage="Cannot get user data"
      />

      <UserForm
        initialValue={query.data}
        onSubmit={(data) => {
          console.log(data)
        }}
        disabled={query.status !== 'success'}
      />
    </>
  )
}

export default UsersUpdatePage
