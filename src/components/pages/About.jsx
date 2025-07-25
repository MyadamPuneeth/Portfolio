import React from 'react'
import NavGrid from '../NavGrid'

const About = () => {
  return (
    <div className='flex flex-col items-center gap-20 h-screen'>
      <div className='border-2 w-1/2 p-10 rounded-lg'>
        <div className='font-ubuntu text-3xl'>
          About Me
        </div>
        <br />
        <div>
          The sky was painted in hues of purple and gold as the sun dipped below the horizon, casting long shadows across the meadow. A gentle breeze rustled the leaves of the trees, and in the distance, a river babbled over smooth stones, its melody blending with the songs of birds perched high above. Somewhere, a deer grazed quietly, unaware of the world around it, while the air carried the scent of fresh grass and earth. It was a moment of serene stillness, where time seemed to slow, if only for a while.
        </div>
      </div>
      <NavGrid></NavGrid>
    </div>
  )
}

export default About