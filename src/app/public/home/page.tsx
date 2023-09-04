import React from 'react'
import Image from 'next/image';
import Header from '../../components/header';
import Footer from '../../components/footer';
let appLogo = require(`../../../brands/${process.env.VERSION}/logo.svg`);

function HomeComponent() {
  const isTTB = process.env.VERSION === 'ttb';
  return (
    <div>
      <Header />
      <h1 className='text-black'>{isTTB && "TTB"} {!isTTB && "Rebo"} Component</h1>
      <button className="bg-primary px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">Primary Button</button>
      <Image
        src={appLogo}
        alt="Brand Logo"
        width={100}
        height={100}
      />
      <Footer />
    </div>
  )
}

export default HomeComponent