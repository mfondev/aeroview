import React from "react";
import Image from "next/image";

export default function Org() {
  return (
    <>
      <main
        className="flex items-center gap-20 mt-[140px] mb-20 w-[95%] relative overflow-hidden whitespace-nowrap mx-auto
  before:absolute before:top-0 before:left-0 before:w-[150px] before:h-full before:content-[''] before:z-30
  before:bg-gradient-to-l before:from-transparent before:to-white
  after:absolute after:top-0 after:right-0 after:w-[150px] after:h-full after:content-[''] after:z-30 
  after:bg-gradient-to-r after:from-transparent after:to-white"
      >
        <section className="flex items-center gap-20 animate-slide">
          <div className="flex  items-center gap-[2px]">
            <div className="relative w-[40px] h-[40px]">
              <Image
                src="/images/lufthansa.svg"
                alt="lufthansa"
                fill
                className="object-cover "
              />
            </div>
            <h3 className="text-[#bac7d4] font-bold text-sm md:text-2xl">Lufthansa</h3>
          </div>
       
          <div className="flex  items-center gap-[2px]">
            <div className="relative w-[40px] h-[40px]">
              <Image
                src="/images/emirates.svg"
                alt="emirates"
                fill
                className="object-cover "
              />
            </div>
            <h3 className="text-[#bac7d4] font-bold text-sm md:text-lg">Emirates</h3>
          </div>
          <div className="flex  items-center gap-[2px]">
            <h3 className="text-[#bac7d4] font-bold text-sm md:text-lg">
              American Airlines
            </h3>
            <div className="relative w-[40px] h-[40px]">
              <Image
                src="/images/amairlines.svg"
                alt="lufthansa"
                fill
                className="object-cover "
              />
            </div>
          </div>
          <div className="flex  items-center gap-[2px]">
            <div className="relative w-[40px] h-[40px]">
              <Image
                src="/images/airfrance.svg"
                alt="airfrance"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-[#bac7d4] font-bold text-sm md:text-xl">Air France</h3>
          </div>
          <div className="flex  items-center gap-[2px]">
            <div className="relative w-[40px] h-[40px]">
              <Image
                src="/images/ryanair.svg"
                alt="ryanair"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-[#bac7d4] font-bold text-sm md:text-xl">Ryanair</h3>
          </div>
        </section>
        <section className="flex items-center gap-20 animate-slide">
          <div className="flex  items-center gap-[2px]">
            <div className="relative w-[40px] h-[40px]">
              <Image
                src="/images/lufthansa.svg"
                alt="lufthansa"
                fill
                className="object-cover "
              />
            </div>
            <h3 className="text-[#bac7d4] font-bold text-sm md:text-2xl">Lufthansa</h3>
          </div>
       
          <div className="flex  items-center gap-[2px]">
            <div className="relative w-[40px] h-[40px]">
              <Image
                src="/images/emirates.svg"
                alt="emirates"
                fill
                className="object-cover "
              />
            </div>
            <h3 className="text-[#bac7d4] font-bold text-sm md:text-lg">Emirates</h3>
          </div>
          <div className="flex  items-center gap-[2px]">
            <h3 className="text-[#bac7d4] font-bold text-sm md:text-lg">
              American Airlines
            </h3>
            <div className="relative w-[40px] h-[40px]">
              <Image
                src="/images/amairlines.svg"
                alt="lufthansa"
                fill
                className="object-cover "
              />
            </div>
          </div>
          <div className="flex  items-center gap-[2px]">
            <div className="relative w-[40px] h-[40px]">
              <Image
                src="/images/airfrance.svg"
                alt="airfrance"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-[#bac7d4] font-bold text-sm md:text-xl">Air France</h3>
          </div>
          <div className="flex  items-center gap-[2px]">
            <div className="relative w-[40px] h-[40px]">
              <Image
                src="/images/ryanair.svg"
                alt="ryanair"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-[#bac7d4] font-bold text-sm md:text-xl">Ryanair</h3>
          </div>
        </section>
      </main>
    </>
  );
}
