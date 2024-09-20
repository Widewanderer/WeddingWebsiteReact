import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import QA from './components/Q&A'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='bg-primary min-h-screen'>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App;
