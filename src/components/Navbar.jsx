// import React from "react";
// import Hero from "./Hero";
// import About from "./About";
// function Navbar() {
//   return (
//     // <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">

//     //   <div className="flex justify-between items-center">

//     //   <div  className="flex flex-col">

//     //     <h1 className="font-semibold text-xl cursor-pointer">Abhi<span className="text-pink-500 text-2xl">nam</span></h1>
//     //     <p className="text-pink-500 text-sm font-semibold">Web Developer</p>
//     //   </div>
//     //   <div>
//     //     <ul className="flex space-x-8">
//     //       <li>Home</li>
//     //       <li>About</li>
//     //       <li>Poroject</li>
//     //       <li>Experience</li>
//     //       <li>Contact Us</li>
//     //     </ul>
//     //   </div>
//     //   </div>
      
//     //   <h1>Bbay</h1>
//     // </div>
//     <div className="min-h-screen ">
//   <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent">
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="flex justify-between items-center h-16">
        
        
//         <a className="text-xl font-bold text-pink-500 " href="/">Abhinam Kumar</a>

        
//         <div className="hidden md:flex items-center space-x-8">
//           <a className="text-gray-700 dark:text-gray-200 hover:text-portfolioGreen-dark transition-colors" href="/">Home</a>
//           <a className="text-gray-700 dark:text-gray-200 hover:text-portfolioGreen-dark transition-colors" href="#about">About</a>
//           <a className="text-gray-700 dark:text-gray-200 hover:text-portfolioGreen-dark transition-colors" href="#skills">Skills</a>
//           <a className="text-gray-700 dark:text-gray-200 hover:text-portfolioGreen-dark transition-colors" href="/experience">Experience</a>
//           <a className="text-gray-700 dark:text-gray-200 hover:text-portfolioGreen-dark transition-colors" href="/contact">Contact</a>
//         </div>

        
//         <div className="md:hidden">
//           <button className="text-gray-700 dark:text-gray-200 hover:text-portfolioGreen-dark" aria-label="Toggle menu">
//             ☰
//           </button>
//         </div>

//       </div>
//     </div>
//   </nav>
//       {/* <Hero /> */}
//       {/* <About /> */}
    
  
// </div>

//   );
// }

// export default Navbar;




// import React, { useState, useEffect } from "react";

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="">
//       <nav
//         className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//           scrolled ? "bg-white shadow-md" : "bg-transparent"
//         }`}
//       >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo */}
//             <a
//               className={`text-xl font-bold ${
//                 scrolled ? "text-pink-500" : "text-white"
//               }`}
//               href="/"
//             >
//               Abhinam Kumar
//             </a>

//             {/* Nav links */}
//             <div className="hidden md:flex items-center space-x-8">
              
//               <a
//                 className={`transition-colors ${
//                   scrolled ? "text-gray-900" : "text-white"
//                 } hover:text-pink-500`}
//                 href="#hero"
//               >
//                 Home
//               </a>
              
//               <a
//                 className={`transition-colors ${
//                   scrolled ? "text-gray-900" : "text-white"
//                 }
//  hover:text-pink-500 active:bg-pink-700 
//  `}
//                 href="#about"
//               >
//                 About
//               </a>
//               <a
//                 className={`transition-colors ${
//                   scrolled ? "text-gray-900" : "text-white"
//                 } hover:text-pink-500`}
//                 href="#skills"
//               >
//                 Skills
//               </a>
//               <a
//                 className={`transition-colors ${
//                   scrolled ? "text-gray-900" : "text-white"
//                 } hover:text-pink-500`}
//                 href="#experience"
//               >
//                 Experience
//               </a>
//               <a
//                 className={`transition-colors ${
//                   scrolled ? "text-gray-900" : "text-white"
//                 } hover:text-pink-500`}
//                 href="#contact"
//               >
//                 Contact
//               </a>
//             </div>

//             {/* Hamburger Menu (Not functional, placeholder for mobile) */}
//             <div className="md:hidden">
//               <button
//                 className={`text-2xl ${
//                   scrolled ? "text-gray-900" : "text-white"
//                 }`}
//                 aria-label="Toggle menu"
//               >
//                 ☰
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* You can add components like Hero or About below */}
//       {/* <Hero /> */}
//       {/* <About /> */}
//     </div>
//   );
// }

// export default Navbar;




import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = `cursor-pointer transition-colors duration-200 ${
    scrolled ? "text-gray-900" : "text-white"
  } hover:text-pink-500`;

  return (
    <div>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="#hero"
              smooth={true}
              duration={500}
              className={`text-xl font-bold cursor-pointer ${
                scrolled ? "text-pink-500" : "text-white"
              }`}
            >
              Abhinam Kumar
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
              <Link to="experience" smooth={true} duration={500} className={linkStyle}>
                Experience
              </Link>
              <Link to="contact" smooth={true} duration={500} className={linkStyle}>
                Contact
              </Link>
            </div>

            {/* Mobile Menu Placeholder */}
            <div className="md:hidden">
              <button
                className={`text-2xl ${
                  scrolled ? "text-gray-900" : "text-white"
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
