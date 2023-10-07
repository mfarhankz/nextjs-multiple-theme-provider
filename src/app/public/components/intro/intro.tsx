import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import configuration from '@/configuration';
import Login from '@/app/public/login/page';

const Intro = () => {
  return (
    <section>
      <div className='lg:flex lg:px-32 pb-[180px]'>
        <div className='w-full p-3 lg:w-1/2'>
          <img src="speech-on-human.png" alt="" />
        </div>
        <div className='p-3 lg:w-1/2 mt-9'>
          <div>
            <div className='bg-[#F8FAE7] mb-12 w-36 text-blue-950 font-medium py-1 px-5 text-[13px] drop-shadow-md rounded-full '>
              WHO WE ARE?
            </div>
            <div className='mb-12 md:w-full'>
              <h1 className='text-[#272657] text-[52px] font-medium leading-none'>
                <span className='before:block before:absolute before:-inset-[-8px] before:-skew-y-0 before:border-b-[24px] before:border-b-pink-200 relative'>
                  <span className="relative">Leadingwith</span><br />
                </span>
                innovative solution.
              </h1>
            </div>
            <div className='flex md:w-full mb-12 items-start lg:mb-12 text-[#64607D] text-xl font-light'>
              <p>
                We are a leading company providing AI chatbot solutions. We are in a leading position in the sector with our customer-oriented approach, innovative solutions and quality service understanding.
              </p>
            </div>
            <div>
              <a href="#" className='flex text-sm hover:underline hover:underline-offset-8'>
                <svg xmlns="http://www.w3.org/2000/svg" className='mt-1 me-2' height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                Explore Hub
                <svg xmlns="http://www.w3.org/2000/svg" className='mt-1 ms-2' height="1em" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='py-10 text-center'>
        <span className='text-[#5EE9E8] bg-[#E3F8F8] text-sm px-5 py-2 rounded-3xl'>Contact</span>
        <span className='text-sm text-[#64607D] font-extralight ms-3'>Looking for a chatbot solution?</span>
        <a className='text-sm font-light ms-1 underline text-[#272657]' href="#">Contact us</a>
      </div>
    </section>
  )
}

export default Intro