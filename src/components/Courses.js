import React, { useEffect, useState } from 'react'
import Card from './Card'
import LeftSideNav from './LeftSideNav'

const Courses = () => {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch(
      'https://cognition-learning-center-naimurrahman3954.vercel.app/courses'
    )
      .then((res) => res.json())
      .then((data) => setCourses(data))
  }, [])

  return (
    <div className="flex mb-12">
      <div className="basis-1/3 lg:m-5 lg:p-5">
        <LeftSideNav></LeftSideNav>
      </div>
      <div className="basis-2/3">
        <div className="flex flex-wrap align-middle">
          {courses.map((course) => (
            <Card key={course.id} course={course}></Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses
