import React, { useState, useEffect } from "react";
import SparkleButton from "./SparkleButton.jsx";
import { Link } from "react-router-dom";
import {motion} from "motion/react"
import {
    ArrowRight,
    Download,
    MessageCircle,
} from "lucide-react";
import profilePic from "../assets/newProfile.png";
import {
    FaReact,
    FaDocker,
    FaJs,
    FaLinux,
    FaGoogle,
    FaAws,
    FaJava,
} from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiPostgresql } from "react-icons/si";

const Hero = () => {
    const [typedText, setTypedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);

    const textOptions = ["MERN Stack Developer", "Cloud Architect", "DevOps Engineer"];
    const fullText = textOptions[textIndex];

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setTypedText(fullText.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            }, 80);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCurrentIndex(0);
                setTypedText("");
                setTextIndex((prev) => (prev + 1) % textOptions.length);
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, fullText, textIndex]);

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="flex mt-10">
            {/* Left Content */}
            <div className="flex-1 z-10">
                <SparkleButton text="Available for freelance projects" />

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-100">
                    Building Robust<br />
                    <span className="text-emerald-500">Web & Cloud Solutions</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 font-medium mb-8 flex items-center gap-3">
                    <span className="text-emerald-500">{typedText}</span>
                    <span className="animate-pulse">|</span>
                </p>

                <div className="flex flex-wrap gap-4">
                    <Link
                        to="/projects"
                        className="px-6 py-3 rounded-full font-medium
    text-white
    bg-gradient-to-br from-slate-800 to-slate-900

    shadow-[0_4px_0_0_rgba(0,0,0,0.4)]

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

                    <button
                        onClick={scrollToContact}
                        className="px-6 py-3 rounded-full font-medium text-emerald-400 bg-transparent border border-emerald-500/30 hover:bg-emerald-500/10 transition-all duration-200 flex items-center gap-2"
                    >
                        Let's Talk <MessageCircle size={18} />
                    </button>
                </div>
            </div>

            {/* Right Image + Floating Icons */}
            <div className="flex-1 relative flex justify-center md:justify-end">

                <div className="relative w-full max-w-sm md:max-w-md">
                        <motion.img
                           whileHover={{ scale: 1.05, y: -2 }}
                           whileTap={{ scale: 0.9, y: 1 }}
                           transition={{ type: "spring", stiffness: 700, damping: 20 }}
                           src={profilePic}
                           alt="Rakesh Kumar"
                           className="relative rounded-lg w-full object-cover"
                        />

                    {/* Floating Tech Icons Circle - 9 icons evenly spaced, larger radius */}
                    <FaReact className="absolute z-20 text-blue-400 text-4xl animate-bounce-slow" style={{ top: 'calc(42% - 225px)', left: '55%', transform: 'translate(-50%, -50%)' }} />
                    <FaDocker className="absolute z-20 text-blue-500 text-4xl animate-bounce-slow" style={{ top: 'calc(50% - 190px)', left: 'calc(58% + 118px)', transform: 'translate(-50%, -50%)' }} />
                    <SiKubernetes className="absolute z-20 text-blue-600 text-4xl animate-bounce-slow" style={{ top: 'calc(50% - 80px)', left: 'calc(50% + 212px)', transform: 'translate(-50%, -50%)' }} />
                    <SiTerraform className="absolute z-20 text-purple-500 text-4xl animate-bounce-slow" style={{ top: 'calc(50% + 80px)', left: 'calc(50% + 212px)', transform: 'translate(-50%, -50%)' }} />
                    <FaLinux className="absolute z-20 text-gray-300 text-4xl animate-bounce-slow" style={{ top: 'calc(50% + 225px)', left: '50%', transform: 'translate(-50%, -50%)' }} />
                    <FaAws className="absolute z-20 text-orange-400 text-4xl animate-bounce-slow" style={{ top: 'calc(50% + 80px)', left: 'calc(50% - 212px)', transform: 'translate(-50%, -50%)' }} />
                    <FaJava className="absolute z-20 text-orange-500 text-4xl animate-bounce-slow" style={{ top: 'calc(50% - 80px)', left: 'calc(50% - 212px)', transform: 'translate(-50%, -50%)' }} />
                    <SiPostgresql className="absolute z-20 text-blue-500 text-4xl animate-bounce-slow" style={{ top: 'calc(50% - 190px)', left: 'calc(50% - 118px)', transform: 'translate(-50%, -50%)' }} />
                    {/* <FaGoogle className="absolute z-20 text-red-400 text-4xl animate-bounce-slow" style={{ top: 'calc(40% - 158px)', left: 'calc(50% - 48px)', transform: 'translate(-50%, -50%)' }} /> */}
                </div>

            </div>

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