import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import configuration from '@/configuration';
import Login from '@/app/public/login/page';

const Header = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm pt-6 py-4 bg-gray-500">
      <nav className="max-w-[85rem] w-full mx-auto px-9 sm:flex lg:justify-around sm:items-center sm:justify-between" aria-label="Global">
        <div className="flex items-center justify-between">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src={configuration.logo}
              alt="Brand Logo"
              width={190}
              height={50}
            />
          </a>
          <div className="sm:hidden">
            <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-with-collapse" aria-controls="navbar-with-collapse" aria-label="Toggle navigation">
              <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
              <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div id="navbar-with-collapse" className="hidden basis-full grow sm:block">
          <div className="flex mt-5 sm:flex-row sm:items-center sm:justify-end md:justify-between sm:mt-0 sm:pl-5">
            <div className='flex gap-9 '>
              <a className="font-light text-[#1D2840]" href="#" aria-current="page">Landing</a>
              <a className="font-light text-[#1D2840]" href="#">Account<span class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400">Pink</span></a>
              <a className="font-light text-[#1D2840]" href="#">Work</a>
              <a className="font-light text-[#1D2840]" href="#">Blog</a>
            </div>
            <div>
              <button className="inline-flex items-center border py-1 px-3 rounded text-normal md:mt-0">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header