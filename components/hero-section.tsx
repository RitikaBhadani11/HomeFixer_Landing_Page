"use client"

import { ArrowRight, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 geometric-pattern relative overflow-hidden">
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.div
                className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 w-fit"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 217, 255, 0.2)" }}
              >
                <motion.span
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <span className="text-sm text-cyan-300">24/7 Emergency Services Available</span>
              </motion.div>

              <motion.h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance" variants={itemVariants}>
                Professional Home Services <span className="gradient-text">On-Demand</span>
              </motion.h1>

              <motion.p className="text-xl text-muted-foreground leading-relaxed max-w-lg" variants={itemVariants}>
                Book trusted professionals for plumbing, electrical, cleaning & repairs in minutes. Available 24/7 with
                1-hour response guarantee.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 pt-4" variants={itemVariants}>
              <motion.button
                className="gradient-btn flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now{" "}
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>
              <motion.button
                className="glass px-8 py-3 rounded-full font-semibold text-foreground hover:bg-slate-800/40 transition flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 41, 59, 0.6)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" /> 1-800-FIXER
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div className="grid grid-cols-3 gap-6 pt-8 border-t border-border" variants={containerVariants}>
              {[
                { value: "50K+", label: "Homes Served" },
                { value: "4.9★", label: "Avg Rating" },
                { value: "1 HR", label: "Response Time" },
              ].map((stat, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <motion.p
                    className="text-3xl font-bold text-cyan-400"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative hidden md:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full aspect-square">
              <motion.div
                className="glass p-8 rounded-3xl h-full flex flex-col justify-between"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="grid grid-cols-2 gap-4 flex-1">
                  {[
                    {
                      src: "/plumbing-professional-fixing-pipe.jpg",
                      alt: "Plumbing",
                      color: "from-blue-500/20 to-cyan-500/10",
                    },
                    {
                      src: "/electrical-services-wiring.jpg",
                      alt: "Electrical",
                      color: "from-yellow-500/20 to-yellow-600/10",
                    },
                    {
                      src: "/home-cleaning-professional.jpg",
                      alt: "Cleaning",
                      color: "from-purple-500/20 to-pink-600/10",
                    },
                    {
                      src: "/home-repair-maintenance.jpg",
                      alt: "Repair",
                      color: "from-cyan-500/20 to-blue-600/10",
                    },
                  ].map((img, i) => (
                    <motion.div
                      key={i}
                      className={`glass-sm rounded-2xl overflow-hidden h-40 bg-gradient-to-br ${img.color} flex items-center justify-center`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img src={img.src || "/placeholder.svg"} alt={img.alt} className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
                <div className="text-center border-t border-slate-700/20 pt-6 mt-6">
                  <p className="text-sm text-muted-foreground">Trusted by thousands of homeowners</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
