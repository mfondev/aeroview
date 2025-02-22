import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-[#081029] text-white relative pt-[170px]'>
      <div className=' absolute top-[-140px] left-1/2 transform -translate-x-1/2 w-full container mx-auto flex items-center justify-between bg-[#3761eb] p-14 rounded-[20px] '>
        <div>
          <h3 className='text-[42px] max-w-[600px] text-white leading-[46px] '>
            Booking discounted fares airlines cant show online has never been{' '}
            <i>this</i> easy
          </h3>
          <p className='text-[15px] text-[#a3a4a5] mt-4'>
            Find your perfect flight. without the hassle See what you can save
            today.
          </p>
        </div>
        <button className='bg-white text-[#3661eb]  py-2 px-4 rounded-[5px]'>Search Now</button>
      </div>
      <main className=' flex items-center justify-between container mx-auto bg-[#192452] p-8 rounded-[20px] '>
        <article className='space-y-2 '>
          <h2 className='text-[28px] '>Basis</h2>
          <p className='text-[16px]'>Skip the line.Get our top daily deal.</p>
          <div className='flex items-center'>
            <input type='email' placeholder='Enter your email' className='p-2 w-[300px] rounded-[8px] text-[15px]'/>
            <button className='bg-[#3661eb] text-white py-2 px-4 rounded-[5px] ml-2'>
            Subscribe
          </button>
          </div>
          <p className='text-[13px] text-[#a3a4a5] max-w-[550px]'>
            By subscribing you agree with our <span className='underline'>Privacy Policy</span> and
            provide content to resolve updates from our company
          </p>
        </article>
        <div className='flex justify-between gap-20'>
          <ul className=' space-y-3'>
            <h6 className='text-white text-[14px] font-bold'>Destination</h6>
            <li className='text-[13px] text-[#a3a4a5]'>Dubai</li>
            <li className='text-[13px]  text-[#a3a4a5]'>Paris</li>
            <li className='text-[13px]  text-[#a3a4a5]'>Amsterdam</li>
            <li className='text-[13px]  text-[#a3a4a5]'>Tokyo</li>
            <li className='text-[13px]  text-[#a3a4a5]'>Madrid</li>
          </ul>
          <ul className='space-y-3'>
            <h6 className='text-white text-[14px] font-bold'>Company</h6>
            <li className='text-[13px]  text-[#a3a4a5]'>Agency Access</li>
            <li className='text-[13px]  text-[#a3a4a5]'>Reviews</li>
            <li className='text-[13px]  text-[#a3a4a5]'>Scholarship</li>
          </ul>
          <ul className='space-y-3'>
            <h6 className='text-white text-[14px] font-bold'>Legal</h6>
            <li className='text-[13px]  text-[#a3a4a5]'>Terms of Use</li>
            <li className='text-[13px]  text-[#a3a4a5]'>Privacy Policy </li>
            <li className='text-[13px]  text-[#a3a4a5]'>Refund Policy</li>
            <li className='text-[13px]  text-[#a3a4a5]'></li>
          </ul>
        </div>
      </main>
      <div className='flex items-center justify-between container mx-auto mt-9'>
       <p>&copy; Flybasis. All right reserved</p>
       <div>logos</div>
      </div>
    </footer>
  )
}
