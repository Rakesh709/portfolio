import React, { useState, useEffect } from "react";
import SparkleButton from "./SparkleButton.jsx";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    Download,
    Cloud,
    Cpu,
    Server,
    Database,
} from "lucide-react";
import profilePic from "../assets/newProfile.png";
import {
    FaReact,
    FaAws,
    FaDocker,
    FaNodeJs,
    FaJs,
    FaDatabase,
    FaJenkins,
} from "react-icons/fa";

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
        <section className=" flex mt-15 ">
            {/* Left Content */}
            <div className="flex-1 z-10">
                <SparkleButton text="Available for freelance projects" />

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                    Full Stack <br />
                    <span className="text-emerald-600">Engineer</span>
                </h1>

                <p className="text-xl md:text-2xl text-yellow-600 font-light mb-8">
                    {typedText}
                    <span className="animate-pulse">|</span>
                </p>

                <div className="flex flex-wrap gap-4">
                    <Link
                        to="/projects"
                        className="px-6 py-3 rounded-full font-medium
    text-white
    bg-gradient-to-br from-slate-800 to-slate-900

    
    shadow-[0_4px_0_0_rgba(0,0,0,0.4)]

    /* White glow */
    ring-1 ring-white/20
    shadow-white/20

    hover:shadow-[0_6px_0_0_rgba(0,0,0,0.3),0_0_18px_rgba(255,255,255,0.35)]
    active:shadow-[0_2px_0_0_rgba(0,0,0,0.5),0_0_10px_rgba(255,255,255,0.25)]
    active:translate-y-1

    transition-all duration-200
    flex items-center gap-2
    border border-white/40"
                    >
                        Proof of Work <ArrowRight size={18} />
                    </Link>

                    <a
                        href="https://drive.google.com/file/d/1ObJ9_u5Q5YDp2mjiXTZBa87HsAGq3knd/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full font-medium text-white bg-gradient-to-br from-slate-800 to-slate-900 shadow-[0_4px_0_0_rgba(0,0,0,0.4)]  ring-1 ring-white/20 shadow-white/20  hover:shadow-[0_6px_0_0_rgba(0,0,0,0.3),0_0_18px_rgba(255,255,255,0.35)] active:shadow-[0_2px_0_0_rgba(0,0,0,0.5),0_0_10px_rgba(255,255,255,0.25)]  active:translate-y-1  transition-all duration-200  flex items-center gap-2  border border-white/40"
                    >
                        Download Resume <Download size={18} />
                    </a>
                </div>
            </div>

            {/* Right Image + Floating Icons */}
            <div className="flex-1 relative flex justify-center md:justify-end">
                <div className="relative w-full max-w-sm md:max-w-md">
                    <img
                        src={profilePic}
                        alt="Rakesh Kumar"
                        className="rounded-lg w-full object-cover transform transition-transform duration-500 hover:rotate-3 hover:scale-105"
                    />

                    {/* Floating Tech Icons */}
                    <FaReact className="absolute text-emerald-500 text-4xl animate-bounce-slow top-4 left-6" />
                    <FaNodeJs className="absolute text-green-600 text-4xl animate-bounce-slow bottom-8 left-10" />
                    <FaDocker className="absolute text-blue-500 text-4xl animate-bounce-slow top-10 right-10" />
                    <FaAws className="absolute text-orange-500 text-4xl animate-bounce-slow bottom-6 right-6" />
                    <FaJs className="absolute text-yellow-500  text-4xl animate-bounce-slow bottom-6 right-6 top-1/2 left-[-40px] hidden md:block" />
                    <FaDatabase className="absolute text-purple-400 animate-bounce-slow text-4xl bottom-1/2 right-[-40px] hidden md:block" />
                    {/* <FaJenkins  className="absolute text-black-400 animate-bounce-slow text-4xl top-1 left-50 " /> */}
                </div>
            </div>

            {/* Soft background electric gradient */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-50/50 to-transparent blur-3xl pointer-events-none"></div> */}

            {/* Animations */}
            <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
};

export default Hero;
