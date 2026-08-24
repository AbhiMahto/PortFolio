import React from 'react';
import TextLoop from './TextLoop';

function TextLoopBanner() {
  return (
    <div className="w-full bg-[#0a0a0a] py-8 overflow-hidden relative border-y border-gray-900">
      <TextLoop
        text="ABHINAM KUMAR MAHATO ✦ SOFTWARE ENGINEER ✦ AI/ML DEVELOPER ✦ OPEN FOR OPPORTUNITIES ✦"
        shape="wave"
        speed={90}
        direction="forward"
        separator="✦"
        curviness={90}
        fontSize={40}
        fontWeight={800}
        letterSpacing={2}
        uppercase
        color="#ffffff"
        ribbon={true}
        ribbonColor="#ec4899"
        ribbonWidth={86}
        pauseOnHover={true}
      />
    </div>
  );
}

export default TextLoopBanner;
