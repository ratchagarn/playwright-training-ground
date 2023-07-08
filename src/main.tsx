import React from 'react'
import ReactDOM from 'react-dom/client'

const app =
  import.meta.env.VITE_APP_TYPE === 'antd'
    ? await import('./AppAntd')
    : await import('./App')

const App = app.default

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
