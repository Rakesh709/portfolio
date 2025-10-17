import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Logo / Name */}
        <div className="text-2xl font-bold flex items-center gap-2 text-emerald-500">
          <span>Rakesh Kumar</span>
        </div>

        {/* Center: Tagline */}
        <p className="text-center text-sm text-gray-300 md:text-base">
          Building digital products that matter. Full Stack Developer & Problem Solver.
        </p>

        {/* Right: Social Icons */}
        <div className="flex gap-4">
          <a
            href="#"
            className="p-3 rounded-full bg-slate-800 hover:bg-emerald-600 transition flex items-center justify-center"
          >
            <Github size={20} />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-slate-800 hover:bg-emerald-600 transition flex items-center justify-center"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-slate-800 hover:bg-emerald-600 transition flex items-center justify-center"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-700" />

      {/* Bottom */}
      <p className="text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Rakesh Kumar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
