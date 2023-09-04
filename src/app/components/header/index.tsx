import React from 'react'
import Image from 'next/image';
import Link from 'next/link'

let appLogo = require(`../../../brands/${process.env.VERSION}/logo.png`);

function Header() {
    return (
        <header className="bg-header shadow-xl body-font">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 md:py-3">
            <Image
                src={appLogo}
                alt="Brand Logo"
                width={190}
                height={50}
            />
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center md:pr-6 md:mr-6">
            <Link className="mr-8 hover:text-gray-900" href="/public/home">Home</Link>
            <Link className="mr-8 hover:text-gray-900" href="/public/aboutUs">About Us</Link>
            <Link className="mr-8 hover:text-gray-900" href="/public/tools">Tools</Link>
            <Link className="mr-8 hover:text-gray-900" href="/public/contactUs">Contact Us</Link>
          </nav>
          <a className="mr-5 hover:text-gray-900">Login</a>
          <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
            Sing Up
          </button>
        </div>
      </header>
    )
}

export default Header