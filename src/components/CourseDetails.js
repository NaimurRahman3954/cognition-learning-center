import React from 'react'
import ReactToPdf from 'react-to-pdf'
import { Link, useLoaderData } from 'react-router-dom'

const CourseDetails = () => {
  const course = useLoaderData()
  const { id, title, url, difficulty, description, duration, students, price } =
    course
  const ref = React.createRef()
  const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [8.2, 8],
  }
  return (
    <div>
      <div className="flex lg:flex-row my-5 flex-col-reverse container mx-auto">
        {/* description card */}
        <div className="basis-2/3 m-5 card card-side bg-base-200 shadow-2xl">
          <div className="flex">
            <div className="card-body" ref={ref}>
              <div className="flex justify-between ">
                <h2 className="text-3xl font-bold">{title}</h2>
                <ReactToPdf
                  targetRef={ref}
                  filename={title}
                  options={options}
                  x={0.5}
                  y={0.5}
                  scale={0.8}
                >
                  {({ toPdf }) => (
                    <button className="btn btn-outline text-xs" onClick={toPdf}>
                      💾 Download
                    </button>
                  )}
                </ReactToPdf>
              </div>
              <p className="card-title mt-9 mb-2 text-info">Description</p>
              <p className="text-justify ">{description}</p>
              <p className="card-title mt-9 mb-2 text-info">Top Features</p>
              <p>✅ {duration} hours video</p>
              <p>✅ Mentor support</p>
              <p>✅ Code review and feedback</p>
              <p>✅ Quizzes and assignments</p>
              <p>✅ Real life projects</p>
              <p>✅ Professional certificate</p>
              <p>✅ Life-time access</p>
              <div className="card-actions justify-end">
                <Link to={`/courses/${id}/checkout`}>
                  <button className="btn btn-primary">
                    Get Premium Access
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="divider lg:divider-horizontal py-5"> </div>
        {/* service card */}
        <div className="basis-1/3 lg:m-5 mx-auto">
          <div className="card w-96 bg-base-200 shadow-2xl">
            <figure className="m-3 my-9 h-60">
              <img src={url} alt="" width={200} height={200} />
            </figure>
            <div className="card-body bg-base-100">
              <h2 className="card-title font-bold mb-6">{title}</h2>
              <div className="card-actions justify-start">
                <p>
                  <div className="badge badge-outline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>{' '}
                    {duration} hours video lesson
                  </div>
                </p>
                <p>
                  <div className="badge badge-outline">
                    Difficulty level: {difficulty}
                  </div>
                </p>
                <p>
                  <div className="badge badge-outline">
                    {students} students enrolled already
                  </div>
                </p>
              </div>

              <div className="badge badge-primary font-extrabold my-6 p-3">
                ৳ {price}
              </div>
              <div className="flex align-middle">
                <div className="rating rating-sm pt-3">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                </div>
                <div className="card-actions justify-end w-full">
                  <Link to={`/courses/${id}/checkout`}>
                    <button className="btn btn-outline btn-info">
                      Get Premium Access
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails
