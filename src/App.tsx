import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import CustomToast from 'components/CustomToast'

import AppRoutes from './AppRoutes'

// Create a client
const queryClient = new QueryClient()

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>

      <CustomToast />
    </>
  )
}

export default App
