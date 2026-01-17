import React from 'react'
import DP700 from '../../assets/DP-700.pdf'
import AZ900 from '../../assets/AZ-900.pdf'

const Certifications = () => {
  return (
    <div className='flex flex-col items-center mt-5 w-full gap-20 h-[44vh] overflow-y-scroll scrollbar-hide'>
      <div className='flex flex-col gap-10'>
        <div className='border-2 rounded-md py-5 px-32 text-center'>
          DP700 - Microsoft Certified Fabric Data Engineer Associate.
          <a href={DP700} target="_blank" rel="noreferrer"> (<u>View</u>)</a>
        </div>
        <div className='border-2 rounded-md py-5 px-32 text-center'>
          AZ900 - Microsoft Azure Fundamentals
          <a href={AZ900} target="_blank" rel="noreferrer"> (<u>View</u>)</a>
        </div>
        <div className='border-2 rounded-md py-5 px-32 text-center'>
          Effective Problem Solving and Decision making: University of California, Irvine
          <a href="https://coursera.org/verify/UF95BWQWXJD7"> (<u>View</u>)</a>
        </div>
        <div className='border-2 rounded-md py-5 px-32 text-center'>
          Data Structures, University of California, San Diego: University of California, San Diego
          <a href="https://coursera.org/verify/C8N3YUD6RH9R"> (<u>View</u>)</a>
        </div>
        <div className='border-2 rounded-md py-5 px-32 text-center'>
          Python Data Structures: University of Michigan
          <a href="https://coursera.org/verify/YNTJUUWBNUJ8"> (<u>View</u>)</a>
        </div>        
        <div className='border-2 rounded-md py-5 px-32 text-center'>
          Cryptography: University of Maryland
          <a href="https://www.coursera.org/account/accomplishments/verify/QJL4WX6YN325"> (<u>View</u>)</a>
        </div>
      </div>
    </div>
  )
}

export default Certifications