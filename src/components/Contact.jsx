

import { Repeat } from 'lucide-react';
import React from 'react';
import Typewriter from 'typewriter-effect';
import './ui/Contact.css'

function Contact() {
  return (
    <section
      className="max-w-screen py-20 px-2 bg-black text-white min-h-screen "
      id="contact"
    >
      <h2 className="text-3xl font-bold text-amber-50 text-center mb-4 underline decoration-cyan-400 underline-offset-8">
        Contact Us
      </h2>

      <div className="flex justify-center items-center">
        <h1 className="text-8xl font-semibold text-center mb-3">
          <Typewriter
            options={{
              strings: ['Get in Touch With Us'],
              autoStart: true,
              loop: Repeat, // stop after one run
              delay: 75, // typing speed
              cursor: '', // remove blinking cursor if you want
            }}
          />
        </h1>
      </div>


                {/* <div className="flex justify-center items-center  bg-[#88f68822]">
                          <form className="space-y-4">
          //name
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Enter your name"
            />
          </div>
          </form>
                </div> */}


<div className="flex items-center justify-center">
  <div className="w-full max-w-md p-1 border border-[#d1bbac] rounded-lg shadow-md bg-white">

  <div className="bg-black text-white p-3 rounded-xl shadow-lg border-2 border-[#0000FF]
">
    <form className="space-y-1"
    action="https://getform.io/f/bejlqxga"
      method="POST"  >
      {/* Name Field */}
      <div>
        <label className="block mb-1 text-md font-medium">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"


          name='name'
        />
      </div>

           {/* Email Field */}
          <div>
            <label className="block mb-1 text-sm font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"

              name='email'
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block mb-1 text-sm font-semibold">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
              name='message'
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition duration-300"
          >
            Send Message
          </button>
    </form>
  </div>

  </div>

</div>






    </section>
  );
}

export default Contact;
