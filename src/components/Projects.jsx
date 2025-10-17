// import React from "react";
// import {
//   BadgeCheck,
//   Folder,
//   ExternalLink,
//   Github,
//   Coffee,
//   LaptopMinimalCheck,
// } from "lucide-react";

// const Projects = () => {
//   const projects = [
//     {
//       title: "leetcode-clone",
//       description:
//         "This is a LeetLab - A Leetcode Inspired Product designed to help developers practice coding challenges in multiple programming languages (JavaScript, Python, Java).",
//       image:
//         "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       technologies: [
//         "React",
//         "Node.js",
//         "PostgreSQL",
//         "Docker",
//         "AWS",
//       ],
//       liveUrl: "https://github.com/Rakesh709/leetcode-clone",
//       githubUrl: "https://github.com/Rakesh709/leetcode-clone",
//       featured: true,
//     },
//     {
//       title: "basecamp-project-management",
//       description:
//         "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
//       image:
//         "https://images.unsplash.com/photo-1605907126120-f68611516ecc?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       technologies: ["Javascript", "Express", "MongoDB", "Postman"],
//       liveUrl: "https://github.com/Rakesh709/basecamp-project-management",
//       githubUrl: "https://github.com/Rakesh709/basecamp-project-management",
//       featured: true,
//     },
//     {
//       title: "Analytics Dashboard",
//       description:
//         "Real-time analytics dashboard with interactive charts, data visualization, and automated reporting capabilities.",
//       image:
//         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
//       technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
//       liveUrl: "#",
//       githubUrl: "#",
//       featured: false,
//     },
//   ];

//   const featuredProjects = projects.filter((p) => p.featured);

//   return (
//     <>
//       <hr className="h-px  bg-slate-200 border-0 dark:bg-slate-200" />

//       <div className="inline-flex items-center gap-2 text-emerald-600 font-medium mb-4 px-61">
//         <LaptopMinimalCheck size={20} />
//         <span>My Work</span>
//       </div>
//       <section id="projects" className="py-5 px-55 bg-slate-50">
//         <div className="container mx-auto px-6 ">
//           {/* Header */}
//           <div className=" mb-10">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
//               Featured Projects
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl ">
//               A selection of projects that showcase my skills and passion for
//               development.
//             </p>
//           </div>

//           {/* Featured Projects */}
//           <div className="grid md:grid-cols-2 gap-8">
//             {featuredProjects.map((project) => (
//               <div
//                 key={project.title}
//                 className="group bg-white rounded-xl shadow hover:shadow-2xl overflow-hidden transition-all duration-500"
//               >
//                 {/* Image */}
//                 <div className="relative">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                   {/* Action Buttons */}
//                   <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <a
//                       href={project.liveUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow transition"
//                     >
//                       <ExternalLink className="w-4 h-4" />
//                     </a>
//                     <a
//                       href={project.githubUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow transition"
//                     >
//                       <Github className="w-4 h-4" />
//                     </a>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-600 transition-colors">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4 text-sm">
//                     {project.description}
//                   </p>

//                   {/* Tech Badges */}
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.technologies.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-sm text-emerald-700 font-medium"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Buttons */}
//                   <div className="flex gap-3">
//                     <a
//                       href={project.liveUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex-1 inline-flex items-center justify-center gap-2 bg-black-600 border border-slate-300 text-black px-3 py-2 rounded-lg text-sm font-medium hover:bg-emerald-400 transition"
//                     >
//                       <ExternalLink className="w-4 h-4" /> Live Demo
//                     </a>
//                     <a
//                       href={project.githubUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex-1 inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-slate-100 transition"
//                     >
//                       <Github className="w-4 h-4" /> Code
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Projects;



import React from "react";
import { ExternalLink, Github, Laptop } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "leetcode-clone",
      description:
        "This is a LeetLab - A Leetcode Inspired Product designed to help developers practice coding challenges in multiple programming languages (JavaScript, Python, Java).",
      image:
        "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
      liveUrl: "https://github.com/Rakesh709/leetcode-clone",
      githubUrl: "https://github.com/Rakesh709/leetcode-clone",
      featured: true,
    },
    {
      title: "basecamp-project-management",
      description:
        "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1605907126120-f68611516ecc?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0",
      technologies: ["Javascript", "Express", "MongoDB", "Postman"],
      liveUrl: "https://github.com/Rakesh709/basecamp-project-management",
      githubUrl: "https://github.com/Rakesh709/basecamp-project-management",
      featured: true,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-8 px-6 md:px-10 lg:px-16 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 text-emerald-600 font-medium mb-4">
          <Laptop size={20} />
          <span>My Work</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured Projects
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          A selection of projects that showcase my skills and passion for development.
        </p>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-xl shadow hover:shadow-2xl overflow-hidden transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow transition"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-sm text-emerald-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600 transition"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-slate-100 transition"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
