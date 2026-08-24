import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Education", to: "education" },
    { name: "Projects", to: "projects" },
    { name: "Certifications", to: "certifications" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header
      className={`sticky top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0c]/95 backdrop-blur-md border-b border-gray-800/80 shadow-lg py-2.5 sm:py-3"
          : "bg-[#0a0a0c] py-3 sm:py-4 border-b border-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-base sm:text-xl font-extrabold text-white tracking-tight cursor-pointer hover:text-pink-500 transition-colors shrink-0"
        >
          Abhinam <span className="text-pink-500">Kr. Mahato</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-pink-500 font-bold"
              className="text-sm font-medium text-gray-300 hover:text-pink-400 cursor-pointer transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-1.5 sm:p-2 rounded-lg bg-gray-900 border border-gray-800 focus:outline-none cursor-pointer shrink-0"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0d11] border-b border-gray-800 px-5 py-3 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-300 hover:text-pink-400 font-semibold py-1.5 border-b border-gray-800/50 cursor-pointer text-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
