import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import route from './components/Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './components/Auth Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={route} />
    </AuthProvider>
  </React.StrictMode>,
)
