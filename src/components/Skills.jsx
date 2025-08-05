import React, { useEffect, useRef } from "react";
import { Code2, Terminal, Database, GitBranch, Palette , Target ,MessageCircle, Settings } from "lucide-react";

const skills = [
  {
    name: "Frontend",
    icon: <Code2  size={24} className="inline-block w-5 h-5 text-white mr-2" />,
    languages: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
    level: 75,
  },
  {
    name: "Programming Language",
    icon: <Terminal size={24} className="inline-block w-5 h-5 text-white mr-2" />,
    languages: ["C/C++", "Java", "JavaScript", "SQL"],
    level: 70,
  },
  {
    name: "Backend",
    icon: <Database size={24} className="inline-block w-5 h-5 text-white mr-2" />,
    languages: ["Node.js", "Express.js"],
    level: 20,
  },
  {
    name: "Version Control",
    icon: <GitBranch  size={24} className="inline-block w-5 h-5 text-white mr-2" />,
    languages: ["Git", "GitHub"],
    level: 60,
  },

  {
    name: "Web Design",
    icon: <Palette size={24} className="inline-block w-5 h-5 text-white mr-2" />,
    languages: ["Canva","Adobe Photoshop"],
    level: 70,
  },
  {
    name: "Problem Solving",
    icon: <Target size={24} className="inline-block w-5 h-5 text-white mr-2" />,
    languages: ["Data Structures", "Algorithms", "Debugging", "Critical Thinking"],
    level: 82,

  },

    {
    name: "Team Collaboration",
    icon: <MessageCircle size={24} className="inline-block w-5 h-5 text-white mr-2" />,
    languages: ["Team Leadership", "Presentations", "Documentation", "Peer Programming"],
    level: 75,

  },

   {
    name: "Development Tools",
    icon: <Settings size={24} className="text-white mr-2" />,
    languages: ["VS Code", "IntelliJ IDEA", "npm", "Vite"],
    level: 72,
  },












  
];

function Skills() {
  // Animate progress bars using refs

  const progressRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      progressRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          const skill = skills[index];
          ref.style.width = `${skill.level}%`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="skills"
      className="bg-gradient-to-b from-white to-purple-50 py-18 px-4 md:px-10 w-full"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 underline decoration-purple-400 underline-offset-8">
          Skills
        </h2>
        <p className="text-gray-600 mt-2 text-sm">
          Technologies I’ve worked with and am learning
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {skills.map((skill, index) => (
          <div
            key={index}
            data-aos="fade-up-right"
            className="group bg-[#222831] border border-purple-200 p-6 rounded-lg shadow-md hover:shadow-purple-300 transition-shadow duration-300 min-h-[220px] w-full relative overflow-hidden"
          >
            {/* Title with Icon */}
            <h3 className="text-lg font-semibold text-white text-center flex items-center justify-center">
              {skill.icon}
              {skill.name}
            </h3>

            {/* Progress Bar */}
            {skill.level && (
              <div className="mt-4">
                <div className="w-full bg-purple-100 rounded-full h-3 overflow-hidden">
                  <div
                    ref={(el) => (progressRefs.current[index] = el)}
                    className="bg-purple-500 h-3 rounded-full transition-all duration-1000 ease-in-out"
                    style={{ width: "0%" }}
                  ></div>
                </div>
                <p className="text-xs text-right text-white mt-1 font-medium">
                  {skill.level}%
                </p>
              </div>
            )}

            {/* Capsules */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {skill.languages.map((lang, i) => (
                <span
                  key={i}
                  title={`Skill: ${lang}`}
                  className="inline-block bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full transition-all duration-300 hover:bg-purple-500 hover:text-white"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
