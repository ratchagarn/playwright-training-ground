import { Alert } from './Alert'
import { IconLoading } from './IconLoading'

export const Loading = () => (
  <Alert
    type="warning"
    message={
      <>
        <IconLoading />
        Loading...
      </>
    }
  />
)
