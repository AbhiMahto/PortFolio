import React from "react";
import { ExternalLink } from "lucide-react";

function Certifications() {
  const certificationsList = [
    {
      title: "AI Certificate",
      issuer: "Certificate",
      date: "202",
      image: "/certificate/Ai certifiacte.jpg",
      link: "/certificate/Ai certifiacte.jpg"
    },
    {
      title: "IBM SkillsBuild Completion 2",
      issuer: "IBM",
      date: "2024",
      image: "/certificate/Completion Certificate _ SkillsBuild2_page-0001.jpg",
      link: "/certificate/Completion Certificate _ SkillsBuild2_page-0001.jpg"
    },
    {
      title: "IBM SkillsBuild Completion",
      issuer: "IBM",
      date: "2024",
      image: "/certificate/Completion Certificate _ SkillsBuild_page-0001.jpg",
      link: "/certificate/Completion Certificate _ SkillsBuild_page-0001.jpg"
    },

    {
      title: "Asian Print Inspire",
      issuer: "Certificate",
      date: "2024",
      image: "/certificate/asian print insipre_page-0001.jpg",
      link: "/certificate/asian print insipre_page-0001.jpg"
    },
    {
      title: "IBM Cloud",
      issuer: "IBM",
      date: "2024",
      image: "/certificate/ibmcloud.jpg",
      link: "/certificate/ibmcloud.jpg"
    },
    {
      title: "Java",
      issuer: "Certificate",
      date: "2024",
      image: "/certificate/java.jpg",
      link: "/certificate/java.jpg"
    },
    {
      title: "Nestle",
      issuer: "Nestle",
      date: "2024",
      image: "/certificate/nestle.jpg",
      link: "/certificate/nestle.jpg"
    },
    {
      title: "Ranchi Hacks",
      issuer: "Hackathon",
      date: "2024",
      image: "/certificate/ranchi hacks.jpg",
      link: "/certificate/ranchi hacks.jpg"
    },
    {
      title: "Unstop Talent Park",
      issuer: "Unstop",
      date: "2024",
      image: "/certificate/unstop talent park _page-0001.jpg",
      link: "/certificate/unstop talent park _page-0001.jpg"
    }
  ];

  return (
    <div className="bg-[#0a0a0a]">
      <section id="certifications" className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-50 underline underline-offset-8 decoration-cyan-400">
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsList.map((cert, index) => (
            <div
              key={index}
              className="bg-[#151515] p-6 rounded-2xl border border-gray-800 flex flex-col h-full transition-all duration-300 hover:border-gray-500 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Certificate Image Area */}
              <div className="w-full h-56 bg-black mb-6 rounded-xl overflow-hidden border border-gray-800 relative flex items-center justify-center p-2">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-gray-500">
                    <p className="text-sm font-semibold">Image pending...</p>
                    <p className="text-xs text-gray-600 mt-2 text-center px-4">Provide the photo once ready</p>
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-sm font-semibold text-gray-500 mb-6 flex-grow">{cert.issuer} &bull; {cert.date}</p>

              <div className="flex pt-5 border-t border-gray-800 mt-auto">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-bold z-10"
                >
                  <ExternalLink size={20} /> View Credential
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Certifications;
