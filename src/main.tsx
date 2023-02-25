import React from 'react'
import ReactDOM from 'react-dom/client'

import 'tailwind.css'
import App from './App'

import { worker } from './_mocks/browser'

worker.start()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
