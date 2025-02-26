"use client";
import { Typed } from "react-typed";
import { TypeAnimation } from "react-type-animation";
import React from "react";

export default function Home() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <body>
        <div className="bg-gradient-to-t from-lime-300 via-[#9AEBA3] to-white ">
          <IntroSection />
          <AboutSection />
          <ProjectsSection />
          <Contact />
        </div>
      </body>
      <Footer />

    </div>
  );
}

const NavBar = () => {
  return (
    <nav className="flex bg-white shadow-md fixed w-full top-0 text-black items-start justify-start">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-roboto text-3xl text-left">
          <a>
            <span className="font-black">TM</span>
            <span className="font-light">/Portfolio</span>
          </a>
        </div>

        <ul className="flex space x-6">
          {["Intro", "About Me", "Projects", "Contact"].map((item) => (
            <li key={item} className="p-6">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-black font-roboto text-lg hover:text-gray-600 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

const IntroSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-6 text-[#012030]">
      <div className="flex max-w-4xl w-full items-center gap-6">

        {/* Intro Text */}
        <div className="w-1/3">
          <h3 className="text-gray-800 text-lg">Welcome, I am</h3>
          <h1 className="text-3xl font-bold">Thabang Mokoena</h1>
        </div>

        {/* Profile Image */}
        <div className="w-1/3 bg-[#7AAC6C] rounded-full overflow-hidden flex items-center justify-center">
          <img src="/images/profile.png" alt="Your Face" className="w-full h-full object-cover" />
        </div>

        {/* Occupation Text */}
        <div className="w-1/3 text-center">
          <div className="text-lg text-gray-700">
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




function AboutSection() {
  return (
    <div className="text-center py-16 text-[#012030]" id="about-me">
      <div className="container mx-auto px-6 relative">
        <h2 className="text-5xl font-bold text-center mb-8 ">About Me</h2>

        {/* Vertical Line */}
        <div className="absolute left-1/2 h-full bg-teal-500 w-1 transform -translate-x-1/2 rounded-full">
          <div className="absolute top-[5%] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full"></div>
          <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full"></div>
          <div className="absolute top-[75%] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full"></div>
          {/*<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full"></div>*/}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 gap-8">
          {/* Left Side (Four Boxes) */}
          <div className="grid grid-rows-4 gap-8">
            {/* Education */}
            <div className="p-4">
              <h1 className="text-4xl font-semibold mb-2 text-center">Education</h1>

            </div>

            {/* Web Development */}
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
              <p>Java, React, Next.js</p>
              <p className="text-sm text-gray-700">
                Currently doing a module "Internet Programming" using Java.
              </p>
              <p className="text-sm text-gray-700">
                This website was made using Next.js.
              </p>
            </div>

            {/* Mobile Development */}
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">
                Mobile Development
              </h3>
              <p>Flutter(Dart), Kotlin(Java)</p>
              <p className="text-sm text-gray-700">
                Currently doing a module "Mobile Programming" using Kotlin.
              </p>
              <p className="text-sm text-gray-700">
                Currently working as an intern.
              </p>
            </div>

            {/* Free Time */}
            <div className="p-4">
              <h3 className="text-4xl font-semibold mb-2 text-center">Free Time</h3>
            </div>
          </div>

          {/* Right Side (Four Boxes - Skills repeated) */}
          <div className="grid grid-rows-4 gap-8">
            {/* Skills (Repeated) */}
            <div className="p-4">
              <p>Tshwane University Of Technology</p>
              <p>-Diploma in Computer Science</p>
              <p className="text-sm text-gray-600">2022-2025</p>
              <p className="text-sm text-gray-700">
                Focusing on Java. Learned HTML, CSS, JavaScript, SQL, Kotlin
                and PL/SQL.
              </p>
            </div>

            <div className="p-4 top-[79%]">
              <h3 className="text-4xl font-semibold mb-4 top-[79%]">Skills</h3>
            </div>
            <div className="p-4">

            </div>
            <div className="p-4 text-2xl text-center">
              <p>YouTube, Gaming & Friends</p>
              <p className="text-sm text-gray-700">
                When I'm not coding, you'll find me with a joypad in my hand,
                unwinding with YouTube, or hanging with the boys!
              </p>
              <p className="text-sm text-gray-700">
                Or with a book in hand if I'm in a long line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <div className= "py-16">
      <div className="container mx-auto px-4 min-h-screen">
        <h2 className="text-5xl font-bold text-center mb-8 text-[#012030]">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Project 1 */}
          <div className="border-2 border-lime-400 rounded-lg overflow-hidden">
            <div className="bg-gray-100 h-48">
              {/* Placeholder for Image */}
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </div>
            </div>
            <div className="bg-white p-4">
              <h3 className="text-xl font-semibold mb-2">Project Name</h3>
              <p className="text-sm text-gray-700">Project description</p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border-2 border-lime-400 rounded-lg overflow-hidden">
            <div className="bg-gray-100 h-48">
              {/* Placeholder for Image */}
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </div>
            </div>
            <div className="bg-white p-4">
              <h3 className="text-xl font-semibold mb-2">Project Name</h3>
              <p className="text-sm text-gray-700">Project description</p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="border-2 border-lime-400 rounded-lg overflow-hidden">
            <div className="bg-gray-100 h-48">
              {/* Placeholder for Image */}
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </div>
            </div>
            <div className="bg-white p-4">
              <h3 className="text-xl font-semibold mb-2">Project Name</h3>
              <p className="text-sm text-gray-700">Project description</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


function Contact() {
  return (
    <div className="py-16 min-h-screen">
      <h2 className="text-5xl font-bold text-center mb-8 text-[#012030]">Email Me!</h2>
      <div className="container mx-auto px-4 bg-[#45C4B0] rounded-3xl py-5">
        <form className="max-w-lg mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Write your message</label>
            <textarea
              id="message"
              rows="6"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


function Footer() {
  return (
    // <footer className="bg-midnightBlue text-white py-12">
    <div className="bg-[#012030] text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Contact Details */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
          <p className="text-sm">Email: thabang.mokoena347@gmail.com</p>
          <p className="text-sm">Phone: 065 875 4887 (Phone call and WhatsApp)</p>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Socials</h3>
          <ul className="text-sm">
            <li><a href="#" className="hover:text-gray-300">LinkedIn</a></li>
            <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
            <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
            <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
            <li><a href="#" className="hover:text-gray-300">GitHub</a></li>
          </ul>
        </div>

        {/* My CV */}
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="bg-gray-200 text-gray-800 py-2 px-6 rounded-full hover:bg-gray-300 transition duration-200"
          >
            MY CV
          </a>
        </div>
      </div>
    </div>
    //</footer>
  );
}