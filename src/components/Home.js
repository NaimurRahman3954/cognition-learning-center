import React, { useContext } from 'react'
import { AuthContext } from '../contexts/UserContext'
import Blog from './Blog'
import Courses from './Courses'

const Home = () => {
  const { user } = useContext(AuthContext)
  return (
    <div>
      <h3 className="font-bold w-full text-center p-5">
        Welcome, {user?.displayName}
      </h3>
      <Courses></Courses>
    </div>
  )
}

export default Home
