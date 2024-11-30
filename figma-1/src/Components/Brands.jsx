/* eslint-disable no-unused-vars */
import React from 'react'
// import {brand} from '../public/images/shoe_image.png'

const Brands = () => {
  return (
    <>
      <section className="container flex justify-center mx-auto p-8">
        <div className="mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Text Section */}
          <div className="container part-1 text-center lg:text-left mx-[6rem]">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold leading-tight">
              YOUR FEET DESERVE THE BEST
            </h2>
            <p className="w-full sm:w-96 mt-4 font-medium text-gray-500">
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-red-600 text-white py-1 px-4 text-lg font-semibold">
                Shop Now
              </button>
              <button className="text-gray-500 py-1 px-4 text-lg font-semibold border-2">
                Category
              </button>
            </div>
            <div className="btn-logo mt-12">
              <button className="text-gray-500 py-1 px-4 text-lg font-semibold">
                <img src="./images/flipkart.png" alt="" />
              </button>
              <button className="text-gray-500 py-1 px-4 text-lg font-semibold">
                <img src="./images/amazon.png" alt="" />
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="part-2">
            <img
              src="/images/shoe_image.png"
              alt="Shoes"
              className="w-[700px] max-w-xs sm:max-w-md lg:max-w-lg mx-auto"
            />
          </div>
        </div>
      </section>

    </>
  )
}

export default Brands
