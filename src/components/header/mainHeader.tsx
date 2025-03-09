"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/navigation/navbar";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import FlightHeader from "../flights/flightHeader";
gsap.registerPlugin(ScrollTrigger);
import { generateGridItems } from "../ui/gridItems";
import { mainHeaderText } from "../ui/gridItems";
import Org from "../flights/org";
import AnimatedList from "./animatedList";

export default function MainHeader() {
  useEffect(() => {
    const gridItems = gsap.utils.toArray(".grid-item");

    const handleMouseMove = (e: any) => {
      gridItems.forEach((item: any) => {
        const rect = item.getBoundingClientRect();
        const itemX = rect.left + rect.width / 2;
        const itemY = rect.top + rect.height / 2;
        const distance = Math.hypot(itemX - e.clientX, itemY - e.clientY);
        // console.log(itemX, itemY, distance);

        const maxDistance = 190;

        if (distance > maxDistance) {
          gsap.to(item, {
            boxShadow: "none",
            duration: 0.3,
            ease: "power2.out",
          });
          return;
        }

        const shadowBlur = Math.min((1 - distance / maxDistance) * 5, 5);
        const shadowOffsetX = (itemX - e.clientX) / 200;
        const shadowOffsetY = (itemY - e.clientY) / 200;

        gsap.to(item, {
          boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px rgba(0, 0, 0, 0.2)`, // Subtle shadow with lower opacity
          duration: 0.3,
          ease: "power2.out",
        });
      });
    };
    mainHeaderText();

    document.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="h-screen">
    <main className="bg-[#dde9f7 relative h-[65vh]">
      <div className="grid-container h-full w-full absolute border border-red border-1">
        {generateGridItems()}
      </div>
      <Navbar />
      <main className="flex items-center justify-center">
        <section className="container flex items-center justify-between mx-auto px-[40px] py-8 z-10">
          <div id="fl-text">
            <h2 className="text-4xl max-w-[600px] font-bold">
              Save up to 64% on international Business & First Class.{" "}
              <span className="italic">Instantly</span>.
            </h2>
            <p className="text-[#929daf] mt-4">
              Unlock exclusive access to private fares airlines dont want you to
              see. Using Basis
            </p>
          </div>
          <section id="fl-text">
            <div className="bg-[#ffffff] p-4 rounded-[5px]">
              <h4 className="text-[10px] text-[#a0b5f4] bg-[#e9f0fa] mb-2 uppercase">
                Business class
              </h4>
              <header className="flex items-center justify-between gap-[110px] mb-4">
                <h3 className="text-sm ">
                  Denpasar <span className="font-bold">(DPS)</span>
                </h3>
                <h3 className="text-sm ">
                  Seoul <span className="font-bold">(ICN)</span>
                </h3>
              </header>
              {/* <div>
                <ul className="flex flex-col gap-1">
                  <li className="flex items-center justify-between">
                    <h6 className="text-sm">United</h6>
                    <p className="text-sm">$4,215.00</p>
                  </li>
                  <li className="flex items-center justify-between">
                    <h6 className="text-sm">Katak</h6>
                    <p className="text-sm">$4,215.00</p>
                  </li>
                  <li className="flex items-center justify-between">
                    <h6 className="text-sm">Basis</h6>
                    <p className="text-sm">$4,215.00</p>
                  </li>
                  <li className="flex items-center justify-between">
                    <h6 className="text-sm">Expedia</h6>
                    <p className="text-sm">$4,215.00</p>
                  </li>
                  <li className="flex items-center justify-between ">
                    <h6 className="text-sm">
                      Booking
                      <span className="text-[#44b9c3] font-bold">.com</span>
                    </h6>
                    <p className="text-sm">$4,215.00</p>
                  </li>
                </ul>
              </div> */}
              <AnimatedList />
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="flex items-center justify-center mt-4 gap-4 bg-[#ffffff] rounded-3xl p-2 w-fit text-center">
                <p className="text-sm">Saved</p>
                <span className="text-[#3c66eb] font-bold text-sm">
                  $1,304.00
                </span>
              </div>
            </div>
          </section>
        </section>
      </main>
     
      <FlightHeader />
    </main>
    <Org/>

    </div>

  );
}
