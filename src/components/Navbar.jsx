import React, { useState } from 'react'
import { Terminal, Menu, X } from "lucide-react";

import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
 
    
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold">
          <Terminal className="text-emerald-600" size={24} />
          <span>Rakesh Kumar</span>
        </div>
        <ul className='hidden md:flex items-start gap-5 font-medium '>
            <NavLink to='/' className='hover:text-emerald-600 transition'>
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>

            <NavLink to='/projects' className='hover:text-emerald-600 transition'>
                <li className='py-1'>PROJECTS</li>
                <hr  className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>

            <NavLink to='/youtube' className='hover:text-emerald-600 transition'>
                <li className='py-1'>YOUTUBE</li>
                <hr  className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>

            <NavLink to='/blog' className='hover:text-emerald-600 transition'>
                <li className='py-1'>BLOGS</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>

            <NavLink to='/infographic' className='hover:text-emerald-600 transition'>
                <li className='py-1'>INFOGRAPHIC</li>
                <hr  className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>
    </div>
  )
}

export default Navbar