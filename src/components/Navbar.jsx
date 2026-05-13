import React, { useState, useEffect } from 'react'
import { Terminal, Menu, X } from "lucide-react";

import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/Readmegenerator', label: 'AI TOOLS' },
    { path: '/projects', label: 'PROJECTS' },
    { path: '/youtube', label: 'YOUTUBE' },
    { path: '/infographic', label: 'INFOGRAPHIC' },
  ]

  return (
    <div className="fixed top-4 left-0 right-0 z-50 mx-4 sm:mx-[10%]">
      {/* Glass Morphism Container */}
      <div className={`
        rounded-full px-6 py-3
        backdrop-blur-xl
        border border-white/10
        shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]
        bg-gradient-to-b from-white/10 to-white/5
        transition-all duration-500
        ${scrolled ? 'bg-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]' : ''}
      `}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 text-lg font-bold">
            <Terminal className="text-emerald-400" size={22} />
            <span className='text-gray-200'>Rakesh Kumar</span>
          </div>

          {/* Desktop Nav */}
          <ul className='hidden md:flex items-center gap-1 font-medium'>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  relative px-4 py-2 rounded-full text-sm text-gray-300
                  hover:text-white hover:bg-white/10 transition-all duration-300
                  ${isActive ? 'text-emerald-400' : ''}
                `}
              >
                {item.label}
              </NavLink>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-emerald-400"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-150 ease-out rounded-full"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mx-auto max-w-5xl mt-2 rounded-2xl p-4 backdrop-blur-xl bg-white/10 border border-white/10">
          <ul className='flex flex-col gap-2 font-medium'>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) => `
                  px-4 py-3 rounded-xl text-gray-300
                  hover:text-white hover:bg-white/10 transition-all
                  ${isActive ? 'text-emerald-400 bg-white/5' : ''}
                `}
              >
                {item.label}
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar