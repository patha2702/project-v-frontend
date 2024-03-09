import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import GrowTogetherSection from './GrowTogetherSection'
import Footer from './Footer'
import KnowledgeCanvas from './KnowledgeCanvas'
import Viewership from './Viewership'
import Community from './Community'

const Home = () => {
  return (
    <div>
        <header>
        <Navbar btnStatus={true} />
        <HeroSection />
      </header>

      <main>
        <GrowTogetherSection />
        <KnowledgeCanvas />
        <Viewership />
        <Community />
      </main>

      <Footer />
    </div>
  )
}

export default Home