import React from 'react'
import { Link } from 'react-router-dom'

const NavGrid = () => {
  return (
    <div className='flex w-full justify-center'>
      <div className='flex flex-col gap-5'>
        <div className='flex gap-5'>
          <Link to="/profileSummary">
            <div className='flex border-2 p-5 rounded-md w-36 h-20 items-center text-center justify-center font-ubuntu'>Profile Summary</div>
          </Link>

          <Link to='/education'>
            <div className='flex border-2 p-5 rounded-md w-36 h-20 items-center justify-center'>Education</div>
          </Link>

          <div className='flex border-2 p-5 rounded-md w-36 h-20 items-center justify-center'>Experience</div>
          <div className='flex border-2 p-5 rounded-md w-36 h-20 items-center justify-center'>Projects</div>
        </div>
        <div className='flex gap-5 justify-evenly'>
          <div className='flex border-2 p-5 rounded-md w-36 h-20 items-center justify-center'>Certifications</div>
          <div className='flex border-2 p-5 rounded-md w-36 h-20 items-center justify-center'>Skills</div>
          <div className='flex border-2 p-5 rounded-md w-36 h-20 items-center justify-center'>Achievements</div>
          <div className='flex border-2 p-5 rounded-md w-36 h-20 items-center justify-center'>Hobbies</div>
        </div>
      </div>
    </div>
  )
}

export default NavGrid