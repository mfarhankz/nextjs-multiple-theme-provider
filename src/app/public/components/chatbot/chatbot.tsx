import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import configuration from '@/configuration';
import Login from '@/app/public/login/page';

const Chatbot = () => {
  return (
    <section className='chatbots py-32'>
      <div className="lg:mx-32 p-4 pt-12">
        <div className='bg-[#F8FAE7] mb-5 w-72 text-blue-950 font-medium py-[10px] text-center px-5 text-[13px] drop-shadow-md rounded-full '>
          FREQUENTLY ASKED QUESTIONS 💬
        </div>
        <div className='lg:flex justify-between'>
          <div className='mb-12 lg:mb-0 lg:w-1/2 md:w-full'>
            <h1 className='text-[#272657] text-[52px] font-medium leading-none'>
              We answer your<br />
              <span className='before:block before:absolute before:-inset-[-5px] before:-skew-y-0 before:border-b-[18px] before:border-b-pink-200 relative'>
                <span className="relative">question</span>
              </span>
            </h1>
          </div>
          <div className='flex lg:w-1/2 md:w-full mb-12 items-start lg:mb-0 text-[#64607D] text-xl font-light'>
            <p>
              Our chatbots get smarter over time. Learns from user interactions and analyzes data
            </p>
            <img className='h-44 w-40 bottom-20 relative' src="./human-on-the-speech.png" alt="" />
          </div>
        </div>
      </div>
      <div className='lg:px-32 p-4'>
        <div className='flex justify-between py-5 border-b mb-2'>
          <h4 className='text-[#272657] text-xl font-medium'>
            How can I integrate AI chatbots?
          </h4>
          <a href="#" className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-3 ' viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
          </a>
        </div>
        <div className='flex justify-between py-5 border-b mb-2'>
          <h4 className='text-[#272657] text-xl font-medium'>
            How do your chatbots interact with users?
          </h4>
          <a href="#" className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-3 ' viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
          </a>
        </div>
        <div className='flex justify-between py-5 border-b mb-2'>
          <h4 className='text-[#272657] text-xl font-medium'>
            How do our hatbots improve customer support processes?
          </h4>
          <a href="#" className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-3 ' viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
          </a>
        </div>
        <div className='flex justify-between py-5 border-b mb-2'>
          <h4 className='text-[#272657] text-xl font-medium'>
            What are the benefits of AI chatbots to my business?
          </h4>
          <a href="#" className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-3 ' viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
          </a>
        </div>
        <div className='flex justify-between py-5 border-b mb-2'>
          <h4 className='text-[#272657] text-xl font-medium'>
            How does the learning process of AI chatbots work?
          </h4>
          <a href="#" className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-3 ' viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
          </a>
        </div>
        <div className='flex justify-between py-5 border-b mb-2'>
          <h4 className='text-[#272657] text-xl font-medium'>
            How is the data security of our chatbots ensured?
          </h4>
          <a href="#" className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-3 ' viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
          </a>
        </div>
        <div className='flex justify-center mt-16 mb-28'>
          <button className='flex text-white bg-[#1D2840] text-sm py-[18px] px-[30px] rounded-full'>
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" className='mt-1 ms-2' height="1em" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='white' /></svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Chatbot