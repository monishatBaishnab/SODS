import Image from "next/image";
import React from "react";

const Latest = () => {
  return (
    <div className="container !max-w-screen-lg py-10 space-y-10">
      <h4 className="mb-10 text-center text-2xl font-bold text-black xl:text-3xl">
        The Latest at SODS
      </h4>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="shadow rounded-xl overflow-hidden relative pb-5">
          <div className="h-32 w-full overflow-hidden">
            <Image
              className="size-full object-cover"
              src="https://www.sods.sk.ca/Portals/0/adam/Features/p8ratvvxFE2nLv-3zlnXfw/Image/ADAG2025-HomepageGraphic-New-01.png?w=482&h=200&mode=crop&anchor=middlecenter"
              alt="SODS"
              width={100}
              height={100}
            />
          </div>
          <div className="space-y-3 p-5 pb-10">
            <h5 className="text-lg/tight font-semibold">
              Limited tickets remaining!
            </h5>
            <p>60% of tickets already sold! Grab yours today</p>
            <button className="absolute left-5 bottom-5 bg-[#006d9b] hover:bg-[#005d84] px-4 py-1 text-sm rounded-full transition-all text-white">
              Learn More
            </button>
          </div>
        </div>
        <div className="shadow rounded-xl overflow-hidden relative pb-5">
          <div className="h-32 w-full overflow-hidden">
            <Image
              className="size-full object-cover"
              src="https://www.sods.sk.ca/Portals/0/adam/Features/3ceIg6jQV0iOoF0plD1Anw/Image/Call-for-Submission-Graphic.jpg?w=482&h=200&mode=crop&anchor=middlecenter"
              alt="SODS"
              width={100}
              height={100}
            />
          </div>
          <div className="space-y-3 p-5 pb-10">
            <h5 className="text-lg/tight font-semibold">
              THREADS 2025 - Call for Submission
            </h5>
            <p>
              The call is now closed, and thank you to all who sent in their
              work.
            </p>
            <button className="absolute left-5 bottom-5 bg-[#006d9b] hover:bg-[#005d84] px-4 py-1 text-sm rounded-full transition-all text-white">
              Learn More
            </button>
          </div>
        </div>
        <div className="shadow rounded-xl overflow-hidden relative pb-5">
          <div className="h-32 w-full overflow-hidden">
            <Image
              className="size-full object-cover"
              src="https://www.sods.sk.ca/Portals/0/adam/Features/EL1UPndRqUuwNX83gT-vkg/Image/Newcomer-Skills-Training-Centre-Poster.jpg?w=482&h=200&mode=crop&anchor=middlecenter"
              alt="SODS"
              width={100}
              height={100}
            />
          </div>
          <div className="space-y-3 p-5 pb-10">
            <h5 className="text-lg/tight font-semibold">
              Saskatchewan’s First-Ever Newcomer Skills Training Centre
            </h5>
            <p>
              The Saskatoon Open Door Society is launching a unique program to
              equip newcomers with job-readiness skills, industry training, and
              employer connections.
            </p>
            <button className="absolute left-5 bottom-5 bg-[#006d9b] hover:bg-[#005d84] px-4 py-1 text-sm rounded-full transition-all text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
