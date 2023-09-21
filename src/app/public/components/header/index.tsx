import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import configuration from '@/configuration';
import Login from '@/app/public/login/page';

const Header = () => {
  return (
    <header>
      <div className="header lg:px-32 lg:py-10">
        <div className=' lg:flex'>
          <div className='lg:w-1/2 w-full p-4'>
            <div className='py-4 flex justify-center lg:justify-normal'>
              <div className='bg-[#F8FAE7] py-1 px-5 text-[13px]  drop-shadow-md rounded-full flex justify-center '>
                TALKING INTELLIGENCE 👌🏻
              </div>
            </div>
            <div className='w-full p-4 '>
              <h1 className='lg:text-7xl md:text-7xl text-5xl lg:text-start text-center font-semibold text-sky-950'>
                Talking Code, Unlimited Chat.
              </h1>
            </div>
            <div>
              <p className='text-slate-500 text-xl mt-3 lg:text-start text-center'>
                Equipped with human-like intelligence, our chatbots establish fluent and interactive dialogues.
              </p>
            </div>
            <div className='flex justify-center lg:justify-normal'>
              <div className='gap-5 md:flex mt-7'>
                <button className='py-[18px] flex px-[30px] hover:bg-opacity-95 mt-3 bg-blue-950 text-white rounded-full'>
                  <p className='text-sm'>Get Started</p>
                  <svg className='mt-1 ml-3 h-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#fff' /></svg>
                </button>
                <button className='py-[18px] flex px-[30px] hover:border-2  mt-3 hover:border-blue-950 text-blue-950 bg-white rounded-full'>
                  <p className='text-sm'>Explore Hub</p>
                  <svg className='mt-1 ml-3 h-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                </button>
              </div>
            </div>
            <div>
              <p className='text-xs text-center lg:text-start mt-7 ms-5 font-light text-gray-400'>
                Try for free. No credit card required.
              </p>
            </div>

          </div>
          <div className='lg:w-1/2 w-full flex lg:items-center justify-center md:mt-5'>
            <img className='h-96 w-144' src="./ipad.png" alt="" />
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header