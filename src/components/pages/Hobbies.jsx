import React from 'react'

const Hobbies = () => {
  return (
    <div className='flex flex-col items-center mt-5 w-full text-center h-[55vh] overflow-y-scroll scrollbar-hide'>
      <div className='flex flex-col gap-10'>
        <div className='border-2 rounded-md py-5 px-32'>
          Table Tennis
        </div>
        <div className='border-2 rounded-md py-5 px-32'>
          Chess
        </div>
        <div className='border-2 rounded-md py-5 px-32'>
          Cricket
        </div>
        <div className='border-2 rounded-md py-5 px-32'>
          Volleyball
        </div>
        <div className='border-2 rounded-md py-5 px-32'>
          Basketball
        </div>
        <div className='border-2 rounded-md py-5 px-32'>
          Programing
        </div>
        <div className='border-2 rounded-md py-5 px-32'>
          Graphic Design
        </div>
      </div>
    </div>
  )
}

export default Hobbies