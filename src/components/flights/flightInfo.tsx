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
      <div className="  flex items-end h-screen">
        <div className="relative h-[90vh] flex items-center justify-cente mt-5 bg-[#3661eb] w-full">
          <div className=" grid-container h-full w-full absolute border border-white border-1 inset-0 ">
            {generateGridItems("#3661eb", "15px")}
          </div>
          <div
            className=" max-w-[70%] pl-16 py20  text-white text-left cunt  z-30"
            ref={container}
          >
            <h3 className="text-[52px] leading-[55px]  myText">
              Airlines save a number of <br />{" "}
              <span className="bg-[#abbefd] shadow-sm text-[14px] rounded-full py-0 px-6">
                $7,084
              </span>{" "}
              discounted seats for every <br /> flight called "consolidator"
              fares. <br />
              Now they're yours.{" "}
            </h3>
            <p className="text-[16px] py-4">
              After clicking search we will send your private fares directly to
              your email. No waiting around
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
