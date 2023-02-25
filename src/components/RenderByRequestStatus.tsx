import type { UseQueryResult } from '@tanstack/react-query'

import { Alert, Loading } from 'components/Elements'

interface RenderByRequestStatusProps {
  status: UseQueryResult['status']
  errorMessage?: string
  onSuccess?: JSX.Element | null
  onError?: JSX.Element | null
  onLoading?: JSX.Element | null
}

const RenderByRequestStatus = ({
  status,
  errorMessage,
  onError = null,
  onSuccess = null,
  onLoading = null,
}: RenderByRequestStatusProps) => {
  switch (status) {
    case 'error':
      return onError ? (
        onError
      ) : (
        <Alert
          type="error"
          message={errorMessage ? errorMessage : 'Cannot get data'}
        />
      )
    case 'success':
      return onSuccess
    default:
      return onLoading ? onLoading : <Loading />
  }
}

export default RenderByRequestStatus
