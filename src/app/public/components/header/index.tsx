import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import configuration from '@/configuration';
import Login from '@/app/public/login/page';

const Header = () => {
  return (
    <header className="shadow-xl bg-header body-font">
      <div className="container flex flex-col flex-wrap items-center mx-auto md:flex-row">
        <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0 md:py-3">
          <Image
            src={configuration.logo}
            alt="Brand Logo"
            width={190}
            height={50}
          />
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:pr-6 md:mr-6">
          {configuration.routes.map((item: { label: string; path: string }) => (
            <Link href={item.path} key={item.path} className='mr-5 hover:text-gray-900'>
              {item.label}
            </Link>
          ))}
        </nav>
        <Login />
        <button className="inline-flex items-center px-3 py-1 mt-4 text-base border-0 rounded focus:outline-none md:mt-0">
          Sing Up
        </button>
      </div>
    </header>
  )
}

export default Header