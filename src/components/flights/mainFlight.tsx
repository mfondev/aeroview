import React from "react";
import FlightHeader from "./flightHeader";
import AvailableFlights from "./availableFlights";
import SearchFlights from "./searchFlights";
import Contact from "./contact";
import FlightsLink from "./flightsLink";
import FlightSummary from "./flightSummary";
import Cta from "./cta";

export default function FlightPage() {
  return (
    <>
      <FlightHeader />
      <AvailableFlights />
      <div className="bg-[#3661eb] w-full">
        <div className=" max-w-[800px] pl-8 py-18 text-white text-left">
          <h3 className="text-[48px]">
            Airlines save a number of <span>$7,084</span> discounted seats for
            every flight <span></span> called "consolidator" fares. <br />
            Now they're yours. <span></span>
          </h3>
          
          <p className="text-[16px] py-4">
            After clicking search we will send your private fares directly to
            your email. No waiting around
          </p>
        </div>
      </div>
      <main className="bg-[#dee4eb] ">
        <section className=" pt-12">
          <article className="container mx-auto">
            <div>
              <h3 className="text-center text-[32px] max-w-[430px] mx-auto">
                <span className="text-[#4360ba] text-[24px] font-bold">So easy</span>,
                Grandma could do it{" "}
                <span className="text-[#4360ba] text-[24px] font-bold">
                  Save thousands. In 3 easy steps
                </span>
              </h3>
              <p className="text-[#a6abb8] text-center">
                Discounted, "insider" fares. At your fingertips.
              </p>
            </div>
            <main className="py-4 flex flex-row items-center justify-between">
              <SearchFlights />
              <Contact />
              <FlightsLink />
            </main>
            {/* <button className="flex items-center justify-between bg-[#3661eb] text-white py-2 px-4 rounded-[5px] text-center mx-auto">
              Search Now
            </button> */}
          </article>
        </section>

      </main>
      
    </>
  );
}
