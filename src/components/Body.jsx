import React from 'react'
import NameCard from './NameCard'
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import NavbarAlt from './NavbarAlt';
import { useLocation } from 'react-router-dom';
import NavGrid from './NavGrid';

const Body = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div>
      {path === "/home" ?
        <div className='h-screen flex flex-col overflow-hidden'>
          <Navbar></Navbar>
          <div className='bg-black h-full flex text-white'>
            <Outlet />
          </div>
        </div> :
        <div className='min-h-screen flex flex-col overflow-scorll scrollbar-hide bg-black text-white'>
          <NavbarAlt />
          <div className= 'flex-grow'>
            <Outlet />
          </div>
          <NavGrid/>
        </div>
      }
    </div>

  )
}

export default Body