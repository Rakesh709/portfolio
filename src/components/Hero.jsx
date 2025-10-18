// import React,{useState, useEffect} from 'react'
// import SparkleButton from './SparkleButton.jsx';
// import { Terminal, Sparkles, Zap, Rocket, Coffee, Github, Linkedin, Mail, ArrowRight,  Check, Star, Download, Minus } from 'lucide-react';

// import profilePic from '../assets/newProfile.png';

// const Hero = ({ text}) => {
//    const [typedText, setTypedText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const fullText = "Building digital products that matter";



//   useEffect(() => {
//     if (currentIndex < fullText.length) {
//       const timeout = setTimeout(() => {
//         setTypedText(fullText.slice(0, currentIndex + 1));
//         setCurrentIndex(currentIndex + 1);
//       }, 80);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentIndex]);

//     const stats = [
//         { num: "50+", label: "Projects Delivered" },
//         { num: "8+", label: "Years Experience" },
//         { num: "99%", label: "Client Satisfaction" },
//         { num: "24/7", label: "Support Available" }
//     ];
//     return (
//         <>
//         <section className="pt-32 pb-40 px-6 flex justify-evenly">
        
//             <div>
//                 <div className="mx-auto px-30">
//                 <SparkleButton text={"Available for freelance projects"} className="px-30" />
//             </div>
//             <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-none px-30">
//                 Full Stack<br />
//                 <span className="text-emerald-600">Engineer</span>
//             </h1>
//             <div className="h-12 mb-12 px-30">
//                 <p className="text-2xl text-slate-600 font-light">
//                     {typedText}
//                     <span className="animate-pulse">|</span>
//                 </p>
//             </div>

//             <div className="flex flex-wrap gap-4 mb-16 px-30">
//                 <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition flex items-center gap-2">
//                     View My Work
//                     <ArrowRight size={18} />
//                 </button>
//                 <a href={"https://drive.google.com/file/d/1ObJ9_u5Q5YDp2mjiXTZBa87HsAGq3knd/view?usp=sharing"} download  className="px-8 py-4 border-2 border-slate-900 rounded-full font-medium hover:bg-slate-50 transition flex items-center gap-2">
//                     Download Resume
//                     <Download size={18} />
//                 </a>
//             </div>
//             </div>
//             <div className=' flex'>
//                 <img className='rounded-lg w-full  object-cover 
//                 transform transition-transform duration-500 
//                hover:rotate-3 hover:scale-105' src={profilePic} alt="new"  />
//             </div>
            
//         </section>
//             <div className="text-center px-150 -my-28 ">
//                 <SparkleButton text={" Hey there, Hope we will work Together"} />
//             </div>

            
//      </>
//     )
// }

// export default Hero



import React, { useState, useEffect } from "react";
import SparkleButton from "./SparkleButton.jsx";
import { ArrowRight, Download } from "lucide-react";
import profilePic from "../assets/newProfile.png";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Building digital products that matter";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section className="pt-32 pb-10 px-6 md:px-10 lg:px-35 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      {/* Left Content */}
      <div className="flex-1">
        <SparkleButton text="Available for freelance projects" />

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Full Stack <br />
          <span className="text-emerald-600">Engineer</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 font-light mb-8">
          {typedText}
          <span className="animate-pulse">|</span>
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition flex items-center gap-2">
            View My Work <ArrowRight size={18} />
            
          </button>

          <a
            href="https://drive.google.com/file/d/1ObJ9_u5Q5YDp2mjiXTZBa87HsAGq3knd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-slate-900 rounded-full font-medium hover:bg-slate-50 transition flex items-center gap-2"
          >
            Download Resume <Download size={18} />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src={profilePic}
          alt="Rakesh Kumar"
          className="rounded-lg w-full max-w-sm md:max-w-md object-cover transform transition-transform duration-500 hover:rotate-3 hover:scale-105"
        />
      </div>
      
    </section>
  );
};

export default Hero;
