import React from 'react'
import Pic from "../assets/PorfilePhoto.jpg"
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
        <div className='flex flex-col items-center justify-center'>
            <div className='w-screen flex flex-col items-center justify-center gap-32'>
                <Link to={"/about"}>
                    <div className='flex items-center gap-20 blur-sm brightness-75 transition duration-300 ease-in-out hover:blur-0 hover:brightness-100'>
                        <div className="relative w-80 h-80">
                            {/* Animated ring */}
                            <div className="absolute w-96 h-96 z-0">
                                <DotLottieReact
                                    src="https://lottie.host/c0beacb5-6bb5-4bab-8cb2-f30340c819f2/m02xnHXNeY.lottie"
                                    autoplay
                                    loop
                                />
                            </div>
                            <div className="relative flex w-72 h-72 overflow-hidden rounded-full ml-5 z-10">
                                <img src={Pic} className="object-cover w-full h-full" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <p className='text-6xl font-ubuntu font-bold'>
                                Puneeth Myadam
                            </p>
                            <p to={"/home"} className='text-3xl font-ubuntu ml-1'>
                                Developer, Data Engineer, AI Enthusiast
                            </p>
                        </div>
                    </div>
                </Link>
                <div className='flex gap-10 items-center'>
                    <img className="w-16 h-16 rounded-full blur-sm brightness-75 transition duration-300 ease-in-out hover:blur-0 hover:brightness-100 cursor-pointer" src={noPic} alt="" />
                    <img className='w-12 h-12 rounded-full blur-sm brightness-75 transition duration-300 ease-in-out hover:blur-0 hover:brightness-100 cursor-pointer' src={pyPic} alt="" />
                    <img className='w-14 blur-sm brightness-75 transition duration-300 ease-in-out hover:blur-0 hover:brightness-100 cursor-pointer' src={rePic} alt="" />
                    <img className='w-16 rounded-full blur-sm brightness-75 transition duration-300 ease-in-out hover:blur-0 hover:brightness-100 cursor-pointer' src={mDPic} alt="" />
                    <img className='w-16 rounded-full blur-sm brightness-75 transition duration-300 ease-in-out hover:blur-0 hover:brightness-100 cursor-pointer' src={jsPic} alt="" />
                    <img className='w-16 rounded-full blur-sm brightness-75 transition duration-300 ease-in-out hover:blur-0 hover:brightness-100 cursor-pointer' src={acPic} alt="" />
                    <img className='w-16 rounded-full blur-sm brightness-75 transition duration-300 ease-in-out hover:blur-0 hover:brightness-100 cursor-pointer' src={awsPic} alt="" />
                    <img className='w-16 rounded-full blur-sm brightness-75 transition duration-300 ease-in-out hover:blur-0 hover:brightness-100 cursor-pointer' src={csPic} alt="" />
                </div>
            </div>
        </div>
    )
}

export default NameCard




