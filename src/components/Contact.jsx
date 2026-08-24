import React from 'react';
import Typewriter from 'typewriter-effect';
import { Send, Mail, User, MessageSquare, Phone, MapPin, Github, Linkedin, Sparkles } from 'lucide-react';
import './ui/Contact.css';

function Contact() {
  const contactDetails = [
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "+91 9470507693",
      href: "tel:+919470507693"
    },
    {
      icon: Mail,
      label: "Email Address",
      value: "abhinamkumar2222@gmail.com",
      href: "mailto:abhinamkumar2222@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jamshedpur / Dhanbad, Jharkhand, India",
      href: null
    }
  ];

  return (
    <section
      className="relative w-full py-16 sm:py-20 px-4 md:px-8 bg-black text-white min-h-screen flex flex-col justify-center overflow-hidden"
      id="contact"
    >
      {/* Section Title */}
      <div className="relative z-10 text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-amber-50 underline underline-offset-8 decoration-pink-400 mb-3">
          Contact Me
        </h2>
        <div className="text-lg sm:text-2xl font-semibold text-gray-300">
          <Typewriter
            options={{
              strings: ['Let\'s Connect & Build Something Great', 'Available for SDE Roles & Collaborations'],
              autoStart: true,
              loop: true,
              delay: 55,
            }}
          />
        </div>
      </div>

      {/* Main 2-Column Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto w-full items-start">
        {/* Left Column: Direct Contact Info & Connect Area */}
        <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
          <div className="bg-[#121216] border border-gray-800 rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden space-y-5">
            {/* Top accent glow line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-cyan-400"></div>

            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-pink-500/20 text-pink-400 rounded-lg">
                <Sparkles size={18} />
              </div>
              <h3 className="text-lg font-bold text-white">Let's Connect</h3>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-medium">
              I am actively looking for <strong className="text-white">Software Engineering Internships, Full-Time Roles, and AI/ML project collaborations</strong>. Feel free to reach out directly or drop a message!
            </p>

            {/* Direct Contact List */}
            <div className="space-y-3.5 pt-2">
              {contactDetails.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#0a0a0c] border border-gray-800/80">
                    <div className="p-2 bg-pink-500/10 text-pink-400 rounded-lg shrink-0 mt-0.5">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-xs sm:text-sm font-bold text-white hover:text-pink-400 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-xs sm:text-sm font-bold text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-400">Follow Profiles:</span>
              <div className="flex items-center space-x-3">
                <a
                  href="https://github.com/AbhiMahto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-900 hover:bg-pink-600 text-gray-300 hover:text-white rounded-lg border border-gray-800 transition-all cursor-pointer"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/abhinam-mahato"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-900 hover:bg-pink-600 text-gray-300 hover:text-white rounded-lg border border-gray-800 transition-all cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:abhinamkumar2222@gmail.com"
                  className="p-2 bg-gray-900 hover:bg-pink-600 text-gray-300 hover:text-white rounded-lg border border-gray-800 transition-all cursor-pointer"
                  aria-label="Email Direct"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Message Form Box */}
        <div className="lg:col-span-7" data-aos="fade-left">
          <div className="w-full bg-[#121216] border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Top pink accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-cyan-400"></div>

            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <MessageSquare size={18} className="text-pink-500" /> Send a Message
            </h3>

            <form
              action="https://getform.io/f/bejlqxga"
              method="POST"
              className="space-y-4"
            >
              {/* Name Field */}
              <div>
                <label className="block mb-1 text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                  <User size={14} className="text-pink-500" /> Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  name="name"
                  className="w-full p-3 rounded-xl bg-[#0a0a0c] text-white border border-gray-800 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 text-xs sm:text-sm transition-colors"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block mb-1 text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Mail size={14} className="text-pink-500" /> Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  name="email"
                  className="w-full p-3 rounded-xl bg-[#0a0a0c] text-white border border-gray-800 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 text-xs sm:text-sm transition-colors"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block mb-1 text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                  <MessageSquare size={14} className="text-pink-500" /> Message / Proposal
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message, project idea, or inquiry here..."
                  required
                  name="message"
                  className="w-full p-3 rounded-xl bg-[#0a0a0c] text-white border border-gray-800 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 text-xs sm:text-sm resize-none transition-colors"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl shadow-lg hover:shadow-pink-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer text-xs sm:text-sm"
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
