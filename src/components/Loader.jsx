import React, { useEffect, useState } from 'react';
import StrokeText from './ui/StrokeText';

function Loader({ onFinished }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [fontSize, setFontSize] = useState(86);

  useEffect(() => {
    // Dynamic viewport-locked font size for mobile phone displays
    const updateFontSize = () => {
      const width = window.innerWidth;
      if (width < 380) {
        setFontSize(30);
      } else if (width < 480) {
        setFontSize(34);
      } else if (width < 640) {
        setFontSize(44);
      } else if (width < 1024) {
        setFontSize(64);
      } else {
        setFontSize(86);
      }
    };

    updateFontSize();
    window.addEventListener('resize', updateFontSize);

    // Start fade out after 2.5s and complete after 3.2s
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    const timer2 = setTimeout(() => {
      if (onFinished) onFinished();
    }, 3200);

    return () => {
      window.removeEventListener('resize', updateFontSize);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinished]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#0a0a0c] flex flex-col items-center justify-center p-3 sm:p-4 transition-all duration-700 overflow-hidden w-screen h-screen touch-none ${
        fadeOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Ambient Glow Effects */}
      <div className="absolute w-48 sm:w-80 h-48 sm:h-80 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute w-40 sm:w-64 h-40 sm:h-64 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Animated StrokeText Container */}
      <div className="w-full max-w-3xl px-2 sm:px-4 relative z-10 flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full overflow-hidden flex items-center justify-center">
          <StrokeText
            text="ABHINAM KUMAR"
            strokeColor="#ec4899"
            fillColor="#ffffff"
            strokeWidth={1.5}
            drawDuration={1.6}
            fillDelay={0.2}
            stagger={0.07}
            ease="power2.out"
            trigger="mount"
            fillMode="wipe"
            fontSize={fontSize}
            fontWeight={800}
            letterSpacing={fontSize < 40 ? -0.5 : fontSize < 50 ? -1 : -2}
          />
        </div>

        {/* Animated Loading Bar & Tagline */}
        <div className="mt-5 sm:mt-8 flex flex-col items-center justify-center space-y-3">
          <div className="w-32 sm:w-48 h-1 bg-gray-800 rounded-full overflow-hidden relative">
            <div className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 rounded-full animate-loading-bar" />
          </div>
          <p className="text-[10px] sm:text-xs font-mono tracking-[0.25em] sm:tracking-[0.3em] uppercase text-gray-400 animate-pulse text-center">
            Loading Portfolio...
          </p>
        </div>
      </div>

      <style>{`
        @keyframes loadingBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-loading-bar {
          animation: loadingBar 2.4s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}

export default Loader;
