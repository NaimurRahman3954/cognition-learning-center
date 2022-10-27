import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const LeftSideNav = () => {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch('http://localhost:8000/courses')
      .then((res) => res.json())
      .then((data) => setCourses(data))
  }, [])

  return (
    <div className="sticky top-0">
      <h3 className="card-title font-bold text-info p-3 px-5 m-3">
        All Courses
      </h3>
      <div>
        {courses.map((course) => (
          <p key={course.id} className="card bg-base-200 p-3 px-5 m-3">
            <Link to={`/courses/${course.id}`}>{course.title}</Link>
          </p>
        ))}
      </div>
    </div>
  )
}

export default LeftSideNav
