import React from "react";

function AboutSection() {
  return (
    <div className="text-center py-16 text-[#012030]" id="about">
      <div className="container mx-auto px-6 relative">
        <h2 className="text-5xl font-bold text-center mb-8">About Me</h2>

        {/* Vertical Line - Hidden on mobile, shown on md screens and up */}
        <div className="hidden md:block absolute left-1/2 h-full bg-teal-500 w-1 transform -translate-x-1/2 rounded-full">
          <div className="absolute top-[5%] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full"></div>
          <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full"></div>
          <div className="absolute top-[75%] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full"></div>
        </div>

        {/* Responsive Grid Layout - Single column on mobile, two columns on md screens and up */}
        <div className="hidden md:grid grid-cols-1 grid-cols-2 gap-6 md:gap-8">
          {/* Left Side (Four Boxes) */}
          <div className="grid grid-rows-4 gap-6 md:gap-8">
            {/* Education */}
            <div className="p-4 bg-white/50 rounded-lg shadow-sm">
              <h1 className="text-3xl md:text-4xl font-semibold mb-2 text-center">Education</h1>
            </div>

            {/* Web Development */}
            <div className="p-4 bg-white/50 rounded-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Web Development</h3>
              <p>Java, React, Next.js</p>
              <p className="text-sm text-gray-700">
                Currently doing a module "Internet Programming" using Java.
              </p>
              <p className="text-sm text-gray-700">
                This website was made using Next.js.
              </p>
            </div>

            {/* Mobile Development */}
            <div className="p-4 bg-white/50 rounded-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
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
            <div className="p-4 bg-white/50 rounded-lg shadow-sm">
              <h3 className="text-3xl md:text-4xl font-semibold mb-2 text-center">Free Time</h3>
            </div>
          </div>

          {/* Right Side (Four Boxes) - Hidden on mobile for left boxes, shown for all on md screens */}
          <div className="hidden md:grid md:grid-rows-4 gap-8">
            {/* Skills (Repeated) */}
            <div className="p-4 bg-white/50 rounded-lg shadow-sm">
              <p>Tshwane University Of Technology</p>
              <p>-Diploma in Computer Science</p>
              <p className="text-sm text-gray-600">2022-2025</p>
              <p className="text-sm text-gray-700">
                Focusing on Java. Learned HTML, CSS, JavaScript, SQL, Kotlin
                and PL/SQL.
              </p>
            </div>

            <div className="p-4 bg-white/50 rounded-lg shadow-sm">
              <h3 className="text-4xl font-semibold mb-4">Skills</h3>
            </div>

            <div className="">
              {/* Empty box */}
            </div>

            <div className="p-4 text-2xl text-center bg-white/50 rounded-lg shadow-sm">
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

          {/* Mobile-only right content - These appear below the left side on mobile */}
          <div className="md:hidden grid grid-rows-4 gap-6">
            <div className="p-4 bg-white/50 rounded-lg shadow-sm">
              <p>Tshwane University Of Technology</p>
              <p>-Diploma in Computer Science</p>
              <p className="text-sm text-gray-600">2022-2025</p>
              <p className="text-sm text-gray-700">
                Focusing on Java. Learned HTML, CSS, JavaScript, SQL, Kotlin
                and PL/SQL.
              </p>
            </div>

            <div className="p-4 bg-white/50 rounded-lg shadow-sm">
              <h3 className="text-3xl font-semibold mb-4">Skills</h3>
            </div>

            <div className="p-4 bg-white/50 rounded-lg shadow-sm">
              {/* Empty box */}
            </div>

            <div className="p-4 text-xl text-center bg-white/50 rounded-lg shadow-sm">
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

        {/* Mobile-view */}
        <div className="md:hidden">
          {/* Edumacation*/}
          <div className="p-4 bg-white/50 rounded-lg shadow-sm">
            <h1 className="text-3xl font-semibold mb-2 text-center">Education</h1>
          </div>
          <div className="p-4 bg-white/50 rounded-lg shadow-sm">
            <p>Tshwane University Of Technology</p>
            <p>-Diploma in Computer Science</p>
            <p className="text-sm text-gray-600">2022-2025</p>
            <p className="text-sm text-gray-700">
              Focusing on Java. Learned HTML, CSS, JavaScript, SQL, Kotlin
              and PL/SQL.
            </p>
          </div>
          <div className="h-1 bg-[#45C4B0] w-full rounded-full justify-center my-5"></div>
          {/* Skills*/}
          <div className="p-4 bg-white/50 rounded-lg shadow-sm">
            <h3 className="text-4xl font-semibold mb-4">Skills</h3>
          </div>
          {/* Web Development */}
          <div className="p-4 bg-white/50 rounded-lg shadow-sm">
            <h3 className="text-xl  font-semibold mb-2">Web Development</h3>
            <p>Java, React, Next.js</p>
            <p className="text-sm text-gray-700">
              Currently doing a module "Internet Programming" using Java.
            </p>
            <p className="text-sm text-gray-700">
              This website was made using Next.js.
            </p>
          </div>

          {/* Mobile Development */}
          <div className="p-4 bg-white/50 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
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
          <div className="h-1 bg-[#45C4B0] w-full rounded-full justify-center my-5"></div>
          <div className="p-4 bg-white/50 rounded-lg shadow-sm">
            <h3 className="text-3xl md:text-4xl font-semibold mb-2 text-center">Free Time</h3>
          </div>
          <div className="p-4 text-xl text-center bg-white/50 rounded-lg shadow-sm">
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
  );
}

export default AboutSection;