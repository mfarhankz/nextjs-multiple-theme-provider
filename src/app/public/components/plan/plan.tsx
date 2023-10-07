import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import configuration from '@/configuration';
import Login from '@/app/public/login/page';

const Plan = () => {
  return (
    <section className='plans py-36'>
      <div className='container mx-auto xl:px-28'>
        <div className='grid lg:grid-cols-4 gap-2 '>
          <div className=' flex items-center'>
            <div className="w-full xl:w-[300px] lg:w-full mt-4 p-3">
              <div className='mb-12 md:w-full'>
                <h1 className='text-[#272657] text-[52px] font-medium leading-none'>
                  <span className='before:block before:absolute before:-inset-[-5px] before:-skew-y-0 before:border-b-[18px] before:border-b-pink-200 relative'>
                    <span className="relative">Pricing </span><br className='md:hidden' />
                  </span>
                  plans for you
                </h1>
              </div>
              <div className='md:flex justify-center'>
                <img className='md:w-10/12' src="./credit-card.png" alt="" />
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[300px] lg:w-full mt-4 p-4  px-12 bg-white border border-gray-200 rounded-2xl shadow sm:p-8">
            <h5 className="mb-4 text-[22px] font-medium text-pink-400">Monthly</h5>
            <div className="flex items-baseline text-gray-900">
              <span className="lg:text-2xl text-5xl font-medium tracking-tight">$59.00</span>
              <span className="ml-1 lg:text-[10px] font-light text-[#27265766]">/mo</span>
            </div>
            <p className='lg:text-[10px] text-[15px] font-light text-[#27265766] my-5 '>
              The cheapest way to get started.
            </p>
            <ul role="list" className="space-y-5 my-7">
              <li className="flex space-x-3 mb-5 items-center">
                <div className='bg-[#F9A6CE29] h-[26px] w-[26px] flex text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" fill='#F070AE' /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-semibold leading-tight text-[#272657]">2500 recs / month</span>
              </li>
              <li className="flex space-x-3 mb-5 items-center">
                <div className='bg-[#F9A6CE29] h-[26px] w-[26px] flex text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" fill='#F070AE' /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-semibold leading-tight text-[#272657]">$0.05 / rec over*</span>
              </li>
              <li className="flex space-x-3 mb-5 items-center">
                <div className='bg-[#F9A6CE29] h-[26px] w-[26px] flex text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" fill='#F070AE' /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-semibold leading-tight text-[#272657]">3 Live Farms</span>
              </li>
              <li className="flex space-x-3 mb-5 items-center">
                <div className='bg-[#F9A6CE29] h-[26px] w-[26px] flex text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" fill='#F070AE' /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-semibold leading-tight text-[#272657]">3 Live Queries</span>
              </li>
              <li className="flex space-x-3 mb-5 items-center">
                <div className='bg-[#F9A6CE29] h-[26px] w-[26px] flex text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" fill='#F070AE' /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-semibold leading-tight text-[#272657]"> Live Farm Search - Yes</span>
              </li>
              <li className="flex space-x-3 mb-5 items-center">
                <div className='bg-[#F9A6CE29] h-[26px] w-[26px] flex text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" fill='#F070AE' /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-semibold leading-tight text-[#272657]"> Live Farm Search - Yes</span>
              </li>
              <li className="flex space-x-3 mb-5 items-center">
                <div className='bg-[#F9A6CE29] h-[26px] w-[26px] flex text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" fill='#F070AE' /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-semibold leading-tight text-[#272657]">NetSheet Included - Yes</span>
              </li>
              <li className="flex space-x-3 mb-5 items-center">
                <div className='bg-[#F9A6CE29] h-[26px] w-[26px] flex text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" fill='#F070AE' /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-semibold leading-tight text-[#272657]">Unlimited Notifications - Yes</span>
              </li>
            </ul>
            <button type="button" className="text-[#F070A4] bg-[#F9A6CE66] hover:bg-pink-100 font-semibold rounded-3xl md:text-[17px] lg:text-xs px-5 py-3 inline-flex justify-center w-full text-center">Choose plan</button>
          </div>
          <div className="w-full xl:w-[300px] lg:w-full mt-4 p-4  px-12 bg-white border border-gray-200 rounded-2xl shadow sm:p-8">
            <h5 className="mb-4 text-[22px] font-medium text-[#272657]">Semi Annual</h5>
            <div className="flex items-baseline text-gray-900">
              <span className="lg:text-2xl text-5xl font-medium tracking-tight">$500.00</span>
              <span className="ml-1 lg:text-[10px] font-light text-[#27265766]">6/mo</span>
            </div>
            <p className='lg:text-[10px] text-[15px] font-light text-[#27265766] my-5'>
              The most popular plan.
            </p>
            <ul role="list" className="space-y-5 my-7">
              <li className="flex space-x-3 mb-5 items-center">
                <div className='bg-gray-300 h-[26px] w-[26px] flex text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-semibold leading-tight text-[#272657]">5000 recs / month</span>
              </li>
              <li className="flex space-x-3 mb-5 items-center">
                <div className='bg-gray-300 h-[26px] w-[26px] flex text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-semibold leading-tight text-[#272657]">$0.05 / rec over*</span>
              </li>
              <li className="flex space-x-3 mb-5 items-center">
                <div className='bg-gray-300 h-[26px] w-[26px] flex text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-semibold leading-tight text-[#272657]">10 Live Farms</span>
              </li>
              <li className="flex space-x-3 mb-5 items-center">
                <div className='bg-gray-300 h-[26px] w-[26px] flex text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-semibold leading-tight text-[#272657]">10 Live Queries</span>
              </li>
              <li className="flex space-x-3 mb-5 items-center">
                <div className='bg-gray-300 h-[26px] w-[26px] flex text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-semibold leading-tight text-[#272657]"> Live Farm Search - Yes</span>
              </li>
              <li className="flex space-x-3 mb-5 items-center">
                <div className='bg-gray-300 h-[26px] w-[26px] flex text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-semibold leading-tight text-[#272657]">Profile Included - Yes</span>
              </li>
              <li className="flex space-x-3 mb-5 items-center">
                <div className='bg-gray-300 h-[26px] w-[26px] flex text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-semibold leading-tight text-[#272657]">NetSheet Included - Yes</span>
              </li>
              <li className="flex space-x-3 mb-5 items-center disabled:opacity-75">
                <div className='bg-gray-300 h-[26px] w-[26px] flex text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-semibold leading-tight text-[#272657]"> Unlimited Notifications - Yes</span>
              </li>
            </ul>
            <button type="button" className="text-white bg-[#272657] hover:bg-[#36355f] font-semibold rounded-3xl md:text-[17px] lg:text-xs px-5 py-3 inline-flex justify-center w-full text-center">Choose plan</button>
          </div>
          <div className="w-full xl:w-[300px] lg:w-full mt-4 p-4  bg-white border border-gray-200 rounded-2xl shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-4 text-[22px] font-medium text-blue-500">Annual</h5>
            <div className="flex items-baseline text-white">
              <span className="lg:text-2xl text-5xl font-medium tracking-tight">$800.00</span>
              <span className="ml-1 lg:text-[10px] font-light text-gray-400">/year</span>
            </div>
            <p className='lg:text-[10px] text-[15px] font-light text-gray-400 my-5'>
              The most popular plan.
            </p>
            <ul role="list" className="space-y-5 my-7">
              <li className="flex space-x-3 mb-5 items-center">
                <div className='bg-blue-200 h-[26px] w-[26px] flex text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" fill='#3B82F6' /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-semibold leading-tight text-blue-500">10000 recs / month</span>
              </li>
              <li className="flex space-x-3 mb-5 items-center">
                <div className='bg-blue-200 h-[26px] w-[26px] flex text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" fill='#3B82F6' /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-semibold leading-tight text-blue-500">$0.05 / rec over*</span>
              </li>
              <li className="flex space-x-3 mb-5 items-center">
                <div className='bg-blue-200 h-[26px] w-[26px] flex text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" fill='#3B82F6' /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-semibold leading-tight text-blue-500">20 Live Farms</span>
              </li>
              <li className="flex space-x-3 mb-5 items-center">
                <div className='bg-blue-200 h-[26px] w-[26px] flex text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" fill='#3B82F6' /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-semibold leading-tight text-blue-500">20 Live Queries</span>
              </li>
              <li className="flex space-x-3 mb-5 items-center">
                <div className='bg-blue-200 h-[26px] w-[26px] flex text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" fill='#3B82F6' /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-semibold leading-tight text-blue-500">Live Farm Search - Yes</span>
              </li>
              <li className="flex space-x-3 mb-5 items-center">
                <div className='bg-blue-200 h-[26px] w-[26px] flex text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" fill='#3B82F6' /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-semibold leading-tight text-blue-500">Profile Included - Yes</span>
              </li>
              <li className="flex space-x-3 mb-5 items-center">
                <div className='bg-blue-200 h-[26px] w-[26px] flex text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" fill='#3B82F6' /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-semibold leading-tight text-blue-500">NetSheet Included - Yes</span>
              </li>
              <li className="flex space-x-3 mb-5 items-center disabled:opacity-75">
                <div className='bg-blue-200 h-[26px] w-[26px] flex text-center justify-center rounded-full pt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-base' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" fill='#3B82F6' /></svg>
                </div>
                <span className="md:text-[17px] lg:text-xs font-semibold leading-tight text-blue-500">Unlimited Notifications - Yes</span>
              </li>
            </ul>
            <button type="button" className="text-white bg-blue-500 hover:bg-blue-300 font-semibold rounded-3xl md:text-[17px] lg:text-xs px-5 py-3 inline-flex justify-center w-full text-center">Choose plan</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Plan