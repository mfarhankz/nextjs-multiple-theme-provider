import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Features from '../components/features';
import Tool from '../components/tool/tool';
import Plan from '../components/plan/plan';
import News from '../components/news/news';
import Chatbot from '../components/chatbot/chatbot';
import Intro from '../components/intro/intro';

function HomeComponent() {
  const isTTB = process.env.VERSION === 'ttb';

  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <Intro />
      <Plan />
      <Tool />
      <Chatbot />
      <News />
      <Footer />
    </div>
  )
}

export default HomeComponent