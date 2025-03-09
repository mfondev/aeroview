import React from "react";
import SeekFlights from "./seekFlights";
import { RiSearchFill } from "react-icons/ri";

export default function SearchFlights() {
  return (
    <article className="p-5 w-1/4 flex flex-col gap-6 bg-white rounded-[20px] area-section">
      <div>
        <div className="p-3 bg-[#eff4f8] rounded-[8px] mb-4 w-fit">
          <RiSearchFill className="text-[#3661eb]" />
        </div>
        <h2 className="font-bold mb-4">Search Flights</h2>
        <p className="text-[#a6abb8] text-[14px]">
          Enter your dates and destination while our proprietary technology
          searches 100+ consolidators to find you the best deal.
        </p>
      </div>
      <main>                       
        <h5 className="text-[8px] border border-[rgba(0,0,0,0.5)] mx-auto rounded-full w-fit flex justify-center items-center px-2 py-">
          More than <span className="text-[#3661eb] font-bold">112+</span> flights available
        </h5>
        <div className="bg-white shadow-2xl rounded-[10px] w-full overflow-hidden p-3">
          <SeekFlights />
          <div className="w-full h-[0.1px] bg-[#ecebeb] mb-3"></div>
          <section className="grid grid-cols-2 gap-x-3 gap-y-3">
            <div>
              <p className="text-[10px] font-bold">From </p>
              <h5 className="text-[10px] font-medium">Select Departure</h5>
            </div>
            <div>
              <p className="text-[10px] font-bold">To </p>
              <h5 className="text-[10px] font-medium">Select Arrival</h5>
            </div>
            <div>
              <p className="text-[10px] font-bold">Departure Date </p>
              <h5 className="text-[10px] font-medium">21/12/2025</h5>
            </div>
            <div>
              <p className="text-[10px] font-bold">Return Trip </p>
              <h5 className="text-[10px] font-medium">25/12/2025</h5>
            </div>
          </section>
          <button className="bg-[#3661eb] text-white p-1 rounded-[5px] w-full text-[11px] mt-2">
            Search Flights
          </button>
        </div>
      </main>
    </article>
  );
}
