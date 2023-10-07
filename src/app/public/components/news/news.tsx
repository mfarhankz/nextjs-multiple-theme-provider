import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import configuration from '@/configuration';
import Login from '@/app/public/login/page';

const News = () => {
  return (

    <section>
      <div className='lg:px-32 py-10 p-4 lg:flex'>
        <div className='md:p-10 p-0'>
          <div className='bg-[#F8FAE7] mb-5 w-44 text-blue-950 font-medium py-[10px] text-center px-5 text-[13px] drop-shadow-md rounded-full '>
            NEWS & ARTICLES
          </div>
          <div className='mb-12 lg:mb-0 lg:w-1/2 md:w-full'>
            <h1 className='text-[#272657] text-[52px] font-medium leading-none'>
              <span className='before:block before:absolute before:-inset-[-5px] before:-skew-y-0 before:border-b-[18px] before:border-b-pink-200 relative'>
                <span className="relative ">Latest</span>
              </span>
              <span className='ml-[10px]'>News</span>
            </h1>
          </div>
          <div className='md:w-full mb-12 mt-5 items-start lg:mb-0 text-[#64607D] text-xl font-light'>
            <p>
              You can find the latest information and news about AI chatbot technology.
            </p>
          </div>
          <a href="#" className='flex text-sm hover:underline hover:underline-offset-8 mt-5'>
            Explore Hub
            <svg xmlns="http://www.w3.org/2000/svg" className='mt-1 ms-2' height="1em" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
          </a>
        </div>
        <div className='md:flex gap-5 p-5'>
          <div className='lg:w-80 p-4'>
            <div className='mb-10'>
              <img src="./Rectangle-18921.jpeg" alt="" />
            </div>
            <div>
              <a href="#" className='text-sm text-[#64607D] rounded-full py-2 px-4 bg-[#ECECEF] font-medium'>
                Animation
              </a>
              <h4 className='mt-7 text-xl text-[#272657]'>
                AI-Powered Chatbot Banana Answers Customer Questions Instantly
              </h4>
            </div>
          </div>
          <div className='lg:w-80 p-4'>
            <div className='mb-10'>
              <img src="./Rectangle-18922.jpeg" alt="" />
            </div>
            <div>
              <a href="#" className='text-sm text-[#64607D] rounded-full py-2 px-4 bg-[#ECECEF] font-medium'>
                AI
              </a>
              <h4 className='mt-7 text-xl text-[#272657]'>
                Innovative Developments in AI Chatbot Technologies
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News