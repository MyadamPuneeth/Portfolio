import React from 'react'

const Certifications = () => {
  return (
    <div className='flex flex-col items-center mt-5 w-full gap-20 h-[44vh] overflow-y-scroll scrollbar-hide'>
      <div className='flex flex-col gap-10'>
        <div className='border-2 rounded-md py-5 px-32 text-center'>
          Effective Problem Solving and Decision making: University of California, Irvine
          <a href="https://coursera.org/verify/UF95BWQWXJD7"> (<u>creds</u>)</a>
        </div>
        <div className='border-2 rounded-md py-5 px-32 text-center'>
          Data Structures, University of California, San Diego: University of California, San Diego
          <a href="https://coursera.org/verify/C8N3YUD6RH9R"> (<u>creds</u>)</a>
        </div>
        <div className='border-2 rounded-md py-5 px-32 text-center'>
          Python Data Structures: University of Michigan
          <a href="https://coursera.org/verify/YNTJUUWBNUJ8"> (<u>creds</u>)</a>
        </div>
        <div className='border-2 rounded-md py-5 px-32 text-center'>
          AZ900 - Microsoft Azure Fundamentals
        </div>
        <div className='border-2 rounded-md py-5 px-32 text-center'>
          Cryptography: University of Maryland
          <a href="https://www.coursera.org/account/accomplishments/verify/QJL4WX6YN325"> (<u>creds</u>)</a>
        </div>
      </div>
    </div>
  )
}

export default Certifications