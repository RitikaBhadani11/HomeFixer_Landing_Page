"use client"

import { Search, CheckSquare, Smile, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: Search,
    title: "Book Service",
    description: "Select service and time slot that works for you",
    number: 1,
  },
  {
    icon: CheckSquare,
    title: "Professional Arrives",
    description: "Verified expert arrives at your doorstep on time",
    number: 2,
  },
  {
    icon: Smile,
    title: "Job Completed",
    description: "Quality work with satisfaction guarantee included",
    number: 3,
  },
]

export default function HowItWorks() {
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-slate-950 to-background relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance">How It Works</h2>
          <p className="text-lg text-muted-foreground">Simple, quick, and reliable service in three easy steps</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div key={idx} className="relative group" variants={itemVariants}>
                {idx < steps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-24 -right-4 w-8 h-8 text-cyan-400 z-20"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="w-full h-full" />
                  </motion.div>
                )}

                <motion.div
                  className="glass p-8 text-center h-full flex flex-col justify-between relative"
                  whileHover={{ backgroundColor: "rgba(30, 41, 59, 0.5)", scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center font-bold text-slate-900 shadow-lg"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {step.number}
                  </motion.div>

                  <div className="pt-4">
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-500/30 transition"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Icon className="w-10 h-10 text-cyan-400" />
                    </motion.div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button className="gradient-btn inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
