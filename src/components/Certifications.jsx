import React, { useState } from "react";
import { ExternalLink, ZoomIn, ShieldCheck, X } from "lucide-react";

function Certifications() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);

  const categories = ["All", "IBM & Cloud", "AI & Web", "Hackathons & Awards"];

  const certificationsList = [
    {
      title: "FreeCodeCamp – Responsive Web Design",
      issuer: "FreeCodeCamp",
      category: "AI & Web",
      date: "2024",
      image: "/certificate/_freeCodeCamp certificate_page-0001.jpg",
      badge: "Web Development",
      description: "Developer certification covering HTML5, CSS3, Responsive Design, Flexbox, and CSS Grid."
    },
    {
      title: "IBM – Generative AI & LangChain",
      issuer: "IBM",
      category: "AI & Web",
      date: "2024",
      image: "/certificate/Ai certifiacte.jpg",
      badge: "AI & LangChain",
      description: "Advanced AI application development with Retrieval-Augmented Generation (RAG) and LangChain framework."
    },
    {
      title: "IBM – Journey to Cloud Architecture",
      issuer: "IBM",
      category: "IBM & Cloud",
      date: "2024",
      image: "/certificate/ibmcloud.jpg",
      badge: "Cloud Computing",
      description: "Enterprise cloud architecture, hybrid cloud deployment, microservices, and containerization."
    },
    {
      title: "IBM SkillsBuild Advanced Track",
      issuer: "IBM",
      category: "IBM & Cloud",
      date: "2024",
      image: "/certificate/Completion Certificate _ SkillsBuild2_page-0001.jpg",
      badge: "Enterprise Skills",
      description: "Professional certification in cloud development, enterprise web stack, and AI logic integration."
    },
    {
      title: "IBM SkillsBuild Technical Foundations",
      issuer: "IBM",
      category: "IBM & Cloud",
      date: "2024",
      image: "/certificate/Completion Certificate _ SkillsBuild_page-0001.jpg",
      badge: "Technical Skills",
      description: "Verified badge in software development methodology, web fundamentals, and cloud solutions."
    },
    {
      title: "Ranchi Hacks 2026 – Top 30 Finalist",
      issuer: "Ranchi Hacks 2026",
      category: "Hackathons & Awards",
      date: "2026",
      image: "/certificate/ranchi hacks.jpg",
      badge: "Top 30 Team",
      description: "Recognized among Top 30 teams out of 2000+ national participants in 24-hour national hackathon."
    },
    {
      title: "Java Programming Certification",
      issuer: "Technical Certification",
      category: "AI & Web",
      date: "2024",
      image: "/certificate/java.jpg",
      badge: "Java OOP",
      description: "Object-Oriented Programming, Java Data Structures, multithreading, and software design patterns."
    },
    {
      title: "Unstop National Talent Park",
      issuer: "Unstop",
      category: "Hackathons & Awards",
      date: "2024",
      image: "/certificate/unstop talent park _page-0001.jpg",
      badge: "National Award",
      description: "Verified national achievement certificate in competitive computer science assessment on Unstop."
    },
    {
      title: "Asian Paints Corporate Inspire Challenge",
      issuer: "Asian Paints",
      category: "Hackathons & Awards",
      date: "2024",
      image: "/certificate/asian print insipre_page-0001.jpg",
      badge: "Corporate Award",
      description: "Certificate of distinction for technical problem solving and corporate innovation challenge."
    },
    {
      title: "Nestle Professional Excellence",
      issuer: "Nestle",
      category: "Hackathons & Awards",
      date: "2024",
      image: "/certificate/nestle.jpg",
      badge: "Professional Excellence",
      description: "Corporate skill-building and technical leadership excellence certification."
    }
  ];

  const filteredCerts =
    activeCategory === "All"
      ? certificationsList
      : certificationsList.filter((cert) => cert.category === activeCategory);

  return (
    <div className="bg-[#0a0a0a]">
      <section id="certifications" className="py-14 sm:py-16 px-4 md:px-8 max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-50 underline underline-offset-8 decoration-pink-400">
            Certifications & Achievements
          </h2>
          <p className="text-gray-400 mt-2.5 text-xs sm:text-sm max-w-md mx-auto font-medium">
            Verified credentials from IBM, FreeCodeCamp, hackathons, and corporate challenges.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex justify-center items-center gap-2 flex-wrap mb-8 sm:mb-10" data-aos="fade-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-pink-600 text-white shadow-md shadow-pink-600/30 border border-pink-500"
                  : "bg-[#151515] text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, index) => (
            <div
              key={index}
              className="group bg-[#151515] p-4 sm:p-5 rounded-xl border border-gray-800 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1.5 hover:border-pink-500 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)] relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 60}
            >
              {/* Top Accent Hover Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Certificate Image Frame */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="w-full h-40 sm:h-44 bg-[#0a0a0c] mb-4 rounded-lg overflow-hidden border border-gray-800/80 relative cursor-pointer group/img flex items-center justify-center p-2"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-[11px] bg-pink-600 text-white font-semibold px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
                    <ZoomIn size={13} /> Preview Credential
                  </span>
                </div>
              </div>

              {/* Card Meta */}
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="bg-pink-500/10 border border-pink-500/30 text-pink-400 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                  {cert.badge}
                </span>
                <span className="text-[11px] text-gray-400 font-semibold">{cert.date}</span>
              </div>

              <h3 className="text-base font-bold text-white mb-1 group-hover:text-pink-400 transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs font-semibold text-cyan-400 mb-2 flex items-center gap-1">
                <ShieldCheck size={13} /> {cert.issuer}
              </p>

              <p className="text-xs text-gray-400 flex-grow leading-relaxed font-medium mb-3">
                {cert.description}
              </p>

              {/* View Action Footer */}
              <div className="pt-3 border-t border-gray-800/80 mt-auto">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full flex items-center justify-center gap-1.5 text-gray-300 hover:text-white bg-black/40 hover:bg-pink-600/80 border border-gray-700/60 hover:border-pink-500 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
                >
                  <ExternalLink size={13} /> View Full Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificate Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#151515] border border-gray-800 rounded-xl p-5 sm:p-6 flex flex-col items-center max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-800 hover:bg-pink-600 p-1.5 rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="text-center mb-4 w-full pr-8">
              <span className="bg-pink-500/10 border border-pink-500/30 text-pink-400 px-2.5 py-0.5 rounded-full text-[11px] font-semibold">
                {selectedCert.badge}
              </span>
              <h3 className="text-xl font-bold text-white mt-1.5">{selectedCert.title}</h3>
              <p className="text-xs font-semibold text-cyan-400 mt-0.5">Issued by {selectedCert.issuer} &bull; {selectedCert.date}</p>
            </div>

            {/* High-Res Image View */}
            <div className="w-full bg-[#0a0a0c] border border-gray-800 rounded-lg p-2 flex items-center justify-center mb-4">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-w-full max-h-[55vh] object-contain rounded-md shadow-xl"
              />
            </div>

            <p className="text-xs text-gray-300 text-center max-w-xl font-medium leading-relaxed mb-4">
              {selectedCert.description}
            </p>

            <div className="flex gap-3">
              <a
                href={selectedCert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold px-5 py-2 rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ExternalLink size={14} /> Open Original Image
              </a>
              <button
                onClick={() => setSelectedCert(null)}
                className="bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold px-5 py-2 rounded-lg text-xs transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certifications;
