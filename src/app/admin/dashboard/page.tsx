"use client"

import React from 'react'
import { Button } from 'primereact/button';
import Header from '../components/header'

function Dashboard() {
  return (
    <>
      <Header />
      <h1>Dashboard</h1>
      <div>
      <Button label="Primary" />
      <Button label="Secondary" severity="secondary" />
      <Button label="Success" severity="success" />
      <Button label="Info" severity="info" />
      <Button label="Warning" severity="warning" />
      <Button label="Help" severity="help" />
      <Button label="Danger" severity="danger" />
      </div>
    </>
  )
}

export default Dashboard