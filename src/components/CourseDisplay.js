import React, { useEffect, useState } from 'react'
import Card from './Card'

const CourseDisplay = () => {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch(
      'https://cognition-learning-center-naimurrahman3954.vercel.app/courses'
    )
      .then((res) => res.json())
      .then((data) => setCourses(data))
  }, [])

  return (
    <div>
      <div className="flex flex-wrap align-middle justify-center">
        {courses.map((course) => (
          <Card key={course.id} course={course}></Card>
        ))}
      </div>
    </div>
  )
}

export default CourseDisplay
