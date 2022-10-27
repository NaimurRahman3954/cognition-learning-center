import './App.css'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layout/Main'
import Home from './components/Home'
import Courses from './components/Courses'
import Blog from './components/Blog'
import FAQ from './components/FAQ'
import Login from './components/Login'
import Register from './components/Register'
import PrivateRoute from './routes/PrivateRoute'
import Checkout from './components/Checkout'
import CourseDetails from './components/CourseDetails'
import PageNotFound from './components/PageNotFound'

function App(props) {
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
        {
          path: '/courses/:id',
          element: <CourseDetails></CourseDetails>,
          loader: ({ params }) =>
            fetch(
              `https://cognition-learning-center-naimurrahman3954.vercel.app/courses/${params.id}`
            ),
        },
        {
          path: '/courses/:id/checkout',
          element: (
            <PrivateRoute>
              <Checkout></Checkout>
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              `https://cognition-learning-center-naimurrahman3954.vercel.app/courses/${params.id}`
            ),
        },
      ],
    },
    {
      path: '*',
      element: <PageNotFound></PageNotFound>,
    },
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
