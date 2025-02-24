"use client"

import React from "react";
import Image from "next/image";
import { useGetFlights } from "../../../utils/hooks/getFlights";
import { FaPlane } from "react-icons/fa";

export default function AvailableFlights() {
  const { data, isLoading, isError, error } = useGetFlights();
  console.log(data);

  return (
    <main className="grid grid-cols-1 justify-items-center my-8">
      <header className="text-center">
        <h2 className="text-3xl">
          <span className="text-[#3661eb] font-bold">Save today</span>. Pack
          your bags tomorrow.
        </h2>
        <p className="text-[#929daf] mt-2">
          Acess deals your friends wont stop asking you about.
        </p>
      </header>
      <div className=" mt-8 bg-white shadow-2xl rounded-[20px] border-white">
        <div className="relative mb-4">
          <h4 className="text-[9px] px-3 py-1 text-[#3661eb] bg-[#fff] uppercase rounded-r-[5px] absolute top-3 ">
            Business class
          </h4>
          <Image
            src="/images/dummy-image.jpg"
            alt="city"
            width={350}
            height={400}
            className="rounded-t-[20px]"
          />
        </div>
        <div className="flex items-center justify-between text-sm px-4">
          <p>
            Jakarta <span className="font-bold">(CGK)</span>
          </p>
          <FaPlane className="text-[#3661eb]" />

          <p>
            New York <span className="font-bold">(JFK)</span>
          </p>
        </div>
        <div className="bg-[#e5eaf0d2] flex items-center justify-between text-sm p-2 px-3 mt-4 rounded-lg mx-4 mb-3">
        <div className="flex items-center ">
        <Image
          src="/images/aeroview_logo.svg"
          alt="aero view logo"
          width={20}
          height={20}
          className=""
        />
        <h1>Aeroview</h1>
      </div>
          <span className="flex items-center gap-2">
            <p className=" text-[#a6abb8]">from</p>
            <p className="text-[#3661eb] font-extrabold text-[18px] italic">$282</p>
          </span>
        </div>
      </div>
    </main>
  );
}  
