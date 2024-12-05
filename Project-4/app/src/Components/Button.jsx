/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Button = ({text, ...a}) => {
  return (
    <button {...a} className='bg-red-500 py-1 px-2 rounded-lg text-white'>{text}</button>
  )
}

export default Button
