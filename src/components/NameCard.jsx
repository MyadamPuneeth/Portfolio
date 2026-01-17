import React from 'react'
import Pic from "../assets/IMG_1058.jpg"
import noPic from "../assets/nodejs.png"
import pyPic from "../assets/python.png"
import rePic from "../assets/react.svg"
import mDPic from "../assets/mongoDb.png"
import jsPic from "../assets/js.png"
import acPic from "../assets/azure.png"
import awsPic from "../assets/aws.png"
import csPic from "../assets/c-sharp.png"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom'

const NameCard = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen w-screen -mt-7'>
            {/* Added max-w-full to prevent horizontal scrolling and adjusted gap for mobile */}
            <div className='w-full max-w-7xl flex flex-col items-center justify-center gap-16 md:gap-32'>
                <Link to={"/about"}>
                    {/* Changed to flex-col on mobile, flex-row (items-center) on desktop */}
                    <div className='flex flex-col md:flex-row items-center gap-10 md:gap-20 blur-sm brightness-75 transition duration-300 ease-in-out hover:blur-0 hover:brightness-100 '>
                        
                        {/* Adjusted sizes for mobile view so the ring doesn't clip */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                            {/* Animated ring */}
                            <div className="absolute w-72 h-72 md:w-96 md:h-96 z-0">
                                <DotLottieReact
                                    src="https://lottie.host/c0beacb5-6bb5-4bab-8cb2-f30340c819f2/m02xnHXNeY.lottie"
                                    autoplay
                                    loop
                                />
                            </div>
                            <div className="relative flex w-56 h-56 md:w-72 md:h-72 overflow-hidden rounded-full z-10">
                                <img src={Pic} className="object-cover w-full h-full" alt="Profile" />
                            </div>
                        </div>

                        <div className='flex flex-col gap-3 md:gap-5 text-center md:text-left'>
                            <p className='text-4xl md:text-6xl font-ubuntu font-bold'>
                                Puneeth Myadam
                            </p>
                            <p className='text-xl md:text-3xl font-ubuntu ml-1'>
                                Developer, Data Engineer, AI Enthusiast
                            </p>
                        </div>
                    </div>
                </Link>

                {/* Wrapped icons so they flow onto the next line on small screens */}
                <div className='flex flex-wrap justify-center gap-6 md:gap-10 items-center -mt-10'>
                    <img className="w-12 h-12 md:w-16 md:h-16 rounded-full blur-sm brightness-75 transition duration-300 ease-in-out hover:blur-0 hover:brightness-100 cursor-pointer" src={noPic} alt="Node.js" />
                    <img className='w-10 h-10 md:w-12 md:h-12 rounded-full blur-sm brightness-75 transition duration-300 ease-in-out hover:blur-0 hover:brightness-100 cursor-pointer' src={pyPic} alt="Python" />
                    <img className='w-10 md:w-14 blur-sm brightness-75 transition duration-300 ease-in-out hover:blur-0 hover:brightness-100 cursor-pointer' src={rePic} alt="React" />
                    <img className='w-12 md:w-16 rounded-full blur-sm brightness-75 transition duration-300 ease-in-out hover:blur-0 hover:brightness-100 cursor-pointer' src={mDPic} alt="MongoDB" />
                    <img className='w-12 md:w-16 rounded-full blur-sm brightness-75 transition duration-300 ease-in-out hover:blur-0 hover:brightness-100 cursor-pointer' src={jsPic} alt="JavaScript" />
                    <img className='w-12 md:w-16 rounded-full blur-sm brightness-75 transition duration-300 ease-in-out hover:blur-0 hover:brightness-100 cursor-pointer' src={acPic} alt="Azure" />
                    <img className='w-12 md:w-16 rounded-full blur-sm brightness-75 transition duration-300 ease-in-out hover:blur-0 hover:brightness-100 cursor-pointer' src={awsPic} alt="AWS" />
                    <img className='w-12 md:w-16 rounded-full blur-sm brightness-75 transition duration-300 ease-in-out hover:blur-0 hover:brightness-100 cursor-pointer' src={csPic} alt="C#" />
                </div>
            </div>
        </div>
    )
}

export default NameCard