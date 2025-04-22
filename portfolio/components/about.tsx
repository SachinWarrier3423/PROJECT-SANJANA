"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="min-h-screen py-20 bg-green-900 relative">
      {/* Banner image */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/90 to-green-900/95" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-12 text-center">
            About <span className="text-green-300">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-green-300 mb-4">Who I Am</h3>
              <p className="text-green-100 mb-6 leading-relaxed">
                I'm a passionate developer and designer with a keen eye for detail and a love for creating intuitive,
                engaging digital experiences. With expertise in both front-end and back-end technologies, I bring ideas
                to life through clean code and thoughtful design.
              </p>
              <p className="text-green-100 mb-6 leading-relaxed">
                My journey in tech began with a curiosity about how things work, which evolved into a career building
                solutions that solve real problems. I believe in continuous learning and pushing the boundaries of
                what's possible in digital spaces.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-green-800/50 p-4 rounded-lg">
                  <h4 className="text-green-300 font-bold mb-2">Skills</h4>
                  <ul className="text-green-100 space-y-1">
                    <li>Web Development</li>
                    <li>UI/UX Design</li>
                    <li>Mobile Development</li>
                    <li>Data Visualization</li>
                  </ul>
                </div>
                <div className="bg-green-800/50 p-4 rounded-lg">
                  <h4 className="text-green-300 font-bold mb-2">Education</h4>
                  <ul className="text-green-100 space-y-1">
                    <li>Computer Science, BSc</li>
                    <li>Design Thinking Certificate</li>
                    <li>Advanced Web Development</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-green-300 shadow-xl">
                <img src="/placeholder.svg?height=400&width=400" alt="Sanjana" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
