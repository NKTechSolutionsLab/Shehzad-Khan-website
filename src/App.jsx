import { useState } from 'react'

import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Key from './components/Key'
import Cards from './components/Cards'
import Approach from './components/Approach'
import Reviews from './components/Reviews'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <Hero />
    <Key />
    <Cards />
    <Approach />
    <Reviews />
    <CTA />
    <Footer />
    </>
  )
}

export default App
