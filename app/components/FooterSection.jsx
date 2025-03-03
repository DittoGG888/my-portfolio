import React from "react";

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

  export default Footer