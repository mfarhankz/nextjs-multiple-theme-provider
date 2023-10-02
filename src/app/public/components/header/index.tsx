import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import configuration from '@/configuration';
import Login from '@/app/public/login/page';

const Header = () => {
  return (
    <section>
      <div className="header container mx-auto lg:px-32 lg:pb-16 pt-5">
        <div className='lg:mb-20 lg:flex'>
          <div className='w-full p-4 lg:w-1/2'>
            <div className='flex justify-center py-4 lg:justify-normal'>
              <div className='bg-[#F8FAE7] py-1 px-5 text-[13px] text-blue-950 drop-shadow-md font-medium rounded-full flex justify-center '>
                TALKING INTELLIGENCE 👌🏻
              </div>
            </div>
            <div className='w-full  md:px-10 p-4 '>
              <h1 className='text-5xl font-semibold text-center lg:text-7xl md:text-7xl lg:text-start text-sky-950'>
                Work<br />
                <span className='before:block before:absolute before:-inset-[-8px] before:-skew-y-0 before:border-b-[24px] before:border-b-pink-200 relative'>
                  <span className="relative">Smarter</span>
                </span><br />
                not harder!
              </h1>
            </div>
            <div>
              <p className='mt-3 text-xl text-center text-slate-500 lg:text-start'>
                ReboGateway offers fresh and unique ideas that will undoubtedly create a new path and source of revenue for your business.
              </p>
            </div>
            <div className='flex justify-center lg:justify-normal'>
              <div className='gap-5 md:flex mt-7'>
                <button className='py-[18px] flex px-[30px] hover:bg-opacity-95 mt-3 bg-blue-950 text-white rounded-full'>
                  <p className='text-sm'>Get Started</p>
                  <svg className='h-3 mt-1 ml-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#fff' /></svg>
                </button>
                <button className='py-[18px] flex px-[30px] hover:border-2 border-2 border-transparent  mt-3 hover:border-blue-950 text-blue-950 bg-transparent rounded-full'>
                  <p className='text-sm'>Explore Hub</p>
                  <svg className='h-3 mt-1 ml-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                </button>
              </div>
            </div>
            <div>
              <p className='text-xs font-light text-center text-gray-400 lg:text-start mt-7 ms-5'>
                Try for free. No credit card required.
              </p>
            </div>

          </div>
          <div className='flex justify-end w-full lg:w-1/2 lg:items-center md:mt-5'>
            <img className='h-96 w-144' src="./ipad.png" alt="" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Header