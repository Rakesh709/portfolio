// import React from "react";
// import { Code, Database, Server, Monitor, Coffee, Cpu } from "lucide-react";

// const TechStack = () => {
//   const frontend = ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"];
//   const backend = ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"];
//   const devops = ["Docker", "AWS", "Jenkins", "CI/CD"];
//   const others = ["Git", "Figma", "REST APIs", "GraphQL"];

//   const renderTechList = (techArray) =>
//     techArray.map((tech, idx) => (
//       <span
//         key={idx}
//         className="px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-sm text-emerald-700 font-medium hover:bg-emerald-100 transition"
//       >
//         {tech}
//       </span>
//     ));

//   return (
//     <section className="py-20 px-6 md:px-10 lg:px-16 bg-white">
//     <div className="inline-flex items-center gap-2 px-15 text-emerald-600 font-medium">
//           <Cpu size={20} />
//           <span>Technology</span>
//         </div>
//       <div className="max-w-7xl mx-auto ">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black-600">
//           My Tech Stack
//         </h2>
//         <p className="text-lg md:text-xl text-slate-600 mb-10">
//           Technologies I use to build full stack applications with speed and scalability.
//         </p>

//         {/* Tech Categories */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div className="bg-slate-50 rounded-xl p-6 shadow hover:shadow-lg transition">
//             <div className="flex items-center justify-center mb-4 text-emerald-600">
//               <Monitor size={28} />
//             </div>
//             <h3 className="font-semibold mb-4">Frontend</h3>
//             <div className="flex flex-wrap gap-2 justify-center">{renderTechList(frontend)}</div>
//           </div>

//           <div className="bg-slate-50 rounded-xl p-6 shadow hover:shadow-lg transition">
//             <div className="flex items-center justify-center mb-4 text-emerald-600">
//               <Server size={28} />
//             </div>
//             <h3 className="font-semibold mb-4">Backend</h3>
//             <div className="flex flex-wrap gap-2 justify-center">{renderTechList(backend)}</div>
//           </div>

//           <div className="bg-slate-50 rounded-xl p-6 shadow hover:shadow-lg transition">
//             <div className="flex items-center justify-center mb-4 text-emerald-600">
//               <Database size={28} />
//             </div>
//             <h3 className="font-semibold mb-4">DevOps</h3>
//             <div className="flex flex-wrap gap-2 justify-center">{renderTechList(devops)}</div>
//           </div>

//           <div className="bg-slate-50 rounded-xl p-6 shadow hover:shadow-lg transition">
//             <div className="flex items-center justify-center mb-4 text-emerald-600">
//               <Code size={28} />
//             </div>
//             <h3 className="font-semibold mb-4">Other Tools</h3>
//             <div className="flex flex-wrap gap-2 justify-center">{renderTechList(others)}</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechStack;


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
        className="px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-sm text-emerald-700 font-medium hover:bg-emerald-100 transition"
      >
        {tech}
      </span>
    ));

  return (
    <section  id="tech" className="py-8 px-6 md:px-10 lg:px-16 bg-white">
      {/* Section Title */}
      <div className="inline-flex items-center gap-2 mb-6 px-15 text-emerald-600 font-medium">
        <Cpu size={20} />
        <span>Technology</span>
      </div>

      <div className="max-w-7xl mx-auto text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 text-black-600">
          My Tech Stack
        </h2>
        <p className="text-lg md:text-xl text-slate-600 mb-8">
          Technologies I use to build full stack applications with speed and scalability.
        </p>

        {/* Tech Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="bg-slate-50 rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center">
            <Monitor size={28} className="mb-4 text-emerald-600" />
            <h3 className="font-semibold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2 justify-center">{renderTechList(frontend)}</div>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center">
            <Server size={28} className="mb-4 text-emerald-600" />
            <h3 className="font-semibold mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2 justify-center">{renderTechList(backend)}</div>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center">
            <Database size={28} className="mb-4 text-emerald-600" />
            <h3 className="font-semibold mb-4">DevOps</h3>
            <div className="flex flex-wrap gap-2 justify-center">{renderTechList(devops)}</div>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center">
            <Code size={28} className="mb-4 text-emerald-600" />
            <h3 className="font-semibold mb-4">Other Tools</h3>
            <div className="flex flex-wrap gap-2 justify-center">{renderTechList(others)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
