import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/CircleImg.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currTime = new Date().toLocaleTimeString();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="animate-slidein pb-10 pt-8">
      <nav className="text-black py-4 px-6 flex items-center justify-between">
        {/* Timer and Title */}
        <div className="uppercase text-xl flex gap-5 text-gray-400">
          <span className="hidden md:block">Local/</span>
          <h3 className="hidden md:block text-black">{currTime}</h3>
        </div>

        {/* Image for larger screens */}
        <div className="hidden md:block">
          <img
            className="inline-block size-[62px] rounded-lg"
            src={img}
            alt="Avatar"
          />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="focus:outline-none">
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <ul
          className={`flex-col md:flex md:flex-row gap-10 absolute md:static bg-white md:bg-transparent top-16 right-0 md:top-auto md:right-auto w-full md:w-auto transform md:transform-none transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:translate-x-0`}
        >
          <li className="md:hidden py-2 px-4 text-right">
            <button onClick={toggleMenu} className="focus:outline-none text-gray-400">Close</button>
          </li>
          <li>
            <Link
              to="/Contact"
              className="bg-black text-white text-sm font-bold py-2 px-6 rounded-full shadow-md hover:bg-gray-800 transition duration-300"
            >
              CONTACT
            </Link>
          </li>
          <li>
            <Link
              to="/Project"
              className="  text-sm font-bold  text-black py-2 px-6"
            >
              Project
            </Link>
          </li>
        </ul>
      </nav>

      <div className="pt-5">
        <hr className="w-screen bg-black" />
      </div>
    </div>
  );
}

export default Navbar;
