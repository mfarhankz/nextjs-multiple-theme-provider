/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import configuration from '@/configuration';
import Login from '@/app/public/login/page';

const Features = () => {
  return (
    <>
      <section className="container mx-auto lg:px-32 mt-32 feature p-3  text-gray-600">
        <div>
          <div>
            <div className='bg-[#F8FAE7] mb-9 w-32 text-blue-950 font-medium py-1 px-5 text-[13px] drop-shadow-md rounded-full '>
              AI POWERED
            </div>
          </div>
          <div className='lg:flex'>
            <div className='mt-3 md:w-full'>
              <h1 className='text-[#272657]  text-[52px] font-medium leading-none'>
                Our <span className='before:block before:absolute before:-inset-[-2px] before:-skew-y-0 before:border-b-[20px] before:border-b-pink-200 relative'>
                  <span className="relative">powerfull</span>
                </span> chatbot solutions
              </h1>
            </div>
            <div className='flex md:w-full mt-3 items-start lg:ms-16 lg:mb-12 text-[#64607D] text-xl font-light'>
              <p>
                Designed to meet the needs of your business, these features allow you to stand out in interactive communication.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 md:w-1/2">
              <div className="border-0 hover:border-1 hover:drop-shadow-lg hover:bg-white rounded-2xl">
                <div className="p-7">
                  <div className='bg-[#79E2E629] h-[60px] w-[60px] flex justify-center rounded-full items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><g clip-path="url(#clip0_212_180)">
                      <path d="M19.6061 25.6571L16.5697 18.2039L24.3054 6.91778C24.8557 6.11487 23.8865 5.14561 23.0836 5.69593L11.7973 13.4318L4.34416 10.3953C3.59662 10.0908 3.62058 9.02405 4.38107 8.75335L28.826 0.0526451C29.5238 -0.195734 30.1971 0.477567 29.9487 1.17536L21.248 25.6203C20.9773 26.3808 19.9106 26.4047 19.6061 25.6571Z" fill="#79E2E6"></path>
                      <path d="M24.304 6.91791L16.5682 18.204L11.1493 19.9575C10.467 20.1783 9.82169 19.5331 10.0425 18.8508L11.7959 13.4319L23.0821 5.69606C23.885 5.14574 24.8543 6.115 24.304 6.91791ZM7.35976 22.6403C7.01651 22.2971 6.46005 22.2971 6.11681 22.6403L0.257432 28.4997C-0.0858105 28.8429 -0.0858105 29.3994 0.257432 29.7426C0.600674 30.0859 1.15714 30.0859 1.50038 29.7426L7.35976 23.8833C7.703 23.54 7.703 22.9835 7.35976 22.6403ZM13.2191 22.6403C12.8759 22.2971 12.3194 22.2971 11.9762 22.6403L6.11681 28.4997C5.77356 28.8429 5.77356 29.3994 6.11681 29.7426C6.46005 30.0859 7.01651 30.0859 7.35976 29.7426L13.2191 23.8833C13.5624 23.54 13.5624 22.9835 13.2191 22.6403ZM0.257432 23.8833C0.600674 24.2265 1.15714 24.2265 1.50038 23.8833L7.35976 18.0239C7.703 17.6806 7.703 17.1242 7.35976 16.7809C7.01651 16.4377 6.46005 16.4377 6.11681 16.7809L0.257432 22.6403C-0.0858105 22.9835 -0.0858105 23.54 0.257432 23.8833Z" fill="#79E2E6" fill-opacity="0.6"></path></g><defs><clipPath id="clip0_212_180"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                    </svg>
                  </div>
                  <div>
                    <h1 className='text-2xl text-[#272657] my-6 font-semibold'>
                      Divorce Records
                    </h1>
                    <p className='text-lg text-[#64607D] font-light'>
                      Divorce properties sell 22.1% of the time in the fi rst 12 months from the Divorce Filing
                    </p>
                  </div>
                  <div className='mt-4'>
                    <a className='flex text-sm text-black ' href="#">
                      Discover
                      <svg className='ms-4 mt-[6px]' xmlns="http://www.w3.org/2000/svg" height="9.59px" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#black' /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 md:w-1/2">
              <div className="border-0 hover:border-1 hover:drop-shadow-lg hover:bg-white rounded-2xl">
                <div className="p-7">
                  <div className='bg-[#79E2E629] h-[60px] w-[60px] flex justify-center rounded-full items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><g clip-path="url(#clip0_212_180)">
                      <path d="M19.6061 25.6571L16.5697 18.2039L24.3054 6.91778C24.8557 6.11487 23.8865 5.14561 23.0836 5.69593L11.7973 13.4318L4.34416 10.3953C3.59662 10.0908 3.62058 9.02405 4.38107 8.75335L28.826 0.0526451C29.5238 -0.195734 30.1971 0.477567 29.9487 1.17536L21.248 25.6203C20.9773 26.3808 19.9106 26.4047 19.6061 25.6571Z" fill="#79E2E6"></path>
                      <path d="M24.304 6.91791L16.5682 18.204L11.1493 19.9575C10.467 20.1783 9.82169 19.5331 10.0425 18.8508L11.7959 13.4319L23.0821 5.69606C23.885 5.14574 24.8543 6.115 24.304 6.91791ZM7.35976 22.6403C7.01651 22.2971 6.46005 22.2971 6.11681 22.6403L0.257432 28.4997C-0.0858105 28.8429 -0.0858105 29.3994 0.257432 29.7426C0.600674 30.0859 1.15714 30.0859 1.50038 29.7426L7.35976 23.8833C7.703 23.54 7.703 22.9835 7.35976 22.6403ZM13.2191 22.6403C12.8759 22.2971 12.3194 22.2971 11.9762 22.6403L6.11681 28.4997C5.77356 28.8429 5.77356 29.3994 6.11681 29.7426C6.46005 30.0859 7.01651 30.0859 7.35976 29.7426L13.2191 23.8833C13.5624 23.54 13.5624 22.9835 13.2191 22.6403ZM0.257432 23.8833C0.600674 24.2265 1.15714 24.2265 1.50038 23.8833L7.35976 18.0239C7.703 17.6806 7.703 17.1242 7.35976 16.7809C7.01651 16.4377 6.46005 16.4377 6.11681 16.7809L0.257432 22.6403C-0.0858105 22.9835 -0.0858105 23.54 0.257432 23.8833Z" fill="#79E2E6" fill-opacity="0.6"></path></g><defs><clipPath id="clip0_212_180"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                    </svg>
                  </div>
                  <div>
                    <h1 className='text-2xl text-[#272657] my-6 font-semibold'>
                      Notice of Default
                    </h1>
                    <p className='text-lg text-[#64607D] font-light'>
                      Homeowner is not paying the mortgage, could be planned, could be a hardship, but these homes sell. (52% of NODs result in the sale of property within 12 months from the NOD fi ling).
                    </p>
                  </div>
                  <div className='mt-4'>
                    <a className='flex text-sm text-black ' href="#">
                      Discover
                      <svg className='ms-4 mt-[6px]' xmlns="http://www.w3.org/2000/svg" height="9.59px" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#black' /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 md:w-1/2">
              <div className="border-0 hover:border-1 hover:drop-shadow-lg hover:bg-white rounded-2xl">
                <div className="p-7">
                  <div className='bg-[#79E2E629] h-[60px] w-[60px] flex justify-center rounded-full items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><g clip-path="url(#clip0_212_180)">
                      <path d="M19.6061 25.6571L16.5697 18.2039L24.3054 6.91778C24.8557 6.11487 23.8865 5.14561 23.0836 5.69593L11.7973 13.4318L4.34416 10.3953C3.59662 10.0908 3.62058 9.02405 4.38107 8.75335L28.826 0.0526451C29.5238 -0.195734 30.1971 0.477567 29.9487 1.17536L21.248 25.6203C20.9773 26.3808 19.9106 26.4047 19.6061 25.6571Z" fill="#79E2E6"></path>
                      <path d="M24.304 6.91791L16.5682 18.204L11.1493 19.9575C10.467 20.1783 9.82169 19.5331 10.0425 18.8508L11.7959 13.4319L23.0821 5.69606C23.885 5.14574 24.8543 6.115 24.304 6.91791ZM7.35976 22.6403C7.01651 22.2971 6.46005 22.2971 6.11681 22.6403L0.257432 28.4997C-0.0858105 28.8429 -0.0858105 29.3994 0.257432 29.7426C0.600674 30.0859 1.15714 30.0859 1.50038 29.7426L7.35976 23.8833C7.703 23.54 7.703 22.9835 7.35976 22.6403ZM13.2191 22.6403C12.8759 22.2971 12.3194 22.2971 11.9762 22.6403L6.11681 28.4997C5.77356 28.8429 5.77356 29.3994 6.11681 29.7426C6.46005 30.0859 7.01651 30.0859 7.35976 29.7426L13.2191 23.8833C13.5624 23.54 13.5624 22.9835 13.2191 22.6403ZM0.257432 23.8833C0.600674 24.2265 1.15714 24.2265 1.50038 23.8833L7.35976 18.0239C7.703 17.6806 7.703 17.1242 7.35976 16.7809C7.01651 16.4377 6.46005 16.4377 6.11681 16.7809L0.257432 22.6403C-0.0858105 22.9835 -0.0858105 23.54 0.257432 23.8833Z" fill="#79E2E6" fill-opacity="0.6"></path></g><defs><clipPath id="clip0_212_180"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                    </svg>
                  </div>
                  <div>
                    <h1 className='text-2xl text-[#272657] my-6 font-semibold'>
                      Notice of Sale / Lis Pendens
                    </h1>
                    <p className='text-lg text-[#64607D] font-light'>
                      A higher level of distressed homeowner, may have more reasons to sell, with foreclosure date closer than an NOD. May need to sell. (52% of NOSs result in the sale of property within 12 months from the NOS fi ling).
                    </p>
                  </div>
                  <div className='mt-4'>
                    <a className='flex text-sm text-black ' href="#">
                      Discover
                      <svg className='ms-4 mt-[6px]' xmlns="http://www.w3.org/2000/svg" height="9.59px" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#black' /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 md:w-1/2">
              <div className="border-0 hover:border-1 hover:drop-shadow-lg hover:bg-white rounded-2xl">
                <div className="p-7">
                  <div className='bg-[#79E2E629] h-[60px] w-[60px] flex justify-center rounded-full items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><g clip-path="url(#clip0_212_180)">
                      <path d="M19.6061 25.6571L16.5697 18.2039L24.3054 6.91778C24.8557 6.11487 23.8865 5.14561 23.0836 5.69593L11.7973 13.4318L4.34416 10.3953C3.59662 10.0908 3.62058 9.02405 4.38107 8.75335L28.826 0.0526451C29.5238 -0.195734 30.1971 0.477567 29.9487 1.17536L21.248 25.6203C20.9773 26.3808 19.9106 26.4047 19.6061 25.6571Z" fill="#79E2E6"></path>
                      <path d="M24.304 6.91791L16.5682 18.204L11.1493 19.9575C10.467 20.1783 9.82169 19.5331 10.0425 18.8508L11.7959 13.4319L23.0821 5.69606C23.885 5.14574 24.8543 6.115 24.304 6.91791ZM7.35976 22.6403C7.01651 22.2971 6.46005 22.2971 6.11681 22.6403L0.257432 28.4997C-0.0858105 28.8429 -0.0858105 29.3994 0.257432 29.7426C0.600674 30.0859 1.15714 30.0859 1.50038 29.7426L7.35976 23.8833C7.703 23.54 7.703 22.9835 7.35976 22.6403ZM13.2191 22.6403C12.8759 22.2971 12.3194 22.2971 11.9762 22.6403L6.11681 28.4997C5.77356 28.8429 5.77356 29.3994 6.11681 29.7426C6.46005 30.0859 7.01651 30.0859 7.35976 29.7426L13.2191 23.8833C13.5624 23.54 13.5624 22.9835 13.2191 22.6403ZM0.257432 23.8833C0.600674 24.2265 1.15714 24.2265 1.50038 23.8833L7.35976 18.0239C7.703 17.6806 7.703 17.1242 7.35976 16.7809C7.01651 16.4377 6.46005 16.4377 6.11681 16.7809L0.257432 22.6403C-0.0858105 22.9835 -0.0858105 23.54 0.257432 23.8833Z" fill="#79E2E6" fill-opacity="0.6"></path></g><defs><clipPath id="clip0_212_180"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                    </svg>
                  </div>
                  <div>
                    <h1 className='text-2xl text-[#272657] my-6 font-semibold'>
                      Probates
                    </h1>
                    <p className='text-lg text-[#64607D] font-light'>
                      Probates sell at a rate of 19.1% during the 1st year of probate.
                    </p>
                  </div>
                  <div className='mt-4'>
                    <a className='flex text-sm text-black' href="#">
                      Discover
                      <svg className='ms-4 mt-[6px]' xmlns="http://www.w3.org/2000/svg" height="9.59px" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#black' /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 md:w-1/2">
              <div className="border-0 hover:border-1 hover:drop-shadow-lg hover:bg-white rounded-2xl">
                <div className="p-7">
                  <div className='bg-[#79E2E629] h-[60px] w-[60px] flex justify-center rounded-full items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><g clip-path="url(#clip0_212_180)">
                      <path d="M19.6061 25.6571L16.5697 18.2039L24.3054 6.91778C24.8557 6.11487 23.8865 5.14561 23.0836 5.69593L11.7973 13.4318L4.34416 10.3953C3.59662 10.0908 3.62058 9.02405 4.38107 8.75335L28.826 0.0526451C29.5238 -0.195734 30.1971 0.477567 29.9487 1.17536L21.248 25.6203C20.9773 26.3808 19.9106 26.4047 19.6061 25.6571Z" fill="#79E2E6"></path>
                      <path d="M24.304 6.91791L16.5682 18.204L11.1493 19.9575C10.467 20.1783 9.82169 19.5331 10.0425 18.8508L11.7959 13.4319L23.0821 5.69606C23.885 5.14574 24.8543 6.115 24.304 6.91791ZM7.35976 22.6403C7.01651 22.2971 6.46005 22.2971 6.11681 22.6403L0.257432 28.4997C-0.0858105 28.8429 -0.0858105 29.3994 0.257432 29.7426C0.600674 30.0859 1.15714 30.0859 1.50038 29.7426L7.35976 23.8833C7.703 23.54 7.703 22.9835 7.35976 22.6403ZM13.2191 22.6403C12.8759 22.2971 12.3194 22.2971 11.9762 22.6403L6.11681 28.4997C5.77356 28.8429 5.77356 29.3994 6.11681 29.7426C6.46005 30.0859 7.01651 30.0859 7.35976 29.7426L13.2191 23.8833C13.5624 23.54 13.5624 22.9835 13.2191 22.6403ZM0.257432 23.8833C0.600674 24.2265 1.15714 24.2265 1.50038 23.8833L7.35976 18.0239C7.703 17.6806 7.703 17.1242 7.35976 16.7809C7.01651 16.4377 6.46005 16.4377 6.11681 16.7809L0.257432 22.6403C-0.0858105 22.9835 -0.0858105 23.54 0.257432 23.8833Z" fill="#79E2E6" fill-opacity="0.6"></path></g><defs><clipPath id="clip0_212_180"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                    </svg>
                  </div>
                  <div>
                    <h1 className='text-2xl text-[#272657] my-6 font-semibold'>
                      CTax Defaults
                    </h1>
                    <p className='text-lg text-[#64607D] font-light'>
                      The Homeowner may not have a mortgage default, but are not paying property taxes; they are at a tipping point, can they aff ord the home and the costs associated with the property, or not?
                    </p>
                  </div>
                  <div className='mt-4'>
                    <a className='flex text-sm text-black' href="#">
                      Discover
                      <svg className='ms-4 mt-[6px]' xmlns="http://www.w3.org/2000/svg" height="9.59px" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#black' /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 md:w-1/2">
              <div className="border-0 hover:border-1 hover:drop-shadow-lg hover:bg-white rounded-2xl">
                <div className="p-7">
                  <div className='bg-[#79E2E629] h-[60px] w-[60px] flex justify-center rounded-full items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><g clip-path="url(#clip0_212_180)">
                      <path d="M19.6061 25.6571L16.5697 18.2039L24.3054 6.91778C24.8557 6.11487 23.8865 5.14561 23.0836 5.69593L11.7973 13.4318L4.34416 10.3953C3.59662 10.0908 3.62058 9.02405 4.38107 8.75335L28.826 0.0526451C29.5238 -0.195734 30.1971 0.477567 29.9487 1.17536L21.248 25.6203C20.9773 26.3808 19.9106 26.4047 19.6061 25.6571Z" fill="#79E2E6"></path>
                      <path d="M24.304 6.91791L16.5682 18.204L11.1493 19.9575C10.467 20.1783 9.82169 19.5331 10.0425 18.8508L11.7959 13.4319L23.0821 5.69606C23.885 5.14574 24.8543 6.115 24.304 6.91791ZM7.35976 22.6403C7.01651 22.2971 6.46005 22.2971 6.11681 22.6403L0.257432 28.4997C-0.0858105 28.8429 -0.0858105 29.3994 0.257432 29.7426C0.600674 30.0859 1.15714 30.0859 1.50038 29.7426L7.35976 23.8833C7.703 23.54 7.703 22.9835 7.35976 22.6403ZM13.2191 22.6403C12.8759 22.2971 12.3194 22.2971 11.9762 22.6403L6.11681 28.4997C5.77356 28.8429 5.77356 29.3994 6.11681 29.7426C6.46005 30.0859 7.01651 30.0859 7.35976 29.7426L13.2191 23.8833C13.5624 23.54 13.5624 22.9835 13.2191 22.6403ZM0.257432 23.8833C0.600674 24.2265 1.15714 24.2265 1.50038 23.8833L7.35976 18.0239C7.703 17.6806 7.703 17.1242 7.35976 16.7809C7.01651 16.4377 6.46005 16.4377 6.11681 16.7809L0.257432 22.6403C-0.0858105 22.9835 -0.0858105 23.54 0.257432 23.8833Z" fill="#79E2E6" fill-opacity="0.6"></path></g><defs><clipPath id="clip0_212_180"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                    </svg>
                  </div>
                  <div>
                    <h1 className='text-2xl text-[#272657] my-6 font-semibold'>
                      Bankruptcy
                    </h1>
                    <p className='text-lg text-[#64607D] font-light'>
                      Homeowners that have filed for either chapter 7 or chapter 13 bankruptcy protection are located in this lead category.
                    </p>
                  </div>
                  <div className='mt-4'>
                    <a className='flex text-sm text-black' href="#">
                      Discover
                      <svg className='ms-4 mt-[6px]' xmlns="http://www.w3.org/2000/svg" height="9.59px" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#black' /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 md:w-1/2">
              <div className="border-0 hover:border-1 hover:drop-shadow-lg hover:bg-white rounded-2xl">
                <div className="p-7">
                  <div className='bg-[#79E2E629] h-[60px] w-[60px] flex justify-center rounded-full items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><g clip-path="url(#clip0_212_180)">
                      <path d="M19.6061 25.6571L16.5697 18.2039L24.3054 6.91778C24.8557 6.11487 23.8865 5.14561 23.0836 5.69593L11.7973 13.4318L4.34416 10.3953C3.59662 10.0908 3.62058 9.02405 4.38107 8.75335L28.826 0.0526451C29.5238 -0.195734 30.1971 0.477567 29.9487 1.17536L21.248 25.6203C20.9773 26.3808 19.9106 26.4047 19.6061 25.6571Z" fill="#79E2E6"></path>
                      <path d="M24.304 6.91791L16.5682 18.204L11.1493 19.9575C10.467 20.1783 9.82169 19.5331 10.0425 18.8508L11.7959 13.4319L23.0821 5.69606C23.885 5.14574 24.8543 6.115 24.304 6.91791ZM7.35976 22.6403C7.01651 22.2971 6.46005 22.2971 6.11681 22.6403L0.257432 28.4997C-0.0858105 28.8429 -0.0858105 29.3994 0.257432 29.7426C0.600674 30.0859 1.15714 30.0859 1.50038 29.7426L7.35976 23.8833C7.703 23.54 7.703 22.9835 7.35976 22.6403ZM13.2191 22.6403C12.8759 22.2971 12.3194 22.2971 11.9762 22.6403L6.11681 28.4997C5.77356 28.8429 5.77356 29.3994 6.11681 29.7426C6.46005 30.0859 7.01651 30.0859 7.35976 29.7426L13.2191 23.8833C13.5624 23.54 13.5624 22.9835 13.2191 22.6403ZM0.257432 23.8833C0.600674 24.2265 1.15714 24.2265 1.50038 23.8833L7.35976 18.0239C7.703 17.6806 7.703 17.1242 7.35976 16.7809C7.01651 16.4377 6.46005 16.4377 6.11681 16.7809L0.257432 22.6403C-0.0858105 22.9835 -0.0858105 23.54 0.257432 23.8833Z" fill="#79E2E6" fill-opacity="0.6"></path></g><defs><clipPath id="clip0_212_180"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                    </svg>
                  </div>
                  <div>
                    <h1 className='text-2xl text-[#272657] my-6 font-semibold'>
                      Affidavit of Death
                    </h1>
                    <p className='text-lg text-[#64607D] font-light'>
                      This a davit is led to transfer ownership interest from the deceased owner to the surviving owner or joint tenant(s). These surviving owner(s) may not want a property so large or may not be able to aff ord the property on their own and so may sell
                    </p>
                  </div>
                  <div className='mt-4'>
                    <a className='flex text-sm text-black' href="#">
                      Discover
                      <svg className='ms-4 mt-[6px]' xmlns="http://www.w3.org/2000/svg" height="9.59px" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#black' /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 md:w-1/2">
              <div className="border-0 hover:border-1 hover:drop-shadow-lg hover:bg-white rounded-2xl">
                <div className="p-7">
                  <div className='bg-[#79E2E629] h-[60px] w-[60px] flex justify-center rounded-full items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><g clip-path="url(#clip0_212_180)">
                      <path d="M19.6061 25.6571L16.5697 18.2039L24.3054 6.91778C24.8557 6.11487 23.8865 5.14561 23.0836 5.69593L11.7973 13.4318L4.34416 10.3953C3.59662 10.0908 3.62058 9.02405 4.38107 8.75335L28.826 0.0526451C29.5238 -0.195734 30.1971 0.477567 29.9487 1.17536L21.248 25.6203C20.9773 26.3808 19.9106 26.4047 19.6061 25.6571Z" fill="#79E2E6"></path>
                      <path d="M24.304 6.91791L16.5682 18.204L11.1493 19.9575C10.467 20.1783 9.82169 19.5331 10.0425 18.8508L11.7959 13.4319L23.0821 5.69606C23.885 5.14574 24.8543 6.115 24.304 6.91791ZM7.35976 22.6403C7.01651 22.2971 6.46005 22.2971 6.11681 22.6403L0.257432 28.4997C-0.0858105 28.8429 -0.0858105 29.3994 0.257432 29.7426C0.600674 30.0859 1.15714 30.0859 1.50038 29.7426L7.35976 23.8833C7.703 23.54 7.703 22.9835 7.35976 22.6403ZM13.2191 22.6403C12.8759 22.2971 12.3194 22.2971 11.9762 22.6403L6.11681 28.4997C5.77356 28.8429 5.77356 29.3994 6.11681 29.7426C6.46005 30.0859 7.01651 30.0859 7.35976 29.7426L13.2191 23.8833C13.5624 23.54 13.5624 22.9835 13.2191 22.6403ZM0.257432 23.8833C0.600674 24.2265 1.15714 24.2265 1.50038 23.8833L7.35976 18.0239C7.703 17.6806 7.703 17.1242 7.35976 16.7809C7.01651 16.4377 6.46005 16.4377 6.11681 16.7809L0.257432 22.6403C-0.0858105 22.9835 -0.0858105 23.54 0.257432 23.8833Z" fill="#79E2E6" fill-opacity="0.6"></path></g><defs><clipPath id="clip0_212_180"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                    </svg>
                  </div>
                  <div>
                    <h1 className='text-2xl text-[#272657] my-6 font-semibold'>
                      Phones / Emails
                    </h1>
                    <p className='text-lg text-[#64607D] font-light'>
                      Are you looking for multiple ways to contact a potential seller? Look no further and take advantage of ReboGateways ability to skip trace records for phones and emails (with additional costs)
                    </p>
                  </div>
                  <div className='mt-4'>
                    <a className='flex text-sm text-black' href="#">
                      Discover
                      <svg className='ms-4 mt-[6px]' xmlns="http://www.w3.org/2000/svg" height="9.59px" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#black' /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 md:w-1/2">
              <div className="border-0 hover:border-1 hover:drop-shadow-lg hover:bg-white rounded-2xl">
                <div className="p-7">
                  <div className='bg-[#79E2E629] h-[60px] w-[60px] flex justify-center rounded-full items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><g clip-path="url(#clip0_212_180)">
                      <path d="M19.6061 25.6571L16.5697 18.2039L24.3054 6.91778C24.8557 6.11487 23.8865 5.14561 23.0836 5.69593L11.7973 13.4318L4.34416 10.3953C3.59662 10.0908 3.62058 9.02405 4.38107 8.75335L28.826 0.0526451C29.5238 -0.195734 30.1971 0.477567 29.9487 1.17536L21.248 25.6203C20.9773 26.3808 19.9106 26.4047 19.6061 25.6571Z" fill="#79E2E6"></path>
                      <path d="M24.304 6.91791L16.5682 18.204L11.1493 19.9575C10.467 20.1783 9.82169 19.5331 10.0425 18.8508L11.7959 13.4319L23.0821 5.69606C23.885 5.14574 24.8543 6.115 24.304 6.91791ZM7.35976 22.6403C7.01651 22.2971 6.46005 22.2971 6.11681 22.6403L0.257432 28.4997C-0.0858105 28.8429 -0.0858105 29.3994 0.257432 29.7426C0.600674 30.0859 1.15714 30.0859 1.50038 29.7426L7.35976 23.8833C7.703 23.54 7.703 22.9835 7.35976 22.6403ZM13.2191 22.6403C12.8759 22.2971 12.3194 22.2971 11.9762 22.6403L6.11681 28.4997C5.77356 28.8429 5.77356 29.3994 6.11681 29.7426C6.46005 30.0859 7.01651 30.0859 7.35976 29.7426L13.2191 23.8833C13.5624 23.54 13.5624 22.9835 13.2191 22.6403ZM0.257432 23.8833C0.600674 24.2265 1.15714 24.2265 1.50038 23.8833L7.35976 18.0239C7.703 17.6806 7.703 17.1242 7.35976 16.7809C7.01651 16.4377 6.46005 16.4377 6.11681 16.7809L0.257432 22.6403C-0.0858105 22.9835 -0.0858105 23.54 0.257432 23.8833Z" fill="#79E2E6" fill-opacity="0.6"></path></g><defs><clipPath id="clip0_212_180"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                    </svg>
                  </div>
                  <div>
                    <h1 className='text-2xl text-[#272657] my-6 font-semibold'>
                      Property Profiles
                    </h1>
                    <p className='text-lg text-[#64607D] font-light'>
                      In need of all the important and pertinent data regarding a specific property? ReboGateway will provide you will the most up to date property profiles available
                    </p>
                  </div>
                  <div className='mt-4'>
                    <a className='flex text-sm text-black' href="#">
                      Discover
                      <svg className='ms-4 mt-[6px]' xmlns="http://www.w3.org/2000/svg" height="9.59px" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#black' /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 md:w-1/2">
              <div className="border-0 hover:border-1 hover:drop-shadow-lg hover:bg-white rounded-2xl">
                <div className="p-7">
                  <div className='bg-[#79E2E629] h-[60px] w-[60px] flex justify-center rounded-full items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><g clip-path="url(#clip0_212_180)">
                      <path d="M19.6061 25.6571L16.5697 18.2039L24.3054 6.91778C24.8557 6.11487 23.8865 5.14561 23.0836 5.69593L11.7973 13.4318L4.34416 10.3953C3.59662 10.0908 3.62058 9.02405 4.38107 8.75335L28.826 0.0526451C29.5238 -0.195734 30.1971 0.477567 29.9487 1.17536L21.248 25.6203C20.9773 26.3808 19.9106 26.4047 19.6061 25.6571Z" fill="#79E2E6"></path>
                      <path d="M24.304 6.91791L16.5682 18.204L11.1493 19.9575C10.467 20.1783 9.82169 19.5331 10.0425 18.8508L11.7959 13.4319L23.0821 5.69606C23.885 5.14574 24.8543 6.115 24.304 6.91791ZM7.35976 22.6403C7.01651 22.2971 6.46005 22.2971 6.11681 22.6403L0.257432 28.4997C-0.0858105 28.8429 -0.0858105 29.3994 0.257432 29.7426C0.600674 30.0859 1.15714 30.0859 1.50038 29.7426L7.35976 23.8833C7.703 23.54 7.703 22.9835 7.35976 22.6403ZM13.2191 22.6403C12.8759 22.2971 12.3194 22.2971 11.9762 22.6403L6.11681 28.4997C5.77356 28.8429 5.77356 29.3994 6.11681 29.7426C6.46005 30.0859 7.01651 30.0859 7.35976 29.7426L13.2191 23.8833C13.5624 23.54 13.5624 22.9835 13.2191 22.6403ZM0.257432 23.8833C0.600674 24.2265 1.15714 24.2265 1.50038 23.8833L7.35976 18.0239C7.703 17.6806 7.703 17.1242 7.35976 16.7809C7.01651 16.4377 6.46005 16.4377 6.11681 16.7809L0.257432 22.6403C-0.0858105 22.9835 -0.0858105 23.54 0.257432 23.8833Z" fill="#79E2E6" fill-opacity="0.6"></path></g><defs><clipPath id="clip0_212_180"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                    </svg>
                  </div>
                  <div>
                    <h1 className='text-2xl text-[#272657] my-6 font-semibold'>
                      Documents / Images
                    </h1>
                    <p className='text-lg text-[#64607D] font-light'>
                      There are certain situations where you may need access to specific property related documents or images. They are just a click away within the ReboGateway system (with additional costs)
                    </p>
                  </div>
                  <div className='mt-4'>
                    <a className='flex text-sm text-black' href="#">
                      Discover
                      <svg className='ms-4 mt-[6px]' xmlns="http://www.w3.org/2000/svg" height="9.59px" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#black' /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 md:w-1/2">
              <div className="border-0 hover:border-1 hover:drop-shadow-lg hover:bg-white rounded-2xl">
                <div className="p-7">
                  <div className='bg-[#79E2E629] h-[60px] w-[60px] flex justify-center rounded-full items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><g clip-path="url(#clip0_212_180)">
                      <path d="M19.6061 25.6571L16.5697 18.2039L24.3054 6.91778C24.8557 6.11487 23.8865 5.14561 23.0836 5.69593L11.7973 13.4318L4.34416 10.3953C3.59662 10.0908 3.62058 9.02405 4.38107 8.75335L28.826 0.0526451C29.5238 -0.195734 30.1971 0.477567 29.9487 1.17536L21.248 25.6203C20.9773 26.3808 19.9106 26.4047 19.6061 25.6571Z" fill="#79E2E6"></path>
                      <path d="M24.304 6.91791L16.5682 18.204L11.1493 19.9575C10.467 20.1783 9.82169 19.5331 10.0425 18.8508L11.7959 13.4319L23.0821 5.69606C23.885 5.14574 24.8543 6.115 24.304 6.91791ZM7.35976 22.6403C7.01651 22.2971 6.46005 22.2971 6.11681 22.6403L0.257432 28.4997C-0.0858105 28.8429 -0.0858105 29.3994 0.257432 29.7426C0.600674 30.0859 1.15714 30.0859 1.50038 29.7426L7.35976 23.8833C7.703 23.54 7.703 22.9835 7.35976 22.6403ZM13.2191 22.6403C12.8759 22.2971 12.3194 22.2971 11.9762 22.6403L6.11681 28.4997C5.77356 28.8429 5.77356 29.3994 6.11681 29.7426C6.46005 30.0859 7.01651 30.0859 7.35976 29.7426L13.2191 23.8833C13.5624 23.54 13.5624 22.9835 13.2191 22.6403ZM0.257432 23.8833C0.600674 24.2265 1.15714 24.2265 1.50038 23.8833L7.35976 18.0239C7.703 17.6806 7.703 17.1242 7.35976 16.7809C7.01651 16.4377 6.46005 16.4377 6.11681 16.7809L0.257432 22.6403C-0.0858105 22.9835 -0.0858105 23.54 0.257432 23.8833Z" fill="#79E2E6" fill-opacity="0.6"></path></g><defs><clipPath id="clip0_212_180"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                    </svg>
                  </div>
                  <div>
                    <h1 className='text-2xl text-[#272657] my-6 font-semibold'>
                      Daily Notifications
                    </h1>
                    <p className='text-lg text-[#64607D] font-light'>
                      Are you able to track thousands of homes on a daily basis and know when a specific event transpires that may lead to the want or need to sell a property takes place?
                    </p>
                  </div>
                  <div className='mt-4'>
                    <a className='flex text-sm text-black' href="#">
                      Discover
                      <svg className='ms-4 mt-[6px]' xmlns="http://www.w3.org/2000/svg" height="9.59px" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#black' /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 md:w-1/2">
              <div className="border-0 hover:border-1 hover:drop-shadow-lg hover:bg-white rounded-2xl">
                <div className="p-7">
                  <div className='bg-[#79E2E629] h-[60px] w-[60px] flex justify-center rounded-full items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><g clip-path="url(#clip0_212_180)">
                      <path d="M19.6061 25.6571L16.5697 18.2039L24.3054 6.91778C24.8557 6.11487 23.8865 5.14561 23.0836 5.69593L11.7973 13.4318L4.34416 10.3953C3.59662 10.0908 3.62058 9.02405 4.38107 8.75335L28.826 0.0526451C29.5238 -0.195734 30.1971 0.477567 29.9487 1.17536L21.248 25.6203C20.9773 26.3808 19.9106 26.4047 19.6061 25.6571Z" fill="#79E2E6"></path>
                      <path d="M24.304 6.91791L16.5682 18.204L11.1493 19.9575C10.467 20.1783 9.82169 19.5331 10.0425 18.8508L11.7959 13.4319L23.0821 5.69606C23.885 5.14574 24.8543 6.115 24.304 6.91791ZM7.35976 22.6403C7.01651 22.2971 6.46005 22.2971 6.11681 22.6403L0.257432 28.4997C-0.0858105 28.8429 -0.0858105 29.3994 0.257432 29.7426C0.600674 30.0859 1.15714 30.0859 1.50038 29.7426L7.35976 23.8833C7.703 23.54 7.703 22.9835 7.35976 22.6403ZM13.2191 22.6403C12.8759 22.2971 12.3194 22.2971 11.9762 22.6403L6.11681 28.4997C5.77356 28.8429 5.77356 29.3994 6.11681 29.7426C6.46005 30.0859 7.01651 30.0859 7.35976 29.7426L13.2191 23.8833C13.5624 23.54 13.5624 22.9835 13.2191 22.6403ZM0.257432 23.8833C0.600674 24.2265 1.15714 24.2265 1.50038 23.8833L7.35976 18.0239C7.703 17.6806 7.703 17.1242 7.35976 16.7809C7.01651 16.4377 6.46005 16.4377 6.11681 16.7809L0.257432 22.6403C-0.0858105 22.9835 -0.0858105 23.54 0.257432 23.8833Z" fill="#79E2E6" fill-opacity="0.6"></path></g><defs><clipPath id="clip0_212_180"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                    </svg>
                  </div>
                  <div>
                    <h1 className='text-2xl text-[#272657] my-6 font-semibold'>
                      Turnover Rates / Statistics
                    </h1>
                    <p className='text-lg text-[#64607D] font-light'>
                      Frequency of property sales (know as turnover rate) in geographical areas works like radar to place Realtors or investors into areas where homes are selling more frequently.
                    </p>
                  </div>
                  <div className='mt-4'>
                    <a className='flex text-sm text-black' href="#">
                      Discover
                      <svg className='ms-4 mt-[6px]' xmlns="http://www.w3.org/2000/svg" height="9.59px" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#black' /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Features