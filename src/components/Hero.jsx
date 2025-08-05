import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './ui/Hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';







function Hero() {

  useEffect(() => {
  AOS.init({
    duration: 800,  // animation duration
    once: true,     // animation happens only once
  });
}, []);
  return (
    <section className="min-h-screen flex items-center pt-16 bg-black">
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
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2">
  <span className="relative">
    View Projects
    <sub className="absolute -bottom-3 left-5 text-xs text-amber-200 ">Update Soon</sub>
  </span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14m-7-7l7 7-7 7"
                  />
                </svg>
              </button>

              <button className="border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium t text-white">
                
               <a href='#contact'> Contact Me </a>
              </button>
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
                  <div className="flex items-center">
                    <span className="font-medium text-gray-900">Leetcode: </span>
                    <span className="text-gray-500">5+ (★)</span>
                  </div>
                  <div className="flex  items-center">
                    <span className="font-medium text-gray-900">CodeChef: </span>
                    <span className="text-gray-500">1+ (★)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium text-gray-900">HackerRank: </span>
                    <span className="text-gray-500">3★ (C++)</span>
                  </div>
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
