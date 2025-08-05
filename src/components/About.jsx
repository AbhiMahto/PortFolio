// import React from "react";
// import photo from "./photo.jpg"; // Ensure this path is correct
// import "./ui/About.css";

// function About() {
//   return (
//     <>
//       <section className="container-about">
//         <div className="container-img">
//           <div className="container-heading">
//             <h2 className="font-bold text-4xl text-gray-800 ">
//               <a href="./about" className="shadow-[0_7px_29px_rgba(255,0,128,0.3)]">About Me</a>
//             </h2>
//           </div>
//           <div className="img-section">
//             <img
//               src={photo}
//               alt="Profile"
//               className=" float-left mx-40 w-[350px] h-[435px] object-cover rounded-lg shadow-lg mt-2 drop-shadow-[0_7px_29px_rgba(255,0,128,0.3)]"
//               data-aos="fade-up"
//             />
//             <div className="img-section"></div>
//           </div>
//         </div>

//  <div className="bg-white p-8 rounded-xl shadow-2xl space-y-5 text-black w-[98%] justify-center items-center mx-4  ">
  
//         <div className="text-black text-xl mr-40 font-medium ">
//           <p className="leading-relaxed">
//             Hi, I'm Abhinam Kumar Mahato , A Computer Science and Engineering Student at RVSCET Jamshedpur . As an aspiring Software Engineer, I'm passionate developer with experience in building
//             responsive and user-friendly web applications.
//           </p>
//           <p className="mt-4 leading-relaxed">
//             I enjoy working with modern technologies like React, Tailwind CSS,
//             and Node.js. I love solving real-world problems through code and 
//             continuously improving my skills.
//           </p>


//           <p className="mt-4 leading-relaxed">
//             Beyond coding, I'm dedicated to sharing knowledge and contributing to the tech community. I actively participate in hackathons and solve DS & Algorithm problems to strengthen my problem-solving abilities.
//           </p>
//         </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default About;


import React from "react";
import photo from "./photo.jpg"; // Make sure this path is correct

function About() {
  return (
    <div className="bg-[#121212]">
    <section id="about" className="py-18 px-4 md:px-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-amber-50 underline underline-offset-8 decoration-pink-400">
          About Me
        </h2>
      </div>

      {/* Image + Description */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 max-w-6xl mx-auto">
        {/* Profile Image */}
        <div data-aos="fade-up">
          <img
            src={photo}
            alt="Abhinam Mahato Profile"
            className="w-[280px] sm:w-[320px] md:w-[350px] h-[400px] md:h-[435px] object-cover rounded-lg shadow-lg drop-shadow-[0_7px_29px_rgba(255,0,130,0.3)]"
          />
        </div>

        {/* Bio Text */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl space-y-5 text-black max-w-xl">
          <p className="text-base md:text-lg leading-relaxed font-medium">
            Hi, I'm <strong>Abhinam Kumar Mahato</strong>, a Computer Science and Engineering student at RVSCET Jamshedpur. As an aspiring Software Engineer, I'm a passionate developer with experience in building responsive and user-friendly web applications.
          </p>

          <p className="text-base md:text-lg leading-relaxed font-medium">
            I enjoy working with modern technologies like <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Js</strong>. I love solving real-world problems through code and continuously improving my skills.
          </p>

          <p className="text-base md:text-lg leading-relaxed font-medium">
            Beyond coding, I'm dedicated to sharing knowledge and contributing to the tech community. I actively participate in hackathons and solve DSA problems to strengthen my problem-solving abilities.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}

export default About;
