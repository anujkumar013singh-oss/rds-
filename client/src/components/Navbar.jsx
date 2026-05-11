import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Founders', href: '#founders' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    // Scroll listener for active section detection
    const handleScroll = () => {
      // Navbar is always transparent with blur, no scroll-based changes needed
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // IntersectionObserver for active nav link
  useEffect(() => {
    const sectionIds = ['hero', 'services', 'about', 'founders', 'clients', 'contact']
    const observers = []
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el && window.lenis) window.lenis.scrollTo(el, { duration: 1.4 })
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,191,255,0.15)',
          transition: 'all 0.4s ease',
        }}
      >
        <div className="container-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <a href="#hero" onClick={(e) => scrollTo(e, '#hero')} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
            <img 
              src="https://ik.imagekit.io/yrpp2zi5o/Screenshot_2026-05-10_at_11.28.10_PM-removebg-preview.png" 
              alt="RDS Group Logo" 
              style={{ 
                height: 90, // Increased size
                width: 'auto', 
                objectFit: 'contain',
                padding: '4px 0'
              }}
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex" style={{ gap: 36, alignItems: 'center' }}>
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeSection === id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 15,
                    fontWeight: 500,
                    color: isActive ? '#00BFFF' : '#000000',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.target.style.color = '#00BFFF' }}
                  onMouseLeave={(e) => { if (!isActive) e.target.style.color = '#000000' }}
                >
                  {link.label}
                </a>
              )
            })}
          </div>

          {/* CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="hidden md:inline-flex btn-glow"
              style={{
                padding: '10px 22px',
                border: '1.5px solid #00BFFF',
                borderRadius: 10,
                color: '#00BFFF',
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#00BFFF'; e.currentTarget.style.color = '#000' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#00BFFF' }}
            >
              Get Free Consultation
            </a>

            {/* Hamburger */}
            <button
              className="flex md:hidden"
              onClick={() => setMenuOpen((o) => !o)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, flexDirection: 'column', gap: 4 }}
              aria-label="Toggle menu"
            >
              <span className={`ham-line ${menuOpen ? 'ham-open' : ''}`}
                style={{ display: 'block', width: 22, height: 2, background: '#000', borderRadius: 1,
                  transition: 'all 0.3s', transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none' }} />
              <span style={{ display: 'block', width: 22, height: 2, background: '#000', borderRadius: 1,
                transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: 22, height: 2, background: '#000', borderRadius: 1,
                transition: 'all 0.3s', transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 999,
              background: 'rgba(255,255,255,0.97)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 40,
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 32,
                  color: activeSection === link.href.replace('#', '') ? '#00BFFF' : '#000',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              style={{
                marginTop: 16, padding: '14px 36px',
                background: '#00BFFF', borderRadius: 12,
                color: '#000', fontWeight: 700, fontSize: 16,
                fontFamily: 'var(--font-body)', textDecoration: 'none',
              }}
            >
              Get Free Consultation
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
