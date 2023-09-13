import React from 'react'
import Header from '../components/header'

function Dashboard() {
  return (
    <>
      <Header />
      <h1>Dashboard</h1>
      <button className="bg-primary px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">Primary Button</button>
    </>
  )
}

export default Dashboard