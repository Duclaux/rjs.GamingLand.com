import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About'
import Porfolio from './pages/Porfolio'
import News from './pages/News'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
      path:'/',
      element:<App/>,
      children: [
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/portfolio',
            element:<Porfolio/>
        },
        {
            path:'/news',
            element:<News/>
        },
        {
            path:'/contact',
            element:<Contact/>
        }
      ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
