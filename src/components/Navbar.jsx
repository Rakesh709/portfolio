import React from 'react'
import { Terminal, Sparkles, Zap, Rocket, Coffee, Github, Linkedin, Mail, ArrowRight, Check, Star } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-2 text-xl font-bold">
            <Terminal className="text-emerald-600" size={24} />
            <span>Rakesh Kumar</span>
          </div>
          
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#work" className="hover:text-emerald-600 transition">Work</a>
            <a href="#about" className="hover:text-emerald-600 transition">About</a>
            <a href="#stack" className="hover:text-emerald-600 transition">Stack</a>
            <a href="#contact" className="hover:text-emerald-600 transition">Contact</a>
          </nav>

          <button className="px-5 py-2 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition">
            Let's Talk
          </button>
        </div>
      </header>
  )
}

export default Navbar