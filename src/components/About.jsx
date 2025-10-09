import React from 'react'
import { Terminal, Sparkles, Zap, Rocket, Coffee, Github, Linkedin, Mail, ArrowRight, Check, Star, Code } from 'lucide-react';

const About = () => {
    return (
        <>
        <hr className='h-px my-8 bg-slate-200 border-0 dark:bg-slate-200' />
        <section className="py-20 px-6 bg-slate-50 content-center">
        <div className="max-w-7xl mx-auto  gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-emerald-600 font-medium mb-4 px-30">
              <Coffee size={20} />
              <span>About Me</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 px-30">
              Turning complex problems into elegant solutions
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed px-30">
              I'm a passionate full stack developer with over 8 years of experience building scalable web applications. 
              I specialize in creating seamless user experiences backed by robust, efficient systems.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed px-30">
              From startups to enterprise clients, I've helped bring dozens of products to life, 
              always focusing on clean code, performance, and user satisfaction.
            </p>
            
            <div className="flex justify-center gap-4 mt-8">
              <a href="#" className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-emerald-600 transition">
                <Github size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-emerald-600 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-emerald-600 transition">
                <Mail size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-emerald-600 transition">
                <Code size={20} />
              </a>
            </div>
          </div>

          
        </div>
      </section>
      </>
    )
}

export default About