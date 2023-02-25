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
  onError,
  onSuccess,
  onLoading,
}: RenderByRequestStatusProps) => {
  switch (status) {
    case 'error':
      return onError === undefined || errorMessage ? (
        <Alert
          type="error"
          message={errorMessage ? errorMessage : 'Cannot get data'}
        />
      ) : (
        onError
      )
    case 'success':
      return onSuccess ?? null
    default:
      return onLoading === undefined ? <Loading /> : onLoading
  }
}

export default RenderByRequestStatus
