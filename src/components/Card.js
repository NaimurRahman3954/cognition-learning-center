import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  const { id, title, url, duration, students, price } = props.course
  return (
    <div className="m-5">
      <div className="card w-96 bg-base-200 shadow-2xl">
        <figure className="m-3 my-9 h-60">
          <img src={url} alt="" width={200} height={200} />
        </figure>
        <div className="card-body bg-base-100">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-start">
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
              {duration} hours
            </div>
            <div className="badge badge-outline">
              {students} students enrolled
            </div>
          </div>
          <div className="badge badge-primary font-extrabold my-3 p-3">
            ৳ {price}
          </div>
          <div className="flex align-middle">
            <div className="rating rating-md pt-3">
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
              <Link to={`/courses/${id}`}>
                <button className="btn btn-outline btn-info">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
