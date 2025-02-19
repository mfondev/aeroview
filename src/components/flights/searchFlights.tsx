import React from "react";
import SeekFlights from "./seekFlights";
import { RiSearchFill } from "react-icons/ri";

export default function SearchFlights() {
  return (
    <article className="p-5 w-1/4 flex flex-col gap-6 bg-white rounded-[20px]">
      <div>
      <div className="p-2 bg-[#eff4f8] rounded-xl mb-4 w-fit">
      <RiSearchFill  className="text-[#3661eb]"/>
      </div>
      <h2 className="font-bold mb-4">Search Flights</h2>
      <p className="text-[#a6abb8]">
        Enter your dates and destination while our proprietary technology
        searches 100+ consolidators to find you the best deal.
      </p>
      </div>
      <main>
      <h5 className="text-[10px] border border-black mx-auto rounded-full w-fit flex justify-center items-center px-4 py-1">
  More than <span>112+</span> flights available
</h5>

        <div className="bg-white shadow-2xl rounded-[10px] w-full">
          {/* <SeekFlights /> */}
        </div>
      </main>
    </article>
  );
}
