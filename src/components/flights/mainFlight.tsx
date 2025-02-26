"use client"
import React, { useEffect, useRef } from "react";
import FlightHeader from "./flightHeader";
import AvailableFlights from "./availableFlights";
import SearchFlights from "./searchFlights";
import Contact from "./contact";
import FlightsLink from "./flightsLink";
import { FaPlane } from "react-icons/fa";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function FlightPage() {
  const container = useRef(null);

  useEffect(() => {
    // ScrollTrigger.create({
    //   trigger:container.current,
    //   start: 'top top'
    // })
    gsap.set(container.current, { y: 150,opacity:0.5 });
    gsap.to(container.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        
      },
      y:0,
      opacity: 1,
      ease: "expo.out",
      duration: 0.5,
      // stagger: 0.5,
    });
  }, []);

  return (
    <>
      <FlightHeader />
      <AvailableFlights />
      <div className="bg-[#3661eb] w-full" >
        <div className=" max-w-[70%] pl-16 py-20 text-white text-left " ref={container}>
          <h3 className="text-[48px] leading-[55px]">
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
      <main className="bg-[#dee4eb] ">
        <section className="">
          <article className="container mx-auto py-16">
            <div>
              <h3 className="text-center text-3xl max-w-[450px] mx-auto">
                <span className="text-[#4360ba] text-[24px] font-bold">
                  So easy
                </span>
                , Grandma could do it{" "}
                <span className="text-[#4360ba] text-[24px] font-bold">
                  Save thousands.
                </span>{" "}
                In 3 easy steps
              </h3>
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
