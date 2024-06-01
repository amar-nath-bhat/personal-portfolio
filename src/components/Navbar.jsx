import React, { useState } from "react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="bg-gray-800 md:flex flex justify-around md:justify-between px-4 py-4 md:px-16">
      <a href="/">
        <img className="w-16 h-16" src="A.png" alt="A" />
      </a>
      <ul className="flex space-x-4 md:space-x-8 text-xl md:text-2xl items-center justify-center">
        <li>
          <a className="text-white hover:text-gray-300" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="text-white hover:text-gray-300" href="/projects">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
