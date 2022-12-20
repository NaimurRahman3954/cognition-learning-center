import React, { useEffect, useState } from 'react'
import Card from './Card'
import CourseDisplay from './CourseDisplay'
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
      <div className="basis-1/3 lg:m-5 lg:p-5 lg:pr-0 lg:mr-0 hidden lg:block">
        <LeftSideNav></LeftSideNav>
      </div>
      <div className="lg:basis-2/3 ">
        <CourseDisplay></CourseDisplay>
      </div>
    </div>
  )
}

export default Courses
