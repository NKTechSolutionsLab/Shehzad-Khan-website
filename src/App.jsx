import { useState } from 'react'

import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import WhyLatviaSection from './components/WhyLatviaSection'
import PositioningSection from './components/PositioningSection'
import ExpertiseGrid from './components/ExpertiseGrid'
import JourneySection from './components/JourneySection'
import CTA from './components/OpportunityCTA'
import Footer from './components/Footer'
import GlobalPerspectiveSection from './components/GlobalPerspectiveSection'
import FeaturedOpportunitySection from './components/FeaturedOpportunitySection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <Hero />
    <AboutSection />
    <PositioningSection />
    <ExpertiseGrid />
    <JourneySection />
    <WhyLatviaSection />
    <GlobalPerspectiveSection />
    <FeaturedOpportunitySection />
    
    <CTA />
    <Footer />
    </>
  )
}

export default App
