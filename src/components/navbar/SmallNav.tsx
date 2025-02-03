import { navItems } from "@/constants/nav.constants";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const SmallNav = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="py-20">
      <div>
        {navItems?.map((item) => (
          <div key={item.path}>
            <button
              onClick={() =>
                setOpenDropdown((prev) =>
                  prev === item.label ? null : item.label,
                )
              }
              className={`text-lg font-bold text-blue-950/90 flex justify-between w-full px-4 py-3 ${
                openDropdown === item.label ? "border-b-0 underline underline-offset-2" : "border-b"
              } last:border-b-0`}
            >
              {item?.label}
              <FaChevronDown className="mt-1" />
            </button>
            <div
              className={`px-4 transition-all ${
                openDropdown === item.label
                  ? "visible opacity-100 h-full"
                  : "invisible opacity-0 h-0"
              }`}
            >
              <div className="min-h-20 bg-white w-full rounded-lg border-t-4 border-t-[rgb(0,_109,_155)] transition-all shadow-lg">
                {item?.children?.map((option) => (
                  <a
                    key={option}
                    className="text-lg block px-4 py-2 hover:underline hover:underline-offset-2"
                    href="#"
                    // onClick={}
                  >
                    {option}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t mt-10">
        {/* Buttons */}
        <div className="space-x-3 space-y-3 px-4 py-5">
          <button className="bg-[rgb(176_210_54)] hover:bg-[rgba(176,_210,_54,_0.8)] px-4 py-1 text-sm rounded-full transition-all">
            Volunteer
          </button>
          <button className="bg-[rgb(206_71_37)] hover:bg-[rgba(206,_71,_37,_0.8)] px-4 py-1 text-sm rounded-full transition-all text-white">
            Donate
          </button>
          <button className="bg-[#006d9b] hover:bg-[#005d84] px-4 py-1 text-sm rounded-full transition-all text-white">
            Become a Client
          </button>
        </div>
        <div>
          <a
            href="#"
            className="px-4 py-3 block hover:underline hover:underline-offset-2"
          >
            Become a Member
          </a>
          <a
            href="#"
            className="px-4 py-3 block hover:underline hover:underline-offset-2"
          >
            Careers
          </a>
          <a
            href="#"
            className="px-4 py-3 block hover:underline hover:underline-offset-2"
          >
            Contact
          </a>
          <a
            href="#"
            className="px-4 py-3 block hover:underline hover:underline-offset-2"
          >
            Calendar
          </a>
        </div>
      </div>
    </div>
  );
};

export default SmallNav;
