import React from 'react'
import ReactDOM from 'react-dom/client'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { ThemeProvider } from 'next-themes'
import App from './App.jsx'
import './styles/globals.css'

gsap.registerPlugin(ScrollTrigger)

// ─── LENIS SMOOTH SCROLL ──────────────────────────────────────────────────
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
})

function raf(time) {
  lenis.raf(time)
  ScrollTrigger.update()
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// Expose lenis for components that need it (e.g. nav smooth scroll)
window.lenis = lenis

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="dark">
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
