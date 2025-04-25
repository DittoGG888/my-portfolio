import React from "react";
import { TypeAnimation } from "react-type-animation";

const IntroSection = () => {
  return (
    <div id="intro" className="flex justify-center items-center min-h-screen px-6 text-white pt-20">
      <div className="text-center max-w-4xl mx-auto bg-black/30 p-12 rounded-xl backdrop-blur-sm border border-white/10">
        <h3 className="text-gray-200 text-2xl mb-3">Welcome, I am</h3>
        <h1 className="text-6xl md:text-7xl font-bold mb-6">Thabang Mokoena</h1>
        
        <div className="text-2xl md:text-3xl text-gray-200 mt-8">
          <TypeAnimation
            sequence={[
              "Software Developer",
              1500,
              "Web Developer",
              1500,
              "Mobile Developer",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>
        
        <div className="mt-14">
          <a 
            href="#about" 
            className="inline-block px-10 py-4 bg-[#FB0303] text-white text-xl font-medium rounded-full hover:bg-red-700 transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;