import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion'

const services = [
  'Talent Acquisition / Hiring',
  'HR Compliance Consulting',
  'Employee Training',
  'Payroll Management',
  'HR Policy Development',
  'HR Audit & Advisory',
  'Other / Not sure yet',
]

const contactInfo = [
  {
    label: 'WhatsApp Number',
    value: '+91 7007136145',
    href: 'https://wa.me/917007136145',
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#00BFFF" strokeWidth="1.5">
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.021 3.975L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965c4.367.007 7.926-3.551 7.932-7.924a7.85 7.85 0 0 0-2.325-5.613zm-5.61 12.21a6.6 6.6 0 0 1-3.357-.912l-.241-.144-2.497.654.666-2.433-.157-.247a6.6 6.6 0 0 1 5.908-9.213 6.6 6.6 0 0 1 6.597 6.6 6.6 6.6 0 0 1-6.92 6.295zm3.83-5.253c-.204-.104-.42-.166-.64-.19a2.5 2.5 0 0 0-.31.016c-.147.013-.356.047-.595.166a1.8 1.8 0 0 1-.548.19c-.92.093-1.67-.4-2.22-.84a4.2 4.2 0 0 1-1.26-1.55c-.13-.25-.007-.382.098-.506.104-.124.21-.21.3-.32.09-.11.13-.18.19-.3.06-.12.03-.23-.015-.32-.044-.09-.595-1.43-.82-1.95-.215-.506-.435-.44-.595-.44-.147 0-.316-.02-.484-.02a.93.93 0 0 0-.673.315c-.23.25-.89.87-.89 2.12 0 1.25.91 2.45 1.04 2.62.13.17 1.79 2.73 4.33 3.82 2.54 1.1 2.54.73 3 .68.46-.04 1.48-.6 1.69-1.17.21-.57.21-1.06.15-1.17-.06-.11-.21-.17-.44-.27z" fill="#00BFFF" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'Primary Number',
    value: '+91 63899 00496',
    href: 'tel:+916389900496',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.9 19.79 19.79 0 0 1 1.61 3.27 2 2 0 0 1 3.6 1.1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'info@rdsgroup.ltd',
    href: 'mailto:info@rdsgroup.ltd',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'All India',
    href: null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-left-el',
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true } }
      )
      gsap.fromTo('.contact-form-card',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%', once: true } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" ref={sectionRef} style={{ background: '#FFFFFF', padding: '100px 0' }}>
      <div className="container-main">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,45fr) minmax(0,55fr)', gap: 64, alignItems: 'start' }}
          className="contact-grid">
          
          {/* Left — info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div className="contact-left-el" style={{ opacity: 0 }}>
              <span className="tag-pill">Get in Touch</span>
            </div>

            <div className="contact-left-el" style={{ opacity: 0 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 46px)', margin: '0 0 8px', color: '#000', fontWeight: 400 }}>
                Let's Solve Your
              </h2>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 46px)', margin: 0, color: '#00BFFF', fontStyle: 'italic', fontWeight: 400 }}>
                HR Challenge Together
              </h2>
            </div>

            <p className="contact-left-el" style={{ opacity: 0, fontFamily: 'var(--font-body)', fontSize: 16, color: '#4B5563', lineHeight: 1.8, margin: 0 }}>
              Whether you need to hire urgently, fix a compliance gap, or build your HR function from scratch — fill the form. We respond within 2 business hours.
            </p>

            <div className="contact-left-el" style={{ opacity: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {contactInfo.map((c) => (
                <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: 'rgba(0,191,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#4B5563' }}>{c.label}</div>
                    {c.href ? (
                      <a href={c.href} style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: '#000', textDecoration: 'none' }}
                        onMouseEnter={(e) => e.target.style.color = '#00BFFF'} onMouseLeave={(e) => e.target.style.color = '#000'}>
                        {c.value}
                      </a>
                    ) : (
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: '#000' }}>{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Response badge */}
            <div className="contact-left-el" style={{
              opacity: 0,
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '16px 20px',
              background: 'rgba(0,191,255,0.05)',
              border: '1px solid rgba(0,191,255,0.2)',
              borderRadius: 12,
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#4B5563' }}>
                We respond within <strong style={{ color: '#00BFFF' }}>2 business hours</strong> — guaranteed
              </span>
            </div>
          </div>

          {/* Right — Form card */}
          <div className="contact-form-card" style={{
            opacity: 0,
            background: 'rgba(0, 0, 0, 0.02)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(0, 191, 255, 0.2)',
            borderRadius: 24,
            padding: 40,
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
          }}>
            <form action="https://formsubmit.co/rdsgrouphire@gmail.com" method="POST">
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Inquiry - RDS Group" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              {/* Honeypot to prevent spam */}
              <input type="text" name="_honey" style={{ display: 'none' }} />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                <div>
                  <label className="form-label" style={{ color: '#000', opacity: 0.8, fontSize: 13, marginBottom: 8, display: 'block' }}>Your Name <span style={{ color: '#00BFFF' }}>*</span></label>
                  <input className="form-input" style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.1)', color: '#000', padding: '12px 16px', borderRadius: 12, width: '100%' }} type="text" name="Full Name" required placeholder="Your Name" />
                </div>
                <div>
                  <label className="form-label" style={{ color: '#000', opacity: 0.8, fontSize: 13, marginBottom: 8, display: 'block' }}>Your Phone <span style={{ color: '#00BFFF' }}>*</span></label>
                  <input className="form-input" style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.1)', color: '#000', padding: '12px 16px', borderRadius: 12, width: '100%' }} type="tel" name="Phone" required placeholder="Your Phone" />
                </div>
                <div>
                  <label className="form-label" style={{ color: '#000', opacity: 0.8, fontSize: 13, marginBottom: 8, display: 'block' }}>Your Company</label>
                  <input className="form-input" style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.1)', color: '#000', padding: '12px 16px', borderRadius: 12, width: '100%' }} type="text" name="Company" placeholder="Your Company" />
                </div>
                <div>
                  <label className="form-label" style={{ color: '#000', opacity: 0.8, fontSize: 13, marginBottom: 8, display: 'block' }}>Your City</label>
                  <input className="form-input" style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.1)', color: '#000', padding: '12px 16px', borderRadius: 12, width: '100%' }} type="text" name="City" placeholder="Your City" />
                </div>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label className="form-label" style={{ color: '#000', opacity: 0.8, fontSize: 13, marginBottom: 8, display: 'block' }}>Your Email <span style={{ color: '#00BFFF' }}>*</span></label>
                <input className="form-input" style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.1)', color: '#000', padding: '12px 16px', borderRadius: 12, width: '100%' }} type="email" name="Email" required placeholder="Your Email" />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label className="form-label" style={{ color: '#000', opacity: 0.8, fontSize: 13, marginBottom: 8, display: 'block' }}>Service Required <span style={{ color: '#00BFFF' }}>*</span></label>
                <select className="form-input" style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.1)', color: '#000', padding: '12px 16px', borderRadius: 12, width: '100%', appearance: 'none', cursor: 'pointer' }} name="Service" required>
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: 28 }}>
                <label className="form-label" style={{ color: '#000', opacity: 0.8, fontSize: 13, marginBottom: 8, display: 'block' }}>Tell us your requirement</label>
                <textarea className="form-input" style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.1)', color: '#000', padding: '12px 16px', borderRadius: 12, width: '100%', height: 120, resize: 'vertical' }} name="Requirement"
                  placeholder="Briefly describe your HR challenge or requirement..." />
              </div>

              <motion.button
                type="submit"
                className="btn-glow"
                style={{
                  width: '100%',
                  padding: '16px',
                  background: '#00BFFF',
                  borderRadius: 14,
                  color: '#000',
                  fontWeight: 700,
                  fontSize: 16,
                  fontFamily: 'var(--font-body)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Inquiry
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </motion.button>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#9ca3af', textAlign: 'center', marginTop: 12, marginBottom: 0 }}>
                Your details are private. No spam, no third-party sharing.
              </p>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 1023px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
