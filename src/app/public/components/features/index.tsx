import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import configuration from '@/configuration';
import Login from '@/app/public/login/page';

const Features = () => {
  return (
    <>
      <h1>Features</h1>
      <section className="text-gray-600 body-font lg:px-28">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="lg:w-1/3 md:w-1/2 w-full">
              <div className=" hover:border-1 hover:bg-white border-0 rounded-lg ">
                <div className="p-7">
                  <div className='bg-[#79E2E629] h-[60px] w-[60px] flex justify-center rounded-full items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><g clip-path="url(#clip0_212_180)">
                      <path d="M19.6061 25.6571L16.5697 18.2039L24.3054 6.91778C24.8557 6.11487 23.8865 5.14561 23.0836 5.69593L11.7973 13.4318L4.34416 10.3953C3.59662 10.0908 3.62058 9.02405 4.38107 8.75335L28.826 0.0526451C29.5238 -0.195734 30.1971 0.477567 29.9487 1.17536L21.248 25.6203C20.9773 26.3808 19.9106 26.4047 19.6061 25.6571Z" fill="#79E2E6"></path>
                      <path d="M24.304 6.91791L16.5682 18.204L11.1493 19.9575C10.467 20.1783 9.82169 19.5331 10.0425 18.8508L11.7959 13.4319L23.0821 5.69606C23.885 5.14574 24.8543 6.115 24.304 6.91791ZM7.35976 22.6403C7.01651 22.2971 6.46005 22.2971 6.11681 22.6403L0.257432 28.4997C-0.0858105 28.8429 -0.0858105 29.3994 0.257432 29.7426C0.600674 30.0859 1.15714 30.0859 1.50038 29.7426L7.35976 23.8833C7.703 23.54 7.703 22.9835 7.35976 22.6403ZM13.2191 22.6403C12.8759 22.2971 12.3194 22.2971 11.9762 22.6403L6.11681 28.4997C5.77356 28.8429 5.77356 29.3994 6.11681 29.7426C6.46005 30.0859 7.01651 30.0859 7.35976 29.7426L13.2191 23.8833C13.5624 23.54 13.5624 22.9835 13.2191 22.6403ZM0.257432 23.8833C0.600674 24.2265 1.15714 24.2265 1.50038 23.8833L7.35976 18.0239C7.703 17.6806 7.703 17.1242 7.35976 16.7809C7.01651 16.4377 6.46005 16.4377 6.11681 16.7809L0.257432 22.6403C-0.0858105 22.9835 -0.0858105 23.54 0.257432 23.8833Z" fill="#79E2E6" fill-opacity="0.6"></path></g><defs><clipPath id="clip0_212_180"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                    </svg>
                  </div>
                  <div>
                    <h1 className='text-2xl text-[#272657] my-6 font-semibold'>
                      Human-Like Intelligence
                    </h1>
                    <p className='text-lg text-[#64607D] font-light'>
                      Thanks to their human-like intelligence, they can interact with users naturally and fluently.
                    </p>
                  </div>
                  <div className='mt-4'>
                    <a className='flex text-sm' href="#">
                      Discover
                      <svg className='ms-4 mt-[6px]' xmlns="http://www.w3.org/2000/svg" height="9.59px" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#black' /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full">
              <div className=" hover:border-1 hover:bg-white border-0 rounded-lg ">
                <div className="p-7">
                  <div className='bg-[#79E2E629] h-[60px] w-[60px] flex justify-center rounded-full items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><g clip-path="url(#clip0_212_180)">
                      <path d="M19.6061 25.6571L16.5697 18.2039L24.3054 6.91778C24.8557 6.11487 23.8865 5.14561 23.0836 5.69593L11.7973 13.4318L4.34416 10.3953C3.59662 10.0908 3.62058 9.02405 4.38107 8.75335L28.826 0.0526451C29.5238 -0.195734 30.1971 0.477567 29.9487 1.17536L21.248 25.6203C20.9773 26.3808 19.9106 26.4047 19.6061 25.6571Z" fill="#79E2E6"></path>
                      <path d="M24.304 6.91791L16.5682 18.204L11.1493 19.9575C10.467 20.1783 9.82169 19.5331 10.0425 18.8508L11.7959 13.4319L23.0821 5.69606C23.885 5.14574 24.8543 6.115 24.304 6.91791ZM7.35976 22.6403C7.01651 22.2971 6.46005 22.2971 6.11681 22.6403L0.257432 28.4997C-0.0858105 28.8429 -0.0858105 29.3994 0.257432 29.7426C0.600674 30.0859 1.15714 30.0859 1.50038 29.7426L7.35976 23.8833C7.703 23.54 7.703 22.9835 7.35976 22.6403ZM13.2191 22.6403C12.8759 22.2971 12.3194 22.2971 11.9762 22.6403L6.11681 28.4997C5.77356 28.8429 5.77356 29.3994 6.11681 29.7426C6.46005 30.0859 7.01651 30.0859 7.35976 29.7426L13.2191 23.8833C13.5624 23.54 13.5624 22.9835 13.2191 22.6403ZM0.257432 23.8833C0.600674 24.2265 1.15714 24.2265 1.50038 23.8833L7.35976 18.0239C7.703 17.6806 7.703 17.1242 7.35976 16.7809C7.01651 16.4377 6.46005 16.4377 6.11681 16.7809L0.257432 22.6403C-0.0858105 22.9835 -0.0858105 23.54 0.257432 23.8833Z" fill="#79E2E6" fill-opacity="0.6"></path></g><defs><clipPath id="clip0_212_180"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                    </svg>
                  </div>
                  <div>
                    <h1 className='text-2xl text-[#272657] my-6 font-semibold'>
                      Human-Like Intelligence
                    </h1>
                    <p className='text-lg text-[#64607D] font-light'>
                      Thanks to their human-like intelligence, they can interact with users naturally and fluently.
                    </p>
                  </div>
                  <div className='mt-4'>
                    <a className='flex text-sm' href="#">
                      Discover
                      <svg className='ms-4 mt-[6px]' xmlns="http://www.w3.org/2000/svg" height="9.59px" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#black' /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full">
              <div className=" hover:border-1 hover:bg-white border-0 rounded-lg ">
                <div className="p-7">
                  <div className='bg-[#79E2E629] h-[60px] w-[60px] flex justify-center rounded-full items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><g clip-path="url(#clip0_212_180)">
                      <path d="M19.6061 25.6571L16.5697 18.2039L24.3054 6.91778C24.8557 6.11487 23.8865 5.14561 23.0836 5.69593L11.7973 13.4318L4.34416 10.3953C3.59662 10.0908 3.62058 9.02405 4.38107 8.75335L28.826 0.0526451C29.5238 -0.195734 30.1971 0.477567 29.9487 1.17536L21.248 25.6203C20.9773 26.3808 19.9106 26.4047 19.6061 25.6571Z" fill="#79E2E6"></path>
                      <path d="M24.304 6.91791L16.5682 18.204L11.1493 19.9575C10.467 20.1783 9.82169 19.5331 10.0425 18.8508L11.7959 13.4319L23.0821 5.69606C23.885 5.14574 24.8543 6.115 24.304 6.91791ZM7.35976 22.6403C7.01651 22.2971 6.46005 22.2971 6.11681 22.6403L0.257432 28.4997C-0.0858105 28.8429 -0.0858105 29.3994 0.257432 29.7426C0.600674 30.0859 1.15714 30.0859 1.50038 29.7426L7.35976 23.8833C7.703 23.54 7.703 22.9835 7.35976 22.6403ZM13.2191 22.6403C12.8759 22.2971 12.3194 22.2971 11.9762 22.6403L6.11681 28.4997C5.77356 28.8429 5.77356 29.3994 6.11681 29.7426C6.46005 30.0859 7.01651 30.0859 7.35976 29.7426L13.2191 23.8833C13.5624 23.54 13.5624 22.9835 13.2191 22.6403ZM0.257432 23.8833C0.600674 24.2265 1.15714 24.2265 1.50038 23.8833L7.35976 18.0239C7.703 17.6806 7.703 17.1242 7.35976 16.7809C7.01651 16.4377 6.46005 16.4377 6.11681 16.7809L0.257432 22.6403C-0.0858105 22.9835 -0.0858105 23.54 0.257432 23.8833Z" fill="#79E2E6" fill-opacity="0.6"></path></g><defs><clipPath id="clip0_212_180"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                    </svg>
                  </div>
                  <div>
                    <h1 className='text-2xl text-[#272657] my-6 font-semibold'>
                      Human-Like Intelligence
                    </h1>
                    <p className='text-lg text-[#64607D] font-light'>
                      Thanks to their human-like intelligence, they can interact with users naturally and fluently.
                    </p>
                  </div>
                  <div className='mt-4'>
                    <a className='flex text-sm' href="#">
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
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><g clip-path="url(#clip0_212_180)">
        <path d="M19.6061 25.6571L16.5697 18.2039L24.3054 6.91778C24.8557 6.11487 23.8865 5.14561 23.0836 5.69593L11.7973 13.4318L4.34416 10.3953C3.59662 10.0908 3.62058 9.02405 4.38107 8.75335L28.826 0.0526451C29.5238 -0.195734 30.1971 0.477567 29.9487 1.17536L21.248 25.6203C20.9773 26.3808 19.9106 26.4047 19.6061 25.6571Z" fill="currentColor"></path>
        <path d="M24.304 6.91791L16.5682 18.204L11.1493 19.9575C10.467 20.1783 9.82169 19.5331 10.0425 18.8508L11.7959 13.4319L23.0821 5.69606C23.885 5.14574 24.8543 6.115 24.304 6.91791ZM7.35976 22.6403C7.01651 22.2971 6.46005 22.2971 6.11681 22.6403L0.257432 28.4997C-0.0858105 28.8429 -0.0858105 29.3994 0.257432 29.7426C0.600674 30.0859 1.15714 30.0859 1.50038 29.7426L7.35976 23.8833C7.703 23.54 7.703 22.9835 7.35976 22.6403ZM13.2191 22.6403C12.8759 22.2971 12.3194 22.2971 11.9762 22.6403L6.11681 28.4997C5.77356 28.8429 5.77356 29.3994 6.11681 29.7426C6.46005 30.0859 7.01651 30.0859 7.35976 29.7426L13.2191 23.8833C13.5624 23.54 13.5624 22.9835 13.2191 22.6403ZM0.257432 23.8833C0.600674 24.2265 1.15714 24.2265 1.50038 23.8833L7.35976 18.0239C7.703 17.6806 7.703 17.1242 7.35976 16.7809C7.01651 16.4377 6.46005 16.4377 6.11681 16.7809L0.257432 22.6403C-0.0858105 22.9835 -0.0858105 23.54 0.257432 23.8833Z" fill="currentColor" fill-opacity="0.6"></path></g><defs><clipPath id="clip0_212_180"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
      </svg>
    </>
  )
}

export default Features