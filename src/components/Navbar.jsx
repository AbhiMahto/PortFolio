


import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = `cursor-pointer transition-colors duration-200 ${scrolled ? "text-gray-900" : "text-white"
    } hover:text-pink-500`;

  return (
    <div>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="#hero"
              smooth={true}
              duration={500}
              className={`text-xl font-bold cursor-pointer ${scrolled ? "text-pink-500" : "text-white"
                }`}
            >
              Abhinam Kr. Mahato
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="hero" smooth={true} duration={500} className={linkStyle}>
                Home
              </Link>
              <Link to="about" smooth={true} duration={500} className={linkStyle}>
                About
              </Link>
              <Link to="skills" smooth={true} duration={500} className={linkStyle}>
                Skills
              </Link>
              <Link to="projects" smooth={true} duration={500} className={linkStyle}>
                Projects
              </Link>
              <Link to="experience" smooth={true} duration={500} className={linkStyle}>
                Experience
              </Link>
              <Link to="certifications" smooth={true} duration={500} className={linkStyle}>
                Certifications
              </Link>
              <Link to="contact" smooth={true} duration={500} className={linkStyle}>
                Contact
              </Link>
            </div>

            {/* Mobile Menu Placeholder */}
            <div className="md:hidden">
              <button
                onClick={() => { setMenuOpen(!menuOpen) }}
                className={`text-2xl focus:outline-none ${scrolled ? "text-gray-900" : "text-white"
                  }`}
                aria-label="Toggle menu"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
