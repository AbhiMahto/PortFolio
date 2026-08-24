import React, { useEffect, useState } from 'react';
import StrokeText from './ui/StrokeText';

function Loader({ onFinished }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2.5s and complete after 3.2s
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    const timer2 = setTimeout(() => {
      if (onFinished) onFinished();
    }, 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinished]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#0a0a0c] flex flex-col items-center justify-center p-4 transition-all duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Glow Effects */}
      <div className="absolute w-96 h-96 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute w-80 h-80 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Animated StrokeText */}
      <div className="w-full max-w-3xl px-4 relative z-10">
        <StrokeText
          text="ABHINAM KUMAR MAHATO"
          strokeColor="#ec4899"
          fillColor="#ffffff"
          strokeWidth={1.8}
          drawDuration={1.6}
          fillDelay={0.2}
          stagger={0.08}
          ease="power2.out"
          trigger="mount"
          fillMode="wipe"
          fontSize={100}
          fontWeight={800}
          letterSpacing={-2}
        />

        {/* Animated Loading Bar & Tagline */}
        <div className="mt-8 flex flex-col items-center justify-center space-y-3">
          <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden relative">
            <div className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 rounded-full animate-loading-bar" />
          </div>
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-gray-400 animate-pulse">
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
