import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SparkleButton from '../components/SparkleButton'
import About from '../components/About'
import { Minus } from 'lucide-react'
import Contact from '../components/Contact'


const Home = () => {
  return (
    <div className='min-h-screen bg-white text-slate-900'>
        
        <Navbar/>
        <Hero/>
        
        <About/>
        <Contact/>
        
    </div>
  )
}

export default Home