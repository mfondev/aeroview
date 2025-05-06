"use client";
import React, { useEffect, useRef } from "react";
import { flightAnimation } from "../ui/animation";
import { generateGridItems } from "../ui/gridItems";

export default function FlightInfo() {
  const container = useRef(null);
  useEffect(() => {
    flightAnimation();
  }, []);
  return (
    <>
      <div className="  flex items-end md:h-screen">
        <div className="p-4 md:0 relative md:h-[90vh] flex items-center justify-cente mt-5 bg-[#3661eb] w-full">
          <div className=" grid-container h-full w-full absolute border border-white border-1 inset-0 ">
            {generateGridItems("#3661eb", "15px")}
          </div>
          <div
            className="max-w-full md:max-w-[70%] md:pl-16  md:py-20  text-white text-left cunt  z-30"
            ref={container}
          >
            <h3 className="text-[24px] md:text-[52px] md:leading-[55px]  myText">
              Airlines save a number of $7,084 discounted seats for every flight
              called "consolidator" fares. Now they're yours.{" "}
            </h3>
            <p className="text-sm md:text-[16px] py-4">
              After clicking search we will send your private fares directly to
              your email. No waiting around
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
