import React from 'react'
import NavGrid from '../NavGrid'
import { intervalToDuration } from 'date-fns';

const About = () => {
  const start = new Date('2024-05-01');
  const end = new Date();
  const duration = intervalToDuration({ start, end });

  return (
    <div className='flex flex-col items-center mt-5 gap-20 justify-evenly'>
      <div className='border-2 w-1/2 p-10 rounded-lg'>
        <div className='font-ubuntu text-3xl'>
          About Me
        </div>
        <br />
        <div>
          Hey folks! Good to have you visit my page.
          <br />
          <br />
          I am a developer, data engineer, ai enthusiast with hands on experience of over {duration.years > 1 ? `${duration.years} Years ` : `${duration.years} Year `}, {duration.months} Months in the industry. My favorite programming language is python, other than that I also know JAVA, Javascript, C#. I am currently working as a Associate Software Engineer at Cognine Technologies. Where I enhanced my skills in the Data side of technology. I also personally developed a idea of my that's a sports management webpage which is currently in development. My main goal is to learn how much ever I can.
          <br />
          <br />
          Apart from technical talk. I am a huge anime fan and my favorite anime being one piece. I listen to music a lot, and I also like art made a few of my own. My favorite hobby playing sports. I play almost all the main stream sports one can play in India, just love the team feeling and the togetherness I get while playing. And I am located in Hyderabad, India.
          <br />
          <br />
          Explore my webpage you can contact me via my email if you need. And yeah nice to have you here.
        </div>
      </div>
    </div>
  )
}

export default About