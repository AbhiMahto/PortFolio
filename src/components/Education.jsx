import React from "react";
import { CalendarDays, GraduationCap, School } from "lucide-react";

const educationItems = [
  {
    title: "B.Tech in Computer Science and Engineering",
    subtitle: "R.V.S. College of Engineering and Technology (JUT Ranchi)",
    date: "2023 – 2027",
    description: "Pursuing Bachelor of Technology in CSE with core focus on Software Development, Data Structures & Algorithms, Database Systems, and AI/ML.",
    cgpa: "7.6",
    badge: "Undergraduate",
  },
  {
    title: "Higher Secondary Education (12th)",
    subtitle: "DAV Public School Koyla Nagar, Dhanbad",
    date: "2020 – 2022",
    description: "Completed Higher Secondary education with specialization in Science stream (Physics, Chemistry, Mathematics).",
    percentage: "80.4%",
    badge: "CBSE Board",
  },
  {
    title: "Secondary Education (10th)",
    subtitle: "DAV Public School Koyla Nagar, Dhanbad",
    date: "2019 – 2020",
    description: "Completed Secondary School education with distinction.",
    percentage: "87%",
    badge: "CBSE Board",
  }
];

function Education() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-black text-white py-16 px-4 md:px-8 w-full" id="education">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-50 underline decoration-pink-400 underline-offset-8">
            Academic Education
          </h2>
          <p className="text-gray-400 mt-2.5 text-xs sm:text-sm max-w-md mx-auto font-medium">
            Educational credentials, academic milestones, and board qualifications.
          </p>
        </div>

        {/* Responsive Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationItems.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              className="bg-[#121216] border border-gray-800 p-5 rounded-xl flex flex-col justify-between hover:border-pink-500/50 transition-colors shadow-xl relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-cyan-400"></div>

              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="bg-pink-500/10 border border-pink-500/30 text-pink-400 px-2.5 py-0.5 rounded-full text-[10px] font-semibold">
                    {item.badge}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1 font-semibold">
                    <CalendarDays size={12} className="text-cyan-400" /> {item.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-pink-400 mb-3 flex items-center gap-1">
                  <GraduationCap size={14} /> {item.subtitle}
                </p>

                <p className="text-xs text-gray-300 leading-relaxed font-medium mb-3">
                  {item.description}
                </p>
              </div>

              {(item.cgpa || item.percentage) && (
                <div className="pt-3 border-t border-gray-800/80 mt-2">
                  <span className="text-xs font-bold text-cyan-400">
                    {item.cgpa ? `CGPA: ${item.cgpa}` : `Score: ${item.percentage}`}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
