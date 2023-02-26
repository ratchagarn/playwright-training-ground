import { type ReactElement } from 'react'
import { UseQueryResult } from '@tanstack/react-query'
import { Alert, Loading } from 'components/Elements'

interface RenderByRequestStatusProps {
  status: UseQueryResult['status']
  errorMessage?: string
  onSuccess?: ReactElement | null
  onError?: ReactElement | null
  onLoading?: ReactElement | null
}

const RenderByRequestStatus = ({
  status,
  errorMessage = 'Cannot get data',
  onError,
  onSuccess,
  onLoading = <Loading />,
}: RenderByRequestStatusProps) => {
  switch (status) {
    case 'error':
      return onError ?? <Alert type="error" message={errorMessage} />
    case 'success':
      return onSuccess ?? null
    default:
      return onLoading
  }
}

export default RenderByRequestStatus
