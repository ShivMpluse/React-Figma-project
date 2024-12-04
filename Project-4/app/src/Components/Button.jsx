/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-red-500 py-1 px-2 rounded-lg text-white'>{props.text}</button>
  )
}

export default Button
