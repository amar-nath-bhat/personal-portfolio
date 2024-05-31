import React, { useState } from "react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="bg-gray-800 md:flex flex flex-col justify-between">
      <div className="md:flex flex justify-between w-full flex-wrap">
        <a
          className="text-white text-2xl font-bold px-8 py-4 md:w-2/3 mx-15"
          href="/"
        >
          <img className="w-16 h-16" src="A.png" alt="A" />
        </a>
        <div className="hidden md:flex md:items-center md:justify-around px-6 py-4 md:w-1/3 gap-10">
          <ul className="flex space-x-8 text-2xl">
            <li>
              <a className="text-white hover:text-gray-300" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300" href="/projects">
                Projects
              </a>
            </li>
          </ul>
          <ul className="flex space-x-8 text-xl">
            <li>
              <a
                className="text-white hover:text-gray-300"
                href="https://www.instagram.com/amarbhat_20/"
              >
                <img
                  className="w-11 h-10 text-white"
                  src="instagram.png"
                  alt="Instagram"
                />
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-gray-300"
                href="https://x.com/BhatAmarnath"
              >
                <img
                  className="w-11 h-10 text-white"
                  src="twitter.png"
                  alt="X"
                />
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-gray-300"
                href="https://github.com/amar-nath-bhat"
              >
                <img
                  className="w-11 h-10 text-white"
                  src="github.png"
                  alt="GitHub"
                />
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-gray-300"
                href="http://www.linkedin.com/in/amarnath-bhat"
              >
                <img
                  className="w-11 h-10 text-white"
                  src="linkedin.png"
                  alt="LinkedIn"
                />
              </a>
            </li>
          </ul>
        </div>
        <a
          className="md:hidden flex items-center justify-around px-6 py-4 w-1/3 gap-10"
          href="/"
          onClick={toggleDropdown}
        >
          {!showDropdown && (
            <img src="hamburger.png" alt="hamburger" className="w-8 h-8" />
          )}
          {showDropdown && (
            <img src="cross.png" alt="cross" className="w-12 h-12" />
          )}
        </a>
      </div>
      {showDropdown && (
        <div className="md:hidden flex items-center justify-between bg-gray-800 mx-10 pb-4 px-3">
          <div className="flex flex-col gap-5">
            <a className="text-white hover:text-gray-300" href="/">
              Home
            </a>
            <a className="text-white hover:text-gray-300" href="/about">
              About
            </a>
            <a className="text-white hover:text-gray-300" href="/projects">
              Projects
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a
              className="text-white hover:text-gray-300"
              href="https://www.instagram.com/amarbhat_20/"
            >
              <img
                className="w-5 h-5 text-white"
                src="instagram.png"
                alt="Instagram"
              />
            </a>
            <a
              className="text-white hover:text-gray-300"
              href="https://x.com/BhatAmarnath"
            >
              <img className="w-5 h-5 text-white" src="twitter.png" alt="X" />
            </a>
            <a
              className="text-white hover:text-gray-300"
              href="https://github.com/amar-nath-bhat"
            >
              <img
                className="w-5 h-5 text-white"
                src="github.png"
                alt="GitHub"
              />
            </a>
            <a
              className="text-white hover:text-gray-300"
              href="http://www.linkedin.com/in/amarnath-bhat"
            >
              <img
                className="w-5 h-5 text-white"
                src="linkedin.png"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
