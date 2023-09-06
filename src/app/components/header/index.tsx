import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import configuration from '@/configuration';
import Login from '@/app/public/login/page';

const Header = () => {
    return (
        <header className="bg-header shadow-xl body-font">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 md:py-3">
            <Image
                src={configuration.logo}
                alt="Brand Logo"
                width={190}
                height={50}
            />
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center md:pr-6 md:mr-6">
          {configuration.routes.map((item: { label: string; path: string }) => (
              <Link href={item.path} key={item.path} className='mr-5 hover:text-gray-900'>
                  {item.label}
              </Link>
          ))}
          </nav>
          <Login/>
          <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
            Sing Up
          </button>
        </div>
      </header>
    )
}

export default Header