import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

import PageTitle from 'components/PageTitle'
import UserForm from 'components/UserForm'

import useCustomToast from 'hooks/useCustomToast'

import { getRoutePath } from 'AppRoutes'

import { usersAPI } from 'api/usersAPI'

const UsersCreatePage = () => {
  const navigate = useNavigate()
  const { toast } = useCustomToast()

  const createUser = useMutation(usersAPI.createUser, {
    onError() {
      toast.error('Cannot create user')
    },
    onSuccess() {
      toast.success('Create user sucess')
      navigate(getRoutePath('users'))
    },
  })

  return (
    <>
      <PageTitle>Create User</PageTitle>

      <UserForm
        onSubmit={(data) => {
          createUser.mutate(data)
        }}
      />
    </>
  )
}

export default UsersCreatePage
