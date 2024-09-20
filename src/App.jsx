import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import QA from './components/Q&A'

function App() {
  return (
    <div className='bg-primary min-h-screen'>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      <QA />
      <QA />
      <QA />
    </div>
  )
}

export default App;
