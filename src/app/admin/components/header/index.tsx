"use client";

import React from "react";
import Image from "next/image";
import configuration from "@/configuration";
import Link from "next/link";

function Header() {
  return (
    <>
      <header className="shadow-xl bg-header">
        <nav className="border-gray-200">
          <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2.5">
            <Link href="/dashboard" className="flex items-center">
              <Image
                src={configuration?.logo}
                alt="Brand Logo"
                width={190}
                height={50}
              />
            </Link>
            <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
            </button>

            <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
              <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {configuration.routesAdmin.map((item: { label: string; path: string }) => (
                  // eslint-disable-next-line react/jsx-key
                  <li>
                    <Link href={item.path} key={item.path} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent">
                    {item.label}
                  </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
