import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SparkleButton from '../components/SparkleButton'
import About from '../components/About'
import { Minus } from 'lucide-react'
import Contact from '../components/Contact'
import WorkExperience from '../components/WorkExperience'
import Projects from '../components/Projects'
import SparkleSection from '../components/SparkleSection'
import TechStack from '../components/TechStack'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='min-h-screen bg-white text-slate-900'>
        
        <Navbar/>
        <Hero/>
        <SparkleSection/>
        <About/>
        <TechStack/>
        <Projects/>
        <WorkExperience/>
        <Contact/>
        <Footer/>  
    </div>
  )
}

export default Home