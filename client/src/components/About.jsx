"use client"

import { useState, useEffect, useRef } from "react"
import { 
  Users, 
  Search, 
  FileCheck, 
  ShieldCheck, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Calendar, 
  CheckCircle, 
  Sparkles, 
  Star, 
  ArrowRight, 
  Zap, 
  TrendingUp,
  LayoutDashboard
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"

export default function AboutUsSection() {
  const sectionRef = useRef(null)
  const statsRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const hrServices = [
    {
      icon: <Search className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-black" />,
      title: "Talent Search",
      description:
        "Precision-targeted recruitment to find high-performing talent that perfectly matches your organizational culture and goals.",
      position: "left",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-black" />,
      title: "Compliance",
      description:
        "Comprehensive statutory compliance management ensuring your business stays updated with evolving labor laws and regulations.",
      position: "left",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-black" />,
      title: "Payroll",
      description:
        "Automated and error-free payroll processing, tax management, and benefit administration for your entire workforce.",
      position: "left",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-black" />,
      title: "Training",
      description:
        "Skill-enhancing development programs designed to boost employee productivity, leadership, and professional growth.",
      position: "right",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-black" />,
      title: "Policy Design",
      description:
        "Tailored HR policy development and handbook creation to establish a structured and professional work environment.",
      position: "right",
    },
    {
      icon: <LayoutDashboard className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-black" />,
      title: "HR Audit",
      description:
        "Rigorous HR system audits to identify process gaps and implement strategic improvements for organizational efficiency.",
      position: "right",
    },
  ]

  const stats = [
    { icon: <Award />, value: 150, label: "Clients Served", suffix: "+" },
    { icon: <Users />, value: 5000, label: "Placements Made", suffix: "+" },
    { icon: <Calendar />, value: 10, label: "Years Experience", suffix: "+" },
    { icon: <TrendingUp />, value: 98, label: "Client Satisfaction", suffix: "%" },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full py-24 px-4 bg-transparent text-black overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-ali/5 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <motion.span
            className="text-blue-400 font-medium mb-2 flex items-center gap-2 font-body tracking-wider"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ShieldCheck className="w-4 h-4" />
            OUR INSTITUTIONAL VALUES
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-4 text-center text-black">A Pillar of Reliability</h2>
          <motion.div
            className="w-24 h-1 bg-blue-400"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </motion.div>

        <motion.p className="text-center max-w-2xl mx-auto mb-16 text-gray-800 font-body" variants={itemVariants}>
          With over a decade of operational excellence, RDS Group has established itself as a premier HR institution, 
          dedicated to fostering professional growth and organizational stability across the nation.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Left Column */}
          <div className="space-y-16">
            {hrServices
              .filter((service) => service.position === "left")
              .slice(0, window.innerWidth < 768 ? 2 : undefined) // Show only 2 on mobile (1 from left, 1 from right total 3)
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
              <motion.div
                className="rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <img
                  src="https://capital-placement.com/wp-content/uploads/2023/09/Why-job-interview-techniques-matter.jpg"
                  alt="Professional HR Interview"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <motion.button
                    onClick={() => window.lenis?.scrollTo('#contact')}
                    className="bg-ali text-black px-6 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold font-body"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Partner With Us <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute inset-0 border-4 border-ali/20 rounded-2xl -m-3 z-[-1]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              ></motion.div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-16">
            {hrServices
              .filter((service) => service.position === "right")
              .slice(0, window.innerWidth < 768 ? 1 : undefined) // Show only 1 on mobile
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        <CTASection />
      </motion.div>
    </section>
  )
}

function ServiceItem({ icon, secondaryIcon, title, description, variants, delay, direction }) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-4 mb-4"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="relative w-14 h-14 flex items-center justify-center rounded-2xl bg-black/[0.05] border border-black/10 group-hover:border-blue-400 group-hover:bg-blue-50 transition-all duration-500 overflow-hidden"
          whileHover={{ scale: 1.1 }}
        >
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="text-black group-hover:text-blue-500 transition-colors duration-300 relative z-10 scale-110">
            {icon}
          </div>
          
          {/* Decorative corner icon */}
          <div className="absolute -top-1 -right-1 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 text-black">
            {secondaryIcon}
          </div>
        </motion.div>
        <h3 className="text-2xl font-display font-semibold text-black group-hover:text-blue-500 transition-colors duration-300 tracking-tight">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-base text-gray-700 font-body leading-relaxed pl-16 group-hover:text-gray-900 transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}

function StatCounter({ icon, value, label, suffix, delay }) {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: false, amount: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)

  const springValue = useSpring(0, {
    stiffness: 25,
    damping: 15,
  })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
    } else if (!isInView && hasAnimated) {
      springValue.set(0)
      setHasAnimated(false)
    }
  }, [isInView, value, springValue, hasAnimated])

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  return (
    <motion.div
      className="flex flex-col items-center justify-center relative p-8 bg-black/[0.02] rounded-3xl border border-black/5 group hover:bg-white hover:shadow-2xl hover:shadow-blue-400/10 transition-all duration-500"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      {/* Icon with refined styling */}
      <motion.div 
        className="w-12 h-12 flex items-center justify-center rounded-2xl bg-blue-400/10 text-black mb-6 group-hover:scale-110 transition-transform duration-500"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay } }
        }}
      >
        {icon}
      </motion.div>

      {/* Number with medium-sized high-impact typography */}
      <div className="relative flex flex-col items-center">
        <motion.div 
          ref={countRef} 
          className="text-4xl md:text-5xl font-display font-bold flex items-center text-black mb-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { duration: 0.8, delay: delay + 0.2, ease: "easeOut" } 
            }
          }}
        >
          <motion.span className="text-black">
            {displayValue}
          </motion.span>
          <motion.span className="text-blue-500 ml-1 text-2xl md:text-3xl">
            {suffix}
          </motion.span>
        </motion.div>
      </div>

      {/* Label with clean professional styling */}
      <motion.p 
        className="text-gray-600 font-body text-xs md:text-sm font-semibold uppercase tracking-wider text-center"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1, 
            transition: { duration: 0.5, delay: delay + 0.4 } 
          }
        }}
      >
        {label}
      </motion.p>
    </motion.div>
  )
}

function CTASection() {
  return (
    <motion.div
      className="mt-32 bg-[#F9FAFB] text-black p-12 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8 border border-black/5 shadow-2xl relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-ali/5 blur-[80px] -z-10" />
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-3xl font-display font-medium mb-4">Ready to transform your HR?</h3>
        <p className="text-black/60 font-body text-lg">Let's create a world-class workforce together.</p>
      </div>
      <motion.button
        onClick={() => window.lenis?.scrollTo('#contact')}
        className="bg-ali hover:bg-ali/90 text-white px-10 py-4 rounded-full flex items-center gap-3 font-bold text-lg transition-all shadow-[0_10px_30px_rgba(0,191,255,0.3)]"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        Partner With Us <ArrowRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  )
}
