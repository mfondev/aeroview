import React from "react";
import ContactForm from "./contactForm";
import { FaUserAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <article className="p-5 w-[70%] md:w-1/4 flex flex-col gap-8 bg-white rounded-[20px] area-section">
        <div>
        <div className="p-3 bg-[#eff4f8] rounded-[8px] mb-4 w-fit">
            <FaUserAlt className="text-[#3661eb]" />
          </div>
          <h2 className="font-bold mb-4">Enter Contact Info</h2>
          <p className="text-[#a6abb8] text-[14px] mb-6">
            Add your preferred way of being contacted so we can send you the
            best option(s) straight to your phone or email{" "}
          </p>
        </div>
        <ContactForm />
      </article>
    </>
  );
}
