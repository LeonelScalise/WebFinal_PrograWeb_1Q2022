import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export function Layout() {
  return (
    <div className='h-screen bg-white'>
        <Navbar />
        <Outlet />
    </div>
  )
}

