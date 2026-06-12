import React from "react";
import { 
  Code2, 
  Terminal, 
  Database, 
  GitBranch, 
  Palette, 
  Target, 
  MessageCircle, 
  Settings 
} from "lucide-react";

const skills = [
  {
    name: "Frontend",
    icon: <Code2 size={22} />,
    languages: [
      { name: "HTML", img: "https://skillicons.dev/icons?i=html" },
      { name: "CSS", img: "https://skillicons.dev/icons?i=css" },
      { name: "JavaScript", img: "https://skillicons.dev/icons?i=js" },
      { name: "React.js", img: "https://skillicons.dev/icons?i=react" },
      { name: "Tailwind CSS", img: "https://skillicons.dev/icons?i=tailwind" },
      { name: "Bootstrap", img: "https://skillicons.dev/icons?i=bootstrap" },
    ],
  },
  {
    name: "Backend",
    icon: <Database size={22} />,
    languages: [
      { name: "Node.js", img: "https://skillicons.dev/icons?i=nodejs" },
      { name: "Express.js", img: "https://skillicons.dev/icons?i=express" },
    ],
  },
  {
    name: "Programming",
    icon: <Terminal size={22} />,
    languages: [
      { name: "C/C++", img: "https://skillicons.dev/icons?i=cpp" },
      { name: "Java", img: "https://skillicons.dev/icons?i=java" },
      { name: "SQL", img: "https://skillicons.dev/icons?i=mysql" },
    ],
  },
  {
    name: "Version Control",
    icon: <GitBranch size={22} />,
    languages: [
      { name: "Git", img: "https://skillicons.dev/icons?i=git" },
      { name: "GitHub", img: "https://skillicons.dev/icons?i=github" },
      { name: "GitLab", img: "https://skillicons.dev/icons?i=gitlab" },
    ],
  },
  {
    name: "Web Design",
    icon: <Palette size={22} />,
    languages: [
      { name: "Photoshop", img: "https://skillicons.dev/icons?i=ps" },
      { name: "Figma", img: "https://skillicons.dev/icons?i=figma" },
    ],
  },
  {
    name: "Dev Tools",
    icon: <Settings size={22} />,
    languages: [
      { name: "VS Code", img: "https://skillicons.dev/icons?i=vscode" },
      { name: "IntelliJ", img: "https://skillicons.dev/icons?i=idea" },
      { name: "Vite", img: "https://skillicons.dev/icons?i=vite" },
      { name: "Postman", img: "https://skillicons.dev/icons?i=postman" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-[#121212] py-20 px-4 md:px-10 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Simple Heading */}
        <div className="mb-14 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white underline decoration-pink-500 underline-offset-8">
            Skills & Tools
          </h2>
        </div>

        {/* Minimal Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="bg-[#1a1a1a] border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="text-pink-500">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-100">
                  {skill.name}
                </h3>
              </div>

              {/* Skill Icons */}
              <div className="flex flex-wrap gap-3 mt-2">
                {skill.languages.map((lang, idx) => (
                  lang.img ? (
                    <img 
                      key={idx}
                      src={lang.img} 
                      alt={lang.name} 
                      title={lang.name}
                      className="w-10 h-10 object-contain hover:scale-110 transition-transform cursor-pointer drop-shadow-md" 
                    />
                  ) : (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-black border border-gray-800 text-gray-300 text-xs font-medium rounded-md"
                    >
                      {lang.name}
                    </span>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Skills;
