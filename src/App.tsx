import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import AppRoutes from './AppRoutes'

// Create a client
const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  )
}

export default App
