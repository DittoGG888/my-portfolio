"use client";
import React from "react";
import NavBar from "./components/NavBar";
import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Contact from "./components/ContactSection";
import Footer from "./components/FooterSection";
import FloatingTriangles from "./components/FloatingTriangles";

export default function Home() {
  return (
    <>
      {/* Add the animated triangles background */}

      <header>
        <NavBar />
      </header>
      <body>
        <div className="bg-gradient-to-t from-lime-300 via-[#9AEBA3] to-white">
          <FloatingTriangles
            color="#3b82f6"         // Primary color
            secondaryColor="#1e40af" // Secondary color (different shade)
            density={15}            // Number of triangles
            speed={0.5}             // Animation speed
            opacity={0.1}           // Triangle opacity
          />
          <IntroSection />
          <AboutSection />
          <ProjectsSection />
          <Contact />
        </div>
      </body>
      <Footer />
    </>
  );
}