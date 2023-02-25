import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import CustomToast from 'components/CustomToast'

import AppRoutes from './AppRoutes'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
})

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
