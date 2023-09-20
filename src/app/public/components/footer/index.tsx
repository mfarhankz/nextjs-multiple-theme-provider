import React from 'react'


function Footer() {
  return (
    <>
      {/* <header className='bg-blue-500 lg:h-[625px] md:h-[420px] h-[580px]'>
        <div className='text-center flex justify-center'>
          <div className='lg:w-7/12 w-full lg:mt-[120px] md:mt-[120px] mt-[20px]'>
            <h2 className='lg:text-[50px] text-[36px] text-white'>
              Work smarter, not harder!
            </h2>
            <p className='my-5 text-white text-[20px]'>
              ReboGateway offers fresh and unique ideas that will undoubtedly create a new path and source of revenue for your business.
            </p>
            <button className='px-[40px] py-[15px] bg-[#00C997] rounded text-white'>
              CREATE AN ACCOUNT
            </button>
          </div>
        </div>
      </header> */}
      <header>
        <div className="container px-40 py-10">
          <div className="row-flex">
            <div className='w-1/2 p-4'>
              <div className='w-1/2 py-4'>
                <div className='bg-[#F8FAE7] drop-shadow-md rounded-full flex justify-center '>
                  TALKING INTELLIGENCE 👌🏻
                </div>
              </div>
              <div className='w-full py-4'>
                <h1 className='text-7xl font-semibold text-sky-950'>
                  <span>Talking Code,</span>
                  <span className='underline decoration-pink-300'> Unlimited </span>
                  <span> Chat.</span>
                </h1>
              </div>
              <div>
                <p className='text-slate-500 text-xl mt-3'>
                  Equipped with human-like intelligence, our chatbots establish fluent and interactive dialogues.
                </p>
              </div>
              <div className='gap-5 flex mt-7'>
                <button className='py-[18px] flex px-[30px] hover:bg-opacity-95 bg-blue-950 text-white rounded-full'>
                  <p className='text-sm'>Get Started</p>
                  <svg className='mt-1 ml-3 h-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill='#fff' /></svg>
                </button>
                <button className='py-[18px] flex px-[30px] hover:border-2  hover:border-blue-950 text-blue-950 bg-white rounded-full'>
                  <p className='text-sm'>Get Started</p>
                  <svg className='mt-1 ml-3 h-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                </button>
              </div>
              <div>
                <p className='text-xs mt-7 ms-5 font-light text-gray-400'>
                  Try for free. No credit card required.
                </p>
              </div>

            </div>
          </div>
        </div>
      </header>
      {/* <footer>
        <div className='grid grid-cols-2 gap-3 md:text-center'>
          <div>
            <div className=''>
              <ul className='lg:flex md:flex ms-32 list-none'>
                <li className='sm:mb-4 me-2'>HOME</li>
                <li className='sm:mb-4 me-2'>ABOUT</li>
                <li className='sm:mb-4 me-2'>TOOLS</li>
                <li className='sm:mb-4 me-2'>PRODUCTS</li>
                <li className='sm:mb-4 me-2'>CONTACT</li>
              </ul>
            </div>
            <div>
              <ul className='lg:flex md:flex ms-32 list-none'>
                <li className='sm:mb-4 me-5'>
                  <a href="#">
                    Terms and Condition
                  </a>
                </li>
                <li>
                  <a href="#">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
          </div>
        </div>
      </footer> */}
    </>
  )
}

export default Footer