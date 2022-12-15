import React from 'react'
import { Link } from 'react-router-dom'
import CourseDisplay from './CourseDisplay'
import Hero from './Hero'
import Reviews from './Reviews'
import Support from './Support'

const Home = () => {
  return (
    <div className="bg-dotted-spacing-4 bg-dotted-gray-800">
      <Hero></Hero>
      <h1 className="text-5xl font-bold my-12 text-center">Explore Courses</h1>

      <CourseDisplay></CourseDisplay>
      <div className="App">
        <Link to="/courses">
          <button className="btn btn-warning mt-6 mb-24">See All →</button>
        </Link>
      </div>
      <h1 className="text-5xl font-bold mt-16 text-center">Track Record</h1>
      <Support></Support>
      <h1 className="text-5xl font-bold mt-16 text-center">Students' Review</h1>
      <Reviews></Reviews>
    </div>
  )
}

export default Home
