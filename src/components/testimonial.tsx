import React from "react";
import Image from "next/image";

export default function Testimonial() {
  return (
    <main className="bg-[#eff0f3] pb-[230px] mt-[100px] p-20 ">
      <section className="flex items-center justify-between bg-white my-[200p] pl-10 p-4 container mx-auto  py-5 rounded-[20px] w-[80%]">
        <div className="space-y-6 max-w-[500px]">
          <h5>What Travelers Say</h5>
          <h1 className="text-[28px]  ">
            "Always though Google Flights showed the best deals. Had no idea
            airlines{" "} <span className="text-[#3a5ee6] font-bold">
              blocked off their cheapest tickets
            </span>{" "}
            with the only rule they can't be sold online."
          </h1>
          <span>
            <h4 className="text-sm font-bold">Jonathan Bustos</h4>
            <p>Dallas, TX</p>
          </span>
        </div>
        <div className="relative w-[380px] h-[400px]">
          <Image
            src="/images/dummy-image.jpg"
            alt="city"
            fill
            className="rounded-[10px] object-cover"
          />
        </div>
      </section>
    </main>
  );
}
