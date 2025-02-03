"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaBars, FaChevronDown, FaRegLightbulb } from "react-icons/fa";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import BgWrapper from "./BgWrapper";
import NavItems from "./NavItems";
import SmallNav from "./SmallNav";

const logos = [
  "https://www.sods.sk.ca/Portals/_default/skins/saskatoon-open-door-society/images/logos/we-connect-logo.webp",
  "https://www.sods.sk.ca/Portals/_default/skins/saskatoon-open-door-society/images/logos/threads-logo.svg",
  "https://www.sods.sk.ca/Portals/_default/skins/saskatoon-open-door-society/images/logos/womens-business-hub-logo.webp",
  "https://www.sods.sk.ca/Portals/_default/skins/saskatoon-open-door-society/images/logos/annual-diversity-awards-gala-logo.webp",
];

const Navbar = () => {
  const [isOpenSmallNav, setIsOpenSmallNav] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpenSmallNav(false);
      }
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Run on mount to check initial size
    handleResize();

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* Register section */}
      <div className="bg-[#536d0a] py-2">
        <div className="container flex items-center justify-center text-white h-10 text-sm gap-3">
          <FaRegLightbulb />
          <p>
            New to Saskatoon? Register with us as a new client by{" "}
            <span className="cursor-pointer underline">clicking here!</span>
          </p>
        </div>
      </div>

      {/* Language and quick links */}
      <div className="bg-gray-100 py-2">
        <div className="container flex gap-5 lg:gap-10 items-center justify-between lg:justify-end h-9">
          <div>
            <button className="px-4 py-1 rounded-full bg-white text-sm flex items-center gap-2 border border-gray-600">
              Select Language <FaChevronDown className="text-xs mt-0.5" />
            </button>
          </div>
          <div className="hidden lg:flex items-center gap-5 text-sm">
            <a href="#" className="hover:underline hover:underline-offset-2">
              Become a Member
            </a>
            <a href="#" className="hover:underline hover:underline-offset-2">
              Careers
            </a>
            <a href="#" className="hover:underline hover:underline-offset-2">
              Calendar
            </a>
          </div>
          <div className="relative">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="px-4 py-2 text-lg"
            >
              <IoSearchOutline />
            </button>
            <div
              className={`absolute right-0 top-full min-w-96 shadow-md bg-white flex items-center transition-all rounded-md overflow-hidden ${
                isSearchOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <div className="pl-4 text-lg pr-2">
                <IoSearchOutline />
              </div>
              <input className="w-full outline-none py-3" type="text" />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="bg-black text-white py-3 px-4"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Logos and action buttons */}
      <div className="bg-white py-5">
        <div className="container flex items-center justify-between gap-10">
          {/* Main Logo */}
          <a href="#" className="h-28 w-60 overflow-hidden">
            <Image
              className="size-full object-contain"
              src="https://www.sods.sk.ca/Portals/0/saskatoon-open-door-society-logo.svg?ver=MYiCvRe3BLjyb8buui13uw%3d%3d"
              alt="SODS"
              width={100}
              height={100}
            />
          </a>
          {/* Partial logos and buttons */}
          <div className="items-center justify-end gap-10 hidden lg:flex">
            {/* Partial Logos */}
            <div className="flex items-center gap-4">
              {logos?.map((logo) => (
                <a
                  href="#"
                  key={logo}
                  className="w-16 xl:w-24 h-full overflow-hidden group"
                >
                  <Image
                    className="size-full object-contain transition-all grayscale group-hover:filter-none"
                    width={100}
                    height={100}
                    src={logo}
                    alt={logo}
                  />
                </a>
              ))}
            </div>

            {/* Buttons */}
            <div className="space-x-3 space-y-3 border-l pl-10">
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
          </div>
          <button
            onClick={() => setIsOpenSmallNav(!isOpenSmallNav)}
            className="text-2xl block lg:hidden"
          >
            {!isOpenSmallNav ? <FaBars /> : <IoClose />}
          </button>
        </div>
      </div>
      {/* Small Navbar */}
      <div
        className={`container relative ${isOpenSmallNav ? "block" : "hidden"}`}
      >
        <div className="bg-gradient-to-t from-[hsla(75,27%,94%,1)] to-[hsla(75,27%,94%,1)]">
          <SmallNav />
        </div>
        <BgWrapper
          src="https://www.sods.sk.ca/Portals/_default/skins/saskatoon-open-door-society/images/pathways/bottom.webp"
          wrapperClass="left-0 right-0 top-0 rotate-180"
        />
      </div>

      {/* Nav Contents */}
      <div className="container">
        {/* Navbar */}
        <div className="relative py-14 bg-[hsl(75_27%_94%_/_1)] hidden lg:block">
          {/* Nav link items */}
          <NavItems />

          <BgWrapper
            src="https://www.sods.sk.ca/Portals/_default/skins/saskatoon-open-door-society/images/pathways/bottom.webp"
            wrapperClass="left-0 right-0 top-0 rotate-180"
          />
          <BgWrapper src="https://www.sods.sk.ca/Portals/_default/skins/saskatoon-open-door-society/images/pathways/top-blue.webp" />
        </div>
        {/* Signature line */}
        <div>
          <div
            className={`text-center bg-[rgb(0,_109,_155)] ${
              isOpenSmallNav ? "pt-7" : "pt-16"
            } pb-16 lg:pt-2 relative`}
          >
            <h1 className="m-0 text-balance px-5 text-center font-display text-3xl/tight font-bold text-white lg:text-5xl/tight xl:text-6xl/tight">
              Serving Newcomers Since 1980
            </h1>
            {isOpenSmallNav ? (
              <BgWrapper
                wrapperClass="left-0 right-0 bottom-full"
                src="https://www.sods.sk.ca/Portals/_default/skins/saskatoon-open-door-society/images/pathways/top-blue.webp"
              />
            ) : (
              <BgWrapper
                wrapperClass="left-0 right-0 -top-1 rotate-180 block lg:hidden"
                src="https://www.sods.sk.ca/Portals/_default/skins/saskatoon-open-door-society/images/pathways/bottom.webp"
              />
            )}
            <BgWrapper src="https://www.sods.sk.ca/Portals/_default/skins/saskatoon-open-door-society/images/pathways/bottom.webp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
