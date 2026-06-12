


import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <>
      <hr />
      <footer className=" py-4 bg-[#232121]">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          {/* Top section: icons and title */}
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
            {/* Social Icons */}
            <div className="flex space-x-4">
              <Github size={24} className="text-white hover:text-pink-500 transition-colors cursor-pointer" />
              <Linkedin size={24} className="text-amber-50 hover:text-pink-500 transition-colors cursor-pointer" />
              <Mail size={24} className="text-amber-50 hover:text-pink-500 transition-colors cursor-pointer" />
            </div>

            {/* Name and Role */}
            <h2 className="text-white text-lg text-center md:text-right font-semibold">
             Abhinam Kumar — <span className="text-pink-600">An Aspiring Software Engineer</span>
            </h2>
          </div>

          {/* Bottom section */}
          <div className="mt-7 border-t border-gray-500 pt-8 flex flex-col items-center text-center">
            <p className="text-md text-amber-50">
              &copy;2025 Abhinam Kumar. All rights reserved
            </p>
            <p className="text-sm text-teal-200">Made By ❤️</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
