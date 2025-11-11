import React, { useState } from "react";
import logo from "./../assets/logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full h-20 bg-custom-red z-50">
      <div className="w-full md:w-4/5 mx-auto h-full flex justify-between items-center px-4 md:px-0">
        <div className="w-16 md:w-20">
          <img src={logo} alt="Logo" className="w-full h-auto" />
        </div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <ul className={`md:flex md:items-center md:gap-8 text-white font-normal text-lg absolute md:static bg-custom-red md:bg-transparent w-full md:w-auto left-0 transition-all duration-300 ease-in ${
          isOpen ? 'top-20' : '-top-96'
        }`}>
          <li className="py-4 md:py-0 px-4 md:px-0 border-b-2 border-white md:border-b-3 hover:opacity-80 cursor-pointer">Home</li>
          <li className="py-4 md:py-0 px-4 md:px-0 hover:opacity-80 cursor-pointer">Service</li>
          <li className="py-4 md:py-0 px-4 md:px-0 hover:opacity-80 cursor-pointer">Teams</li>
          <li className="py-4 md:py-0 px-4 md:px-0 hover:opacity-80 cursor-pointer">About</li>
          <li className="py-4 md:py-0 px-4 md:px-0">
            <button className="bg-custom-blue text-white px-6 md:px-8 py-2 rounded-full text-lg md:text-xl hover:opacity-90 transition">Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
