"use client";

import { useRef } from 'react'
import { LogoCloud } from "./ui/logo-cloud-2"
import { motion } from 'framer-motion'

export default function Clients() {
  const sectionRef = useRef(null)

  return (
    <section id="clients" ref={sectionRef} className="bg-white py-24 relative overflow-hidden">
      <div className="container-main">
        <div className="flex flex-col items-center mb-16 text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="tag-pill mb-6">Strategic Alliances</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-black mb-6">
              Our Global Network of <span className="text-ali italic">Trust</span>
            </h2>
            <p className="text-black/60 font-body text-lg">
              RDS Group serves as the preferred HR institution for over 150+ enterprises across India, fostering long-term partnerships built on integrity and results.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <LogoCloud />
        </motion.div>
      </div>
    </section>
  )
}
