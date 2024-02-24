import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
    </div>
  )
}

export default App
