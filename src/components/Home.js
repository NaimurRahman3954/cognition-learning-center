import React, { useContext } from 'react'
import { AuthContext } from '../contexts/UserContext'
import Blog from './Blog'

const Home = () => {
  const { user } = useContext(AuthContext)
  return (
    <div>
      {/* <h1>Welcome to Homepage!</h1> */}
      <h3 className="font-bold w-full text-center p-5">
        Welcome, {user?.displayName}
      </h3>
      <Blog></Blog>
    </div>
  )
}

export default Home
