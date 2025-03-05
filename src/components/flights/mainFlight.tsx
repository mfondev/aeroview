"use client";

import React, { useEffect, useRef } from "react";
import FlightHeader from "./flightHeader";
import AvailableFlights from "./availableFlights";
import SearchFlights from "./searchFlights";
import Contact from "./contact";
import FlightsLink from "./flightsLink";
import { FaPlane } from "react-icons/fa";
import Image from "next/image";
import { flightAnimation, modalSlide } from "../ui/animation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Org from "./org";
gsap.registerPlugin(ScrollTrigger);

export default function FlightPage() {
  const container = useRef(null);
  useEffect(() => {
    flightAnimation();
    // header animation
    modalSlide();
  }, []);

  return (
    <>
      {/* <FlightHeader /> */}
      <Org />
      <AvailableFlights />
      <div className="bg-[#3661eb] w-full h-[80vh] flex items-center mt-5">
        <div
          className=" max-w-[70%] pl-16 py20  text-white text-left cunt"
          ref={container}
        >
        
          <h3 className="text-[52px] leading-[55px]  myText">
            Airlines save a number of <br />{" "}
            <span className="bg-[#abbefd] shadow-sm text-[14px] rounded-full py-0 px-6">
              $7,084
            </span>{" "}
            discounted seats for every <br /> flight{" "}
        
            called
            "consolidator" fares. <br />
            Now they're yours.{" "}
           
          </h3>
          <p className="text-[16px] py-4">
            After clicking search we will send your private fares directly to
            your email. No waiting around
          </p>
        </div>
      </div>
      <main className="bg-[#dee4eb] main-area">
        <section className="">
          <article className="container mx-auto py-20">
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
              <SearchFlights />
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
