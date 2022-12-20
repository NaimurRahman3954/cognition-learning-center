import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CourseDisplay from './CourseDisplay'
import Hero from './Hero'

const Home = () => {
  return (
    <div className="bg-dotted-spacing-4 bg-dotted-gray-800">
      <Hero></Hero>
      <h1 className="text-5xl font-bold my-12 text-center">Explore Courses</h1>
      <CourseDisplay></CourseDisplay>
      <div className="App">
        <Link to="/courses">
          <button className="btn btn-primary mb-24">See All →</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
