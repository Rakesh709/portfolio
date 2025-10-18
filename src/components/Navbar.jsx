// import React from 'react'
// import { Terminal, Sparkles, Zap, Rocket, Coffee, Github, Linkedin, Mail, ArrowRight, Check, Star } from 'lucide-react';

// const Navbar = () => {
//   return (
//     <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
//         <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center   ">
//           <div className="flex items-center gap-2 text-xl font-bold  ">
//             <Terminal className="text-emerald-600" size={24} />
//             <span>Rakesh Kumar</span>
//           </div>
          
//           <nav className="hidden md:flex gap-8 text-sm font-medium">
//             <a href="#work" className="hover:text-emerald-600 transition">Work</a>
//             <a href="#about" className="hover:text-emerald-600 transition">About</a>
//             <a href="#stack" className="hover:text-emerald-600 transition">Stack</a>
//             <a href="#contact" className="hover:text-emerald-600 transition">Contact</a>
//           </nav>

//           <button className="px-5 py-2 border  bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition">
//             Let's Talk
//           </button>
//         </div>
//       </header>

  
//   )
// }

// export default Navbar



import React, { useState } from "react";
import { Terminal, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold">
          <Terminal className="text-emerald-600" size={24} />
          <span>Rakesh Kumar</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#projects" className="hover:text-emerald-600 transition">
            Projects
          </a>
          <a href="#tech" className="hover:text-emerald-600 transition">
            Tech
          </a>
          <a href="#work" className="hover:text-emerald-600 transition">
            Work
          </a>
          <a href="#contact" className="hover:text-emerald-600 transition">
            Contact
          </a>
        </nav>

        {/* Right Button */}
        <div className="hidden md:block">
          <button className="px-5 py-2 border bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition">
            Let's Talk
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-700 hover:text-emerald-600 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <nav className="flex flex-col items-center py-4 space-y-4 text-sm font-medium">
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-emerald-600 transition"
            >
              Projects
            </a>
            <a
              href="#tech"
              onClick={() => setIsOpen(false)}
              className="hover:text-emerald-600 transition"
            >
              Tech
            </a>
            <a
              href="#work"
              onClick={() => setIsOpen(false)}
              className="hover:text-emerald-600 transition"
            >
              Work
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-emerald-600 transition"
            >
              Contact
            </a>

            <button
              onClick={() => setIsOpen(false)}
              className="px-5 py-2 border bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition"
            >
              Let's Talk
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
