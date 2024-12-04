/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Bio } from './Store'

const Home = () => {

    const {myName, myAge} = useContext(Bio)

  return (
    <div>
      <h1 className='bg-pink-400 p-10 text-6xl font-bold'>My Name Is <i>{myName}</i> and im <i>{myAge}</i> years old</h1>
    </div>
  )
}

export default Home
