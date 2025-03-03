"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar relative z-10">
        <div className="md:hidden flex justify-end p-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
        </div>

        {/* Desktop view */}
        <ul className="hidden md:flex justify-end font-bold text-black md:text-[20px] lg:text-[25px] pt-7 gap-6">
                <li className = "hidden md:flex">
                    <div className = "item">
                        <a href="#work" className="px-4 py-2">Work Experiences</a>
                    </div>
                </li>
                <li className = "hidden md:flex">
                    <div className = "item">
                        <a href="#projects" className="px-4 py-2">Projects</a>
                    </div>
                </li>
                <li className = "hidden md:flex">
                    <div className = "item">
                        <a href="#contactme" className="px-4 py-2">Contact me</a>
                    </div>
                </li>
        </ul>

        {/* Mobile view */}
        {isOpen && (
        <ul
            className={`md:hidden absolute top-16 left-0 flex flex-col bg-white shadow-lg p-4 gap-4 w-full text-black font-semibold rounded-lg transform transition-opacity duration-300 ease-in-out`}
        >
          <li><a href="#work" className="px-4 py-2 block">Work Experiences</a></li>
          <li><a href="#home" className="px-4 py-2 block">Skills</a></li>
          <li><a href="#projects" className="px-4 py-2 block">Projects</a></li>
          <li><a href="#contactme" className="px-4 py-2 block">Contact me</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
