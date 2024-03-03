import { useState } from 'react'
import reactLogo from '/public/assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import data from './components/data.jsx'

const cards = data.map(item => {
  return (
    <Card
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
    />
  )
})

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  )
}

export default App
