"use client";
import React from "react";
import NavBar from "./components/NavBar";
import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Contact from "./components/ContactSection";
import Footer from "./components/FooterSection";
import DigitalRain from "./components/digital-rain";

export default function Home() {
  return (
    <>
      {/* Background effect that stays behind content */}
      <div className="fixed inset-0 z-0">
        <DigitalRain />
      </div>
      
      {/* Header and content with higher z-index */}
      <div className="relative z-10">
        <header>
          <NavBar />
        </header>
        
        <main className="bg-transparent">
          <IntroSection />
          <AboutSection />
          <ProjectsSection />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
}