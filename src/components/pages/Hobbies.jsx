import React from 'react'

const Hobbies = () => {
  return (
    <div className='flex flex-col items-center mt-5 w-full text-center h-[55vh] overflow-y-scroll scrollbar-hide'>
      <div className='flex flex-col gap-10'>
        <div className='border-2 rounded-md py-5 px-32'>
          Python - Proficient
        </div>
        <div className='border-2 rounded-md py-5 px-32'>
          React.js - Intermediate
        </div>
        <div className='border-2 rounded-md py-5 px-32'>
          Node.js - Intermediate
        </div>
        <div className='border-2 rounded-md py-5 px-32'>
          Azure - Intermediate
        </div>
        <div className='border-2 rounded-md py-5 px-32'>
          SQL - Proficient
        </div>
        <div className='border-2 rounded-md py-5 px-32'>
          C# - Intermediate
        </div>
      </div>
    </div>
  )
}

export default Hobbies