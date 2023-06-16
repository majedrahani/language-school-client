import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './router/router.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { DarkModeSystemContext } from './DarkMode/DarkModeContext.jsx';

const queryClient = new QueryClient()




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <HelmetProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <div className=' max-w-screen-2xl  mx-auto'>
              <RouterProvider router={router} />
            </div>
          </QueryClientProvider>
        </AuthProvider>
      </HelmetProvider>
    
  </React.StrictMode>,
)
