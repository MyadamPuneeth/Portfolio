import React from 'react'
import { Link } from 'react-router-dom'

const NavGrid = () => {
  return (
    <div>
      <footer className='footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 mb-10 bottom-0'>
        <div className='flex w-full justify-center '>
          <div className='flex flex-col gap-5'>
            <div className='flex gap-5'>
              <Link to="/profileSummary">
                <div className='flex border-2 p-5 rounded-md w-36 h-20 items-center text-center justify-center font-ubuntu'>Profile Summary</div>
              </Link>

              <Link to='/education'>
                <div className='flex border-2 p-5 rounded-md w-36 h-20 items-center justify-center'>Education</div>
              </Link>

              <Link to='/projects'>
                <div className='flex border-2 p-5 rounded-md w-36 h-20 items-center justify-center'>Projects</div>
              </Link>

              <Link to='/experience'>
                <div className='flex border-2 p-5 rounded-md w-36 h-20 items-center justify-center'>Experience</div>
              </Link>

            </div>
            <div className='flex gap-5 justify-evenly'>
              <Link to='/certifications'>
                <div className='flex border-2 p-5 rounded-md w-36 h-20 items-center justify-center'>Certifications</div>
              </Link>
              <Link to='/skills'>
                <div className='flex border-2 p-5 rounded-md w-36 h-20 items-center justify-center'>Skills</div>
              </Link>
              <Link to='/achivements'>
                <div className='flex border-2 p-5 rounded-md w-36 h-20 items-center justify-center'>Achievements</div>
              </Link>
              <Link to='/hobbies'>
                <div className='flex border-2 p-5 rounded-md w-36 h-20 items-center justify-center'>Hobbies</div>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default NavGrid