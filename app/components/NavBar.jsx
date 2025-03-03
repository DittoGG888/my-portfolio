"use client";
import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle smooth scrolling and close mobile menu
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    
    // Close the mobile menu if it's open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    
    // Find the target element
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      // Scroll to the element smoothly
      targetSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="flex bg-white shadow-md fixed w-full top-0 text-black items-start justify-start z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-roboto text-3xl text-left py-4 px-6">
          <a href="#intro" onClick={(e) => handleNavClick(e, 'intro')}>
            <span className="font-black">TM</span>
            <span className="font-light">/Portfolio</span>
          </a>
        </div>

        {/* Hamburger Menu Button (visible on mobile) */}
        <button 
          className="md:hidden p-6 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <div className="w-6 h-0.5 bg-black mb-1.5"></div>
          <div className="w-6 h-0.5 bg-black mb-1.5"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>

        {/* Desktop Navigation (hidden on mobile) */}
        <ul className="hidden md:flex space-x-6">
          <li className="p-6">
            <a 
              href="#intro" 
              onClick={(e) => handleNavClick(e, 'intro')} 
              className="text-black font-roboto text-lg hover:text-gray-600 transition"
            >
              Intro
            </a>
          </li>
          <li className="p-6">
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')} 
              className="text-black font-roboto text-lg hover:text-gray-600 transition"
            >
              About Me
            </a>
          </li>
          <li className="p-6">
            <a 
              href="#projects" 
              onClick={(e) => handleNavClick(e, 'projects')} 
              className="text-black font-roboto text-lg hover:text-gray-600 transition"
            >
              Projects
            </a>
          </li>
          <li className="p-6">
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')} 
              className="text-black font-roboto text-lg hover:text-gray-600 transition"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation Menu (toggles visibility based on state) */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col">
            <li className="p-4 border-b">
              <a 
                href="#intro" 
                onClick={(e) => handleNavClick(e, 'intro')} 
                className="text-black font-roboto text-lg hover:text-gray-600 transition block"
              >
                Intro
              </a>
            </li>
            <li className="p-4 border-b">
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, 'about')} 
                className="text-black font-roboto text-lg hover:text-gray-600 transition block"
              >
                About Me
              </a>
            </li>
            <li className="p-4 border-b">
              <a 
                href="#projects" 
                onClick={(e) => handleNavClick(e, 'projects')} 
                className="text-black font-roboto text-lg hover:text-gray-600 transition block"
              >
                Projects
              </a>
            </li>
            <li className="p-4">
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')} 
                className="text-black font-roboto text-lg hover:text-gray-600 transition block"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;