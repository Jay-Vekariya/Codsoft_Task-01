import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [Togglebutton, settogglebutton] = useState(false);

  const handleToggle = () => {
    settogglebutton(!Togglebutton);
  };

  return (
    <>
      <div>
        <nav className="bg-[#FFFFFF20] flex items-center justify-between px-16 h-16 fixed w-full top-0 z-1 lg:gap-8">
          <h1 className="text-2xl font-bold border-2 px-2 py-1 whitespace-nowrap text-white">
            Personal Portfolio Website
          </h1>
          <div
            className={`lg:flex ${
              Togglebutton ? "block" : "hidden"
            } absolute top-[64px] left-0 max-lg:bg-[#FFFFFF20] md:justify-center md:flex-col md:items-center sm:justify-center sm:flex-col sm:items-center   w-full flex gap-4 py-2 text-lg text-white lg:static lg:flex-row lg:justify-between`}
          >
            <ul className="flex flex-col items-center gap-6 text-[20px] lg:flex-row lg:gap-8">
              <li className="hover:text-purple-500">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="hover:text-purple-500">
                <NavLink to="/Project">Project showcase</NavLink>
              </li>
              <li className="hover:text-purple-500">
                <NavLink to="/About">About me</NavLink>
              </li>
            </ul>
            <div>
              <button className="border-1 px-2 py-1 rounded-md bg-purple-500 lg:flex-row lg:gap-8">
                <NavLink to="/ContactForm">Contact</NavLink>
              </button>
            </div>
          </div>
          <div>
            <p onClick={handleToggle} className="cursor-pointer lg:hidden">
              &#9776;
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
