import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import configuration from '@/configuration';
import Login from '@/app/public/login/page';

const Header = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm mt-10 py-5 px-12 bg-red-600">
      <nav className="max-w-[85rem] w-full mx-auto lg:pl-9 flex lg:justify-around sm:items-center justify-between" aria-label="Global">
        <div className="flex items-center justify-between">
          <a className="flex title-font font-medium items-center text-gray-900">
            <Image src={configuration.logo} alt="Brand Logo" width={190} height={50} />
          </a>

        </div>
        <div id="navbar-with-collapse" className="hidden basis-full grow lg:block">
          <div className="flex sm:flex-row sm:items-center sm:justify-end md:justify-between sm:mt-0 sm:pl-5">
            <div className='flex lg:gap-8 ms-6'>
              <a className="font-light text-[#272657] text-1xl font-normal" href="#" aria-current="page">Home</a>
              <a className="font-light text-[#272657] text-1xl font-normal" href="#">Features<span className="bg-[#EB9AA029] ms-2 text-xs font-medium mr-2 px-3 py-1 rounded">New</span></a>
              <a className="font-light text-[#272657] text-1xl font-normal" href="#">Process</a>
              <a className="font-light text-[#272657] text-1xl font-normal" href="#">Pricing</a>
              <a className="font-light text-[#272657] text-1xl font-normal" href="#">Blog</a>
            </div>
            <div className='flex'>
              <button className="flex justify-center items-center py-1 px-3 hover:border  hover:border-black rounded-full text-normal w-[90px]">
                Log in
              </button>
              <button className="inline-flex items-center justify-center border py-1 px-3 rounded-full w-[200px] h-[50px] text-normal">
                Join the Community
              </button>
            </div>
          </div>
        </div>
        <div>
          <button type="button" className="hs-collapse-toggle lg:hidden p-2 inline-flex gap-2 rounded-md font-medium bg-white text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none item-ceter focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800 ps-auto" data-hs-collapse="#navbar-with-collapse" aria-controls="navbar-with-collapse" aria-label="Toggle navigation">
            <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
            <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
      </nav>
    </header >
  )
}

export default Header