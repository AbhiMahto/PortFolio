import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#0d0d11] border-t border-gray-800 text-white relative overflow-hidden">
      {/* Main Footer Body Content */}
      <div className="max-w-7xl container mx-auto px-4 md:px-10 py-8">
        {/* Top section: Brand and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand & Title */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Abhinam Kumar <span className="text-pink-500">Mahato</span>
            </h2>
            <p className="text-xs text-gray-400 font-medium mt-1">
              Aspiring Software Engineer & ML Practitioner
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/AbhiMahto"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#151518] hover:bg-pink-600 text-gray-300 hover:text-white rounded-lg border border-gray-800 transition-all cursor-pointer"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/abhinam-mahato"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#151518] hover:bg-pink-600 text-gray-300 hover:text-white rounded-lg border border-gray-800 transition-all cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:abhinamkumar2222@gmail.com"
              className="p-2 bg-[#151518] hover:bg-pink-600 text-gray-300 hover:text-white rounded-lg border border-gray-800 transition-all cursor-pointer"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="mt-8 border-t border-gray-800/80 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-3">
          <p>&copy; {new Date().getFullYear()} Abhinam Kumar Mahato. All rights reserved.</p>
          <p className="flex items-center gap-1 font-medium">
            Designed & Built with <Heart size={14} className="text-pink-500 fill-pink-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
