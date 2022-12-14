import React from 'react'
import { Link } from 'react-router-dom'
import CourseDisplay from './CourseDisplay'
import Hero from './Hero'
import Reviews from './Reviews'
import Stats from './Stats'
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
      <h1 className="text-5xl font-bold mt-24 mb-12 text-center">
        247 Support
      </h1>
      <Support></Support>
      <h1 className="text-5xl font-bold mt-48 mb-16 text-center">
        Track Record
      </h1>
      <Stats></Stats>
      <h1 className="text-5xl font-bold mt-48 text-center">
        Students' Reviews
      </h1>
      <Reviews></Reviews>
    </div>
  )
}

export default Home
