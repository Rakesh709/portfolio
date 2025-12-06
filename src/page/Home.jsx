import React from 'react'
import Hero from '../components/Hero.jsx'
import SparkleSection from "../components/SparkleSection.jsx"
import About from '../components/About.jsx'
import TechStack from '../components/TechStack.jsx'
import Projects from '../components/Projects.jsx'
import WorkExperience from '../components/WorkExperience.jsx'
import Contact from '../components/Contact.jsx'


const Home = () => {
  return (
    <div>
        <Hero/>
        <SparkleSection />
        <About/>
        <TechStack/>
        <Projects/>
        <WorkExperience/>
        <Contact/>
    </div>
  )
}

export default Home