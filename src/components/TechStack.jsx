
import React from "react";
import { Code, Database, Server, Monitor, Cpu } from "lucide-react";

const TechStack = () => {
  const frontend = ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"];
  const backend = ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"];
  const devops = ["Docker", "AWS", "Jenkins", "CI/CD"];
  const others = ["Git", "Figma", "REST APIs", "GraphQL"];

  const renderTechList = (techArray) =>
  techArray.map((tech, idx) => (
    <span
      key={idx}
      className="
        px-4 py-2
        bg-emerald-50
        border border-emerald-200
        rounded-full
        text-sm text-emerald-700
        font-medium
        hover:bg-emerald-100
        hover:-translate-y-0.5
        hover:shadow-md
        transition-all
        inline-flex items-center justify-center
      "
    >
      {tech}
    </span>
  ));

  return (
    <section  id="tech" className="mt-25 ">
      {/* Section Title */}
      <div className="flex items-center gap-2 mb-6  text-emerald-600 font-medium">
        <Cpu size={20} />
        <span>Technology</span>
      </div>

      <div className="max-w-7xl mx-auto text-center md:text-left">
        <h2 className="text-4xl md:text-3xl font-bold mb-2 text-black-600">
          My Tech Stack
        </h2>
        <p className="text-lg md:text-xl text-slate-300 mb-8">
          Technologies I use to build full stack applications with speed and scalability.
        </p>

        {/* Tech Categories */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
  <div className="bg-slate-30 rounded-xl p-6 shadow hover:shadow-lg transition-all border border-white/60 flex flex-col items-center group">
    <Monitor
      size={28}
      className="mb-4 text-emerald-600 transition-transform duration-200 group-hover:-translate-y-1 group-hover:scale-110"
    />
    <h3 className="font-semibold mb-4">Frontend</h3>
    <div className="flex flex-wrap gap-2 justify-center">
      {renderTechList(frontend)}
    </div>
  </div>

  <div className="bg-slate-30 rounded-xl p-6 shadow hover:shadow-lg transition-all border border-white/60 flex flex-col items-center group">
    <Server
      size={28}
      className="mb-4 text-emerald-600 transition-transform duration-200 group-hover:-translate-y-1 group-hover:scale-110"
    />
    <h3 className="font-semibold mb-4">Backend</h3>
    <div className="flex flex-wrap gap-2 justify-center">
      {renderTechList(backend)}
    </div>
  </div>

  <div className="bg-slate-30 rounded-xl p-6 shadow hover:shadow-lg transition-all border border-white/60 flex flex-col items-center group">
    <Database
      size={28}
      className="mb-4 text-emerald-600 transition-transform duration-200 group-hover:-translate-y-1 group-hover:scale-110"
    />
    <h3 className="font-semibold mb-4">DevOps</h3>
    <div className="flex flex-wrap gap-2 justify-center">
      {renderTechList(devops)}
    </div>
  </div>

  <div className="bg-slate-30 rounded-xl p-6 shadow hover:shadow-lg transition-all border border-white/60 flex flex-col items-center group">
    <Code
      size={28}
      className="mb-4 text-emerald-600 transition-transform duration-200 group-hover:-translate-y-1 group-hover:scale-110"
    />
    <h3 className="font-semibold mb-4">Other Tools</h3>
    <div className="flex flex-wrap gap-2 justify-center">
      {renderTechList(others)}
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default TechStack;
