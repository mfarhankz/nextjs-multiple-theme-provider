import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Features from '../components/features';
import Tool from '../components/tool/tool';

function HomeComponent() {
  const isTTB = process.env.VERSION === 'ttb';

  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <Tool />
      <Footer />
    </div>
  )
}

export default HomeComponent