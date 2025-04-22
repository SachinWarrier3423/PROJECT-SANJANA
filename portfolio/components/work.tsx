"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

// Define project categories and their projects
const categories = [
  {
    id: "all",
    label: "All Projects",
  },
  {
    id: "web",
    label: "Web Development",
  },
  {
    id: "mobile",
    label: "Mobile Apps",
  },
  {
    id: "design",
    label: "UI/UX Design",
  },
]

// Sample projects with categories
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce solution with advanced filtering and payment integration.",
    category: "web",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    description: "Mobile application for tracking workouts and nutrition with personalized recommendations.",
    category: "mobile",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React Native", "Firebase", "Redux"],
  },
  {
    id: 3,
    title: "Banking Dashboard",
    description: "User interface design for a banking application with focus on accessibility and usability.",
    category: "design",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Figma", "Adobe XD", "Prototyping"],
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Web dashboard for tracking and analyzing social media performance metrics.",
    category: "web",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Vue.js", "D3.js", "Express"],
  },
  {
    id: 5,
    title: "Travel Companion",
    description: "Mobile app for planning trips and discovering local attractions with offline capabilities.",
    category: "mobile",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Flutter", "Google Maps API", "SQLite"],
  },
  {
    id: 6,
    title: "Healthcare Portal",
    description: "User experience design for a patient management system focusing on simplicity and efficiency.",
    category: "design",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Sketch", "InVision", "User Testing"],
  },
]

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("all")
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="min-h-screen py-20 bg-green-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-green-300">Work</span>
          </h2>
          <p className="text-green-100 max-w-2xl mx-auto">
            Explore my portfolio of projects spanning web development, mobile applications, and UI/UX design. Each
            project represents a unique challenge and solution.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-12 bg-green-700/30">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn("data-[state=active]:bg-green-600 data-[state=active]:text-white", "text-green-200")}
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory} className="mt-0">
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="bg-green-700/30 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-green-100 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-green-600/50 text-green-100 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
