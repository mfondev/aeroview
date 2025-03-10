"use client";

import React, { useEffect } from "react";
import SeekFlights from "./seekFlights";
import { TbPlaneDeparture } from "react-icons/tb";
import { TbPlaneArrival } from "react-icons/tb";
import { IoCalendarNumberOutline } from "react-icons/io5";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function FlightHeader() {
  useEffect(() => {
    gsap.fromTo(
      "#hd-text",
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "ease.in",
        delay: 2,
      }
    );
  }, []);
  return (
    <>
      <header
        className="border  container mx-auto p-5 bg-white rounded-lg absolute left-1/2 bottom-[-70px] transform -translate-x-1/2"
        id="hd-text"
      >
        <SeekFlights />
        <main className="flex md:flex-row flex-col items-center justify-betweens border border-[#ecedef] rounded-[5px]  ">
          <div
            className="border-r-[1px] border-[#ecedef] md:pr-20 pl-2 flex items-center gap-3 p-2
          "
          >
            <TbPlaneDeparture className="text-black" />
            <div>
              <p className="text-[12px] md:text-[16px] text-[#a6abb8]">From</p>
              <h5 className="text-[12px] ">
                Jakarta
                <span className="text-[12px] md:text-[16px] text-[#a6abb8]">CGK</span>
              </h5>
            </div>
          </div>
          <div
            className="border-r-[1px] border-[#ecedef] md:pr-20 pl-2 flex items-center gap-3
          "
          >
            <TbPlaneArrival className="text-black" />
            <div>
              <p className="text-[12px] md:text-[16px] text-[#a6abb8]">To</p>
              <h5 className="text-[12px] ">
                Singapore
                <span className="text-[12px] md:text-[16px] text-[#282c35]">SIN</span>
              </h5>
            </div>
          </div>
          <div
            className="border-r-[1px] border-[#ecedef] md:pr-20 pl-2 flex items-center gap-3
          "
          >
            <IoCalendarNumberOutline className="text-black" />
            <div>
              <p className="text-[12px] md:text-[16px] text-[#a6abb8]">Departure Date</p>
              <h5 className="text-[12px] ">31/4/2024</h5>
            </div>
          </div>
          <div
            className="border-r-[1px] border-[#ecedef] md:pr-20 pl-2 flex items-center gap-3
          "
          >
            <IoCalendarNumberOutline className="text-black" />
            <div>
              <p className="text-[12px] md:text-[16px] text-[#a6abb8]">Return Date</p>
              <h5 className="text-[12px] ">3/17/2024</h5>
            </div>
          </div>
          <button className="bg-[#3661eb] text-white py-2 px-4 rounded-[5px] ml-10">
            Search Flights
          </button>
        </main>
      </header>
    </>
  );
}
