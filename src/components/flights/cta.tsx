"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import ContactForm from "./contactForm";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ctaAnimation } from "../ui/animation";
gsap.registerPlugin(ScrollTrigger);

export default function Cta() {
  useEffect(() => {
    ctaAnimation();
  });

  return (
    <>
      <section
        className="w-[70%] bg-[#dde9f7] flex gap-10 p-10 container mx-auto rounded-[20px]"
        id="cta-area"
      >
        <div className="max-w-[450px] flex flex-col justify-between">
          <h2 className="text-[32px]  mb-8" id="cta-text">
            Sit back. Let our team do all the work.
          </h2>
          <div className="relative w-[420px] h-[360px]">
            <Image
              src="/images/dummy-image.jpg"
              alt="city"
              fill
              className="rounded-[20px object-cover cta-img"
            />
          </div>
        </div>
        <div className="max-w-[450px]">
          <p className="text-[#52565f] text-[16px] mt-8" id="cta-text">
            Dont waste any time. Let our friendly, expert team of agents find
            the best options for your route.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
