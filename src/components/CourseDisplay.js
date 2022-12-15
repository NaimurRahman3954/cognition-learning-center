import React, { useEffect, useState } from 'react'
import Card from './Card'

const CourseDisplay = () => {
  const [courses, setCourses] = useState([])
  const [loading, setloading] = useState(true)
  useEffect(() => {
    fetch(
      'https://cognition-learning-center-naimurrahman3954.vercel.app/courses'
    )
      .then((res) => res.json())
      .then((data) => {
        setCourses(data)
        setloading(false)
      })
  }, [])

  return (
    <div className="bg-yellow">
      <div className="container mx-auto my-10 text-center">
        <>
          {loading ? (
            <button className="btn loading bg-warning my-16 text-black">
              loading
            </button>
          ) : (
            <div className="flex flex-wrap align-middle justify-center">
              {courses.map((course) => (
                <Card key={course.id} course={course}></Card>
              ))}
            </div>
          )}
        </>
      </div>
    </div>
  )
}

export default CourseDisplay
