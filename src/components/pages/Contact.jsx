import React from 'react'
import NavGrid from '../NavGrid'
import PuneethResume from '../../assets/Puneeth_Resume.pdf'

const Contact = () => {
  return (
    <div className='flex flex-col items-center mt-5 gap-20 scrollbar-hide'>
      <div className='border-2 w-1/2 p-10 rounded-lg'>
        <div className='font-ubuntu text-3xl'>
          Contact
        </div>
        <br />
        <div>
          <b>Email :</b>
          <br />
          puneethmyadam@zohomail.in (professional email)
          <br />
          myadampuneeth@gmail.com
          <br />
          puneethmyadam123@gmail.com
          <br />
          <br />
          <b>LinkedIn :</b>
          <br />
          https://www.linkedin.com/in/puneethmyadam
          <br />
          <br />
          <b>Github :</b>
          <br />
          https://github.com/MyadamPuneeth
          <br />
          <br />
          <b>Instagram :</b>
          <br />
          @neethpu_
          <br />
          <br />
          <b>Download Resume :</b>
          <br />
          <a href={PuneethResume} download='Puneeth_Resume.pdf' target='_blank'>
            <u>Puneeth_Resume.pdf</u>
          </a>
          <br />
          <br />
        </div>
      </div>
    </div>
  )
}

export default Contact