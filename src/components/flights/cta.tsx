import React from "react";
import Image from "next/image";
import ContactForm from "./contactForm";

export default function Cta() {
  return (
    <>
      <section className="w-[70%] bg-[#dde9f7] flex gap-10 p-10 container mx-auto rounded-[20px]">
        <div className="max-w-[450px]">
          <h2 className="text-[32px]  mb-8">
            Sit back. Let our team do all the work.
          </h2>
          <div className="relative w-[450px] h-[300px]">
            <Image
              src="/images/dummy-image.jpg"
              alt="city"
              fill
              className="rounded-[20px] object-cover"
            />
          </div>
        </div>
        <div className="max-w-[450px]">
          <p className="text-[#52565f] text-[16px] mt-8">
            Dont waste any time. Let our friendly, expert team of agents find
            the best options for your route.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
