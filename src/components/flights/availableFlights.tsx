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
          <span className="text-[#3661eb] font-bold">Save today.</span> Pack
          your bags tomorrow.
        </h2>
        <p className="text-[#929daf] mt-2">
          Acess deals your friends wont stop asking you about.
        </p>
      </header>
      <div className=" mt-8 bg-white shadow-2xl rounded-[20px] border-white">
        <div className="relative mb-4">
          <h4 className="text-[12px] px-3 py-1 text-[#3661eb] font-bold bg-[#fff] uppercase rounded-r-[5px] absolute top-3">
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
        <div className="flex items-center justify-between text-sm px-2">
          <p>
            Jakarta <span className="font-bold">(CGK)</span>
          </p>
          <FaPlane className="text-[#3661eb]" />

          <p>
            New York <span className="font-bold">(JFK)</span>
          </p>
        </div>
        <div className=" bg- flex items-center justify-between text-sm mx-2 mb-3">
          <h3>Basis</h3>
          <span className="flex items-center gap-3">
            <p className="mb-4 text-[#a6abb8]">from</p>
            <p>$282</p>
          </span>
        </div>
      </div>
    </main>
  );
}
