import React from 'react'
import { FiGithub, FiExternalLink, FiFileText, FiCode, FiArrowRight } from "react-icons/fi";
import { SiVercel } from "react-icons/si";
import { Link } from 'react-router-dom';

const Readmegenerator = () => {
  const features = [
    {
      title: "Automated Generation",
      description: "Generate professional README files automatically from your project details",
      icon: "⚡",
    },
    {
      title: "Multiple Templates",
      description: "Choose from various templates suitable for different project types",
      icon: "📋",
    },
    {
      title: "Cloud Sync",
      description: "Save and access your generated READMEs from anywhere",
      icon: "☁️",
    },
    {
      title: "Markdown Export",
      description: "Export your README in clean Markdown format ready to use",
      icon: "📝",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
          AI Tools
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          AI-powered tools to generate README files, Dockerfiles, and more
        </p>
        <a
          href="https://github-doc-gen.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-500 transition-colors"
        >
          Open Generator <FiExternalLink size={18} />
        </a>
      </div>

      {/* Features Grid */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <h2 className="text-2xl font-semibold text-gray-200 mb-6 text-center">
          Features
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-gray-200 mb-6 text-center">
          Quick Links
        </h2>
        <div className="grid gap-4">
          {/* Open Generator */}
          <a
            href="https://github-doc-gen.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 bg-gradient-to-r from-emerald-600/20 to-emerald-600/5 border border-emerald-500/30 rounded-2xl hover:border-emerald-500/50 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-emerald-600 rounded-xl">
                <FiCode className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">
                  Open Generator
                </h3>
                <p className="text-sm text-gray-400">
                  Start creating your README now
                </p>
              </div>
            </div>
            <FiArrowRight className="text-emerald-400 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* GitHub Repository */}
          <a
            href="https://github.com/Rakesh709/github-doc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-xl">
                <FiGithub className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">
                  View Source Code
                </h3>
                <p className="text-sm text-gray-400">
                  Check out the project on GitHub
                </p>
              </div>
            </div>
            <FiArrowRight className="text-gray-400 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Documentation */}
          {/* <a
            href="https://github-doc-gen.vercel.app/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-xl">
                <FiFileText className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">
                  Documentation
                </h3>
                <p className="text-sm text-gray-400">
                  Learn how to use all features
                </p>
              </div>
            </div>
            <FiArrowRight className="text-gray-400 group-hover:translate-x-1 transition-transform" />
          </a> */}

          {/* Deployed on Vercel */}
          {/* <div className="flex items-center justify-center gap-2 py-4 text-gray-500">
            <SiVercel className="text-xl" />
            <span className="text-sm">Deployed on Vercel</span>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Readmegenerator