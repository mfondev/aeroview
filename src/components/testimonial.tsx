"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { tstAnimation } from "./ui/animation";

export default function Testimonial() {
  useEffect(() => {
    tstAnimation()
  }, []);
  return (
    <main className="bg-[#eff0f3] pb-[230px] md:p-20 tst-container md:h-screen">
      <section className="flex flex-col md:flex-row items-center justify-between bg-white my-[200p] md:pl-10 p-4 container mx-auto  py-5 rounded-[20px] w-[80%]">
        <div className="space-y-6 md:max-w-[500px] " id="tst-text">
          <h5 className="text-center md:text-left font-bold">What Travelers Say</h5>
          <h1 className="text-xl md:text-[28px] text-center md:text-left">
            "Always though Google Flights showed the best deals. Had no idea
            airlines{" "}
            <span className="text-[#3a5ee6] font-bold">
              blocked off their cheapest tickets
            </span>{" "}
            with the only rule they can't be sold online."
          </h1>
          <span className="text-center md:text-left mt-2 md:mt-0">
            <h4 className="text-sm font-bold ">Jonathan Bustos</h4>
            <p>Dallas, TX</p>
          </span>
        </div>
        <div className="relative w-full md:w-[380px] h-[300px] md:h-[400px] overflow-hidden">
          <Image
            src="/images/traveler.jpg"
            alt="city"
            fill
            className="rounded-[10px] object-cover tst-img"
          />
        </div>
      </section>
    </main>
  );
}
