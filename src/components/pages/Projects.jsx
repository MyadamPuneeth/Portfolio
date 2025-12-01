import React from 'react'

const Projects = () => {
  return (
    <div className='flex flex-col items-center mt-5 w-full gap-20 text-center'>
      <div className='flex flex-col gap-10'>
        <div className='border-2 rounded-md py-5 px-32'>
          Idaho Power - Mega scale Data migration from legacy system to cloud.
        </div>
        <div className='border-2 rounded-md py-5 px-32'>
          Developer Tinder - Tinder for Developers meet and collaborate.
        </div>
        <div className='border-2 rounded-md py-5 px-32'>
          Acha Rentz - Full stack web dev project for car rental.
        </div>
        <div className='border-2 rounded-md py-5 px-32'>
          AgriQGpt - A customized chatGPT trained on Agriculture Data for farmers.
        </div>
        <div className='border-2 rounded-md py-5 px-32'>
          NNS Webpage - Full stack Webpage for Nataraja Nrutya Sravanthi Dance Academy.
        </div>
      </div>
    </div>
  )
}

export default Projects