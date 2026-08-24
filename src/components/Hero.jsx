import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';
import './ui/Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
  // Initial default fallback stats so the portfolio never shows blank text
  const [lcStats, setLcStats] = useState("150+");
  const [gfgStats, setGfgStats] = useState("200+");

  // Update these usernames with your exact profile handles
  const leetcodeUsername = "AbhiMahto"; 
  const gfgUsername = "abhinamkumar2222"; 

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    // 1. Fetch live LeetCode Stats dynamically
    const fetchLeetCode = async () => {
      try {
        const res = await fetch(`https://alfa-leetcode-api.onrender.com/${leetcodeUsername}/solved`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.solvedProblem !== undefined && data.solvedProblem > 0) {
            setLcStats(data.solvedProblem.toString());
          }
        }
      } catch (err) {
        console.warn("LeetCode primary API sleeping or unreachable, using fallback display count.");
      }
    };

    // 2. Fetch live GeeksForGeeks Stats dynamically
    const fetchGFG = async () => {
      try {
        const res = await fetch(`https://geeks-for-geeks-api-production.up.railway.app/${gfgUsername}`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.info && data.info.totalProblemsSolved) {
            setGfgStats(data.info.totalProblemsSolved.toString());
          }
        }
      } catch (err) {
        console.warn("GFG primary API unreachable, using fallback display count.");
      }
    };

    fetchLeetCode();
    fetchGFG();
  }, []);

  return (
    <section id="hero" className="min-h-[90vh] flex items-center py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Column - Introduction */}
          <div className="space-y-4 sm:space-y-5 md:pr-10">
            {/* Name and Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="text-pink-600">Abhinam Kumar</span>
            </h1>

            {/* Subtitle */}
            <p className="typing text-white text-base sm:text-xl font-mono font-semibold">
              Aspiring Software Engineer
            </p>

            {/* Short description */}
            <p className="text-gray-300 text-sm sm:text-lg leading-relaxed">
              Dedicated learner and problem solver passionate about software engineering, AI/ML models, and web applications.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center space-x-3 sm:space-x-4 pt-1">
              <a
                href="https://github.com/AbhiMahto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-500 transition-colors p-2 bg-gray-900 rounded-lg border border-gray-800"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/abhinam-mahato"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-500 transition-colors p-2 bg-gray-900 rounded-lg border border-gray-800"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:abhinamkumar2222@gmail.com"
                className="text-gray-300 hover:text-pink-500 transition-colors p-2 bg-gray-900 rounded-lg border border-gray-800"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap sm:flex-row gap-3 pt-2 sm:pt-4">
              <a 
                href="#projects" 
                className="bg-pink-600 hover:bg-pink-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-pink-600/30 cursor-pointer text-sm sm:text-base"
              >
                <span>View Projects</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a 
                href="#contact"
                className="border-2 border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition duration-300 cursor-pointer text-sm sm:text-base"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Column - Info Card */}
          <div className="w-full" data-aos="fade-up">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-200 space-y-5 text-black">
              {/* Education Section */}
              <div>
                <h2 className="text-xs text-blue-600 uppercase font-extrabold mb-2 tracking-wider">
                  Education
                </h2>
                <div className="space-y-0.5">
                  <h3 className="font-bold text-gray-900 text-base">
                    B.Tech in Computer Science and Engineering
                  </h3>
                  <p className="text-gray-700 text-sm font-medium">R.V.S. College of Engineering & Technology (2023–2027)</p>
                </div>
              </div>

              {/* Technical Skills Section */}
              <div>
                <h2 className="text-xs text-blue-600 uppercase font-extrabold mb-2 tracking-wider">
                  Technical Skills
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {["MERN Stack", "Python", "Java", "C++", "AI/ML", "GitHub", "DSA", "Tailwind CSS", "Firebase"].map((skill) => (
                    <span 
                      key={skill}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold border border-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Coding Profiles Section */}
              <div>
                <h2 className="text-xs text-blue-600 uppercase font-extrabold mb-2 tracking-wider">
                  Coding Profiles
                </h2>
                <div className="space-y-1.5">
                  <a 
                    href={`https://leetcode.com/u/${leetcodeUsername}/`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center group cursor-pointer text-sm font-semibold"
                  >
                    <span className="text-gray-900 group-hover:text-pink-600 transition-colors mr-2">LeetCode:</span>
                    <span className="text-pink-600 group-hover:text-pink-700 font-bold transition-colors">{lcStats} Solved</span>
                    <ExternalLink size={13} className="ml-1 text-gray-400 group-hover:text-pink-600" />
                  </a>
                  
                  <a 
                    href={`https://www.geeksforgeeks.org/user/${gfgUsername}/`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center group cursor-pointer text-sm font-semibold"
                  >
                    <span className="text-gray-900 group-hover:text-pink-600 transition-colors mr-2">GeeksforGeeks:</span>
                    <span className="text-pink-600 group-hover:text-pink-700 font-bold transition-colors">{gfgStats} Solved</span>
                    <ExternalLink size={13} className="ml-1 text-gray-400 group-hover:text-pink-600" />
                  </a>
                </div>
              </div>

              {/* Contact Quick Link Section */}
              <div>
                <h2 className="text-xs text-blue-600 uppercase font-extrabold mb-2 tracking-wider">
                  Direct Contact
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-gray-800 font-medium">
                  <a href="tel:+919470507693" className="hover:text-pink-600 flex items-center gap-1">
                    <Phone size={14} className="text-pink-500" /> +91 9470507693
                  </a>
                  <a href="mailto:abhinamkumar2222@gmail.com" className="hover:text-pink-600 flex items-center gap-1">
                    <Mail size={14} className="text-pink-500" /> abhinamkumar2222@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
