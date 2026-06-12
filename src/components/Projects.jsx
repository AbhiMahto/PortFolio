import React from "react";
import { Github, ExternalLink } from "lucide-react";

function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive personal portfolio built with React and Tailwind CSS. Features dynamic data fetching, dark-mode cyber aesthetics, and an interactive UI.",
      techStack: ["React", "Tailwind CSS", "Vite", "AOS"],
      github: "https://github.com/AbhiMahto",
      live: "#"
    },
    {
      title: "InstantTool (Smart Passport AI)",
      description: "A full-stack AI-powered cyber cafe application. Automates studio-quality passport photo generation featuring Remove.BG background removal, Gemini API enhancements, custom cropping, Razorpay integration, and instant 4x6 print layout rendering.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
      github: "https://github.com/AbhiMahto",
      live: "#"
    },
    {
      title: "Rockguard AI Dashboard",
      description: "A predictive rockfall risk assessment dashboard. Features a responsive frontend that captures critical sensor data, communicates with a backend prediction API, and instantly displays real-time risk data and AI-generated emergency action plans.",
      techStack: ["React", "Python", "REST APIs", "Tailwind css"],
      github: "https://github.com/AbhiMahto",
      live: "#"
    }
  ];

  return (
    <div className="bg-[#0a0a0a]">
      <section id="projects" className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-50 underline underline-offset-8 decoration-pink-400">
            Projects
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div 
              key={index} 
              className="group bg-[#151515] p-8 rounded-2xl border border-gray-800 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-3 hover:border-pink-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Top accent glow effect on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">{project.title}</h3>
              <p className="text-base text-gray-400 mb-6 flex-grow leading-relaxed font-medium group-hover:text-gray-300 transition-colors">
                {project.description}
              </p>
              
              <div className="mb-6 flex flex-wrap gap-2">
                {project.techStack.map((tech, techIdx) => (
                  <span 
                    key={techIdx} 
                    className="bg-black/50 border border-gray-700 text-pink-300 px-3 py-1 rounded-full text-sm font-semibold shadow-sm group-hover:border-pink-500/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-5 border-t border-gray-800 mt-auto">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-pink-500 transition-colors font-bold z-10"
                >
                  <Github size={20} /> Code
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors font-bold ml-auto z-10"
                >
                  <ExternalLink size={20} /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
