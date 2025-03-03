import React from "react";
import { TypeAnimation } from "react-type-animation";

const IntroSection = () => {
  return (
    <div id="intro" className="flex justify-center items-center min-h-screen px-6 text-[#012030] pt-20">
      <div className="flex flex-col md:flex-row max-w-4xl w-full items-center gap-6">

        {/* Profile Image - Moved to top on mobile, remains in middle on desktop */}
        <div className="w-1/2 md:w-1/4 md:order-2 bg-[#7AAC6C] rounded-full overflow-hidden flex items-center justify-center mb-6 md:mb-0">
          <img src="/images/profile.png" alt="Your Face" className="w-full h-full object-cover" />
        </div>

        {/* Intro Text - Stacks on mobile */}
        <div className="text-center md:text-left md:order-1 mb-4 md:mb-0">
          <h3 className="text-gray-800 text-lg">Welcome, I am</h3>
          <h1 className="text-3xl md:text-4xl font-bold">Thabang Mokoena</h1>
        </div>
        
        {/* Occupation Text - Stacks on mobile */}
        <div className="text-center md:text-left md:order-3 mb-4 md:mb-0">
          <div className="text-lg md:text-xl text-gray-700">
            <TypeAnimation
              sequence={[
                "Software Developer",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default IntroSection;