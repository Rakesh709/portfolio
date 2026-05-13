import React from 'react'
import { ExternalLink, Github, Code, Database, Cloud, Container, Terminal } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "LeetLab - LeetCode Clone",
      tagline: "Practice coding challenges in multiple languages",
      description: "A full-stack LeetCode-inspired platform that helps developers practice coding challenges. Features include multi-language support (JavaScript, Python, Java), code execution, problem categorization, user authentication, and progress tracking.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "Redis"],
      features: ["Multi-language support", "Code execution engine", "Problem categorization", "User authentication", "Progress tracking"],
      githubUrl: "https://github.com/Rakesh709/leetcode-clone",
      category: "Full Stack"
    },
    {
      title: "Basecamp Project Management",
      tagline: "Collaborative project management tool",
      description: "A comprehensive project management application with real-time updates, drag-and-drop functionality, and team collaboration features. Includes task boards, team messaging, file sharing, and deadline tracking.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop",
      technologies: ["JavaScript", "Express", "MongoDB", "Socket.io", "Postman"],
      features: ["Drag-and-drop task boards", "Real-time collaboration", "Team messaging", "File sharing", "Deadline tracking"],
      githubUrl: "https://github.com/Rakesh709/basecamp-project-management",
      category: "Full Stack"
    },
    {
      title: "E-Commerce Platform",
      tagline: "Complete shopping solution with admin dashboard",
      description: "Full-stack e-commerce platform featuring user authentication, shopping cart, payment gateway integration, order management, and a powerful admin dashboard with real-time analytics and sales tracking.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS S3", "Redis"],
      features: ["User authentication", "Shopping cart", "Payment integration", "Admin dashboard", "Order management", "Real-time analytics"],
      githubUrl: "https://github.com/Rakesh709/ecommerce-platform",
      category: "Full Stack"
    },
    {
      title: "DevOps CI/CD Pipeline",
      tagline: "Automated deployment pipeline with monitoring",
      description: "End-to-end DevOps automation pipeline featuring containerization, orchestration, automated testing, and deployment to Kubernetes. Includes monitoring with Prometheus and visualization with Grafana.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&auto=format&fit=crop",
      technologies: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Prometheus", "Grafana", "AWS"],
      features: ["Container orchestration", "Automated testing", "Infrastructure as Code", "Monitoring & alerting", "CI/CD automation"],
      githubUrl: "https://github.com/Rakesh709/devops-pipeline",
      category: "DevOps"
    }
  ]

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Full Stack': return <Code size={16} />
      case 'DevOps': return <Container size={16} />
      default: return <Code size={16} />
    }
  }

  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
          My Projects
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          A collection of full-stack applications, DevOps pipelines, and cloud solutions I've built
        </p>
      </div>

      {/* Tech Stack Summary */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'Java', 'Terraform'].map((tech) => (
            <span key={tech} className="px-4 py-2 bg-white/10 border border-white/10 rounded-full text-sm text-gray-300">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-emerald-600/90 rounded-full text-xs text-white font-medium flex items-center gap-1">
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col">
                  {/* Title & Tagline */}
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold text-gray-100 mb-2 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-emerald-500 font-medium">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-emerald-600/10 border border-emerald-500/20 rounded-full text-xs text-emerald-400 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* More Projects CTA */}
      <div className="text-center mt-16">
        <p className="text-gray-500 mb-4">Want to see more projects?</p>
        <a
          href="https://github.com/Rakesh709"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-gray-300 hover:bg-white/20 transition-colors"
        >
          <Github size={18} />
          Check GitHub for more
        </a>
      </div>
    </div>
  )
}

export default Projects