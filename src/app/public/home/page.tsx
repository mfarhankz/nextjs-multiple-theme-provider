import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Features from '../components/features';

function HomeComponent() {
  const isTTB = process.env.VERSION === 'ttb';

  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <Footer />
    </div>
  )
}

export default HomeComponent