import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import AppRouters from './routes/AppRouters.jsx'
import { AuthProvider } from './context/AuthContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <AppRouters />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
)
