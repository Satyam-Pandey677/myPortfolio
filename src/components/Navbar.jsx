import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { name: "Home", url: "home" },
    { name: "About", url: "about" },
    { name: "Skills", url: "skill" },
    { name: "Project", url: "project" },
  ];

  return (
    <nav className="w-full fixed top-6 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between bg-white/80 backdrop-blur-xl border border-gray-200 shadow-lg rounded-full py-4 px-8 transition-all duration-300">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight hover:text-blue-600 cursor-pointer transition-colors">
            Satyam<span className="text-blue-600">.</span>
          </h1>

          {/* Desktop Nav */}
          <ul className="hidden sm:flex gap-10 text-gray-700 font-medium">
            {items.map((item, index) => (
              <a
                key={index}
                href={`#${item.url}`}
                className="cursor-pointer hover:text-blue-600 transition-colors relative group scroll-smooth"
              >
                {item.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </ul>

          {/* CTA Button */}
          <button className="hidden sm:inline-flex bg-blue-600 text-white font-medium px-5 py-2 rounded-full shadow hover:bg-blue-700 transition-all duration-300">
            Let’s Talk
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="sm:hidden mt-3 bg-white/90 backdrop-blur-lg rounded-2xl shadow-md border border-gray-100 p-4 text-center">
            <ul className="flex flex-col gap-4 text-gray-700 font-medium">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.url}`}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <button className="bg-blue-600 text-white font-medium px-5 py-2 rounded-full shadow hover:bg-blue-700 transition-all duration-300">
                Let’s Talk
              </button>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
