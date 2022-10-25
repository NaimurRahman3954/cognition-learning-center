import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layout/Main'
import Home from './components/Home'
import Courses from './components/Courses'
import Blog from './components/Blog'
import FAQ from './components/FAQ'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/home',
          element: <Home></Home>,
        },
        {
          path: '/courses',
          element: <Courses></Courses>,
        },
        {
          path: '/blog',
          element: <Blog></Blog>,
        },
        {
          path: '/faq',
          element: <FAQ></FAQ>,
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Register></Register>,
        },
      ],
    },
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
