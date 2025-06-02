import React from "react";

function ProjectsSection() {
    return (
      <div className="py-16" id="projects">
        <div className="container mx-auto px-4 min-h-screen">
          <h2 className="text-5xl font-bold text-center mb-8 text-white">Projects</h2>
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
  
  export default ProjectsSection