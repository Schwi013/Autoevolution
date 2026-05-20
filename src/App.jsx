import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MissionVision from './components/MissionVision'
import Autofinanciamiento from './components/Autofinanciamiento'
import Brands from './components/Brands'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Notices from './components/Notices'
import Assignment from './components/Assignment'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MissionVision />
        <Autofinanciamiento />
        <Brands />
        <HowItWorks />
        <Benefits />
        <Notices />
        <Assignment />
      </main>
      <Footer />
    </>
  )
}

export default App
