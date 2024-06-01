import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Singup from './routes/Singup.tsx';
import Dashboard from './routes/Dashboard.tsx';
import Login from './routes/Login.tsx'
import ProtectedRouter from './routes/ProtectedRouter.tsx'
import { AuthProvider } from './auth/AuthProvider.tsx'

const router=createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/singup",
    element: <Singup/>
  },
  {
    path: "/",
    element: <ProtectedRouter/>,
    children: [{
      path: "/dashboard",
      element: <Dashboard/>
    }]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>    
  </React.StrictMode>,
)
