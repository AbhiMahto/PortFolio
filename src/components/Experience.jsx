import React, { useState } from "react";
import { Briefcase, CalendarDays, MapPin, ExternalLink, X, CheckCircle2, FlaskConical, Building2, Code2 } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "CSIR–Central Institute of Mining and Fuel Research",
    shortName: "CSIR-CIMFR",
    role: "Project Intern (Research)",
    duration: "July 2026 – Present",
    location: "Dhanbad, Jharkhand",
    type: "Research Internship",
    companyLogo: "/experince/csir-logo.jpg",
    icon: FlaskConical,
    logoBg: "bg-white",
    bullets: [
      "Selected for a 2-month research internship building computational models for Underground Coal Gasification (UCG) under a CSIR research project.",
      "Developing Python-based computational models for UCG kinetics, thermodynamic equilibrium, and gasification processes using Cantera.",
      "Performing data analysis and visualization on simulation outputs using NumPy, Pandas, and Matplotlib."
    ],
    skills: ["Python", "Cantera", "NumPy", "Pandas", "Matplotlib", "Data Analysis", "Research Modeling"],
    images: [
      { src: "/experince/csir-cimfr pic.jpeg", label: "Research Lab & Project" },
      { src: "/experince/csir-cimfr2.jpeg", label: "CSIR-CIMFR Campus" }
    ]
  },
  {
    id: 2,
    company: "Tata Steel Limited",
    shortName: "Tata Steel",
    role: "SDE Intern",
    duration: "May 2026 – July 2026",
    location: "Jamshedpur, Jharkhand",
    type: "Software Internship",
    companyLogo: "/experince/tata-logo.jpg",
    icon: Building2,
    logoBg: "bg-white",
    bullets: [
      "Built and shipped the Samadhan App end-to-end, connecting the React front end to backend APIs used by internal Tata Steel staff.",
      "Modernized the DARPAN enterprise application by migrating legacy Bootstrap, jQuery, and AdminLTE components to a current React & Tailwind stack.",
      "Refactored legacy front-end modules while maintaining compatibility with the existing ASP.NET backend, avoiding breaking changes."
    ],
    skills: ["React.js", "Tailwind CSS", "JavaScript", "ASP.NET", "REST APIs", "Enterprise UI"],
    images: [
      { src: "/experince/tata pic.jpeg", label: "Tata Steel Presentation" },
      { src: "/experince/tata.jpeg", label: "Tata Steel Completion" }
    ]
  },
  {
    id: 3,
    company: "AutoCluster Adityapur",
    shortName: "AutoCluster",
    role: "Front-End Developer Intern",
    duration: "June 2025 – July 2025",
    location: "Adityapur, Jamshedpur",
    type: "Web Internship",
    companyLogo: "/experince/autocluster.jpeg",
    icon: Code2,
    logoBg: "bg-gradient-to-br from-cyan-500 to-blue-700",
    bullets: [
      "Completely revamped UI using React.js and Tailwind CSS, integrated core APIs, and improved user engagement by 15%.",
      "Learned to develop and optimize dynamic web applications, enhancing overall site performance and user experience."
    ],
    skills: ["React.js", "Tailwind CSS", "JavaScript", "API Integration", "UI/UX Optimization"],
    images: [
      { src: "/experince/autocluster.jpeg", label: "AutoCluster Certificate" }
    ]
  }
];

function Experience() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-[#0a0a0a] w-full">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading matching Projects section */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-50 underline underline-offset-8 decoration-pink-400">
            Work Experience
          </h2>
        </div>

        {/* Tabbed / Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Company Selector (Desktop Vertical / Mobile Horizontal) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2.5 overflow-x-auto pb-2 lg:pb-0" data-aos="fade-right">
            {experiences.map((exp, idx) => {
              const IconComp = exp.icon;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-300 shrink-0 w-60 lg:w-full flex items-center gap-3 cursor-pointer ${
                    activeTab === idx
                      ? "bg-[#151515] border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.15)] translate-x-0 lg:translate-x-1.5"
                      : "bg-[#111111] border-gray-800/80 hover:border-gray-700 text-gray-400 hover:text-white"
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-white p-1 flex items-center justify-center shadow-md shrink-0 border border-gray-700 overflow-hidden">
                    {exp.companyLogo ? (
                      <img src={exp.companyLogo} alt={exp.shortName} className="w-full h-full object-contain" />
                    ) : (
                      <IconComp size={20} className="text-pink-500" />
                    )}
                  </div>
                  <div className="overflow-hidden">
                    <h3 className={`font-bold text-sm truncate ${activeTab === idx ? "text-white" : "text-gray-300"}`}>
                      {exp.role}
                    </h3>
                    <p className="text-xs text-pink-400 font-semibold truncate mt-0.5">{exp.company}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5 flex items-center gap-1">
                      <CalendarDays size={11} /> {exp.duration}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Selected Experience Detail Card (Screen-Fit Proportionate) */}
          <div className="lg:col-span-8" data-aos="fade-left">
            {(() => {
              const exp = experiences[activeTab];
              const IconComp = exp.icon;
              return (
                <div className="group bg-[#151515] p-5 sm:p-6 rounded-xl border border-gray-800 relative overflow-hidden shadow-xl transition-all duration-300 hover:border-pink-500/60">
                  {/* Top accent glow effect */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400"></div>

                  {/* Header Title & Meta with Company Logo Block */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-800/80">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-lg shrink-0 border border-gray-700 overflow-hidden mt-1">
                        {exp.companyLogo ? (
                          <img src={exp.companyLogo} alt={exp.shortName} className="w-full h-full object-contain" />
                        ) : (
                          <IconComp size={24} className="text-pink-500" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="bg-pink-500/10 border border-pink-500/30 text-pink-400 px-2.5 py-0.5 rounded-full text-[11px] font-semibold">
                            {exp.type}
                          </span>
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <MapPin size={12} className="text-cyan-400" /> {exp.location}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-pink-400 transition-colors">
                          {exp.role}
                        </h3>
                        <h4 className="text-sm font-semibold text-cyan-400 flex items-center gap-1.5 mt-0.5">
                          <Briefcase size={15} /> {exp.company}
                        </h4>
                      </div>
                    </div>

                    <div className="text-xs font-semibold bg-black/60 border border-gray-700 text-gray-300 px-2.5 py-1 rounded-lg flex items-center gap-1.5 self-start sm:self-auto shrink-0">
                      <CalendarDays size={13} className="text-pink-500" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Achievements List */}
                  <div className="py-4 border-b border-gray-800/80">
                    <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                      Key Contributions & Impact
                    </h5>
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300 leading-relaxed font-medium">
                          <CheckCircle2 size={15} className="text-pink-500 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-4">
                    <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Technologies & Skills Used
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="bg-black/50 border border-gray-700 text-pink-300 px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm hover:border-pink-500/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Experience Photos Gallery (Horizontal Compact Bar) */}
                  {exp.images && exp.images.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-gray-800/80">
                      <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                        Experience Proof & Certificates
                      </h5>
                      <div className="flex items-center gap-3 overflow-x-auto pb-1">
                        {exp.images.map((imgObj, imgIdx) => (
                          <div
                            key={imgIdx}
                            onClick={() => setSelectedImg(imgObj.src)}
                            className="relative group/img cursor-pointer shrink-0 overflow-hidden rounded-lg border border-gray-800 hover:border-pink-500 transition-all duration-300"
                          >
                            <img
                              src={imgObj.src}
                              alt={imgObj.label}
                              className="w-32 h-20 object-cover transition-transform duration-500 group-hover/img:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover/img:opacity-100 transition-opacity p-2 flex flex-col justify-end">
                              <p className="text-[10px] font-semibold text-white truncate">{imgObj.label}</p>
                              <span className="text-[9px] text-pink-400 flex items-center gap-0.5 font-medium mt-0.5">
                                Expand <ExternalLink size={9} />
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        </div>
      </div>

      {/* Image Modal Lightbox */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-3xl w-full max-h-[90vh] flex items-center justify-center">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute -top-12 right-0 text-white bg-gray-800 hover:bg-pink-600 p-2 rounded-full transition-colors cursor-pointer"
              aria-label="Close image"
            >
              <X size={22} />
            </button>
            <img
              src={selectedImg}
              alt="Experience detail full view"
              className="max-w-full max-h-[80vh] object-contain rounded-xl border border-gray-800 shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Experience;
