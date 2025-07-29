"use client";
import { Button } from "@/components/ui/button";
import { AlignJustify, X } from "lucide-react";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-custom-blue z-50 transform transition-transform duration-300 ease-in-out shadow-xl lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col h-full p-6">
          {/* Logo in mobile menu */}
          <div className="flex items-center justify-between mb-10">
            <span className="text-2xl font-medium text-white">SkillOrBit</span>
            <button
              onClick={toggleMenu}
              className="p-2 text-white rounded-full focus:outline-none"
            >
              <X />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col space-y-6 text-white font-medium flex-grow">
            <li className="hover:text-blue-200" onClick={toggleMenu}>
              Academy
            </li>
            <li className="hover:text-blue-200" onClick={toggleMenu}>
              Course Catalog
            </li>
            <li className="hover:text-blue-200" onClick={toggleMenu}>
              Corporate Solutions
            </li>
            <li className="hover:text-blue-200" onClick={toggleMenu}>
              Contact
            </li>
          </ul>

          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-4 mt-auto">
            <Button
              variant="outline"
              className="w-full cursor-pointer"
              onClick={toggleMenu}
            >
              Register
            </Button>
            <Button
              variant="outline"
              className="w-full bg-transparent text-white hover:bg-transparent hover:text-white cursor-pointer"
              onClick={toggleMenu}
            >
              Apply
            </Button>
          </div>
        </nav>
      </div>

      {/*............ Main Navbar .............*/}
      <nav className="flex items-center justify-between py-4 md:py-5 px-4 xl:px-20 mx-auto mt-4 md:mt-8 bg-custom-blue rounded-2xl shadow-lg">
        {/* Left section: Hamburger menu and Logo */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu Icon */}
          <button
            onClick={toggleMenu}
            className={`p-2 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden transition-transform duration-300 ${
              isMenuOpen ? "transform rotate-90" : ""
            }`}
          >
            <AlignJustify />
          </button>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-medium text-white">SkillOrBit</span>
          </div>
        </div>

        {/* Middle section: Navigation Links */}
        <ul className="hidden space-x-8 text-white font-medium lg:flex">
          <li className="hover:text-blue-200">Academy</li>
          <li className="hover:text-blue-200">Course Catalog</li>
          <li className="hover:text-blue-200">Corporate Solutions</li>
          <li className="hover:text-blue-200">Contact</li>
        </ul>

        {/* Right section: Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="outline" className={"cursor-pointer"}>
            Register
          </Button>
          <Button
            variant="outline"
            className="bg-transparent text-white hover:bg-transparent hover:text-white cursor-pointer"
          >
            Apply
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Header;
