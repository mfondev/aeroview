import React from "react";
import Image from "next/image";
import Cta from "./cta";
import { FaPlane } from "react-icons/fa";

export default function FlightSummary() {
  // const same = (arr: number[]) => {
  //   for (let i = 0; i < arr.length; i++) {
  //     const element = arr[i];
  //   console.log(element);

  //   }

  //   // return arr.length === arrr.length;
  // };

  // console.log(same([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

  return (
    <>
      <section className="bg-[#081029] relative w-full">
        <main className="py-10 pb-[400px] container mx-auto">
          <article className="flex items-center justify-betwee gap-20">
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
                    <p className="text-[#a6abb8] font-bold line-through">£820</p>
                  </div>
                  <div>
                    <p className="bg-[#3661eb] text-white  text-[14px] px-12 py-2 rounded-t-[5px]">
                      60% OFF
                    </p>
                    <p className=" font-extrabold text-[18px] italic bg-[#eff0f3] px-4 py-2 text-center rounded-b-[5px]">
                      $212
                    </p>
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
                    <p className="text-[#a6abb8] font-bold line-through">£820</p>
                  </div>
                  <div>
                    <p className="bg-[#3661eb] text-white  text-[14px] px-12 py-2 rounded-t-[5px]">
                      60% OFF
                    </p>
                    <p className=" font-extrabold text-[18px] italic bg-[#eff0f3] px-4 py-2 text-center rounded-b-[5px] ">
                      $212
                    </p>
                  </div>
                </div>
                <h5 className="text-[10px] font-bold mx-auto rounded-full w-fit flex justify-center items-center px-4 py-3 underline ">
                  View content on this deal
                </h5>
              </div>
            </section>
            <div className="text-white max-w-[380px]">
              <h2 className="bg-[#192452] text-[9px] text-[#7281cc] px-2 py-1 rounded-full w-fit uppercase text-sm my-2">
                Saving types
              </h2>
              <h3 className="text-[32px] ">
                Save big on last-minute trips and business class
              </h3>
              <p className="text-[#8a8c92] text-[14px]">
                Typically, our steepest discounts come from last-minutes
                bookings and one-way business class deals. See how much you can
                save today.
              </p>
            </div>
          </article>
          <article className="flex items-center justify-between mt-[120px]">
            <div className="text-white max-w-[380px]">
              <h2 className="bg-[#192452] text-[9px] text-[#7281cc] px-2 py-1 rounded-full w-fit uppercase text-sm my-2">
                Business class benefit
              </h2>
              <h3 className="text-[32px]">You Deserve better than 88B</h3>
              <p className="text-[#8a8c92] text-[14px]">
                Crossing youur fingers youll be treated like a real human on
                your next fight? Basis makes premium air travel more
                accessible--and affordable--than ever.
              </p>
            </div>
            <section className="flex gap-4">
              <div className="relative">
                <div className="relative w-[340px] h-[450px]">
                  <Image
                    src="/images/dummy-image.jpg"
                    alt="city"
                    fill
                    className="rounded-[10px] object-cover"
                  />
                </div>
                <div className="absolute bottom-0 p-5">
                  <h3 className="text-white font-bold text-[16px]">
                    Business Class
                  </h3>
                  <p className="w-fit mt-1 bg-white rounded-full px-2 font-bold text-black text-center text-[10px]">
                    Qatar Airways
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="relative w-[340px] h-[450px]">
                  <Image
                    src="/images/dummy-image.jpg"
                    alt="city"
                    fill
                    className="rounded-[10px] object-cover"
                  />
                </div>
                <div className="absolute bottom-0 p-5">
                  <h3 className="text-white font-bold text-[16px]">
                    Business Class
                  </h3>
                  <p className="w-fit mt-1 bg-white rounded-full px-2 font-bold text-black text-center text-[10px]">
                    Qatar Airways
                  </p>
                </div>
              </div>
            </section>
          </article>
        </main>
        <div className="absolute bottom-[-240px] left-1/2 transform -translate-x-1/2 w-full ">
          <Cta />
        </div>
      </section>
    </>
  );
}
