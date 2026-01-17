import React from 'react'
import fire from '../assets/fire (1).png';

const Navbar = () => {
    return (
        <div className='z-0'>
            <div className="navbar bg-black h-20 shadow-sm flex items-center justify-end pr-20 gap-2">
                <a className="btn btn-ghost mt-2.5 font-ubuntu text-white text-xl">Feature build in process..</a>
                <img className="w-10 h-10" src={fire}></img>
            </div>
        </div>
    )
}

export default Navbar
