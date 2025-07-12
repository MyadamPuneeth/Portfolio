import React from 'react'
import home from '../assets/home.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='z-0'>
            <div className="navbar bg-black h-36 shadow-sm flex items-center justify-between px-32">
                <div className='text-white text-4xl font-ubuntu font-bold'>
                    Puneeth Myadam
                </div>
                <div>
                    <Link to="/home">
                        <img src={home} className='w-10' alt="" />
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar