import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <div className='bg-primary min-h-screen'>
      <div className='relative'>
      <Navbar />
      <main className="pb-10">
        <Outlet />
      </main>
      <Footer />
      </div>
    </div>
  )
}

export default App;
