import React from 'react'
import { Terminal, Sparkles, Zap, Rocket, Coffee, Github, Linkedin, Mail, ArrowRight, Check, Star } from 'lucide-react';

const Contact = () => {
  return (
    <>
        <hr className='h-px my-2 bg-slate-200 border-0 dark:bg-slate-200' />
      <section id="contact" className="py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-6 text-emerald-500">Let's work together</h2>
          <p className="text-xl text-slate-600 mb-12">
            Have a project in mind? Let's discuss how I can help bring your vision to life.
          </p>

          <div className="bg-slate-50 rounded-3xl p-12 border border-slate-200">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Name"
                className="px-6 py-4 border border-slate-300 rounded-xl focus:border-emerald-600 focus:outline-none transition"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-6 py-4 border border-slate-300 rounded-xl focus:border-emerald-600 focus:outline-none transition"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-6 py-4 border border-slate-300 rounded-xl focus:border-emerald-600 focus:outline-none transition mb-6"
            />
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full px-6 py-4 border border-slate-300 rounded-xl focus:border-emerald-600 focus:outline-none transition mb-6"
            />
            <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-emerald-600 transition flex items-center justify-center gap-2">
              Send Message
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
      </>
  )
}

export default Contact