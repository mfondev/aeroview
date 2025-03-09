"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import ContactForm from "./contactForm";
import { ctaAnimation } from "../ui/animation";
import { generateGridItems } from "../ui/gridItems";

export default function Cta() {
  useEffect(() => {
    ctaAnimation();
  });

  return (
    <>
      <section
        className=" relative w-[70%] bg-[#dde9f7] flex gap-10 p-10 container mx-auto rounded-[20px] justify-between overflow-hidden"
        id="cta-area"
      >
        <div className="grid-container h-full w-full absolute border border-red border-1 inset-0 ">
          {generateGridItems()}
        </div>
        <div className="max-w-[450px] flex flex-col justify-between">
          <h2 className="text-[32px]  mb-8" id="cta-text">
            Sit back. Let our team do all the work.
          </h2>
          <div className="relative w-[420px] h-[360px]">
            <Image
              src="/images/trraveler2.jpg"
              alt="traveler"
              fill
              className="rounded-[20px object-cover cta-img"
            />
          </div>
        </div>
        <div className="max-w-[450px] z-30">
          <p className="text-[#52565f] text-[16px] mt-8" id="cta-text">
            Dont waste any time. Let our friendly, expert team of agents find
            the best options for your route.
          </p>
          <div id="cta-text">
          <ContactForm />

          </div>
        </div>
      </section>
    </>
  );
}
