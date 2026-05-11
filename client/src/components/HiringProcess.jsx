"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Search, FileText, UserCheck, Briefcase, CheckCircle2 } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    title: "Strategic Sourcing",
    description: "We utilize advanced AI tools and professional networks to identify top-tier talent matching your specific needs.",
    icon: <Search className="w-6 h-6" />,
    color: "bg-blue-500",
  },
  {
    title: "Rigorous Screening",
    description: "Multi-level technical and behavioral assessments to ensure only the most qualified candidates proceed.",
    icon: <FileText className="w-6 h-6" />,
    color: "bg-purple-500",
  },
  {
    title: "Client Interview",
    description: "Facilitating seamless interactions between you and the shortlisted candidates for final selection.",
    icon: <UserCheck className="w-6 h-6" />,
    color: "bg-ali",
  },
  {
    title: "Onboarding Support",
    description: "Assisting with documentation, orientation, and integration to ensure a smooth transition for the new hire.",
    icon: <Briefcase className="w-6 h-6" />,
    color: "bg-green-500",
  },
]

export default function HiringProcess() {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const chars = textRef.current.innerText.split("")
    textRef.current.innerHTML = chars
      .map((char) => `<span class="char">${char === " " ? "&nbsp;" : char}</span>`)
      .join("")

    gsap.fromTo(
      ".char",
      { opacity: 0.1, y: 10 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    )
  }, [])

  return (
    <section className="py-24 bg-white overflow-hidden relative" ref={containerRef}>
      <div className="container-main relative z-10">
        <div className="text-center mb-20">
          <h2 
            ref={textRef}
            className="text-5xl md:text-7xl font-display font-bold text-black mb-8 uppercase tracking-tight leading-none"
          >
            Our Hiring Process
          </h2>
          <p className="text-black/60 font-body text-xl max-w-3xl mx-auto leading-relaxed">
            A structured, efficient, and transparent process designed to deliver excellence at every stage.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto py-20">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/10 -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {steps.map((step, index) => (
              <StepItem key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ali/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  )
}

function StepItem({ step, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex flex-col items-center text-center group"
    >
      {/* Circle Connector */}
      <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-white mb-6 relative z-10 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300`}>
        {step.icon}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white text-black rounded-full text-[10px] font-bold flex items-center justify-center font-mono">
          0{index + 1}
        </div>
      </div>

      <h3 className="text-xl font-display font-medium text-black mb-3 group-hover:text-ali transition-colors duration-300">
        {step.title}
      </h3>
      <p className="text-sm text-black/50 font-body leading-relaxed">
        {step.description}
      </p>

      {/* Success Indicator on Hover */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black p-1 rounded-full text-green-500 shadow-xl"
      >
        <CheckCircle2 className="w-4 h-4" />
      </motion.div>
    </motion.div>
  )
}
