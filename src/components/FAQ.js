import React from 'react'
import { Link } from 'react-router-dom'

const FAQ = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold">Hello there!</h1>
            <p className="py-6">FAQ page will be available soon.</p>
            <Link to="/courses">
              <button className="btn btn-primary mb-12">Explore Courses</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
