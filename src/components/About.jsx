import React from "react";
import photo from "./photo2.jpeg";
import { Briefcase, Code, Sparkles, CheckCircle2, Trophy, Star, Heart, Rocket } from "lucide-react";

function About() {
  const highlights = [
    {
      icon: Briefcase,
      title: "Internships",
      detail: "Tata Steel (SDE), CSIR-CIMFR (Research) & AutoCluster (Web)",
      color: "text-pink-400 border-pink-500/30 bg-pink-500/10"
    },
    {
      icon: Trophy,
      title: "Ranchi Hacks '26",
      detail: "Selected in Top 30 Team out of 2000+ Participants",
      color: "text-amber-400 border-amber-500/30 bg-amber-500/10"
    },
    {
      icon: Star,
      title: "Amazon ML School",
      detail: "Shortlisted for Amazon ML Summer School 2026",
      color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10"
    },
    {
      icon: Code,
      title: "Competitive Programmer",
      detail: "Active Solver on GeeksforGeeks & LeetCode",
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-[#0a0a0a] w-full">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-50 underline underline-offset-8 decoration-pink-400">
            About Me
          </h2>
          <p className="text-gray-400 mt-2.5 text-xs sm:text-sm max-w-md mx-auto font-medium">
            My Journey, Passion for Software Engineering & Research
          </p>
        </div>

        {/* Main Content Grid: Bio on Left, Photo on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Personal Human-Centric Bio */}
          <div className="lg:col-span-7 space-y-4" data-aos="fade-right">
            <div className="bg-[#151515] p-5 sm:p-6 rounded-xl border border-gray-800 space-y-3.5 shadow-xl relative overflow-hidden">
              {/* Top accent glow line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-cyan-400"></div>

              <p className="text-xs sm:text-sm leading-relaxed text-gray-300 font-medium">
                Hi, I'm <strong className="text-white font-bold">Abhinam Kumar Mahato</strong>! Ever since I began studying Computer Science & Engineering at <strong className="text-pink-400 font-semibold">R.V.S. College of Engineering and Technology</strong>, I've had an immense curiosity for building software that makes life easier and solves real-world challenges.
              </p>

              <p className="text-xs sm:text-sm leading-relaxed text-gray-300 font-medium">
                My passion has taken me from engineering enterprise tools like the <strong className="text-white">Samadhan App & DARPAN modernization at Tata Steel Limited</strong> as an SDE Intern, to researching Python computational modeling for Underground Coal Gasification at <strong className="text-white">CSIR–CIMFR</strong>. I love turning complex algorithmic concepts into clean, accessible web applications.
              </p>

              <p className="text-xs sm:text-sm leading-relaxed text-gray-300 font-medium">
                When I'm not writing code in <span className="text-pink-400 font-semibold">C++, Python, JavaScript, or React</span>, you'll find me solving problem sets on <span className="text-pink-400 font-semibold">LeetCode and GeeksforGeeks</span>, competing in national hackathons, or attending developer meetups like Google I/O Extended.
              </p>

              {/* Personal Highlights List */}
              <div className="pt-3 border-t border-gray-800/80">
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Key Milestones & Achievements
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300 font-medium">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-pink-500 shrink-0" />
                    <span>Top 30 Team in Ranchi Hacks 2026</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-pink-500 shrink-0" />
                    <span>Amazon ML Summer School 2026</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-pink-500 shrink-0" />
                    <span>Top 5 in Internal College Hackathon</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-pink-500 shrink-0" />
                    <span>Attended Google I/O Extended 2026</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Highlight Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((h, idx) => {
                const Icon = h.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#121216] border border-gray-800/80 p-3 rounded-lg flex items-start gap-2.5 hover:border-gray-700 transition-colors"
                  >
                    <div className={`p-2 rounded-md border shrink-0 ${h.color}`}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{h.title}</h4>
                      <p className="text-[11px] text-gray-400 mt-0.5 leading-tight">{h.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Profile Photo Frame */}
          <div className="lg:col-span-5 flex justify-center" data-aos="fade-left">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-2xl blur-md opacity-40 group-hover:opacity-75 transition duration-500"></div>
              
              <img
                src={photo}
                alt="Abhinam Kumar Mahato Profile"
                className="relative w-[250px] sm:w-[280px] h-[320px] sm:h-[360px] object-cover rounded-2xl shadow-xl border border-gray-800"
              />

              {/* Floating Badge Overlay */}
              <div className="absolute -bottom-4 left-1 sm:-left-3 bg-[#151515] border border-gray-800 p-2.5 sm:p-3 rounded-xl shadow-xl flex items-center gap-2.5 backdrop-blur-md">
                <div className="p-2 bg-pink-500/20 text-pink-400 rounded-lg">
                  <Sparkles size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Education</p>
                  <p className="text-xs font-bold text-white">B.Tech CSE</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
