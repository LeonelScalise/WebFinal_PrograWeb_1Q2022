import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosPerson, IoIosMenu } from 'react-icons/io';
import DecuNavbar from "../assets/DecumanusNavbar.png"
import "./Navbar.css"

export function Navbar() {
  return (
    <nav className='flex justify-between items-center h-16 bg-blue-300 text-gray-700 relative shadow-sm'>

        <Link to="/">
          <img className='w-26 h-14 sm:pl-4 sm:w-30 sm:h-16 mb-2' src={DecuNavbar} alt="DecuNavbar" />
        </Link>

      <div className='flex justify-between items-center w-20 sm:w-24 md:w-36 pr-4 sm:pr-8 md:pr-20 cursor-pointer'>

        <a href='/login' className='LoginNavbar rounded-md hover:bg-blue-500'> <IoIosPerson size={25} /> </a>

        <IoIosMenu size={25} className='LoginNavbar rounded-md hover:bg-blue-500'/>

      </div>


    </nav>
  );
}
