import React from 'react';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Education from './components/Education';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
