import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './ui/Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';






function Hero() {
  const [lcStats, setLcStats] = useState("80+");
  const [gfgStats, setGfgStats] = useState("60+");

  // NOTE: Update these usernames with your actual LeetCode and GFG profile user handles
  const leetcodeUsername = "AbhiMahto"; 
  const gfgUsername = "abhinamkumar2222"; 

  useEffect(() => {
    AOS.init({
      duration: 800,  // animation duration
      once: true,     // animation happens only once
    });

    // Fetch live LeetCode Stats
    fetch(`https://leetcode-stats-api.herokuapp.com/${leetcodeUsername}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success" && data.totalSolved) {
          setLcStats(data.totalSolved.toString());
        }
      })
      .catch((err) => console.error("Error fetching LeetCode stats:", err));

    // Fetch live GeeksForGeeks Stats (using a community API Wrapper)
    fetch(`https://geeks-for-geeks-api-production.up.railway.app/${gfgUsername}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.info && data.info.totalProblemsSolved) {
          setGfgStats(data.info.totalProblemsSolved.toString());
        }
      })
      .catch((err) => console.error("Error fetching GFG stats:", err));
  }, []);
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-black">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          
          {/* Left Column - Introduction */}
          <div className="space-y-4 md:pr-10">


            
            {/* Name and Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              <span className="block">Hi, I'm</span>
              <span className="text-pink-600">Abhinam Kumar</span>
            </h1>

            {/* Typing animation */}
            <p className="typing text-white text-xl font-mono">
                   Aspiring Software Engineer
</p>


            {/* Short description */}
            <p className="text-white text-lg">
              A dedicated learner and problem solver with a passion for building impactful software solutions.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/AbhiMahto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/abhinam-mahato"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:abhinamkumar2222@gmail.com"
                className="text-white hover:text-pink-500 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-4">
              <a 
                href="#projects" 
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span className="relative">
                  View Projects
                  <sub className="absolute -bottom-3 left-5 text-xs text-amber-200 "></sub>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
                className="border-2 border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white px-6 py-3 rounded-lg font-medium transition duration-300 cursor-pointer"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Column - Info Card */}
          <div className="w-full"data-aos="fade-up"
 >
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 space-y-5 text-black animate-fade-in">

              {/* Education Section */}
              <div>
                <h2 className="text-sm text-blue-500 uppercase font-semibold mb-3 tracking-wider">
                  Education
                </h2>
                <div className="space-y-0">
                  <h3 className="font-semibold text-gray-900">
                    B.Tech in Computer Science and Engineering
                  </h3>
                  <p className="text-gray-700">JUT Ranchi (2023–2027)</p>
                </div>
              </div>

              {/* Technical Skills Section */}
              <div>
                <h2 className="text-sm text-blue-500 uppercase font-semibold mb-3 tracking-wider">
                  Technical Skills
                </h2>
                <div className="flex flex-wrap gap-1">
                  {["MERN Stack", "Python Basics", "Java", "C++", "ML/AI Basics"].map((skill) => (
                    <span 
                      key={skill}
                      className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Coding Profiles Section */}
              <div>
                <h2 className="text-sm text-blue-500 uppercase font-semibold mb-3 tracking-wider">
                  Coding Profiles // certification
                </h2>
                <div className="space-y-1">
                  <a 
                    href={`https://leetcode.com/u/${leetcodeUsername}/`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center group cursor-pointer"
                  >
                    <span className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors mr-2">Leetcode: </span>
                    <span className="text-gray-500 group-hover:text-pink-500 transition-colors">{lcStats} Solved</span>
                  </a>
                  
                  <a 
                    href={`https://www.geeksforgeeks.org/user/${gfgUsername}/`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center group cursor-pointer"
                  >
                    <span className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors mr-2">GFG: </span>
                    <span className="text-gray-500 group-hover:text-pink-500 transition-colors">{gfgStats} Solved</span>
                  </a>
                  
                  {/* <div className="flex items-center">
                    <span className="font-medium text-gray-900">HackerRank: </span>
                    <span className="text-gray-500">3★ (C++)</span>
                  </div> */}
                </div>
              </div>

              {/* Contact Section */}
<div>
  <h2 className="text-sm text-blue-500 uppercase font-semibold mb-3 tracking-wider">
    Contact
  </h2>

  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 text-gray-800">
    <a href="#" className="hover:underline">
      9470507693
    </a>
    <a href="mailto:abhinam@gmail.com" className="hover:underline">
      abhinamkumar2222@gmail.com
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
