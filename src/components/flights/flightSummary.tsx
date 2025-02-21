import React from "react";
import Image from "next/image";
import Cta from "./cta";
import { FaPlane } from "react-icons/fa";

export default function FlightSummary() {
  
  return (
    <>
      <section className="bg-[#081029] relative w-full">
        <main className="py-10 pb-[400px] container mx-auto">
          <article className="flex items-center justify-between gap-">
            <section className="flex gap-4">
              
             
              <div className=" mt-8 bg-white shadow-2xl rounded-[15px] border-white">
                <div className="relative mb-2">
                  <div className="relative w-[320px] h-[230px]">
                    <Image
                      src="/images/dummy-image.jpg"
                      alt="city"
                      fill
                      className="rounded-t-[20px] object-cover"
                    />
                  </div>
                </div>
                <div className="fle items-center justify-between text-sm">
                  <h4 className="text-[12px] px-3 text-[#3661eb] bg-[#fff] uppercase rounded-r-[5px]">
                    Business class
                  </h4>
                  <div className="flex items-center justify-between text-sm px-3 pt-1">
                    <p>
                      Jakarta <span className="font-bold">(CGK)</span>
                    </p>
                    <FaPlane className="text-[#3661eb]" />
                    <p>
                      New York <span className="font-bold">(JFK)</span>
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex items-center justify-center my-6 gap-8">
                  <div>
                    <h1 className="text-[#a6abb8]">RETAE</h1>
                    <p className="text-[#a6abb8] font-bold">£820</p>
                  </div>
                  <div>
                    <p className="bg-[#3661eb] text-white  text-[14px] px-12 py-2 rounded-t-[5px]">60% OFF</p>
                    <p className=" font-extrabold text-[18px] italic bg-[#eff0f3] px-4 py-2 text-center rounded-b-[5px]">$212</p>
                  </div>
                </div>
                <h5 className="text-[10px] font-bold mx-auto rounded-full w-fit flex justify-center items-center px-4 py-3 underline ">
                  View content on this deal
                </h5>
              </div>
              <div className=" mt-8 bg-white shadow-2xl rounded-[15px] border-white">
                <div className="relative mb-2">
                  <div className="relative w-[320px] h-[230px]">
                    <Image
                      src="/images/dummy-image.jpg"
                      alt="city"
                      fill
                      className="rounded-t-[20px] object-cover"
                    />
                  </div>
                </div>
                <div className="fle items-center justify-between text-sm">
                  <h4 className="text-[12px] px-3 text-[#3661eb] bg-[#fff] uppercase rounded-r-[5px]">
                    Business class
                  </h4>
                  <div className="flex items-center justify-between text-sm px-3 pt-1">
                    <p>
                      Jakarta <span className="font-bold">(CGK)</span>
                    </p>
                    <FaPlane className="text-[#3661eb]" />
                    <p>
                      New York <span className="font-bold">(JFK)</span>
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex items-center justify-center my-6 gap-8">
                  <div>
                    <h1 className="text-[#a6abb8]">RETAE</h1>
                    <p className="text-[#a6abb8] font-bold">£820</p>
                  </div>
                  <div>
                    <p className="bg-[#3661eb] text-white  text-[14px] px-12 py-2 rounded-t-[5px]">60% OFF</p>
                    <p className=" font-extrabold text-[18px] italic bg-[#eff0f3] px-4 py-2 text-center rounded-b-[5px]">$212</p>
                  </div>
                </div>
                <h5 className="text-[10px] font-bold mx-auto rounded-full w-fit flex justify-center items-center px-4 py-3 underline ">
                  View content on this deal
                </h5>
              </div>
            </section>
            <div className="text-white max-w-[380px]">
              <h2 className="bg-[#192452] text-[#5764a6] p-2 rounded-full w-fit uppercase text-sm">
                Saving types
              </h2>
              <h3 className="text-[32px] ">
                Save big on last-minute trips and business class
              </h3>
              <p className="text-[#a6abb8]">
                Typically, our steepest discounts come from last-minutes
                bookings and one-way business class deals. See how much you can
                save today.
              </p>
            </div>
          </article>
          <article className="flex items-center justify-between mt-[120px]">
            <div className="text-white max-w-[380px]">
              <h2 className="bg-[#192452] text-[#5764a6] p-2 rounded-full w-fit uppercase text-sm">
                Business class benefit
              </h2>
              <h3 className="text-[32px]">You Deserve better than 88B</h3>

              <p className="text-[#a6abb8]">
                Crossing youur fingers youll be treated like a real human on
                your next fight? Basis makes premium air travel more
                accessible--and affordable--than ever.
              </p>
            </div>
            <section className="flex gap-4">
              <div className="relative w-[380px] h-[400px]">
                <Image
                  src="/images/dummy-image.jpg"
                  alt="city"
                  fill
                  className="rounded-[20px] object-cover"
                />
              </div>
              <div className="relative w-[380px] h-[400px]">
                <Image
                  src="/images/dummy-image.jpg"
                  alt="city"
                  fill
                  className="rounded-[20px] object-cover"
                />
              </div>
            </section>
          </article>
        </main>
        <div className="absolute bottom-[-250px] left-1/2 transform -translate-x-1/2 w-full mb-[100px]">
          <Cta />
        </div>
      </section>
    </>
  );
}
