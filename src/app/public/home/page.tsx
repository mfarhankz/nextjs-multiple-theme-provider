import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Features from '../components/features';
import Tool from '../components/tool/tool';
import Plan from '../components/plan/plan';

function HomeComponent() {
  const isTTB = process.env.VERSION === 'ttb';

  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <Plan />
      <Tool />
      <Footer />
    </div>
  )
}

export default HomeComponent