import React from 'react' 
import Navbar from './components/Navbar/Navbar'
import HomePage from './routes/homePage/homePage'
import ListPage from './routes/ListPage/ListPage'
import { Link, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './routes/Layout/Layout'
import SinglePage from './routes/SinglePage/SinglePage'
import ProfilePage from './routes/ProfilePage/ProfilePage'
import Register from './routes/Register/Register'
import Login from './routes/Login/Login'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
        children:[
          {
      path: "/list",
      element: <ListPage />
    },
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/:id",
      element: <SinglePage />
    },
    {
      path: "/profile",
      element: <ProfilePage />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/login",
      element: <Login />
    }
        ]
    }
    
  ]);

  return (
    
    <RouterProvider router={router} />
  )
}

export default App
