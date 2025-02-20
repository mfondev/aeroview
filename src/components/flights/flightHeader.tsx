import React from 'react'
import SeekFlights from './seekFlights'
import { TbPlaneDeparture } from "react-icons/tb";
import { TbPlaneArrival } from "react-icons/tb";
import { IoCalendarNumberOutline } from "react-icons/io5";

export default function FlightHeader() {
  return (
    <>
      <header className='border-1 border-[#ecedef] container mx-auto py-4'>
        <SeekFlights />
        <main className='flex items-center justify-betweens border border-[#ecedef] rounded-[5px] '>
          <div className='border-r-[1px] border-[#ecedef] pr-20 pl-2 flex items-center gap-3 py-2
          '>
            <TbPlaneDeparture className='text-black'/>
            <div>
            <p className='text-[#a6abb8]'>From</p>
            <h5>
              Jakarta
              <span className='text-[#a6abb8]'>CGK</span>
            </h5>
            </div>
          </div>
          <div className='border-r-[1px] border-[#ecedef] pr-20 pl-2 flex items-center gap-3
          '>
           <TbPlaneArrival className='text-black'/>
           <div>
            <p className='text-[#a6abb8]'>To</p>
            <h5>
              Singapore
              <span className='text-[#a6abb8]'>SIN</span>
            </h5>
            </div>
          </div>
          <div className='border-r-[1px] border-[#ecedef] pr-20 pl-2 flex items-center gap-3
          '>
            <IoCalendarNumberOutline className='text-black' />
            <div>

            <p className='text-[#a6abb8]'>Departure Date</p>
            <h5>31/4/2024</h5>
            </div>

          </div>
          <div className='border-r-[1px] border-[#ecedef] pr-20 pl-2 flex items-center gap-3
          '>
            <IoCalendarNumberOutline className='text-black'/>
            <div>

            <p className='text-[#a6abb8]'>Return Date</p>
            <h5>3/17/2024</h5>
            </div>

          </div>
          <button className='bg-[#3661eb] text-white py-2 px-4 rounded-[5px] ml-10'>
            Search Flights
          </button>
        </main>
      </header>
    </>
  )
}
