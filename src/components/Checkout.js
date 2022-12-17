import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Checkout = () => {
  const course = useLoaderData()
  const { title, price } = course
  return (
    <div className="hero min-h-screen">
      <div className="card bg-base-200 text-neutral-content mb-12 p-9 mx-3 outline outline-1 outline-slate-700">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl lg:text-4xl font-bold">{title}</h2>
          <div className="badge badge-info font-bold my-6 p-3 mb-12">
            Price: ৳ {price} only
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-ghost">Cancel</button>
            <button className="btn btn-warning">Proceed to payment</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
