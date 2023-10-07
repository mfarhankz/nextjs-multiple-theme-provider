import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import configuration from '@/configuration';
import Login from '@/app/public/login/page';

const Tool = () => {
  return (
    <section>
      <div className=' container mt-5 mx-auto lg:px-32 lg:flex'>
        <div className='p-3 lg:w-1/2 mt-5'>
          <div className='bg-[#F8FAE7] mb-12 w-64 text-blue-950 font-medium py-[10px] text-center px-5 text-[13px] drop-shadow-md rounded-full '>
            PERSONALIZED EXPERIENCES
          </div>
          <div className='mb-12 md:w-full'>
            <h1 className='text-[#272657]  text-[52px] font-medium leading-none'>
              <span className='before:block before:absolute before:-inset-[-5px] before:-skew-y-0 before:border-b-[18px] before:border-b-pink-200 relative'>
                <span className="relative">Constatly </span><br />
              </span>
              improving itself
            </h1>
          </div>
          <div className='flex md:w-full mb-12 items-start lg:mb-12 text-[#64607D] text-xl font-light'>
            <p>
              Our chatbots get smarter over time. Learns from user interactions and analyzes data
            </p>
          </div>
          <div>
            <ul role="list" className="space-y-5 my-7">
              <li className="flex mb-5 items-center">
                <div className='bg-[#FBDCEB] h-[26px] w-[26px] me-[20px] flex text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" fill='#F070AE' /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-medium leading-tight text-[#272657]">Learning and Development Ability</span>
              </li>
              <li className="flex mb-5 items-center">
                <div className='bg-[#FBDCEB] h-[26px] w-[26px] flex me-[20px] text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" fill='#F070AE' /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-medium leading-tight text-[#272657]">Ease of Integration</span>
              </li>
            </ul>
          </div>
          <div>
            <button className='flex text-white bg-[#1D2840] text-sm py-[18px] px-[30px] rounded-full'>
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className='mt-1 ms-2' height="1em" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='white' /></svg>
            </button>
          </div>
        </div>
        <div className='md:flex md:items-center mt-5'>
          <img className='lg:w-[560px]' src="./human-chat.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Tool