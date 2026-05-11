import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="#00BFFF" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 0.5L8.73 5.26L13.82 5.64L10.04 8.79L11.26 13.73L7 11.14L2.74 13.73L3.96 8.79L0.18 5.64L5.27 5.26L7 0.5Z"/>
  </svg>
)

const avatarColors = ['#0099CC', '#00BFFF', '#007FA8', '#00D4FF']
const initials = ['RK', 'AS', 'PL']

export default function Hero() {
  const sectionRef = useRef(null)
  const tlRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      tlRef.current = gsap.timeline({ defaults: { ease: 'power2.out' } })

      tlRef.current
        .fromTo('.hero-tag', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.2)
        .fromTo('.hero-line-1', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7 }, 0.35)
        .fromTo('.hero-line-2', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7 }, 0.5)
        .fromTo('.hero-line-3', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7 }, 0.65)
        .fromTo('.hero-sub', { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0.8)
        .fromTo('.hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 }, 1.0)
        .fromTo('.hero-proof', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 1.2)
        .fromTo('.hero-visual', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.9, ease: 'expo.out' }, 0.5)
        .fromTo('.stat-card-1', { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.6 }, 1.0)
        .fromTo('.stat-card-2', { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.6 }, 1.15)
        .fromTo('.stat-badge', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5 }, 1.3)

      // Particle float loops
      gsap.to('.p-a', { y: -18, x: 10, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.p-b', { y: 22, x: -12, duration: 5.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 })
      gsap.to('.p-c', { y: -14, x: 18, duration: 7, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2 })
      gsap.to('.p-d', { y: 16, x: -8, duration: 4.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5 })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const scrollToContact = (e) => {
    e.preventDefault()
    const el = document.getElementById('contact')
    if (el && window.lenis) window.lenis.scrollTo(el, { duration: 1.4 })
  }
  const scrollToServices = (e) => {
    e.preventDefault()
    const el = document.getElementById('services')
    if (el && window.lenis) window.lenis.scrollTo(el, { duration: 1.4 })
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        background: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: 80,
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '60%', height: '100%',
        background: 'radial-gradient(ellipse at 80% 50%, rgba(0,191,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Floating particles */}
      {[
        { cls: 'p-a', top: '20%', right: '15%', size: 6 },
        { cls: 'p-b', top: '65%', right: '35%', size: 4 },
        { cls: 'p-c', top: '35%', right: '8%', size: 8 },
        { cls: 'p-d', top: '78%', right: '20%', size: 5 },
      ].map(({ cls, top, right, size }) => (
        <div key={cls} className={cls} style={{
          position: 'absolute', top, right,
          width: size, height: size,
          borderRadius: '50%',
          background: '#00BFFF',
          opacity: 0.5,
          pointerEvents: 'none',
        }} />
      ))}

      <div className="container-main" style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr', gap: 48 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,0.8fr)', gap: 48, alignItems: 'center' }}
          className="hero-grid">

          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            <div className="hero-tag" style={{ opacity: 0 }}>
              <span className="tag-pill">India's Trusted HR Organisation</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <h1 className="hero-line-1" style={{ opacity: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6vw, 84px)', lineHeight: 1, margin: 0, color: '#000', fontWeight: 400, letterSpacing: '-0.02em' }}>
                A Legacy of
              </h1>
              <h1 className="hero-line-2" style={{ opacity: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6vw, 84px)', lineHeight: 1, margin: 0, color: '#00BFFF', fontStyle: 'italic', letterSpacing: '-0.02em' }}>
                Trust & Excellence
              </h1>
            </div>

            <p className="hero-sub" style={{ opacity: 0, fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.2vw, 20px)', color: '#4B5563', lineHeight: 1.6, margin: 0, maxWidth: 540 }}>
              RDS Group stands as a beacon of reliability in the HR landscape, serving as the trusted workforce backbone for India's leading enterprises and emerging businesses.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <motion.a
                href="#contact"
                onClick={scrollToContact}
                className="hero-cta btn-glow"
                style={{ opacity: 0, padding: '14px 28px', background: '#00BFFF', borderRadius: 12, color: '#000', fontWeight: 700, fontSize: 15, fontFamily: 'var(--font-body)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Free Consultation
              </motion.a>
              <motion.a
                href="#services"
                onClick={scrollToServices}
                className="hero-cta"
                style={{ opacity: 0, padding: '14px 28px', border: '1.5px solid rgba(0,0,0,0.1)', borderRadius: 12, color: '#000', fontWeight: 600, fontSize: 15, fontFamily: 'var(--font-body)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}
                whileHover={{ scale: 1.03, borderColor: '#000' }}
                whileTap={{ scale: 0.97 }}
              >
                View Services
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4"/>
                </svg>
              </motion.a>
            </div>

            {/* Social proof */}
            <div className="hero-proof" style={{ opacity: 0, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ display: 'flex' }}>
                  {initials.map((init, i) => (
                    <div key={init} style={{
                      width: 32, height: 32, borderRadius: '50%',
                      background: avatarColors[i],
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 700, color: '#fff',
                      fontFamily: 'var(--font-body)',
                      marginLeft: i > 0 ? -8 : 0,
                      border: '2px solid #fff',
                    }}>
                      {init}
                    </div>
                  ))}
                </div>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#4B5563' }}>
                  Trusted by <strong style={{ color: '#000' }}>150+</strong> businesses
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 700, color: '#000' }}>4.9</span>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#4B5563' }}>from verified clients</span>
              </div>
            </div>
          </div>

          {/* Right column — visual */}
          <div className="hero-visual hidden md:flex" style={{ opacity: 0, position: 'relative', justifyContent: 'center', alignItems: 'center', height: 480 }}>
            <div style={{ position: 'relative', width: '100%', height: '100%', maxWidth: 500 }}>
              {/* Image with decorative elements */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: '50% 50% 50% 50% / 30% 30% 70% 70%', // DP shaped circle
                overflow: 'hidden',
                border: '4px solid rgba(0,191,255,0.2)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 40px rgba(0,191,255,0.2)',
              }}>
                <img 
                  src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg" 
                  alt="Professional HR Services" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Overlay gradient */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                  background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.6))',
                }} />
              </div>

              {/* Stat badges */}
              <motion.div 
                className="stat-card-1" 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: 'absolute', top: '10%', right: '-5%',
                  background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)',
                  padding: '12px 16px', borderRadius: 20, border: '1px solid rgba(0,191,255,0.2)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                  display: 'flex', flexDirection: 'column', gap: 4,
                  zIndex: 2,
                }}
              >
                <span style={{ fontSize: 18, fontWeight: 700, color: '#000', fontFamily: 'var(--font-display)' }}>150+</span>
                <span style={{ fontSize: 11, color: '#4B5563', fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Clients Served</span>
              </motion.div>

              <motion.div 
                className="stat-card-2" 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{
                  position: 'absolute', bottom: '15%', left: '-5%',
                  background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)',
                  padding: '12px 16px', borderRadius: 20, border: '1px solid rgba(0,191,255,0.2)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                  display: 'flex', flexDirection: 'column', gap: 4,
                  zIndex: 2,
                }}
              >
                <span style={{ fontSize: 18, fontWeight: 700, color: '#00BFFF', fontFamily: 'var(--font-display)' }}>98%</span>
                <span style={{ fontSize: 11, color: '#4B5563', fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Success Rate</span>
              </motion.div>

              {/* NEW Stat Badges */}
              <motion.div 
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: 'absolute', top: '50%', right: '-10%',
                  background: 'rgba(0,191,255,0.1)', backdropFilter: 'blur(8px)',
                  padding: '10px 14px', borderRadius: 16, border: '1px solid rgba(0,191,255,0.3)',
                  display: 'flex', alignItems: 'center', gap: 8,
                  zIndex: 2,
                }}
              >
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00BFFF' }} className="animate-pulse" />
                <span style={{ fontSize: 12, fontWeight: 600, color: '#000', fontFamily: 'var(--font-body)' }}>48hr Shortlist</span>
              </motion.div>

              <motion.div 
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                style={{
                  position: 'absolute', top: '30%', left: '-15%',
                  background: 'rgba(0,0,0,0.03)', backdropFilter: 'blur(8px)',
                  padding: '10px 14px', borderRadius: 16, border: '1px solid rgba(0,0,0,0.1)',
                  display: 'flex', alignItems: 'center', gap: 8,
                  zIndex: 2,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00BFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span style={{ fontSize: 12, fontWeight: 600, color: '#000', fontFamily: 'var(--font-body)' }}>Verified Candidates</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hidden.md\\:flex { display: none !important; }
        }
      `}</style>
    </section>
  )
}
