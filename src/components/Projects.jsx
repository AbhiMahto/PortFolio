import React, { useState } from "react";
import { Github, ExternalLink, Code2, Sparkles, FolderGit2 } from "lucide-react";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "AI & Machine Learning", "Full Stack Web", "Enterprise & Research"];

  const projectList = [
    {
      title: "InstantTool (Smart Passport AI)",
      category: "Full Stack Web",
      badge: "Full Stack AI App",
      description: "Full-stack AI-powered cyber cafe suite automating studio-quality passport photo generation. Integrates Remove.BG background removal, Gemini API enhancements, custom cropping, Razorpay payments, and 4x6 print grid rendering.",
      techStack: ["React.js", "Node.js", "Express", "MongoDB", "Gemini API", "Razorpay"],
      github: "https://github.com/AbhiMahto",
      live: "https://github.com/AbhiMahto"
    },
    {
      title: "Rockguard AI Hazard Dashboard",
      category: "AI & Machine Learning",
      badge: "Predictive ML Safety",
      description: "Predictive rockfall risk assessment dashboard built for mining hazard safety. Ingests real-time sensor data, communicates with ML risk prediction API, and generates instant emergency action plans.",
      techStack: ["React.js", "Python", "Machine Learning", "FastAPI", "Tailwind CSS"],
      github: "https://github.com/AbhiMahto",
      live: "https://github.com/AbhiMahto"
    },
    {
      title: "Samadhan App & DARPAN Modernization",
      category: "Enterprise & Research",
      badge: "Tata Steel Internship",
      description: "Enterprise web application built during SDE internship at Tata Steel. Modernized legacy DARPAN application stack and engineered end-to-end digital grievance resolution workflows.",
      techStack: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs", "Node.js"],
      github: "https://github.com/AbhiMahto",
      live: "https://github.com/AbhiMahto"
    },
    {
      title: "Underground Coal Gasification (UCG) Simulator",
      category: "Enterprise & Research",
      badge: "CSIR-CIMFR Research",
      description: "Computational thermodynamic and kinetic equilibrium modeling suite built for underground coal gasification (UCG) during research internship at CSIR-CIMFR Dhanbad.",
      techStack: ["Python", "Cantera", "NumPy", "Pandas", "Matplotlib", "SciPy"],
      github: "https://github.com/AbhiMahto",
      live: "https://github.com/AbhiMahto"
    },
    {
      title: "Executive Developer Portfolio",
      category: "Full Stack Web",
      badge: "Personal Web Suite",
      description: "Modern, responsive personal portfolio built with React and Tailwind CSS. Features GSAP text outline drawing, live LeetCode/GFG API stats, tabbed work experience proof lightboxes, and dark cyber aesthetics.",
      techStack: ["React.js", "Tailwind CSS", "GSAP", "Vite", "AOS"],
      github: "https://github.com/AbhiMahto",
      live: "https://github.com/AbhiMahto"
    }
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projectList
      : projectList.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#0a0a0a]">
      <section id="projects" className="py-14 sm:py-16 px-4 md:px-8 max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-50 underline underline-offset-8 decoration-pink-400">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-2.5 text-xs sm:text-sm max-w-md mx-auto font-medium">
            Software engineering, AI/ML models, and full-stack web applications.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex justify-center items-center gap-2 flex-wrap mb-8 sm:mb-10" data-aos="fade-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-pink-600 text-white shadow-md shadow-pink-600/30 border border-pink-500"
                  : "bg-[#151515] text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-[#151515] p-5 rounded-xl border border-gray-800 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1.5 hover:border-pink-500 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)] relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 60}
            >
              {/* Top Accent Hover Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Badge & Category Header */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="bg-pink-500/10 border border-pink-500/30 text-pink-400 px-2.5 py-0.5 rounded-full text-[10px] font-semibold">
                  {project.badge}
                </span>
                <FolderGit2 size={15} className="text-gray-500 group-hover:text-pink-400 transition-colors" />
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-xs text-gray-300 leading-relaxed font-medium mb-4 flex-grow">
                {project.description}
              </p>
              
              {/* Tech Stack Pills */}
              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.techStack.map((tech, techIdx) => (
                  <span 
                    key={techIdx} 
                    className="bg-[#0a0a0c] border border-gray-800 text-gray-300 px-2.5 py-0.5 rounded-md text-[11px] font-semibold group-hover:border-gray-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links Footer */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-800/80 mt-auto">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors font-bold z-10"
                >
                  <Github size={14} /> Repository
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-pink-400 hover:text-pink-300 transition-colors font-bold ml-auto z-10"
                >
                  <ExternalLink size={14} /> View Demo
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
