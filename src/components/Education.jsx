import React from "react";
import { CalendarDays, GraduationCap, Briefcase } from "lucide-react";

const timelineItems = [
  {
    title: "Web Developer Intern",
    subtitle: "AutoCluster-Adityapur",
    date: "June 2025 - July 2025",
    description:
      "Learn to the develop and optimize dynamic web applications. Gained hands-on experience enhancing user experience and improving website performance.",
    tags: ["Web Development", "JavaScript", "Optimization", "User Experience"],
  },
  {
    title: "B.Tech in Computer Science and Engineering",
    subtitle: "RVSCET, Jamshedpur",
    date: "2023-2027",
    description:
      "Studying Computer Science with a focus on programming, algorithms, and software development.",
    cgpa: "7.86/10",
    type: "education",
  },
  {
    title: "Learn Frontend Tools ",
    subtitle: ["Udemy, ", "FreeCodeCamp "],
    date: "2023",
    description:
      "",
         tags: ["HTML","CSS", "Js", "Reacts","Frameworks"],
  },

  {
    title: "Higher Secondary Education (12th)",
    subtitle: "DAV Public School Koyla Nagar Dhanbad",
    date: "2022",
    description:
      "Completed higher secondary education with excellence in science stream.",
    percentage: "80.8%",
  },
];

function Education() {
  return (
    <section className="py-18 px-4 bg-black text-white" id="experience">
      <h2 className="text-4xl font-bold text-amber-50 text-center mb-10 underline decoration-cyan-400 underline-offset-8">
        Experience & Education
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
    
        {timelineItems.map((item, idx) => (
          <div key={idx} className="relative pl-8 border-l-2 border-cyan-400">
            
            {/* Dot */}
            <div className="absolute -left-2 top-2 w-3 h-3 bg-pink-500 rounded-full z-10"></div>
                    
            {/* Card */}
            <div className="bg-white text-black p-6 rounded-xl shadow-lg hover:shadow-[#f0539f] ">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.subtitle}</p>
                  <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                    <CalendarDays size={16} />
                    {item.date}
                  </p>
                </div>
                {item.badge && (
                  <span className="bg-cyan-300 text-sm font-semibold text-black px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>

              <p className="mt-4 text-gray-800">{item.description}</p>

              {/* Extra Info */}
              {item.cgpa && (
                <p className="text-sm font-semibold mt-2">CGPA: {item.cgpa}</p>
              )}
              {item.percentage && (
                <p className="text-sm font-semibold mt-2">
                  Percentage: {item.percentage}
                </p>
              )}

              {/* Tags */}
              {item.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
