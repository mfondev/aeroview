import React from 'react'
import Navbar from '@/components/navigation/navbar'


export default function MainHeader() {
  
  return (
    <main className='bg-[#dde9f7]'>
      <Navbar />
      <section className='container flex items-center justify-between mx-auto px-[40px] py-8'>
        <div>
          <h2 className='text-4xl max-w-[600px] font-bold'>
            Save up to 64% on international Business & First Class.{' '}
            <span className='italic'>Instantly</span>.
          </h2>
          <p className='text-[#929daf] mt-4'>
            Unlock exclusive access to private fares airlines dont want you to
            see. Using Basis
          </p>
        </div>
        <section>
          <div className='bg-[#ffffff] p-4 rounded-[5px]'>
            <h4 className='text-[10px] text-[#a0b5f4] bg-[#e9f0fa] mb-2 uppercase'>
              Business class
            </h4>
            <header className='flex items-center justify-between gap-[110px] mb-8'>
              <h3 className='text-sm '>
                Denpasar <span className='font-bold'>(DPS)</span>
              </h3>
              <h3 className='text-sm '>
                Seoul <span className='font-bold'>(ICN)</span>
              </h3>
            </header>
            <div>
              <ul className='flex flex-col gap-1'>
                <li className='flex items-center justify-between'>
                  <h6>United</h6>
                  <p>$4,215.00</p>
                </li>
                <li className='flex items-center justify-between'>
                  <h6>Katak</h6>
                  <p>$4,215.00</p>
                </li>
                <li className='flex items-center justify-between'>
                  <h6>Basis</h6>
                  <p>$4,215.00</p>
                </li>
                <li className='flex items-center justify-between'>
                  <h6>Expedia</h6>
                  <p>$4,215.00</p>
                </li>
                <li className='flex items-center justify-between '>
                  <h6>Booking<span className='text-[#44b9c3] font-bold'>.com</span></h6>
                  <p>$4,215.00</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex items-center justify-center mt-4 gap-4 bg-[#ffffff] rounded-3xl py-2'>
            <p>Saved</p>
            <span className='text-[#3c66eb] font-bold'>$1,304.00</span>
          </div>
        </section>
      </section>
    </main>
  )
}
