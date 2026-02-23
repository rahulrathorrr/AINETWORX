import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Products from './Pages/Products'
import Pricing from './Pages/Pricing'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'

const App = () => {
  const router= createBrowserRouter([
    {
    path: '/',
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/about',
        element: <About/>
      },
      {
        path:'/services',
        element: <Services/>
      },
      {
        path:'/products',
        element: <Products/>
      },
      {
        path:'/pricing',
        element: <Pricing/>
      },
      {
        path:'/blog',
        element: <Blog/>
      },
      {
        path:'/contact',
        element: <Contact/>
      },
    ]
    }

  ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App