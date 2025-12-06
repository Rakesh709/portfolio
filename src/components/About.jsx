



import React from "react";
import { Coffee, Github, Linkedin, Mail, Code, Youtube } from "lucide-react";

const About = () => {
  return (
    <section className="mt-2 mb-2">
      {/* Section Divider */}
      {/* <hr className="h-px my-8 bg-slate-200 border-0 dark:bg-slate-700" /> */}

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center md:text-left">
        <div className="inline-flex items-center gap-2 text-emerald-600 font-medium mb-4">
          <Coffee size={20} />
          <span>About Me</span>
        </div>

        <h2 className="text-6xl md:text-3xl font-bold mb-6">
          Turning complex problems into elegant solutions
        </h2>

        <p className="text-lg md:text-xl text-[#909092] mb-4 leading-relaxed">
          I'm a passionate full stack developer with over 3 years of experience building scalable web applications. I specialize in creating seamless user experiences backed by robust, efficient systems.
        </p>

        <p className="text-lg md:text-xl text-[#909092] leading-relaxed">
          From startups to enterprise clients, I've helped bring dozens of products to life, always focusing on clean code, performance, and user satisfaction.
        </p>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-4 mt-8">
          <a
  href="https://github.com/Rakesh709"
  className="
    w-12 h-12
    rounded-full
    flex items-center justify-center
    text-white

    /* Base Gradient + 3D Shadow + White Border */
    bg-gradient-to-br from-slate-800 to-slate-900
    border border-white
    shadow-[0_5px_0_0_rgba(0,0,0,0.6)]

    /* Hover: green + white glow + stronger 3D */
    hover:bg-gradient-to-br hover:from-emerald-500 hover:to-emerald-700
    hover:shadow-[0_7px_0_0_rgba(0,0,0,0.55),0_0_18px_rgba(255,255,255,0.4)]

    /* Pressed: push-down effect */
    active:shadow-[0_3px_0_0_rgba(0,0,0,0.7)]
    active:translate-y-1

    transition-all duration-200
  "
  aria-label="GitHub"
>
  <Github size={20} />
</a>

          <a
            href="https://www.linkedin.com/in/rakesh-kumar-6b3228145/"
            className="w-12 h-12
    rounded-full
    flex items-center justify-center
    text-white

    /* Base Gradient + 3D Shadow + White Border */
    bg-gradient-to-br from-slate-800 to-slate-900
    border border-white
    shadow-[0_5px_0_0_rgba(0,0,0,0.6)]

    /* Hover: green + white glow + stronger 3D */
    hover:bg-gradient-to-br hover:from-emerald-500 hover:to-emerald-700
    hover:shadow-[0_7px_0_0_rgba(0,0,0,0.55),0_0_18px_rgba(255,255,255,0.4)]

    /* Pressed: push-down effect */
    active:shadow-[0_3px_0_0_rgba(0,0,0,0.7)]
    active:translate-y-1

    transition-all duration-200 "
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="/"
            className="w-12 h-12 rounded-full
    flex items-center justify-center
    text-white

    /* Base Gradient + 3D Shadow + White Border */
    bg-gradient-to-br from-slate-800 to-slate-900
    border border-white
    shadow-[0_5px_0_0_rgba(0,0,0,0.6)]

    /* Hover: green + white glow + stronger 3D */
    hover:bg-gradient-to-br hover:from-emerald-500 hover:to-emerald-700
    hover:shadow-[0_7px_0_0_rgba(0,0,0,0.55),0_0_18px_rgba(255,255,255,0.4)]

    /* Pressed: push-down effect */
    active:shadow-[0_3px_0_0_rgba(0,0,0,0.7)]
    active:translate-y-1

    transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://www.youtube.com/@bucketflow"
            className="w-12 h-12 rounded-full
    flex items-center justify-center
    text-white

    /* Base Gradient + 3D Shadow + White Border */
    bg-gradient-to-br from-slate-800 to-slate-900
    border border-white
    shadow-[0_5px_0_0_rgba(0,0,0,0.6)]

    /* Hover: green + white glow + stronger 3D */
    hover:bg-gradient-to-br hover:from-emerald-500 hover:to-emerald-700
    hover:shadow-[0_7px_0_0_rgba(0,0,0,0.55),0_0_18px_rgba(255,255,255,0.4)]

    /* Pressed: push-down effect */
    active:shadow-[0_3px_0_0_rgba(0,0,0,0.7)]
    active:translate-y-1

    transition-all duration-200"
            aria-label="Portfolio/Code"
          >
            <Youtube size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
