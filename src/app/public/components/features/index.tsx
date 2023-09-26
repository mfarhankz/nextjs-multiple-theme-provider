import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import configuration from '@/configuration';
import Login from '@/app/public/login/page';

const Features = () => {
  return (
    <>
      <section className="container mx-auto feature py-[100px] text-gray-600">
        <div>
          <div>
            <div className='bg-[#F8FAE7] mb-9 w-32 text-blue-950 font-medium py-1 px-5 text-[13px] drop-shadow-md rounded-full '>
              AI POWERED
            </div>
          </div>
          <div className='lg:flex '>
            <div className='mt-3 md:w-full'>
              <h1 className='text-[#272657]  text-[52px] font-medium leading-none'>
                Our powerfull chatbot solutions
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
                      Human-Like Intelligence
                    </h1>
                    <p className='text-lg text-[#64607D] font-light'>
                      Thanks to their human-like intelligence, they can interact with users naturally and fluently.
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
                  <div className='bg-[#DEEFAC3D] h-[60px] w-[60px] flex justify-center rounded-full items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><g clip-path="url(#clip0_212_180)">
                      <path d="M19.6061 25.6571L16.5697 18.2039L24.3054 6.91778C24.8557 6.11487 23.8865 5.14561 23.0836 5.69593L11.7973 13.4318L4.34416 10.3953C3.59662 10.0908 3.62058 9.02405 4.38107 8.75335L28.826 0.0526451C29.5238 -0.195734 30.1971 0.477567 29.9487 1.17536L21.248 25.6203C20.9773 26.3808 19.9106 26.4047 19.6061 25.6571Z" fill="#C9E47A"></path>
                      <path d="M24.304 6.91791L16.5682 18.204L11.1493 19.9575C10.467 20.1783 9.82169 19.5331 10.0425 18.8508L11.7959 13.4319L23.0821 5.69606C23.885 5.14574 24.8543 6.115 24.304 6.91791ZM7.35976 22.6403C7.01651 22.2971 6.46005 22.2971 6.11681 22.6403L0.257432 28.4997C-0.0858105 28.8429 -0.0858105 29.3994 0.257432 29.7426C0.600674 30.0859 1.15714 30.0859 1.50038 29.7426L7.35976 23.8833C7.703 23.54 7.703 22.9835 7.35976 22.6403ZM13.2191 22.6403C12.8759 22.2971 12.3194 22.2971 11.9762 22.6403L6.11681 28.4997C5.77356 28.8429 5.77356 29.3994 6.11681 29.7426C6.46005 30.0859 7.01651 30.0859 7.35976 29.7426L13.2191 23.8833C13.5624 23.54 13.5624 22.9835 13.2191 22.6403ZM0.257432 23.8833C0.600674 24.2265 1.15714 24.2265 1.50038 23.8833L7.35976 18.0239C7.703 17.6806 7.703 17.1242 7.35976 16.7809C7.01651 16.4377 6.46005 16.4377 6.11681 16.7809L0.257432 22.6403C-0.0858105 22.9835 -0.0858105 23.54 0.257432 23.8833Z" fill="#C9E47A" fill-opacity="0.6"></path></g><defs><clipPath id="clip0_212_180"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                    </svg>
                  </div>
                  <div>
                    <h1 className='text-2xl text-[#272657] my-6 font-semibold'>
                      Natural Language
                    </h1>
                    <p className='text-lg text-[#64607D] font-light'>
                      Our chatbots can give meaningful responses thanks to natural language processing technology.
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
                  <div className='bg-[#F9A6CE29] h-[60px] w-[60px] flex justify-center rounded-full items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><g clip-path="url(#clip0_212_180)">
                      <path d="M19.6061 25.6571L16.5697 18.2039L24.3054 6.91778C24.8557 6.11487 23.8865 5.14561 23.0836 5.69593L11.7973 13.4318L4.34416 10.3953C3.59662 10.0908 3.62058 9.02405 4.38107 8.75335L28.826 0.0526451C29.5238 -0.195734 30.1971 0.477567 29.9487 1.17536L21.248 25.6203C20.9773 26.3808 19.9106 26.4047 19.6061 25.6571Z" fill="#F9A6CE"></path>
                      <path d="M24.304 6.91791L16.5682 18.204L11.1493 19.9575C10.467 20.1783 9.82169 19.5331 10.0425 18.8508L11.7959 13.4319L23.0821 5.69606C23.885 5.14574 24.8543 6.115 24.304 6.91791ZM7.35976 22.6403C7.01651 22.2971 6.46005 22.2971 6.11681 22.6403L0.257432 28.4997C-0.0858105 28.8429 -0.0858105 29.3994 0.257432 29.7426C0.600674 30.0859 1.15714 30.0859 1.50038 29.7426L7.35976 23.8833C7.703 23.54 7.703 22.9835 7.35976 22.6403ZM13.2191 22.6403C12.8759 22.2971 12.3194 22.2971 11.9762 22.6403L6.11681 28.4997C5.77356 28.8429 5.77356 29.3994 6.11681 29.7426C6.46005 30.0859 7.01651 30.0859 7.35976 29.7426L13.2191 23.8833C13.5624 23.54 13.5624 22.9835 13.2191 22.6403ZM0.257432 23.8833C0.600674 24.2265 1.15714 24.2265 1.50038 23.8833L7.35976 18.0239C7.703 17.6806 7.703 17.1242 7.35976 16.7809C7.01651 16.4377 6.46005 16.4377 6.11681 16.7809L0.257432 22.6403C-0.0858105 22.9835 -0.0858105 23.54 0.257432 23.8833Z" fill="#F9A6CE" fill-opacity="0.6"></path></g><defs><clipPath id="clip0_212_180"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                    </svg>
                  </div>
                  <div>
                    <h1 className='text-2xl text-[#272657] my-6 font-semibold'>
                      Customizable Interface
                    </h1>
                    <p className='text-lg text-[#64607D] font-light'>
                      You can create designs that are compatible with your brand’s identity and improve the user experience.
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
      <section className='lg:px-[180px] pb-[180px]'>
        <div className='lg:flex'>
          <div className='w-full p-3 lg:w-1/2'>
            <img src="speech-on-human.png" alt="" />
          </div>
          <div className='p-3 lg:w-1/2 mt-9'>
            <div>
              <div className='bg-[#F8FAE7] mb-12 w-36 text-blue-950 font-medium py-1 px-5 text-[13px] drop-shadow-md rounded-full '>
                WHO WE ARE?
              </div>
              <div className='mb-12 md:w-full'>
                <h1 className='text-[#272657]  text-[52px] font-medium leading-none'>
                  Leading with innovative solution.
                </h1>
              </div>
              <div className='flex md:w-full mb-12 items-start lg:mb-12 text-[#64607D] text-xl font-light'>
                <p>
                  We are a leading company providing AI chatbot solutions. We are in a leading position in the sector with our customer-oriented approach, innovative solutions and quality service understanding.
                </p>
              </div>
              <div>
                <a href="#" className='flex text-sm hover:underline hover:underline-offset-8'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='mt-1 me-2' height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                  Explore Hub
                  <svg xmlns="http://www.w3.org/2000/svg" className='mt-1 ms-2' height="1em" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='py-10 text-center'>
          <span className='text-[#5EE9E8] bg-[#E3F8F8] text-sm px-5 py-2 rounded-3xl'>Contact</span>
          <span className='text-sm text-[#64607D] font-extralight ms-3'>Looking for a chatbot solution?</span>
          <a className='text-sm font-light ms-1 underline text-[#272657]' href="#">Contact us</a>
        </div>
      </section>
      <section className='plans pt-36'>
        <div className='container mx-auto lg:flex '>
          <div className='w-[348px] p-[10px]'>
            <div>
              <h1 className='text-[#272657]  text-[52px] font-medium leading-none'>
                Pricing plans for you
              </h1>
            </div>
            <div>
              <img src="./credit-card.png" alt="" />
            </div>
          </div>
          <div>
            <div className='w-[348px] p-[10px] bg'>
              <div>
                <h3 className='mt-8'>
                  Basic Plan
                </h3>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features