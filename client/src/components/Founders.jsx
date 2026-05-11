"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ProfileCard } from "./ui/profile-card"
import { Users } from "lucide-react"

export default function Founders() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  return (
    <section
      id="founders"
      ref={sectionRef}
      className="w-full py-24 px-4 bg-white overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-ali/5 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="flex flex-col items-center mb-16" variants={itemVariants}>
          <motion.span
            className="text-ali font-medium mb-2 flex items-center gap-2 font-body tracking-wider"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Users className="w-4 h-4" />
            LEADERSHIP TEAM
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-4 text-center text-black">
            Meet Our Founders
          </h2>
          <motion.div
            className="w-24 h-1 bg-ali"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.p 
          className="text-center max-w-2xl mx-auto mb-16 text-gray-600 font-body" 
          variants={itemVariants}
        >
          Driven by passion and industry expertise, our founders lead with vision 
          to transform HR solutions across the nation.
        </motion.p>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Rishi Agarwal - Founder */}
          <motion.div variants={itemVariants}>
            <ProfileCard
              name="Rishi Agarwal"
              title="Founder & CEO - Driving strategic vision and organizational excellence at RDS Group."
              avatarUrl="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=881,fit=crop,trim=134.75;0;134.75;0/YX4xBo8359sPQQrD/r-AzGNpnVJEyCq6j5k.jpg"
              backgroundUrl="https://img.magnific.com/free-photo/observation-urban-building-business-steel_1127-2397.jpg?semt=ais_hybrid&w=740&q=80"
              likes={150}
              posts={12}
              views={2500}
              instagramUrl="https://instagram.com"
              twitterUrl="https://twitter.com"
              threadsUrl="https://threads.net"
            />
          </motion.div>

          {/* Vikash Gupta - Co-Founder */}
          <motion.div variants={itemVariants}>
            <ProfileCard
              name="Vikash Gupta"
              title="Co-Founder & Director - Leading operations and client relations with expertise."
              avatarUrl="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=881,fit=crop,trim=227.0967741935484;0;227.0967741935484;0/YX4xBo8359sPQQrD/v-A85Vn3ByqnTyxpEK.jpg"
              backgroundUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
              likes={120}
              posts={10}
              views={1800}
              instagramUrl="https://instagram.com"
              twitterUrl="https://twitter.com"
              threadsUrl="https://threads.net"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
