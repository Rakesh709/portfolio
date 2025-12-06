import React from 'react'
import SparkleButton from '../components/SparkleButton.jsx'
import { MoveDown } from 'lucide-react'

const SparkleSection = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-8'>
      <div className='text-center'>
        <SparkleButton text="Avaiable for Hybrid Work"/>
    </div>
    <svg class="size-6 animate-bounce text-center py-2.5 h-12 rounded-full border-1 border-black-500 items-center ">
        <MoveDown />
    </svg>
    </div>
  )
}

export default SparkleSection