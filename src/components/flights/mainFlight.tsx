"use client";

import React, { useEffect } from "react";
import SearchFlights from "./searchFlights";
import Contact from "./contact";
import FlightsLink from "./flightsLink";
import {modalSlide } from "../ui/animation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function FlightPage() {
  useEffect(() => {
  
    modalSlide();
  }, []);

  return (
    <>
      <main className="bg-[#dee4eb] flex items-center justify-center main-area md:h-screen">
        <section className="">
          <article className="container mx-auto py-10">
            <div className="flex items-center justify-center flex-col">
              <div className="flex items-center text-center text-2xl md:text-3xl max-w-[450px] mx-auto">
                <span className="flex flex-col h-[40px] overflow-hidden head-text">
                  <span className="text-[#a7a7a7] text-[22px] md:text-[26px] font-bold head-text1">
                    So easy
                  </span>
                  <span className="mt-1 md:mt-0 text-[#4360ba] text-[22px] md:text-[26px] font-bold head-text2">
                    So easy
                  </span>
                </span>
                , Grandma could do it{" "}
              </div>
              <div className="flex items-center text-center text-2xl md:text-3xl max-w-[450px] mx-auto">
                <span className="flex flex-col h-[40px] overflow-hidden head-text">
                  <span className="text-[#a7a7a7] text-[22px] md:text-[26px] font-bold head-text1">
                    Save thousands.
                  </span>
                  <span className="mt-1 md:mt-0 text-[#4360ba] text-[22px] md:text-[26px] font-bold head-text2">
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
            <main className="py-8 flex items-center md:items-stretch flex-col md:flex-row  md:justify-center gap-6 md:gap-2">
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
