"use client";

import React, { useEffect, useRef } from "react";
import FlightHeader from "./flightHeader";
import AvailableFlights from "./availableFlights";
import SearchFlights from "./searchFlights";
import Contact from "./contact";
import FlightsLink from "./flightsLink";
import { FaPlane } from "react-icons/fa";
import Image from "next/image";
import { flightAnimation, imageSlide } from "../ui/animation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function FlightPage() {
  const container = useRef(null);

  useEffect(() => {
    flightAnimation();
    // header animation
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ".main-area", start: "top center" },
    });
    
    tl.to(".head-text1", { y: -35, duration: 1 });
    tl.to(".head-text2", { y: -34, duration: 0.5 });
    tl.fromTo('.area-section',{
      y: 100,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.5,
    } , "-=1");
  }, []);

  return (
    <>
      <FlightHeader />
      <AvailableFlights />
      <div className="bg-[#3661eb] w-full">
        <div
          className=" max-w-[70%] pl-16 py-20 text-white text-left cunt"
          ref={container}
        >
          <h3 className="text-[48px] leading-[55px]  myText">
            Airlines save a number of <br />{" "}
            <span className="bg-[#95adfc] shadow-sm text-[20px] rounded-full py-2 px-4">
              $7,084
            </span>{" "}
            discounted seats for every <br /> flight{" "}
            {/*<div><FaPlane className="text-white" /> </div>*/}called
            "consolidator" fares. <br />
            Now they're yours.{" "}
            {/*<div className="flex items-center ">
                    <Image
                      src="/images/aeroview_logo.svg"
                      alt="aero view logo"
                      width={20}
                      height={20}
                      className=""
                    />
                    <h1>Aeroview</h1>
                  </div> */}
          </h3>
          <p className="text-[16px] py-4">
            After clicking search we will send your private fares directly to
            your email. No waiting around
          </p>
        </div>
      </div>
      <main className="bg-[#dee4eb] main-area">
        <section className="">
          <article className="container mx-auto py-16">
            <div className="flex  items-center justify-center flex-col">
              <div className="flex items-center text-center text-3xl max-w-[450px] mx-auto">
                <span className="flex flex-col h-[40px] overflow-hidden head-text">
                  <span className="text-[#a7a7a7] text-[26px] font-bold head-text1">
                    So easy
                  </span>
                  <span className="text-[#4360ba] text-[26px] font-bold head-text2">
                    So easy
                  </span>
                </span>
                , Grandma could do it{" "}
              </div>
              <div className="flex items-center text-center text-3xl max-w-[450px] mx-auto">
                <span className="flex flex-col h-[40px] overflow-hidden head-text">
                  <span className="text-[#a7a7a7] text-[26px] font-bold head-text1">
                    Save thousands.
                  </span>
                  <span className="text-[#4360ba] text-[26px] font-bold head-text2">
                    Save thousands.
                  </span>
                </span>
                <p className="ml-1">
                  {"   "}
                  In 3 easy steps
                </p>
              </div>
              <p className="text-[#a6abb8] text-center">
                Discounted, "insider" fares. At your fingertips.
              </p>
            </div>
            <main className="py-8 flex flex-row  justify-center  gap-2">
              <SearchFlights  />
              <Contact />
              <FlightsLink />
            </main>
            <button className="flex items-center justify-between bg-[#3661eb] text-white py-2 px-4 rounded-[5px] text-center mx-auto">
              Search Now
            </button>
          </article>
        </section>
      </main>
    </>
  );
}
