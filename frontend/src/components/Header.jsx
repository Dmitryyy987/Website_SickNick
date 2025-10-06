import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex justify-between items-center py-5">
          <a href="#" className="text-3xl font-black tracking-tighter text-white">
            SICK<span className="text-red-500">NICK</span>
          </a>
          <div className="hidden md:flex space-x-10 text-lg font-medium">
            <a href="#services" className="text-gray-400 hover:text-white transition duration-200">Services</a>
            <a href="#portfolio" className="text-gray-400 hover:text-white transition duration-200">Portfolio</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition duration-200">Contact</a>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white hover:text-gray-300 focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-[#111]">
          <a href="#services" className="block py-3 px-6 text-gray-300 hover:bg-gray-800" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#portfolio" className="block py-3 px-6 text-gray-300 hover:bg-gray-800" onClick={() => setMenuOpen(false)}>Portfolio</a>
          <a href="#contact" className="block py-3 px-6 text-gray-300 hover:bg-gray-800" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;