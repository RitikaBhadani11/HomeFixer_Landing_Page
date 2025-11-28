"use client"

import { Clock, CheckCircle, Shield } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Clock,
    title: "Instant Booking",
    description: "Live booking system with real-time availability. Schedule services instantly 24/7.",
  },
  {
    icon: CheckCircle,
    title: "Verified Professionals",
    description: "Background-checked, rated experts. All professionals are verified and insured.",
  },
  {
    icon: Shield,
    title: "Satisfaction Guarantee",
    description: "Quality assured with money-back promise. Your satisfaction is our priority.",
  },
]

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="py-20 relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={idx}
                className="glass p-8 group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 41, 59, 0.4)" }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition"
                  whileHover={{ rotate: 12 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: idx * 0.2 }}
                >
                  <Icon className="w-8 h-8 text-slate-900" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
