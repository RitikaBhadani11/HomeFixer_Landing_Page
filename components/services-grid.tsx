"use client"

import { Droplet, Zap, Sparkles, Wrench, Bug, Wind, Paintbrush as PaintBrush, Lock } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Droplet,
    title: "Plumbing Services",
    description: "Emergency leaks, pipe repair, installation",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description: "Wiring, lighting, socket repair",
    color: "from-yellow-400 to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "Cleaning Services",
    description: "Deep cleaning, move-in/out cleaning",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Wrench,
    title: "Repair & Maintenance",
    description: "Furniture assembly, appliance repair",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Bug,
    title: "Pest Control",
    description: "Insect extermination, rodent control",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Wind,
    title: "AC & Appliance Repair",
    description: "AC servicing, refrigerator repair",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: PaintBrush,
    title: "Painting Services",
    description: "Interior/exterior painting, wallpaper",
    color: "from-purple-400 to-pink-400",
  },
  {
    icon: Lock,
    title: "Home Automation",
    description: "Smart locks, security cameras, lighting",
    color: "from-emerald-400 to-cyan-500",
  },
]

export default function ServicesGrid() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-slate-950 relative overflow-hidden">
      <motion.div
        className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Services We Offer</h2>
          <p className="text-lg text-muted-foreground">Everything you need for your home, in one platform</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={idx}
                className="glass-sm p-6 group cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 41, 59, 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6 text-slate-900" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
