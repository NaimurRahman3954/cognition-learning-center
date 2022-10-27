import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100 bg-dotted-spacing-4 bg-dotted-gray-700">
        <div className="hero-content flex-col lg:flex-row-reverse mb-12">
          <img
            src="https://content.techgig.com/photo/77087595/Guide-How-to-build-career-as-a-programmer-without-college-degree.jpg"
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <div className="m-5">
            <h1 className="text-5xl font-bold">Cognition Learning Center!</h1>
            <p className="py-6">
              The best programming boot-camp in Bangladesh 🇧🇩 <br />
            </p>
            <Link to="/courses">
              <button className="btn btn-primary">Explore Courses</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
