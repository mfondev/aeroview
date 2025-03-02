"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useGetFlights } from "../../../utils/hooks/getFlights";
import { FaPlane } from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AvailableFlights() {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#flight-header",
        start: "top 20%",
        // markers: true,
      },
    });
    document.querySelectorAll("#flight-status").forEach(element => {
      timeline.fromTo(
        element,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "expo.in" }
      );
    })
 
  }, []);

  const moveFlight = () => {
    const tl = gsap.timeline();
    tl.from(".flight-svg", { x: -45 });
    tl.to(".flight-svg", { x: 46, duration: 1 });
  };
  const resetFlight = () => {
    gsap.to(".flight-svg", { x: 0, duration: 1 });
  };

  //   if (hover) {
  // gsap.fromTo(".flight-svg",{x:-200},{x:46, duration: 1})

  //   }

  // }, []);
  // const { data, isLoading, isError, error } = useGetFlights();
  // console.log(data);

  return (
    <main
      className="grid grid-cols-1 justify-items-center my-8"
      id="flight-header"
    >
      <header className="text-center">
        <h2 className="text-3xl">
          <span className="text-[#3661eb] font-bold">Save today</span>. Pack
          your bags tomorrow.
        </h2>
        <p className="text-[#929daf] mt-2">
          Acess deals your friends wont stop asking you about.
        </p>
      </header>
      <div
        className={`bg-blue hover:border hover:border-[#3661eb] transform transition duration-200 hover:scale-105 mt-8 bg-white shadow-2xl rounded-[20px] border-white`}
        onMouseEnter={moveFlight}
        onMouseLeave={resetFlight}
      >
        <div className="relative mb-4 overflow-hidden">
          <h4
            className="text-[12px] px-3 py- text-[#446ef7] bg-[#fff] uppercase rounded-r-[5px] absolute top-4 "
            id="flight-status"
          >
            Business class
          </h4>
          <Image
            src="/images/dummy-image.jpg"
            alt="city"
            width={350}
            height={400}
            className="rounded-t-[20px] "
          />
        </div>
        <div className="flex items-center justify-between text-sm px-4">
          <p>
            Jakarta <span className="font-bold">(CGK)</span>
          </p>
          <div className="flex items-center justify-center relative">
            <FaPlane className="text-[#3661eb] flight-svg z-[30] absolute -top-0 text-[18px]" />
            <p className="relative z-[10] text-[#e5eaf0d2] font-bold">
              - - - - - - - - -
            </p>
          </div>
          <p>
            New York <span className="font-bold">(JFK)</span>
          </p>
        </div>
        <div className="bg-[#e5eaf0d2] flex items-center justify-between text-sm p-2 px-3 mt-4 rounded-lg mx-4 mb-3">
          <div className="flex items-center ">
            <Image
              src="/images/aeroview_logo.svg"
              alt="aero view logo"
              width={20}
              height={20}
              className=""
            />
            <h1>Aeroview</h1>
          </div>
          <span className="flex items-center gap-2">
            <p className=" text-[#a6abb8]">from</p>
            <p className="text-[#3661eb] font-extrabold text-[18px] italic">
              $282
            </p>
          </span>
        </div>
      </div>
    </main>
  );
}
