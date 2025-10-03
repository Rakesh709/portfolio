import { BriefcaseBusiness } from "lucide-react";
import React from "react";

const WorkExperience = () => {
  return (
    <>
      <hr className="h-px my-8 bg-slate-200 border-0 dark:bg-slate-200" />
      <div className="inline-flex items-center gap-2 text-emerald-600 font-medium mb-4 px-58">
        <BriefcaseBusiness size={20} />
        <span>Work Experience</span>
      </div>
      <div className="relative flex flex-col items-center w-full py-10">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 -translate-x-1/2"></div>

        {/* One Experience Item */}
        <div className="flex w-full max-w-4xl mb-12">
          {/* Left Side */}
          <div className="w-1/2 pr-8 text-right">
            <h3 className="text-xl font-bold">
              Torry Harris Integration Solutions
            </h3>
            <p className="text-gray-600">Software Engineer</p>
            <span className="text-sm text-gray-500">Jan 2025 – Present</span>
          </div>

          {/* Dot in middle */}
          <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md relative top-2"></div>

          {/* Right Side */}
          <div className="w-1/2 pl-8">
            <p className="text-gray-700 font-medium">
              Tech Used: React, Node.js, AWS, Docker
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li className="whitespace-nowrap">Built reusable UI components with React & Tailwind CSS</li>
              <li>Implemented CI/CD pipelines using Jenkins</li>
              <li>Optimized cloud deployment with AWS & Docker</li>
            </ul>
          </div>

          
        </div>

        <div className="flex w-full max-w-4xl mb-12">
          {/* Left Side */}
          <div className="w-1/2 pr-8 text-right">
            <h3 className="text-xl font-bold">
              Torry Harris Integration Solutions
            </h3>
            <p className="text-gray-600">Associate Software Engineer</p>
            <span className="text-sm text-gray-500">Nov 2021 – 24</span>
          </div>

          {/* Dot in middle */}
          <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md relative top-2"></div>

          {/* Right Side */}
          <div className="w-1/2 pl-8">
            <p className="text-gray-700 font-medium">
              Tech Used: React, Node.js, AWS, Docker
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Built reusable UI components with React & Tailwind</li>
              <li>Implemented CI/CD pipelines using Jenkins</li>
              <li>Optimized cloud deployment with AWS & Docker</li>
            </ul>
          </div>

          
        </div>

        {/* Add More Items here by duplicating above block */}
      </div>
    </>
  );
};

export default WorkExperience;
