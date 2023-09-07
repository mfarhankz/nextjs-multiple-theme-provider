import React from 'react'
import Image from 'next/image';
import Header from '../../components/header';
import Footer from '../../components/footer';

function HomeComponent() {
  const isTTB = process.env.VERSION === 'ttb';

  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}

export default HomeComponent