import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Founders from './components/Founders'
import Clients from './components/Clients'
import HiringProcess from './components/HiringProcess'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Preloader from './components/Preloader'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      {isLoading ? null : (
        <>
          <Navbar />
          <main>
            <Hero />
            <Services />
            <About />
            <Founders />
            <HiringProcess />
            <Clients />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </>
  )
}
