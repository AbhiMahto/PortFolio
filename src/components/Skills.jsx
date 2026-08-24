import React from "react";
import { 
  Code2, 
  Terminal, 
  Database, 
  GitBranch, 
  Palette, 
  Settings 
} from "lucide-react";

const skills = [
  {
    name: "Frontend",
    icon: <Code2 size={20} />,
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
    name: "Backend & DB",
    icon: <Database size={20} />,
    languages: [
      { name: "Node.js", img: "https://skillicons.dev/icons?i=nodejs" },
      { name: "Express.js", img: "https://skillicons.dev/icons?i=express" },
      { name: "SQL / MySQL", img: "https://skillicons.dev/icons?i=mysql" },
      { name: "MongoDB", img: "https://skillicons.dev/icons?i=mongodb" },
      { name: "Firebase", img: "https://skillicons.dev/icons?i=firebase" },
    ],
  },
  {
    name: "Programming",
    icon: <Terminal size={20} />,
    languages: [
      { name: "C/C++", img: "https://skillicons.dev/icons?i=cpp" },
      { name: "Python", img: "https://skillicons.dev/icons?i=py" },
      { name: "Java", img: "https://skillicons.dev/icons?i=java" },
    ],
  },
  {
    name: "Version Control",
    icon: <GitBranch size={20} />,
    languages: [
      { name: "Git", img: "https://skillicons.dev/icons?i=git" },
      { name: "GitHub", img: "https://skillicons.dev/icons?i=github" },
      { name: "GitLab", img: "https://skillicons.dev/icons?i=gitlab" },
    ],
  },
  {
    name: "UI Design",
    icon: <Palette size={20} />,
    languages: [
      { name: "Figma", img: "https://skillicons.dev/icons?i=figma" },
      { name: "Photoshop", img: "https://skillicons.dev/icons?i=ps" },
    ],
  },
  {
    name: "Dev Tools",
    icon: <Settings size={20} />,
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
    <section id="skills" className="py-20 px-4 md:px-8 bg-[#121212] w-full">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <div className="mb-10 text-center" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-50 underline decoration-pink-500 underline-offset-8">
            Skills & Tools
          </h2>
          <p className="text-gray-400 mt-2.5 text-xs sm:text-sm max-w-md mx-auto font-medium">
            Core technical languages, frameworks, databases, and developer tooling.
          </p>
        </div>

        {/* Responsive Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="bg-[#1a1a1a] border border-gray-800 p-5 rounded-xl hover:border-pink-500/50 transition-colors shadow-lg"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 bg-pink-500/10 text-pink-400 rounded-lg shrink-0">
                  {skill.icon}
                </div>
                <h3 className="text-base font-bold text-gray-100">
                  {skill.name}
                </h3>
              </div>

              {/* Skill Icons */}
              <div className="flex flex-wrap gap-2.5">
                {skill.languages.map((lang, idx) => (
                  lang.img ? (
                    <div key={idx} className="flex items-center gap-1.5 bg-[#0a0a0c] border border-gray-800/80 px-2.5 py-1 rounded-lg hover:border-gray-700 transition-colors">
                      <img 
                        src={lang.img} 
                        alt={lang.name} 
                        title={lang.name}
                        className="w-5 h-5 object-contain" 
                      />
                      <span className="text-xs font-semibold text-gray-300">{lang.name}</span>
                    </div>
                  ) : (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-[#0a0a0c] border border-gray-800 text-gray-300 text-xs font-semibold rounded-lg"
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
