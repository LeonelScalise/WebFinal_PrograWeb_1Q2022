import React from 'react';
import {Link} from 'react-router-dom';
import {IoIosPerson, IoIosMenu} from 'react-icons/io'

export function Navbar() {
  return (
  <nav className='flex justify-between items-center h-16 bg-blue-300 text-black relative shadow-sm'>

        <Link to="/" className='pl-8'>
            Log
        </Link>
        
        <div className='flex justify-between items-center pr-20 cursor-pointer'>

            <a href='/login'> <IoIosPerson size = {23} style = {{marginRight:18}}/> </a>  
            <IoIosMenu size = {23}/>

        </div>
        

    </nav>
  );
}
