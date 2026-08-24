import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X,} from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0c]/90 backdrop-blur-lg border-b border-gray-800/80 shadow-2xl py-3"
          : "bg-[#0a0a0c]/80 backdrop-blur-md py-4 border-b border-gray-900/60"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-base sm:text-xl font-extrabold text-white tracking-tight cursor-pointer hover:text-pink-500 transition-colors shrink-0 flex items-center gap-2"
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
              activeClass="text-pink-500 font-bold border-b-2 border-pink-500 pb-0.5"
              className="text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-pink-400 cursor-pointer transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 rounded-xl bg-gray-900/90 border border-gray-800 focus:outline-none cursor-pointer shrink-0 hover:border-pink-500/50 transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={20} className="text-pink-400" /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0d11]/95 backdrop-blur-xl border-b border-gray-800 px-6 py-4 space-y-3 shadow-2xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-300 hover:text-pink-400 font-semibold py-2 border-b border-gray-800/60 cursor-pointer text-sm tracking-wide"
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
