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
        <div className="basis-2/3 m-5 card card-side">
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
                    <button
                      className="btn btn-outline btn-warning text-xs rounded-full tooltip tooltip-left tooltip-warning"
                      data-tip="Download Syllabus"
                      onClick={toPdf}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-download"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />{' '}
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />{' '}
                      </svg>
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
              <div className="card-actions mt-6">
                <Link to={`/courses/${id}/checkout`}>
                  <button className="btn btn-warning">
                    Get Premium Access
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* divider */}
        <div className="divider lg:divider-horizontal py-5"> </div>
        {/* service card */}
        <div className="basis-1/3 lg:m-5 mx-auto">
          <div className="card w-96">
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

              <div className="rating rating-sm my-3">
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

              <div className="badge badge-primary font-extrabold my-3 p-3">
                ৳ {price}
              </div>

              <div className="card-actions w-full mt-6">
                <Link to={`/courses/${id}/checkout`}>
                  <button className="btn btn-outline btn-warning">
                    Get Premium Access
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails
