import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Checkout = () => {
  const course = useLoaderData()
  const { title, price } = course
  return (
    <div className="hero min-h-screen">
      <div className="card w-96 bg-base-200 text-neutral-content mb-12">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl font-bold">{title}</h2>
          <div className="badge badge-info font-bold my-6 p-3 mb-12">
            Price: ৳ {price} only
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-ghost">Cancel</button>
            <button className="btn btn-primary">Proceed to payment</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
