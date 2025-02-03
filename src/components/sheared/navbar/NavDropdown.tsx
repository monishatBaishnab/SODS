"use client";

import React from "react";
import { FaChevronDown } from "react-icons/fa";

const NavDropdown = ({
  label,
  options,
  isOpen,
  onOpen,
}: {
  label: string;
  options: string[];
  isOpen: boolean;
  onOpen: () => void;
}) => {
  return (
    <div className="relative">
      <button
        onClick={onOpen}
        className={`text-blue-950/90 w-full flex items-center gap-2 px-5 py-1 text-lg font-bold  lg:justify-center xl:px-8 xl:text-xl ${
          isOpen && "underline underline-offset-2"
        }`}
      >
        {label}
        <FaChevronDown
          className={`text-base mt-2 transition-all ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        className={`absolute py-4 left-0 right-0 m-auto top-full min-h-20 bg-white w-[250px] z-50 rounded-lg border-t-4 border-t-[rgb(0,_109,_155)] transition-all shadow-xl ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {options?.map((option) => (
          <a key={option} className="text-lg block px-4 py-2 hover:underline hover:underline-offset-2" href="#" onClick={onOpen}>
            {option}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavDropdown;
